#!/bin/bash

# 1️⃣ Проверяем наличие аргумента
if [ -z "$1" ]; then
  echo "❌ Укажи имя файла, например:"
  echo "   ./clean-framer.sh RenewBioRepairPro.html"
  exit 1
fi

INPUT_FILE="$1"
OUTPUT_FILE="cleaned_$(basename "$INPUT_FILE")"

echo "🧽 Чистим файл $INPUT_FILE → $OUTPUT_FILE ..."

# 2️⃣ Удаляем все теги <script> ... </script>
sed -E '/<script/,/<\/script>/d' "$INPUT_FILE" > "$OUTPUT_FILE"

# 3️⃣ Удаляем все HTML-комментарии <!-- ... -->
sed -i '' -E 's/<!--[^>]*-->//g' "$OUTPUT_FILE"

# 4️⃣ Удаляем все data-framer-* атрибуты
sed -i '' -E 's/\sdata-framer-[a-zA-Z0-9_-]+="[^"]*"//g' "$OUTPUT_FILE"

# 5️⃣ Удаляем встроенные JSON-конфиги Framer
sed -i '' -E '/<style id="__framerCSS_inject">/,/<\/style>/d' "$OUTPUT_FILE"
sed -i '' -E '/<meta name="framer"/d' "$OUTPUT_FILE"

# 6️⃣ Меняем class -> className, for -> htmlFor
sed -i '' -E 's/\bclass="/className="/g' "$OUTPUT_FILE"
sed -i '' -E 's/\bfor="/htmlFor="/g' "$OUTPUT_FILE"

# 7️⃣ Чистим пустые строки
sed -i '' '/^$/d' "$OUTPUT_FILE"

echo "✅ Готово! Файл сохранён как: $OUTPUT_FILE"
echo "Теперь можешь конвертировать его через react-magic:"
echo "   magic --html-file $OUTPUT_FILE --jsx-file output.jsx"
