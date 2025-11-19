#!/usr/bin/env python3
import os
import glob

# Добавляем 'use client' во все компоненты и страницы
directories = [
    'src/page-components/**/*.tsx',
    'src/components/**/*.tsx',
]

for pattern in directories:
    for filepath in glob.glob(pattern, recursive=True):
        with open(filepath, 'r') as f:
            content = f.read()

        # Проверяем, есть ли уже 'use client'
        if "'use client'" not in content and '"use client"' not in content:
            # Добавляем 'use client' в начало файла
            new_content = "'use client'\n\n" + content
            with open(filepath, 'w') as f:
                f.write(new_content)
            print(f"Added 'use client' to {filepath}")
        else:
            print(f"Skipped {filepath} (already has 'use client')")
