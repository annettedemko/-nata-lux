#!/usr/bin/env python3
import os
import re
import glob

# Заменяем импорты Link из react-router-dom на LinkAdapter
directories = [
    'src/page-components/**/*.tsx',
    'src/components/**/*.tsx',
]

for pattern in directories:
    for filepath in glob.glob(pattern, recursive=True):
        with open(filepath, 'r') as f:
            content = f.read()

        # Проверяем, есть ли импорт из react-router-dom
        if 'from \'react-router-dom\'' in content or 'from "react-router-dom"' in content:
            # Заменяем импорт Link
            # Паттерн 1: import { Link, ... } from 'react-router-dom'
            content = re.sub(
                r'import\s+{([^}]*\bLink\b[^}]*)}\s+from\s+[\'"]react-router-dom[\'"]',
                lambda m: f"import {{ {m.group(1).replace('Link', '').strip().strip(',')} }} from 'react-router-dom'" if m.group(1).replace('Link', '').strip().strip(',') else '',
                content
            )

            # Удаляем пустые импорты
            content = re.sub(r'import\s+{\s*}\s+from\s+[\'"]react-router-dom[\'"]\s*;?\s*\n', '', content)

            # Если Link был единственным импортом, удаляем всю строку
            content = re.sub(r'import\s+{\s*,?\s*}\s+from\s+[\'"]react-router-dom[\'"]\s*;?\s*\n', '', content)

            # Добавляем импорт Link из LinkAdapter если Link используется в файле
            if '<Link' in content and 'from \'@/components/LinkAdapter\'' not in content and 'from "@/components/LinkAdapter"' not in content:
                # Находим первый import и добавляем после него
                first_import = re.search(r'^(\'use client\'\s*\n\s*)?import', content, re.MULTILINE)
                if first_import:
                    pos = first_import.start()
                    if content[pos:].startswith("'use client'"):
                        # Ищем следующий импорт после 'use client'
                        next_import = re.search(r'\nimport', content[pos:])
                        if next_import:
                            pos = pos + next_import.start() + 1
                    content = content[:pos] + "import { Link } from '@/components/LinkAdapter'\n" + content[pos:]

            with open(filepath, 'w') as f:
                f.write(content)
            print(f"Updated {filepath}")
        else:
            print(f"Skipped {filepath} (no react-router-dom imports)")
