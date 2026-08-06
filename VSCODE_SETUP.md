# VS Code — что установить

Для комфортной работы достаточно:

### Обязательно
1. **Node.js 22** — у тебя уже стоит (проверь `node -v`)
2. В терминале VS Code:
   ```
   npm install
   npm run dev
   ```

### Рекомендуемые расширения (Ctrl+Shift+X → поиск)
- `Tailwind CSS IntelliSense` — автодополнение Tailwind 4
- `ESLint` — подсветка ошибок Next.js
- `Prettier - Code formatter` — формат по `Alt+Shift+F`
- `Auto Rename Tag` — удобно для JSX

### Настройки (необязательно)
В `settings.json` добавь:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [["className=\"([^\"]*)\""]]
}
```

### Частые команды
```bash
npm run dev     # дев-сервер 0.0.0.0:3000
npm run build   # проверить продакшн-сборку
npm run lint    # линтер
```

Если видишь ошибку про `next/font` — у нас уже обход для оффлайна (шрифты через CDN, fallback на системные).

Готово. Открывай `src/app/page.tsx` и меняй тексты/цены.
