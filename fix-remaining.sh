#!/bin/bash
# Fix remaining files with isGerman patterns by changing to language-based checks

# List of files to process
files=(
  "src/page-components/FAQ.tsx"
  "src/page-components/Reviews.tsx"
  "src/page-components/Portfolio.tsx"
  "src/page-components/Laser.tsx"
  "src/page-components/About.tsx"
  "src/components/ProcedureSchema.tsx"
  "src/page-components/services/AlexandritLaser.tsx"
  "src/page-components/services/Wimpernkranz.tsx"
  "src/page-components/services/DarsonvalHaare.tsx"
  "src/page-components/services/RFVakuum.tsx"
  "src/page-components/services/Gesichtsreinigung.tsx"
  "src/page-components/services/AquarellLips.tsx"
  "src/page-components/services/DiodenLaser.tsx"
  "src/page-components/services/Lichttherapie.tsx"
  "src/page-components/services/PowderBrows.tsx"
  "src/page-components/services/Wimpernverlaengerung.tsx"
  "src/page-components/services/PMURemover.tsx"
  "src/page-components/services/WimpernAugenbrauenLaminierung.tsx"
  "src/page-components/services/Biostrom.tsx"
  "src/page-components/services/HautveraenderungenEntfernen.tsx"
  "src/page-components/services/Microneedling.tsx"
  "src/page-components/services/Phonophorese.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    # Replace: const X = isGerman ?
    # With:    const X = language === 'de' ?
    sed -i '' "s/= isGerman ? \[/= language === 'de' ? [/g" "$file"
    sed -i '' "s/= isGerman ? {/= language === 'de' ? {/g" "$file"

    # Replace: const images = isGerman ?
    # With:    const images = language === 'de' ?
    sed -i '' "s/const \([a-zA-Z]*\) = isGerman ?/const \1 = language === 'de' ?/g" "$file"

    echo "✓ Processed: $file"
  fi
done

echo ""
echo "Done! Files now use 'language === \"de\"' instead of 'isGerman'"
echo "Note: Ukrainian will fallback to Russian text until proper translations are added"
