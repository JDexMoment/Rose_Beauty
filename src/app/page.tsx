"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Sparkles,
  Scissors,
  Heart,
  Camera,
  Menu,
  X,
  ChevronRight,
  Quote,
  Award,
  Users,
  Calendar,
  Send,
  MessageCircle,
  Navigation,
} from "lucide-react";

// Data - мастера (синхронизировано с src/data/masters.ts) — все фото .jpg локально
const masters = [
  {
    slug: "kristina",
    name: "Нгуен Кристина",
    spec: "Парикмахер-универсал / Визажист",
    rating: "5.0",
    reviews: 123,
    img: "/masters/kristina.jpg",
    tag: "Топ-мастер",
  },
  {
    slug: "olga",
    name: "Фомичева Ольга",
    spec: "Парикмахер-универсал",
    rating: "5.0",
    reviews: 76,
    img: "/masters/olga.jpg",
    tag: "Стаж 18 лет",
  },
  {
    slug: "irina",
    name: "Иванова Ирина",
    spec: "Парикмахер-универсал",
    rating: "4.9",
    reviews: 99,
    img: "/masters/irina.jpg",
    tag: "Колорист",
  },
  {
    slug: "daria",
    name: "Бабенко Дарья",
    spec: "Мастер ногтевого сервиса",
    rating: "5.0",
    reviews: 15,
    img: "/masters/daria.jpg",
    tag: "Nail",
  },
  {
    slug: "viktoria",
    name: "Виктория",
    spec: "Мастер ногтевого сервиса",
    rating: "5.0",
    reviews: 7,
    img: "/masters/viktoria.jpg",
    tag: "Nail",
  },
];

const serviceCategories = [
  {
    id: "hair",
    title: "Парикмахерский зал",
    desc: "Стрижки, окрашивание, уход",
    icon: Scissors,
    img: "/salon/hair.jpg",
    services: [
      { name: "Стрижка женская", time: "60 мин", price: "от 1 200 ₽" },
      { name: "Стрижка мужская", time: "40 мин", price: "от 900 ₽" },
      { name: "Стрижка детская", time: "30 мин", price: "550 ₽" },
      { name: "Сложное окрашивание (AirTouch, шатуш, балаяж)", time: "3-4 ч", price: "от 4 500 ₽" },
      { name: "Окрашивание в один тон", time: "2 ч", price: "от 2 200 ₽" },
      { name: "Укладка / Прическа", time: "60 мин", price: "от 1 200 ₽" },
    ],
  },
  {
    id: "nails",
    title: "Ногтевой сервис",
    desc: "Маникюр, педикюр, покрытие",
    icon: Sparkles,
    img: "/works/manicure.jpg",
    services: [
      { name: "Маникюр классический", time: "60 мин", price: "от 1 000 ₽" },
      { name: "Маникюр с покрытием гель-лак", time: "90 мин", price: "от 1 600 ₽" },
      { name: "Педикюр классический", time: "90 мин", price: "от 1 800 ₽" },
      { name: "Наращивание ногтей", time: "120 мин", price: "от 2 000 ₽" },
      { name: "Дизайн ногтей", time: "30 мин", price: "от 200 ₽" },
    ],
  },
  {
    id: "brows",
    title: "Брови • Ресницы • Визаж",
    desc: "Взгляд, который запоминается",
    icon: Heart,
    img: "/works/eyebrows.jpg",
    services: [
      { name: "Коррекция и окрашивание бровей", time: "40 мин", price: "от 800 ₽" },
      { name: "Ламинирование бровей", time: "60 мин", price: "от 1 500 ₽" },
      { name: "Наращивание ресниц", time: "120 мин", price: "от 1 800 ₽" },
      { name: "Ламинирование ресниц", time: "60 мин", price: "от 1 600 ₽" },
      { name: "Макияж дневной / вечерний", time: "60 мин", price: "от 1 500 ₽" },
      { name: "Курс «Сам себе визажист»", time: "—", price: "уточняйте" },
    ],
  },
  {
    id: "body",
    title: "Тело и уход",
    desc: "Депиляция, солярий, SPA",
    icon: Users,
    img: "/works/epilation.jpg",
    services: [
      { name: "Депиляция (воск/сахар)", time: "30-60 мин", price: "от 600 ₽" },
      { name: "Солярий", time: "1 мин", price: "от 25 ₽" },
      { name: "SPA-уход", time: "60 мин", price: "от 1 500 ₽" },
    ],
  },
];

const reviews = [
  {
    text: "Кристина — моя любимая волшебница!!! Как всегда окрашивание и стрижка на высшем уровне! Всегда подскажет как лучше и получается шикарно! Очень рекомендую!!!",
    author: "Елена М.",
    service: "Сложное окрашивание",
    master: "Нгуен Кристина",
  },
  {
    text: "Отличный мастер, знающий свое дело, всегда даст дельные советы, приятный собеседник и очаровательная девушка. Хожу только к ней!",
    author: "Анна К.",
    service: "Стрижка женская",
    master: "Иванова Ирина",
  },
  {
    text: "Кристина — замечательный мастер с золотыми руками! Очень трепетно и аккуратно относится к волосам. Теперь хожу только к ней ☺️",
    author: "Марина С.",
    service: "Балаяж на длинные волосы",
    master: "Нгуен Кристина",
  },
];

const beforeAfterWorks = [
  "/works/BeforeAfter/BeforeAfter1.jpg",
  "/works/BeforeAfter/BeforeAfter2.jpg",
  "/works/BeforeAfter/BeforeAfter3.jpg",
  "/works/BeforeAfter/BeforeAfter4.jpg",
  "/works/BeforeAfter/BeforeAfter5.jpg",
];

const customWorks = [
  { src: "/works/kristina/2.jpg", tag: "Укладка" },
  { src: "/works/kristina/3.jpg", tag: "Макияж" },
  { src: "/works/irina/5.jpg", tag: "Детская Стрижка" },
  { src: "/works/daria/5.jpg", tag: "Маникюр" },
  { src: "/works/olga/2.jpg", tag: "Окрашивание" },
];

export default function Home() {
  const [activeCat, setActiveCat] = useState("hair");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", service: "" });
  const [sent, setSent] = useState(false);
  const active = serviceCategories.find((c) => c.id === activeCat)!;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", service: "" });
  };

  return (
    <div className="bg-[#FFF8F5] text-[#1A1A1A] overflow-x-hidden">
      {/* Top bar */}
      <div className="hidden lg:block bg-[#1A1A1A] text-white/80 text-[13px]">
        <div className="max-w-[1280px] mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#C9A96A]" /> г. Ярославль, ул. Сосновая, 11 — Заволжский район, вход со двора
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#C9A96A]" /> Ежедневно 09:00–20:00
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+74852336618" className="hover:text-white transition">
              33-66-18
            </a>
            <span className="opacity-30">|</span>
            <a href="tel:+74852336632" className="hover:text-white transition">
              33-66-32
            </a>
            <a
              href="https://dikidi.ru/ru/profile/roza_128"
              target="_blank"
              className="ml-2 bg-[#C9A96A] text-[#1A1A1A] px-3 py-1 rounded-full text-xs font-medium hover:bg-[#E8D5B7] transition"
            >
              DIKIDI • 5.0 ★ 382 отзыва
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFF8F5]/80 backdrop-blur-xl border-b border-[#E8D5B7]/40">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 h-[68px] lg:h-[78px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                <span className="font-display text-white text-[22px] tracking-widest">R</span>
              </div>
              <div>
                <div className="font-display text-[20px] lg:text-[24px] leading-none tracking-[0.18em] font-medium">РОЗА</div>
                <div className="text-[10px] tracking-[0.2em] text-[#8C7A78] -mt-1 hidden lg:block">САЛОН КРАСОТЫ • ЯРОСЛАВЛЬ</div>
              </div>
            </a>
            <nav className="hidden lg:flex items-center gap-1">
              {[
                ["Услуги", "#services"],
                ["Мастера", "#masters"],
                ["Портфолио", "#works"],
                ["Отзывы", "#reviews"],
                ["Контакты", "#contacts"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="px-4 py-2 text-[14px] tracking-wide text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            <a
              href="tel:+74852336618"
              className="hidden lg:flex items-center gap-2 text-sm mr-2"
            >
              <span className="w-8 h-8 rounded-full bg-white border border-[#E8D5B7] flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </span>
              <span className="font-medium">33-66-18</span>
            </a>
            <a
              href="#booking"
              className="hidden lg:inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition"
            >
              Записаться <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://dikidi.ru/ru/profile/roza_128"
              target="_blank"
              className="inline-flex items-center gap-2 bg-white border border-[#E8D5B7] px-4 lg:px-5 py-2.5 lg:py-3 rounded-full text-sm font-medium hover:bg-[#FDF2EE] transition"
            >
              <Calendar className="w-4 h-4 hidden lg:block" /> Dikidi
            </a>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden w-10 h-10 rounded-full bg-white border border-[#E8D5B7] flex items-center justify-center">
              {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-white border-t border-[#E8D5B7]/40 overflow-hidden"
            >
              <nav className="px-4 py-4 flex flex-col gap-1">
                {[
                  ["Услуги", "#services"],
                  ["Мастера", "#masters"],
                  ["Портфолио", "#works"],
                  ["Отзывы", "#reviews"],
                  ["Контакты", "#contacts"],
                ].map(([l, h]) => (
                  <a key={l} href={h} onClick={() => setMobileMenu(false)} className="py-3 text-[16px] border-b border-[#FDE8E9] last:border-0">
                    {l}
                  </a>
                ))}
                <a href="tel:+74852336618" className="mt-2 flex items-center gap-2 py-2">
                  <Phone className="w-4 h-4 text-[#C9A96A]" /> 33-66-18 • 33-66-32
                </a>
                <div className="text-xs text-[#8C7A78]">ул. Сосновая, 11 • Ежедневно 09:00–20:00</div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 pt-6 lg:pt-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8 items-center">
            {/* Left */}
            <div className="order-2 lg:order-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="inline-flex items-center gap-2 bg-white border border-[#E8D5B7] rounded-full px-3 py-1.5 text-xs tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#C9A96A] animate-pulse" />
                Заволжский район • 15 лет с вами • <span className="text-[#C9A96A] font-medium">5.0 на Dikidi</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="font-display text-[38px] lg:text-[64px] leading-[0.9] tracking-[-0.02em] mt-5 lg:mt-6"
              >
                Красота
                <br />
                <span className="text-[#C9898E] italic font-light">становится</span>
                <br />
                искусством
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="mt-4 lg:mt-6 text-[15px] lg:text-[17px] leading-relaxed text-[#1A1A1A]/65 max-w-[520px]"
              >
                Современная студия «Роза» на Сосновой, 11 — пространство, где каждая деталь продумана для вашего комфорта. Парикмахеры, мастера ногтевого сервиса, брови и ресницы, косметология.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#booking" className="inline-flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-7 py-4 rounded-full font-medium hover:bg-black transition text-[15px]">
                  Записаться онлайн <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://dikidi.ru/ru/profile/roza_128"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-[#1A1A1A] px-7 py-4 rounded-full font-medium hover:bg-[#1A1A1A] hover:text-white transition text-[15px]"
                >
                  Открыть на Dikidi <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-6 lg:mt-8 flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {masters.slice(0, 3).map((m) => (
                    <img key={m.name} src={m.img} alt={m.name} className="w-9 h-9 rounded-full border-2 border-[#FFF8F5] object-cover" />
                  ))}
                  <div className="w-9 h-9 rounded-full bg-[#C9A96A] border-2 border-[#FFF8F5] flex items-center justify-center text-white text-xs font-medium">+4</div>
                </div>
                <div className="leading-tight">
                  <div className="font-medium">7 мастеров • 382 оценки</div>
                  <div className="text-xs text-[#8C7A78] flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-[#C9A96A] text-[#C9A96A]" /> 5.0 — нам доверяют заволгой
                  </div>
                </div>
              </motion.div>

              <div className="mt-6 flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 bg-[#FDE8E9] px-3 py-1.5 rounded-full"><Award className="w-3.5 h-3.5" /> Dikidi Awards 2024•2025</span>
                <span className="inline-flex items-center gap-1.5 bg-white border border-[#E8D5B7] px-3 py-1.5 rounded-full"><MapPin className="w-3.5 h-3.5" /> Вход со двора, рядом Пятёрочка</span>
              </div>
            </div>

            {/* Right */}
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="order-1 lg:order-2 relative">
              <div className="relative rounded-[28px] lg:rounded-[36px] overflow-hidden bg-[#E8D5B7] p-1.5 lg:p-2">
                <div className="relative rounded-[22px] lg:rounded-[28px] overflow-hidden aspect-[4/3.2] lg:aspect-[4/3]">
                  <img
                    src="/salon/hero.jpg"
                    alt="Интерьер салона Роза Ярославль"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  {/* Floating card */}
                  <div className="absolute bottom-3 lg:bottom-4 left-3 lg:left-4 right-3 lg:right-4 glass rounded-2xl p-3 lg:p-4 flex items-center justify-between">
                    <div>
                      <div className="text-xs tracking-widest text-[#8C7A78]">СВОБОДНЫЕ ОКНА СЕГОДНЯ</div>
                      <div className="font-medium text-sm lg:text-base">Есть запись на 15:30 и 18:00</div>
                    </div>
                    <a href="#booking" className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-3 lg:-bottom-4 -left-1 lg:-left-4 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-[#E8D5B7] p-3 lg:p-4 flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-[#FDE8E9] flex items-center justify-center">
                  <Star className="w-5 h-5 lg:w-6 lg:h-6 text-[#C9898E] fill-[#C9898E]" />
                </div>
                <div>
                  <div className="font-display text-xl lg:text-2xl leading-none">5.0</div>
                  <div className="text-xs text-[#8C7A78]">224 оценки за 2025</div>
                </div>
                <div className="hidden lg:block h-10 w-px bg-[#E8D5B7] mx-2" />
                <div className="hidden lg:block text-xs leading-tight">
                  DIKIDI AWARDS
                  <br />
                  <span className="text-[#C9A96A] font-medium">Победитель 2025</span>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 bg-[#1A1A1A] text-white rounded-full px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium shadow-lg">
                Работаем с 09:00
              </div>
            </motion.div>
          </div>

          {/* Trust strip */}
          <div className="mt-8 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {[
              { k: "15+", l: "лет в Заволжском районе" },
              { k: "382", l: "оценки 5.0 на Dikidi" },
              { k: "7", l: "мастеров в команде" },
              { k: "73", l: "услуги в прайсе" },
            ].map((s) => (
              <div key={s.k} className="bg-white rounded-2xl border border-[#E8D5B7]/60 px-4 py-4 lg:py-5 text-center">
                <div className="font-display text-2xl lg:text-3xl leading-none">{s.k}</div>
                <div className="text-xs lg:text-sm text-[#8C7A78] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-6 mt-10 lg:mt-14">
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6">
          {[
            {
              title: "Расслабляющий интерьер",
              text: "Светлый, уютный, с ароматом кофе. Приходите отдохнуть, а не просто «на процедуру».",
              img: "/salon/hero.jpg",
            },
            {
              title: "Квалифицированные мастера",
              text: "Дипломированные специалисты с медицинским образованием. Постоянно учимся новому.",
              img: "/salon/Rewards.jpg",
            },
            {
              title: "Современные методики",
              text: "Только натуральные материалы, проф. косметика и бережное отношение к волосам и коже.",
              img: "/salon/manicure.jpg",
            },
          ].map((card) => (
            <div key={card.title} className="group bg-white rounded-[24px] overflow-hidden border border-[#E8D5B7]/50 hover:shadow-[0_16px_40px_rgba(201,169,106,0.15)] transition">
              <div className="h-[180px] overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" />
              </div>
              <div className="p-5 lg:p-6">
                <h3 className="font-display text-xl leading-tight">{card.title}</h3>
                <p className="text-sm text-[#8C7A78] leading-relaxed mt-2">{card.text}</p>
                <a href="#services" className="inline-flex items-center gap-1 text-sm font-medium mt-4 hover:gap-2 transition-all">
                  Подробнее <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-[1280px] mx-auto px-4 lg:px-6 mt-14 lg:mt-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-[#C9A96A] font-medium">
              <span className="w-8 h-px bg-[#C9A96A]" /> УСЛУГИ И ПРАЙС
            </div>
            <h2 className="font-display text-[32px] lg:text-[48px] leading-none mt-3">
              Всё для вашей <span className="italic font-light text-[#C9898E]">красоты</span>
            </h2>
          </div>
          <p className="text-sm lg:text-base text-[#8C7A78] max-w-[420px] leading-relaxed">73 услуги — от детской стрижки до сложного окрашивания. Честные цены, время указано, запись в один клик.</p>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border transition ${
                activeCat === cat.id ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "bg-white border-[#E8D5B7] hover:bg-[#FDF2EE]"
              }`}
            >
              <cat.icon className="w-4 h-4" /> {cat.title}
            </button>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <div className="bg-white rounded-[28px] border border-[#E8D5B7]/60 overflow-hidden">
            <div className="p-5 lg:p-7 flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl lg:text-3xl">{active.title}</h3>
                <p className="text-sm text-[#8C7A78] mt-1">{active.desc} • {active.services.length} позиций</p>
              </div>
              <span className="hidden lg:inline-flex items-center gap-1.5 bg-[#FDE8E9] text-xs px-3 py-1.5 rounded-full">
                <Clock className="w-3.5 h-3.5" /> Онлайн-запись
              </span>
            </div>
            <div className="divide-y divide-[#FDE8E9]">
              {active.services.map((s) => (
                <div key={s.name} className="flex items-center justify-between gap-4 px-5 lg:px-7 py-4 hover:bg-[#FFF8F5] transition">
                  <div className="min-w-0">
                    <div className="font-medium text-sm lg:text-[15px] leading-tight">{s.name}</div>
                    <div className="text-xs text-[#8C7A78] mt-1">{s.time}</div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="font-display text-[17px] lg:text-lg whitespace-nowrap">{s.price}</span>
                    <a
                      href="https://dikidi.ru/ru/profile/roza_128"
                      target="_blank"
                      className="hidden lg:inline-flex w-8 h-8 rounded-full bg-[#1A1A1A] text-white items-center justify-center hover:bg-black transition"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 lg:p-7 bg-[#FDF2EE] flex flex-col sm:flex-row gap-3">
              <a href="https://dikidi.ru/ru/profile/roza_128/services" target="_blank" className="inline-flex justify-center items-center gap-2 bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-black transition">
                Весь прайс на Dikidi <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#booking" className="inline-flex justify-center items-center gap-2 bg-white border border-[#E8D5B7] px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition">
                Уточнить цену
              </a>
            </div>
          </div>

          <div className="relative rounded-[28px] overflow-hidden min-h-[360px] lg:min-h-0">
            <img src={active.img} alt={active.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7 text-white">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5 text-xs">
                <Sparkles className="w-3.5 h-3.5" /> Популярно в этом месяце
              </div>
              <h4 className="font-display text-2xl lg:text-3xl mt-3 leading-tight">Сложное окрашивание — наш конёк</h4>
              <p className="text-sm text-white/80 mt-2 max-w-[420px]">AirTouch, шатуш, балаяж, мелирование с тонированием. Бережно, с уходом и консультацией.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-[#1A1A1A] rounded-[24px] p-5 lg:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C9A96A] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#1A1A1A]" />
            </div>
            <div>
              <div className="font-medium">Не нашли нужную услугу?</div>
              <div className="text-sm text-white/60">Позвоните — подскажем и запишем за минуту</div>
            </div>
          </div>
          <div className="flex gap-2 w-full lg:w-auto">
            <a href="tel:+74852336618" className="flex-1 lg:flex-none text-center bg-white text-[#1A1A1A] px-6 py-3 rounded-full text-sm font-medium">
              33-66-18
            </a>
            <a href="https://wa.me/74852336632" target="_blank" className="flex-1 lg:flex-none text-center bg-[#25D366] text-white px-6 py-3 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Masters */}
      <section id="masters" className="max-w-[1280px] mx-auto px-4 lg:px-6 mt-14 lg:mt-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.18em] text-[#C9A96A] font-medium flex items-center gap-2">
              <span className="w-8 h-px bg-[#C9A96A]" /> КОМАНДА
            </div>
            <h2 className="font-display text-[32px] lg:text-[48px] leading-none mt-3">
              Мастера, которым <span className="italic font-light text-[#C9898E]">доверяют</span>
            </h2>
          </div>
          <a href="https://dikidi.ru/ru/profile/roza_128#masters" target="_blank" className="hidden lg:inline-flex items-center gap-2 text-sm font-medium border border-[#E8D5B7] px-5 py-3 rounded-full bg-white hover:bg-[#FDF2EE] transition">
            Все на Dikidi <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
          {masters.map((m) => (
            <div key={m.slug} className="bg-white rounded-[24px] border border-[#E8D5B7]/50 overflow-hidden group hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] transition flex flex-col">
              <a href={`/masters/${m.slug}`} className="relative aspect-[4/4.2] overflow-hidden bg-[#FDF2EE] block">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-[1.04] transition duration-700" />
                {m.tag && (
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur border border-[#E8D5B7] text-xs px-2.5 py-1 rounded-full font-medium">
                    {m.tag}
                  </span>
                )}
                <span className="absolute bottom-3 left-3 bg-[#1A1A1A] text-white text-xs px-2.5 py-1.5 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-white" /> {m.rating} • {m.reviews}
                </span>
                <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur text-xs px-2.5 py-1.5 rounded-full hidden lg:inline-flex items-center gap-1">
                  Портфолио <ChevronRight className="w-3 h-3" />
                </span>
              </a>
              <div className="p-4 lg:p-5 flex flex-col flex-1">
                <a href={`/masters/${m.slug}`} className="font-medium leading-tight hover:text-[#C9898E] transition">{m.name}</a>
                <div className="text-xs lg:text-sm text-[#8C7A78] mt-1 leading-tight">{m.spec}</div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href={`/masters/${m.slug}`}
                    className="inline-flex items-center justify-center gap-1 bg-[#1A1A1A] text-white rounded-full py-2.5 text-sm font-medium hover:bg-black transition"
                  >
                    Портфолио
                  </a>
                  <a
                    href={`https://dikidi.ru/ru/profile/roza_128/master/${m.slug === 'kristina' ? '56592' : m.slug === 'olga' ? '4087' : m.slug === 'irina' ? '2059162' : m.slug === 'daria' ? '1488191' : '1911354'}`}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-1 bg-[#FDE8E9] hover:bg-[#E8B4B8] hover:text-white rounded-full py-2.5 text-sm font-medium transition"
                  >
                    Dikidi
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Works - Portfolio с BeforeAfter + избранные */}
      <section id="works" className="max-w-[1280px] mx-auto px-4 lg:px-6 mt-14 lg:mt-20">
        <div className="bg-white rounded-[28px] border border-[#E8D5B7]/50 p-5 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <div className="text-xs tracking-[0.18em] text-[#C9A96A] font-medium flex items-center gap-2">
                <span className="w-8 h-px bg-[#C9A96A]" /> ПОРТФОЛИО
              </div>
              <h2 className="font-display text-[28px] lg:text-[42px] leading-none mt-3">Работы, которые говорят сами</h2>
            </div>
            <div className="text-sm text-[#8C7A78] max-w-[420px]">Реальные фото наших гостей из папки BeforeAfter и избранные работы мастеров. Хотите так же? Покажите мастеру.</div>
          </div>

          {/* До / После */}
          <div className="mt-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white text-xs px-3 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A96A]" /> До / После
              </span>
              <span className="text-xs text-[#8C7A78]">Трансформации из папки BeforeAfter</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {beforeAfterWorks.map((src, i) => (
                <div key={`ba-${i}`} className={`group relative rounded-2xl overflow-hidden bg-[#FDF2EE] ${i === 0 ? "lg:row-span-2 aspect-[4/5] lg:aspect-auto" : "aspect-[4/3.2]"} border border-transparent hover:border-[#E8D5B7] transition`}>
                  <img src={src} alt={`До После ${i + 1}`} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition" />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-xs px-2.5 py-1 rounded-full font-medium border border-[#E8D5B7]">До \ После</span>
                  <span className="absolute bottom-3 right-3 bg-[#1A1A1A] text-white text-[11px] px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">#{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Избранные работы с кастомными тегами */}
          <div className="mt-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center gap-1.5 bg-[#FDE8E9] border border-[#E8D5B7] text-xs px-3 py-1.5 rounded-full font-medium">
                Избранное
              </span>
              <span className="text-xs text-[#8C7A78]">Подборка по мастерам — уже без метки «до/после», со своим тегом</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {customWorks.map((w, i) => (
                <div key={`custom-${i}`} className="group relative rounded-2xl overflow-hidden bg-[#FDF2EE] aspect-[4/3.2] border border-transparent hover:border-[#E8D5B7] transition">
                  <img src={w.src} alt={w.tag} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60 group-hover:opacity-80 transition" />
                  <span className="absolute bottom-2 left-2 bg-white/95 backdrop-blur text-xs px-3 py-1.5 rounded-full font-medium border border-[#E8D5B7] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96A]" /> {w.tag}
                  </span>
                </div>
              ))}
              {/* Пустая карточка-приглашение для баланса сетки */}
              <div className="hidden lg:flex relative rounded-2xl overflow-hidden bg-[#FFF8F5] border border-dashed border-[#E8D5B7] aspect-[4/3.2] items-center justify-center p-6 text-center">
                <div>
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#FDE8E9] flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#C9898E]" />
                  </div>
                  <div className="text-sm font-medium mt-3">Хотите так же?</div>
                  <div className="text-xs text-[#8C7A78] mt-1">Покажите мастеру фото</div>
                  <a href="#booking" className="mt-3 inline-flex bg-[#1A1A1A] text-white text-xs px-4 py-2 rounded-full">Записаться</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href="https://dikidi.ru/ru/profile/roza_128" target="_blank" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-black transition">
              Смотреть все работы на Dikidi <ArrowRight className="w-4 h-4" />
            </a>
            <span className="inline-flex items-center gap-2 bg-[#FDF2EE] border border-[#E8D5B7] px-4 py-3 rounded-full text-xs">
              <Heart className="w-3.5 h-3.5 text-[#C9898E]" /> Фото гостей публикуем только с согласия
            </span>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="max-w-[1280px] mx-auto px-4 lg:px-6 mt-14 lg:mt-20">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
          <div className="bg-[#1A1A1A] rounded-[28px] p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C9A96A]/20 rounded-full blur-3xl" />
            <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-3 py-1.5 text-xs tracking-wide">
              <Star className="w-3.5 h-3.5 fill-[#C9A96A] text-[#C9A96A]" /> ОТЗЫВЫ DIKIDI
            </div>
            <h2 className="font-display text-[32px] lg:text-[42px] leading-none mt-4">
              5.0 из 5
              <br />
              <span className="text-[#C9A96A]">382 оценки</span>
            </h2>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">Рейтинг за 1,5 года. Люди возвращаются и приводят подруг — это лучший комплимент.</p>

            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ["5.0", "2025 • 224"],
                ["5.0", "2024 • 101"],
                ["DIKIDI", "Awards"],
              ].map(([k, l], idx) => (
                <div key={`${k}-${l}-${idx}`} className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl py-4">
                  <div className="font-display text-xl">{k}</div>
                  <div className="text-xs text-white/60">{l}</div>
                </div>
              ))}
            </div>

            <a href="https://dikidi.ru/ru/profile/roza_128#reviews-block" target="_blank" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-white text-[#1A1A1A] py-3 rounded-full text-sm font-medium hover:bg-[#FDF2EE] transition">
              Читать все 34 отзыва <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-[24px] border border-[#E8D5B7]/50 p-5 lg:p-6 relative">
                <Quote className="w-8 h-8 text-[#FDE8E9] absolute top-4 right-4" />
                <div className="flex items-center gap-1 text-[#C9A96A]">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#C9A96A]" />
                  ))}
                </div>
                <p className="mt-3 text-[15px] leading-relaxed">“{r.text}”</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">{r.author}</div>
                    <div className="text-xs text-[#8C7A78]">
                      {r.service} • {r.master}
                    </div>
                  </div>
                  <span className="text-xs bg-[#FDF2EE] border border-[#E8D5B7] px-2.5 py-1 rounded-full">Dikidi</span>
                </div>
              </div>
            ))}
            <div className="bg-[#FDE8E9] rounded-2xl p-4 flex items-center justify-between">
              <span className="text-sm font-medium">Хотите так же?</span>
              <a href="#booking" className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">
                Записаться
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts + Booking */}
      <section id="contacts" className="max-w-[1280px] mx-auto px-4 lg:px-6 mt-14 lg:mt-20">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
          {/* Info */}
          <div className="bg-white rounded-[28px] border border-[#E8D5B7]/50 p-6 lg:p-8">
            <div className="text-xs tracking-[0.18em] text-[#C9A96A] font-medium flex items-center gap-2">
              <span className="w-8 h-px bg-[#C9A96A]" /> КОНТАКТЫ
            </div>
            <h2 className="font-display text-[30px] lg:text-[38px] leading-none mt-3">
              Мы за Волгой — <span className="italic font-light text-[#C9898E]">рядом с домом</span>
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <span className="w-10 h-10 rounded-full bg-[#FDF2EE] border border-[#E8D5B7] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <div>
                  <div className="font-medium">ул. Сосновая, 11 — Заволжский район</div>
                  <div className="text-sm text-[#8C7A78]">Вход со двора, рядом магазин «Пятёрочка». Парковка во дворе.</div>
                  <a href="https://yandex.ru/maps/?text=Ярославль%20Сосновая%2011" target="_blank" className="inline-flex items-center gap-1 text-sm font-medium mt-2 hover:gap-2 transition">
                    Открыть в Яндекс Картах <Navigation className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-10 h-10 rounded-full bg-[#FDF2EE] border border-[#E8D5B7] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <div>
                  <div className="font-medium">33-66-18 • 33-66-32</div>
                  <div className="text-sm text-[#8C7A78]">Администратор ответит и подберёт время</div>
                  <div className="flex gap-2 mt-2">
                    <a href="tel:+74852336618" className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm">
                      Позвонить
                    </a>
                    <a href="https://wa.me/74852336632" target="_blank" className="bg-[#25D366] text-white px-4 py-2 rounded-full text-sm inline-flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" /> WhatsApp
                    </a>
                    <a href="viber://add?number=74852336632" className="bg-[#7360f2] text-white px-4 py-2 rounded-full text-sm">Viber</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="w-10 h-10 rounded-full bg-[#FDF2EE] border border-[#E8D5B7] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </span>
                <div>
                  <div className="font-medium">Ежедневно 09:00–20:00</div>
                  <div className="text-sm text-[#8C7A78]">Без выходных. Онлайн-запись — 24/7 на Dikidi</div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-[#E8D5B7] h-[220px] lg:h-[260px] bg-[#FDF2EE] relative">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a2b3c&source=constructor&text=%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C%2C%20%D0%A1%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F%2011"
                className="w-full h-full border-0"
                title="Карта Роза Ярославль"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-white rounded-xl shadow-lg border border-[#E8D5B7] p-3 flex items-center justify-between">
                <span className="text-sm font-medium">Сосновая, 11</span>
                <a href="https://yandex.ru/maps/?text=Ярославль%20Сосновая%2011" target="_blank" className="text-xs bg-[#1A1A1A] text-white px-3 py-1.5 rounded-full">
                  Маршрут
                </a>
              </div>
            </div>
          </div>

          {/* Booking */}
          <div id="booking" className="bg-[#1A1A1A] rounded-[28px] p-6 lg:p-8 text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C9A96A]/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#C9898E]/15 rounded-full blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1.5 text-xs tracking-wide">
                <Calendar className="w-3.5 h-3.5 text-[#C9A96A]" /> ОНЛАЙН-ЗАПИСЬ
              </div>
              <h3 className="font-display text-[28px] lg:text-[36px] leading-none mt-4">
                Запишем вас
                <br />
                <span className="text-[#C9A96A] italic font-light">в удобное время</span>
              </h3>
              <p className="text-sm text-white/60 mt-3">Оставьте контакты — администратор перезвонит за 10 минут. Или бронируйте мгновенно через Dikidi.</p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ваше имя"
                  required
                  className="w-full bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 text-sm placeholder:text-white/50 focus:outline-none focus:border-[#C9A96A] focus:bg-white/15 transition"
                />
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  required
                  type="tel"
                  className="w-full bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 text-sm placeholder:text-white/50 focus:outline-none focus:border-[#C9A96A] focus:bg-white/15 transition"
                />
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-white/10 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white/80 focus:outline-none focus:border-[#C9A96A]"
                >
                  <option value="" className="text-black">Выберите услугу</option>
                  <option value="hair" className="text-black">Стрижка / Окрашивание</option>
                  <option value="nails" className="text-black">Маникюр / Педикюр</option>
                  <option value="brows" className="text-black">Брови / Ресницы / Визаж</option>
                  <option value="body" className="text-black">Депиляция / Солярий</option>
                  <option value="consult" className="text-black">Консультация</option>
                </select>

                <button type="submit" className="w-full bg-[#C9A96A] hover:bg-[#E8D5B7] text-[#1A1A1A] py-4 rounded-full font-medium flex items-center justify-center gap-2 transition">
                  <Send className="w-4 h-4" /> Отправить заявку
                </button>

                <AnimatePresence>
                  {sent && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="bg-[#25D366] text-white rounded-2xl p-3 text-sm text-center">
                      Спасибо! Заявка отправлена. Скоро перезвоним ✨
                    </motion.div>
                  )}
                </AnimatePresence>

                <p className="text-xs text-white/40 text-center">Нажимая, вы соглашаетесь с обработкой персональных данных</p>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs tracking-widest text-white/50">ИЛИ МГНОВЕННО</div>
                <a
                  href="https://dikidi.ru/ru/profile/roza_128"
                  target="_blank"
                  className="mt-3 w-full bg-white text-[#1A1A1A] py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#FFF8F5] transition"
                >
                  Забронировать на Dikidi — выбрать мастера и время <ArrowRight className="w-4 h-4" />
                </a>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-white/50">
                  <Star className="w-3.5 h-3.5 fill-[#C9A96A] text-[#C9A96A]" /> 5.0 • 382 отзыва • свободные окна сегодня
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-14 lg:mt-20 bg-[#1A1A1A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-8 lg:py-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center">
                  <span className="font-display text-[#1A1A1A] text-xl tracking-widest">R</span>
                </div>
                <div>
                  <div className="font-display text-xl tracking-[0.18em]">РОЗА</div>
                  <div className="text-xs tracking-widest text-white/50 -mt-1">САЛОН КРАСОТЫ • ЯРОСЛАВЛЬ</div>
                </div>
              </div>
              <p className="text-sm text-white/60 mt-4 max-w-[360px] leading-relaxed">Современная студия красоты в Заволжском районе. Раскрой свою индивидуальность вместе с нами.</p>
              <div className="flex gap-2 mt-4">
                <a href="https://dikidi.ru/ru/profile/roza_128" target="_blank" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition">
                  <Calendar className="w-4 h-4" />
                </a>
                <a href="https://wa.me/74852336632" target="_blank" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-[#25D366] hover:border-transparent transition">
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white hover:text-black transition">
                  <Camera className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 text-sm">
              <div>
                <div className="font-medium text-white">Навигация</div>
                <div className="mt-3 space-y-2 text-white/60">
                  <a href="#services" className="block hover:text-white">Услуги и прайс</a>
                  <a href="#masters" className="block hover:text-white">Мастера</a>
                  <a href="#works" className="block hover:text-white">Портфолио</a>
                  <a href="#reviews" className="block hover:text-white">Отзывы</a>
                </div>
              </div>
              <div>
                <div className="font-medium text-white">Контакты</div>
                <div className="mt-3 space-y-2 text-white/60">
                  <div>ул. Сосновая, 11</div>
                  <a href="tel:+74852336618" className="block hover:text-white">33-66-18</a>
                  <a href="tel:+74852336632" className="block hover:text-white">33-66-32</a>
                  <div className="text-xs">Ежедневно 09:00–20:00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col lg:flex-row gap-3 items-center justify-between text-xs text-white/40">
            <div>© {new Date().getFullYear()} Салон красоты «Роза», Ярославль. Сосновая, 11. Все права защищены.</div>
            <div className="flex items-center gap-3">
              <span>Сделано с ♥ для показа клиенту</span>
              <span className="hidden lg:inline">•</span>
              <a href="https://dikidi.ru/ru/profile/roza_128" target="_blank" className="underline hover:text-white/60">Dikidi профиль</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile sticky */}
      <div className="lg:hidden fixed bottom-3 left-3 right-3 z-40 flex gap-2">
        <a href="tel:+74852336618" className="w-14 h-14 rounded-full bg-white border border-[#E8D5B7] shadow-[0_8px_24px_rgba(0,0,0,0.12)] flex items-center justify-center">
          <Phone className="w-5 h-5" />
        </a>
        <a href="#booking" className="flex-1 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center gap-2 font-medium shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
          Записаться <ArrowRight className="w-4 h-4" />
        </a>
        <a href="https://dikidi.ru/ru/profile/roza_128" target="_blank" className="px-5 bg-[#C9A96A] text-[#1A1A1A] rounded-full flex items-center justify-center font-medium shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          Dikidi
        </a>
      </div>

      <style>{` .scrollbar-none::-webkit-scrollbar{display:none} .scrollbar-none{scrollbar-width:none} `}</style>
    </div>
  );
}
