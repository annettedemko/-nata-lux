# Nata Lux Design System

Элегантная бьюти-платформа в мягких кофейно-бежевых тонах с современными motion-эффектами.

## Цветовая палитра

### Основные цвета
```css
--brand-latte: #EFE7DD     /* Тёплый молочно-бежевый фон */
--brand-cream: #F6F1EA     /* Кремовый акцент */
--brand-sand: #E5D6C7      /* Тёплый песочный */
--brand-taupe: #C9B6A8     /* Taupe для подложек */
--brand-coffee: #3A2C22    /* Основной текст - кофейный */
--brand-espresso: #2B1F18  /* Заголовки - эспрессо */
--brand-gold: #C9A56A      /* Золотой акцент */
--brand-gold-light: #E7CFA3 /* Светлое золото для градиентов */
```

### Использование
- **Фон**: latte, cream (чередуются по секциям)
- **Текст**: coffee (основной), espresso (заголовки)
- **Акценты**: gold, gold-light
- **Кнопки**: gold фон с белым текстом
- **Ссылки**: gold при hover

## Типографика

### Шрифты
- **Заголовки**: Cormorant Garamond (400, 600) - элегантный serif
- **Основной текст**: Manrope (400, 500, 600) - современный sans-serif

### Размеры
```tsx
// Заголовки
h1: text-4xl md:text-5xl lg:text-7xl
h2: text-3xl md:text-4xl lg:text-5xl
h3: text-2xl md:text-3xl

// Текст
p: text-base md:text-lg
small: text-sm
```

## UI Компоненты

### Glass Morphism
```tsx
<div className="glass rounded-2xl p-8">
  // Полупрозрачный фон с размытием
</div>
```

### Скругления
- Карточки: `rounded-2xl` (16px)
- Кнопки: `rounded-2xl` (16px)
- Небольшие элементы: `rounded-lg` (8px)

### Тени
```css
--shadow-soft: 0 10px 30px rgba(58, 44, 34, 0.07)
--shadow-medium: 0 20px 40px rgba(58, 44, 34, 0.10)
--shadow-glow: 0 0 40px rgba(201, 165, 106, 0.15)
```

## Motion & Анимации

### Framer Motion Эффекты

#### Fade In (на вход)
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
```

#### Parallax (Hero)
```tsx
const { scrollYProgress } = useScroll()
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

<motion.div style={{ y }}>
```

#### Hover Lift
```tsx
<motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3 }}
>
```

#### Scale on Hover (кнопки)
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

### Timing Functions
```typescript
// Плавное появление
ease: [0.16, 1, 0.3, 1]

// Пружинное движение
type: "spring", stiffness: 300
```

## Компоненты

### HeroSection
- Полноэкранная hero с parallax
- Анимированный логотип с 3D эффектом
- Плавающие золотые акценты (blur circles)
- Scroll indicator

### GlassCard
- `GlassServiceCard` - для услуг с иконками
- `GlassFeatureCard` - для преимуществ
- `GlassReviewCard` - для отзывов
- Все с автоматическими scroll-in анимациями

### Header
- Sticky с glass-эффектом
- Анимированное появление сверху
- Переключатель языков DE/RU
- Responsive mobile menu

## Двуязычность (i18n)

### Структура роутинга
```
/ или /de    - немецкая версия (default)
/ru          - русская версия
```

### Использование
```tsx
const { t, language, setLanguage } = useLanguage()
<h1>{t('hero.title')}</h1>
```

### Переключение языка
Автоматически меняет URL и контент:
```tsx
<button onClick={() => setLanguage('ru')}>RU</button>
```

## Адаптивность

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Grid Layouts
```tsx
// Услуги
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4

// Отзывы / Преимущества
grid grid-cols-1 md:grid-cols-3
```

## Лучшие практики

### Эстетика
1. Избегать чёрного цвета - использовать espresso (#2B1F18)
2. Градиенты gold → gold-light для акцентов
3. Мягкие тени вместо резких границ
4. Широкие скругления (2xl)

### Анимации
1. viewport={{ once: true }} для scroll анимаций
2. Задержки (delay) для последовательного появления элементов
3. duration: 0.6-0.8s для плавности
4. whileInView для lazy-loading анимаций

### Производительность
1. AnimatePresence для условного рендера
2. Оптимизация parallax через useTransform
3. Lazy loading изображений

## Примеры использования

### Секция с анимацией
```tsx
<section className="py-20 bg-brand-cream relative overflow-hidden">
  {/* Декоративный фон */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -z-0" />

  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-heading font-semibold text-brand-espresso">
        Заголовок
      </h2>
    </motion.div>
  </div>
</section>
```

### Glass карточка с hover
```tsx
<GlassServiceCard
  title="Наращивание ресниц"
  description="Шелковистые ресницы за 60-90 мин"
  icon={Sparkles}
  delay={0.1}
/>
```

## Команды разработки

```bash
# Запуск dev сервера
npm run dev

# Сборка
npm run build

# Превью продакшн сборки
npm run preview
```

## Структура проекта

```
src/
├── components/
│   ├── HeroSection.tsx      # Hero с parallax
│   ├── GlassCard.tsx        # Glass компоненты
│   ├── Header.tsx           # Навигация
│   └── ui/                  # Базовые UI компоненты (shadcn)
├── contexts/
│   └── LanguageContext.tsx  # i18n контекст
├── i18n/
│   ├── config.ts           # Конфигурация i18n
│   └── locales/            # Переводы DE/RU
├── pages/
│   └── Index.tsx           # Главная страница
└── index.css               # Глобальные стили и CSS переменные
```
