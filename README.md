# Роза — Салон красоты, Ярославль

Премиальный сайт 2026 для салона «Роза» — Заволжский район, Сосновая 11.  
Пудровая роза + крем + белое золото • Quiet Luxury • Mobile-first

**Live демо (локально):** `npm run dev` → http://localhost:3000  
**Продакшн:** деплой на Vercel в 2 клика (см. ниже)

---

## Что внутри

- **Фронт (сильный):** Next.js 16 (App Router) + TypeScript + Tailwind CSS 4 + Framer Motion + lucide-react
- **Бэк (простенький):** пока статика + форма + ссылки на Dikidi. Без базы — чтобы показать за день. Позже добавим `/api/lead` → Telegram / Email
- **Дизайн 2026:** editorial типографика (Cormorant Garamond / Manrope), много воздуха, glass-эффекты, скругления 24-36px, микро-анимации
- **Секции:** Hero, Преимущества, Услуги с табом (73 услуги), Мастера (6 из Dikidi), Портфолио, Отзывы (5.0 ★ 382), Карта + Форма + Dikidi

## Быстрый старт в VS Code

1. Открой папку `Rose_Beauty` в VS Code
2. Установи зависимости:
   ```bash
   npm install
   ```
3. Запусти дев-сервер:
   ```bash
   npm run dev
   ```
   Открой http://localhost:3000

**Рекомендуемые плагины VS Code:**
- Tailwind CSS IntelliSense (Tailwind Labs) — подсказки классов
- ESLint (Microsoft) — линтинг Next.js
- Prettier - Code formatter — авто-формат
- ES7+ React/Redux/React-Native snippets

Ничего больше ставить не нужно. Node 22 уже достаточно.

## Как поменять контент (ты — админ)

Пока админка на программисте — это твой рычаг монетизации.

- **Цены/услуги:** `src/app/page.tsx` → массив `serviceCategories`
- **Мастера:** массив `masters` (фото — прямые ссылки с Dikidi или Unsplash)
- **Портфолио:** массив `works`
- **Контакты:** поиск по `Сосновая, 11`, телефоны `33-66-18`
- **Цвета:** `src/app/globals.css` и Tailwind классы `bg-[#...]` — палитра пудровой розы

Картинки: кинь файлы в `public/` и поменяй `src="/my-photo.jpg"` — Next.js сам оптимизирует.

## Форма записи

Сейчас форма в секции `#booking` — демо (показывает "Спасибо" на 4 сек). Две опции:

- **Оставить как есть** — заявка никуда не уходит, но выглядит живо для демо
- **Подключить за 5 минут:**
  - Создай Telegram бота → добавь `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID` в `.env`
  - Раскомментируй `/src/app/api/lead/route.ts` (шаблон ниже) — заявки улетят в Telegram

Dikidi работает уже сейчас — все кнопки `Записаться` ведут на https://dikidi.ru/ru/profile/roza_128

## Деплой на Vercel (2 минуты)

1. Запушь этот репозиторий на GitHub (ветка `arena/019fd618-rose-beauty`)
   ```bash
   git add .
   git commit -m "feat: premium Rose salon 2026"
   git push origin arena/019fd618-rose-beauty
   ```
2. Зайди на https://vercel.com → Add New Project → Import `JDexMoment/Rose_Beauty`
3. Vercel сам определит Next.js → жми **Deploy** (ничего настраивать не надо)
4. Получишь домен `https://rose-beauty-xxx.vercel.app` — скидываешь клиенту
5. Потом можно привязать `salonkrasoty76.ru` в Settings → Domains

Бесплатный тариф Vercel хватит за глаза.

## Что дальше (если клиент купит)

- Подключить Яндекс Метрику + schema.org для SEO
- Сделать `/api/lead` → Telegram
- Заменить сток-фото на реальные фото салона (я оставил места)
- Добавить админку (Supabase + Prisma) только если клиент доплатит
- Привязать домен и SSL

---

Сделано для демо «купите?» за 1 день. Весь код — один файл `src/app/page.tsx` для скорости правок.
