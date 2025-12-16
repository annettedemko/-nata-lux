# ⚡ Быстрый деплой на munich-beauty.de

## Рекомендуемый способ: Vercel (5 минут)

### 1️⃣ Создайте аккаунт Vercel
- Перейдите на https://vercel.com
- Нажмите "Sign Up"
- Войдите через GitHub

### 2️⃣ Импортируйте проект
- Нажмите "Add New Project"
- Выберите репозиторий `annettedemko/-nata-lux`
- Нажмите "Import"
- Нажмите "Deploy" (Vercel автоматически определит настройки)

### 3️⃣ Дождитесь деплоя
- Процесс займёт 2-3 минуты
- Vercel предоставит временный URL: `https://[project-name].vercel.app`
- Проверьте, что сайт работает

### 4️⃣ Настройте домен munich-beauty.de
- Перейдите в Settings → Domains
- Введите `munich-beauty.de`
- Нажмите "Add"

### 5️⃣ Настройте DNS у регистратора домена

Добавьте следующие записи:

**A Record:**
```
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Name: www
Value: cname.vercel-dns.com
```

### 6️⃣ Готово! 🎉

- SSL сертификат установится автоматически
- Сайт будет доступен по https://munich-beauty.de
- Автоматические обновления при каждом push в GitHub

---

## Альтернатива: Обычный хостинг

### 1️⃣ Соберите проект
```bash
npm run build
```

### 2️⃣ Загрузите файлы
- Откройте папку `out/`
- Загрузите ВСЕ файлы через FTP в `public_html/`

### 3️⃣ Настройте SSL
- Активируйте Let's Encrypt в cPanel
- Или обратитесь в поддержку хостинга

---

## 🔍 Проверка

После деплоя откройте:
- https://munich-beauty.de
- https://munich-beauty.de/services
- https://munich-beauty.de/laser

Всё работает? Отлично! ✨

---

**Подробная инструкция:** См. [DEPLOYMENT.md](./DEPLOYMENT.md)
