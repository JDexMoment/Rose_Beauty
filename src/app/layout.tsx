import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Роза — салон красоты в Ярославле | Заволжский район, Сосновая 11",
  description:
    "Салон красоты Роза в Ярославле, Заволжский район. Парикмахерские услуги, маникюр, педикюр, косметология, SPA, визаж, ресницы и брови. 5.0 ★ 382 отзыва. Запись онлайн через Dikidi.",
  keywords: ["салон красоты Ярославль", "салон красоты Роза", "парикмахерская Ярославль", "маникюр Ярославль", "косметолог Ярославль"],
  openGraph: {
    title: "Роза — салон красоты в Ярославле",
    description: "Пространство, где ваша красота становится искусством. Заволжский район, Сосновая 11.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fallback via CSS import - if offline, system fonts will be used */}
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@400;600&display=swap');`}</style>
      </head>
      <body className="min-h-full flex flex-col bg-[#FFF8F5] text-[#1A1A1A] antialiased" style={{ fontFamily: "'Manrope', system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
