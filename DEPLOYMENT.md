# 🚀 Деплой на munich-beauty.de

Это руководство по развёртыванию сайта на домене munich-beauty.de.

## 📋 Подготовка

Проект уже подготовлен для production деплоя:
- ✅ Production build успешно собирается
- ✅ Все страницы генерируются как статический контент
- ✅ Изображения оптимизированы
- ✅ Конфигурация для деплоя готова

## 🎯 Варианты деплоя

### Вариант 1: Vercel (Рекомендуется) ⭐

**Самый простой и быстрый способ**

#### Шаги:

1. **Зарегистрируйтесь на Vercel**
   - Перейдите на https://vercel.com
   - Войдите через GitHub аккаунт

2. **Импортируйте проект**
   - Нажмите "Add New Project"
   - Выберите репозиторий `annettedemko/-nata-lux`
   - Vercel автоматически определит настройки Next.js

3. **Настройте домен**
   - После деплоя перейдите в Settings → Domains
   - Добавьте `munich-beauty.de` и `www.munich-beauty.de`
   - Vercel покажет DNS записи для настройки

4. **Настройте DNS**
   В настройках вашего регистратора домена добавьте:
   ```
   Type: A Record
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. **SSL сертификат**
   - Vercel автоматически выпустит SSL сертификат Let's Encrypt
   - Ваш сайт будет доступен по HTTPS

**Преимущества:**
- 🚀 Автоматические деплои при push в GitHub
- 🔒 Бесплатный SSL сертификат
- ⚡ CDN по всему миру
- 📊 Аналитика и мониторинг
- 🔄 Preview деплои для каждого PR
- 💰 Бесплатно для небольших проектов

---

### Вариант 2: Netlify

**Альтернатива Vercel**

#### Шаги:

1. **Зарегистрируйтесь на Netlify**
   - Перейдите на https://netlify.com
   - Войдите через GitHub

2. **Импортируйте проект**
   - "Add new site" → "Import an existing project"
   - Выберите репозиторий
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`

3. **Настройте домен**
   - Site settings → Domain management
   - Add custom domain → `munich-beauty.de`

4. **DNS настройки**
   ```
   Type: A Record
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: [your-site-name].netlify.app
   ```

---

### Вариант 3: Обычный хостинг (cPanel/FTP)

**Для традиционных хостингов**

#### Шаги:

1. **Соберите проект локально**
   ```bash
   npm run build
   ```

2. **Загрузите файлы**
   - Откройте папку `out/`
   - Загрузите все файлы через FTP в корневую директорию сайта (обычно `public_html/`)

3. **Файл .htaccess**
   - Уже включен в `public/.htaccess`
   - Автоматически скопируется при сборке
   - Обеспечивает:
     - ✅ Перенаправление на HTTPS
     - ✅ Удаление www из URL (или добавление - настраивается)
     - ✅ Client-side routing
     - ✅ Кэширование файлов
     - ✅ Сжатие gzip
     - ✅ Security headers

4. **SSL сертификат**
   - Активируйте Let's Encrypt в cPanel
   - Или установите SSL через хостинг-провайдера

#### FTP клиенты:
- FileZilla (бесплатно)
- Cyberduck (бесплатно)
- WinSCP (Windows, бесплатно)

---

### Вариант 4: GitHub Pages

**Бесплатный вариант от GitHub**

#### Шаги:

1. **Настройте GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (создайте её)

2. **Автоматический деплой**
   Создайте файл `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Настройте кастомный домен**
   - Settings → Pages → Custom domain
   - Введите `munich-beauty.de`

4. **DNS настройки**
   ```
   Type: A Record
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Name: www
   Value: annettedemko.github.io
   ```

---

## 🔧 Настройка Next.js для Production

Текущая конфигурация уже оптимизирована:

**next.config.mjs:**
```javascript
{
  output: 'export',           // Статический экспорт
  images: {
    unoptimized: true,       // Для статического хостинга
  },
  trailingSlash: true,       // SEO-friendly URLs
  reactStrictMode: true,     // Строгий режим React
}
```

---

## 📊 Проверка после деплоя

После успешного деплоя проверьте:

1. **Основные страницы:**
   - ✅ https://munich-beauty.de
   - ✅ https://munich-beauty.de/services
   - ✅ https://munich-beauty.de/laser
   - ✅ https://munich-beauty.de/contact

2. **Языковые версии:**
   - ✅ Немецкий (по умолчанию)
   - ✅ Русский
   - ✅ Украинский

3. **Функциональность:**
   - ✅ Переключение языков
   - ✅ Навигация между страницами
   - ✅ Интерактивные схемы
   - ✅ Галереи изображений
   - ✅ Формы обратной связи
   - ✅ Кнопки "Termin buchen" ведут на dikidi.ru

4. **Производительность:**
   - Проверьте на https://pagespeed.web.dev/
   - Цель: 90+ баллов

5. **SEO:**
   - Проверьте на https://search.google.com/test/mobile-friendly
   - Убедитесь, что все мета-теги на месте

---

## 🐛 Устранение проблем

### Проблема: 404 ошибки при прямом доступе к страницам

**Решение:** Убедитесь, что настроен rewrites/fallback на index.html
- Vercel/Netlify: автоматически
- Apache: проверьте .htaccess
- Nginx: настройте `try_files`

### Проблема: Изображения не загружаются

**Решение:**
- Проверьте, что все файлы из `public/` загружены
- Убедитесь, что пути к изображениям начинаются с `/`

### Проблема: SSL не работает

**Решение:**
- Vercel/Netlify: подождите 5-10 минут после настройки домена
- cPanel: активируйте Let's Encrypt в настройках SSL

---

## 📞 Поддержка

Если возникли проблемы:
1. Проверьте логи деплоя
2. Убедитесь, что DNS записи применились (может занять до 48 часов)
3. Проверьте browser console на ошибки

---

## 🎉 Готово!

После успешного деплоя ваш сайт будет доступен по адресу:
**https://munich-beauty.de**

Рекомендуется использовать **Vercel** для максимальной производительности и удобства.
