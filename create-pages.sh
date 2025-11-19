#!/bin/bash

# Массовое создание страниц для Next.js App Router

# Основные страницы
pages=(
  "portfolio:Portfolio"
  "reviews:Reviews"
  "faq:FAQ"
  "shop:Shop"
  "training:Training"
  "lashes-brows:LashesBrows"
  "permanent-makeup:PermanentMakeup"
  "laser:Laser"
  "anti-aging:AntiAging"
)

# Создание основных страниц
for page in "${pages[@]}"; do
  IFS=':' read -r path component <<< "$page"
  mkdir -p "app/$path"
  cat > "app/$path/page.tsx" << EOF
import $component from '@/pages/$component'

export default function ${component}Page() {
  return <$component />
}
EOF
  echo "Created app/$path/page.tsx"
done

# Специальные страницы
mkdir -p app/services/wimpernverlaengerung
cat > app/services/wimpernverlaengerung/page.tsx << 'EOF'
import Wimpernverlaengerung from '@/pages/services/Wimpernverlaengerung'

export default function WimpernverlaengerungPage() {
  return <Wimpernverlaengerung />
}
EOF
echo "Created app/services/wimpernverlaengerung/page.tsx"

mkdir -p app/shop/renew-bio-repair-pro
cat > app/shop/renew-bio-repair-pro/page.tsx << 'EOF'
import RenewBioRepairPro from '@/pages/shop/RenewBioRepairPro'

export default function RenewBioRepairProPage() {
  return <RenewBioRepairPro />
}
EOF
echo "Created app/shop/renew-bio-repair-pro/page.tsx"

echo "All pages created successfully!"
