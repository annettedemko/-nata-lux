# Nata Lux - Beauty & Training Platform

Элегантный двуязычный сайт для бьюти-услуг и обучения с современными motion-эффектами.

## Особенности

- **Элегантный дизайн** в мягких кофейно-бежевых тонах
- **Двуязычность** (DE/RU) с автоматическим роутингом
- **Современные анимации** с Framer Motion
  - Parallax эффекты
  - Scroll-triggered анимации
  - Hover эффекты и transitions
- **Glass-morphism** компоненты
- **Полностью адаптивный** дизайн
- **Высокая производительность** на Vite + React

## Технологии

- **React 18** + **TypeScript**
- **Vite** - быстрая сборка
- **Tailwind CSS** - утилитарные стили
- **Framer Motion** - продвинутые анимации
- **React Router** - навигация
- **shadcn/ui** - UI компоненты
- **i18next** - интернационализация

## Установка

```bash
# Установить зависимости
npm install

# Запустить dev сервер
npm run dev

# Открыть в браузере
http://localhost:8080
```

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── HeroSection.tsx  # Hero с parallax эффектом
│   ├── GlassCard.tsx    # Glass-morphism карточки
│   ├── Header.tsx       # Навигация с языковым переключателем
│   └── ui/              # Базовые UI компоненты
├── contexts/
│   └── LanguageContext.tsx  # Контекст для i18n
├── i18n/
│   └── locales/         # Переводы (de.json, ru.json)
├── pages/               # Страницы приложения
└── index.css           # Глобальные стили
```

## Цветовая палитра

```
Latte Base   #EFE7DD  - Основной фон
Cream        #F6F1EA  - Светлый фон
Warm Sand    #E5D6C7  - Акцентный фон
Coffee       #3A2C22  - Основной текст
Deep Espresso #2B1F18 - Заголовки
Gold Accent   #C9A56A - Золотые акценты
```

## Роутинг

```
/              - Главная (немецкий)
/de            - Немецкая версия
/ru            - Русская версия

/services      - Услуги
/training      - Обучение
/about         - О нас
/contact       - Контакты
```

Каждый маршрут доступен с префиксом `/de` или `/ru`.

## Компоненты

### HeroSection
Hero секция с parallax эффектами, анимированным логотипом и плавающими декоративными элементами.

```tsx
import { HeroSection } from '@/components/HeroSection'
<HeroSection />
```

### GlassCard
Набор компонентов с glass-morphism эффектом:

```tsx
import { GlassServiceCard, GlassFeatureCard, GlassReviewCard } from '@/components/GlassCard'

<GlassServiceCard
  title="Услуга"
  description="Описание"
  icon={IconComponent}
  delay={0.1}
/>
```

## Использование переводов

```tsx
import { useLanguage } from '@/contexts/LanguageContext'

const { t, language, setLanguage } = useLanguage()

// Использование
<h1>{t('hero.title')}</h1>

// Переключение языка
<button onClick={() => setLanguage('ru')}>RU</button>
```

## Добавление анимаций

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  Контент с анимацией
</motion.div>
```

## Команды

```bash
# Разработка
npm run dev

# Сборка
npm run build

# Превью продакшн сборки
npm run preview

# Линтинг
npm run lint
```

## Дизайн система

Подробную информацию о дизайн системе см. в [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)

## Что реализовано

✅ Двуязычный роутинг (DE/RU)
✅ Hero секция с parallax эффектами
✅ Glass-morphism компоненты
✅ Framer Motion анимации
✅ Responsive дизайн
✅ Цветовая палитра в кофейно-бежевых тонах
✅ Элегантная типографика (Cormorant Garamond + Manrope)
✅ Motion эффекты (fade, slide, parallax, hover)
✅ Автоматическое определение языка по URL
✅ Плавные переходы и анимации

## Следующие шаги

- Добавить страницу услуг с детальной информацией
- Создать форму обратной связи
- Интеграция календаря для записи
- Добавить галерею работ
- SEO оптимизация
- Настроить WhatsApp интеграцию

---

Разработано для Nata Lux Beauty & Training © 2025
