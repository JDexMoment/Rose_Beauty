"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { mastersData } from "@/data/masters";
import {
  Star,
  ArrowLeft,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Calendar,
  MessageCircle,
  Quote,
  Award,
  Heart,
  Scissors,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const fallbackWorks = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526045478515-99145907023c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
];

export default function MasterPage() {
  const params = useParams();
  const slug = params.slug as string;
  const master = mastersData.find((m) => m.slug === slug);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  if (!master) {
    return (
      <div className="min-h-screen bg-[#FFF8F5] flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="font-display text-3xl">Мастер не найден</h1>
          <Link href="/#masters" className="mt-4 inline-flex bg-[#1A1A1A] text-white px-6 py-3 rounded-full">
            Вернуться к мастерам
          </Link>
        </div>
      </div>
    );
  }

  // 6 local images: /works/slug/1.jpg ... 6.jpg
  const localWorks = Array.from({ length: 6 }).map((_, i) => `${master.worksPrefix}/${i + 1}.jpg`);

  return (
    <div className="bg-[#FFF8F5] text-[#1A1A1A] min-h-screen overflow-x-hidden">
      {/* Top bar */}
      <div className="hidden lg:block bg-[#1A1A1A] text-white/80 text-[13px]">
        <div className="max-w-[1280px] mx-auto px-6 py-2.5 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#C9A96A]" /> г. Ярославль, ул. Сосновая, 11 — Заволжский район
          </span>
          <a href="tel:+74852336618" className="hover:text-white transition">
            33-66-18
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FFF8F5]/80 backdrop-blur-xl border-b border-[#E8D5B7]/40">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 h-[68px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
              <span className="font-display text-white text-[20px] tracking-widest">R</span>
            </div>
            <div>
              <div className="font-display text-[20px] tracking-[0.18em] font-medium">РОЗА</div>
              <div className="text-[10px] tracking-[0.2em] text-[#8C7A78] -mt-1 hidden lg:block">САЛОН КРАСОТЫ • ЯРОСЛАВЛЬ</div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href="/#masters" className="hidden lg:inline-flex items-center gap-2 text-sm px-4 py-2">
              <ArrowLeft className="w-4 h-4" /> Все мастера
            </Link>
            <a href={master.dikidiUrl} target="_blank" className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-black transition">
              Записаться <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-[1280px] mx-auto px-4 lg:px-6 pt-6">
        <nav className="flex items-center gap-2 text-sm text-[#8C7A78]">
          <Link href="/" className="hover:text-[#1A1A1A]">Главная</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/#masters" className="hover:text-[#1A1A1A]">Мастера</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1A1A1A] font-medium">{master.name}</span>
        </nav>
      </div>

      {/* Hero master */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-6 pt-6 lg:pt-8">
        <div className="grid lg:grid-cols-[1.05fr_0.9fr] gap-6 lg:gap-8 items-start">
          <div className="bg-white rounded-[28px] border border-[#E8D5B7]/50 overflow-hidden">
            <div className="relative aspect-[4/3.6] lg:aspect-[4/3.2] overflow-hidden bg-[#FDF2EE]">
              <img src={master.avatar.replace("?size=m", "?size=b")} alt={master.name} className="w-full h-full object-cover object-top" />
              <div className="absolute top-4 left-4 flex gap-2">
                {master.tags.map((t) => (
                  <span key={t} className="bg-white/90 backdrop-blur border border-[#E8D5B7] text-xs px-3 py-1.5 rounded-full font-medium">
                    {t}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#C9A96A] fill-[#C9A96A]" />
                  </div>
                  <div>
                    <div className="font-display text-xl leading-none">{master.rating}</div>
                    <div className="text-xs text-[#8C7A78]">{master.reviews} оценок • {master.exp} опыта</div>
                  </div>
                </div>
                <a href={master.dikidiUrl} target="_blank" className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center">
                  <Calendar className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="p-6 lg:p-7">
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 bg-[#FDE8E9] px-3 py-1.5 rounded-full text-xs">
                  <Award className="w-3.5 h-3.5" /> Проверенный мастер салона «Роза»
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#FDF2EE] border border-[#E8D5B7] px-3 py-1.5 rounded-full text-xs">
                  <MapPin className="w-3.5 h-3.5" /> Сосновая, 11
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                <a href={master.dikidiUrl} target="_blank" className="flex-1 bg-[#1A1A1A] text-white py-3 rounded-full text-sm font-medium text-center hover:bg-black transition">
                  Записаться на Dikidi
                </a>
                <a href="https://wa.me/74852336632" target="_blank" className="flex-1 bg-[#25D366] text-white py-3 rounded-full text-sm font-medium text-center inline-flex items-center justify-center gap-1.5">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
              <p className="text-xs text-[#8C7A78] text-center mt-2">Выберите время онлайн — подтверждение за 2 минуты</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="text-xs tracking-[0.18em] text-[#C9A96A] font-medium flex items-center gap-2">
                <span className="w-8 h-px bg-[#C9A96A]" /> МАСТЕР
              </div>
              <h1 className="font-display text-[36px] lg:text-[52px] leading-[0.9] mt-3">
                {master.name.split(" ")[0]} <br />
                <span className="italic font-light text-[#C9898E]">{master.name.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="text-[15px] leading-relaxed text-[#1A1A1A]/70 mt-4">{master.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-1.5 bg-white border border-[#E8D5B7] px-3 py-1.5 rounded-full">
                  <Scissors className="w-3.5 h-3.5" /> {master.spec}
                </span>
                <span className="inline-flex items-center gap-1.5 bg-[#1A1A1A] text-white px-3 py-1.5 rounded-full">
                  {master.rating} ★ {master.reviews}
                </span>
              </div>
            </div>

            <div className="bg-white rounded-[24px] border border-[#E8D5B7]/50 p-5 lg:p-6">
              <h3 className="font-display text-xl">Портфолио</h3>
              <p className="text-sm text-[#8C7A78] mt-1">Работы мастера — кликните чтобы увеличить.</p>
              <div className="mt-4 grid grid-cols-3 gap-2 lg:gap-3">
                {localWorks.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(src)}
                    className="relative aspect-[3/3.8] rounded-2xl overflow-hidden bg-[#FDF2EE] border border-[#E8D5B7]/30 hover:border-[#C9A96A] transition group"
                  >
                    <img
                      src={src}
                      alt={`${master.shortName} работа ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        if (img.src !== fallbackWorks[i]) img.src = fallbackWorks[i];
                      }}
                    />
                    <span className="absolute bottom-1.5 left-1.5 bg-white/90 backdrop-blur text-[10px] px-2 py-1 rounded-full">#{i + 1}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services + Reviews */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-6 mt-8 lg:mt-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-start">
        <div className="bg-white rounded-[28px] border border-[#E8D5B7]/60 overflow-hidden">
          <div className="p-6 lg:p-7 pb-4">
            <div className="text-xs tracking-[0.18em] text-[#C9A96A] font-medium flex items-center gap-2">
              <span className="w-8 h-px bg-[#C9A96A]" /> УСЛУГИ МАСТЕРА
            </div>
            <h2 className="font-display text-2xl lg:text-3xl mt-2">Прайс {master.shortName}</h2>
            <p className="text-sm text-[#8C7A78] mt-1">Честные цены с Dikidi • время указано • запись в один клик</p>
          </div>
          <div className="divide-y divide-[#FDE8E9]">
            {master.services.map((s) => (
              <div key={s.name} className="flex items-center justify-between gap-4 px-6 lg:px-7 py-4 hover:bg-[#FFF8F5] transition">
                <div className="min-w-0">
                  <div className="font-medium text-sm lg:text-[15px] leading-tight">{s.name}</div>
                  <div className="text-xs text-[#8C7A78] flex items-center gap-1.5 mt-1">
                    <Clock className="w-3.5 h-3.5" /> {s.time}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-display text-lg whitespace-nowrap">{s.price}</span>
                  <a href={master.dikidiUrl} target="_blank" className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white hidden lg:flex items-center justify-center hover:bg-black transition">
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 bg-[#FDF2EE] flex gap-2">
            <a href={master.dikidiUrl} target="_blank" className="flex-1 bg-[#1A1A1A] text-white py-3 rounded-full text-sm font-medium text-center hover:bg-black transition">
              Записаться к {master.shortName} на Dikidi
            </a>
            <Link href="/#booking" className="flex-1 bg-white border border-[#E8D5B7] py-3 rounded-full text-sm font-medium text-center hover:bg-white transition">
              Задать вопрос
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-[#1A1A1A] rounded-[28px] p-6 lg:p-7 text-white relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C9A96A]/15 rounded-full blur-3xl" />
            <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-3 py-1.5 text-xs">
              <Star className="w-3.5 h-3.5 fill-[#C9A96A] text-[#C9A96A]" /> ОТЗЫВЫ
            </div>
            <h3 className="font-display text-2xl mt-3">
              {master.rating} ★ • {master.reviews} оценок
            </h3>
            <p className="text-sm text-white/60 mt-1">Только хорошие отзывы — мы показываем лучшее для портфолио</p>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-white/10 border border-white/10 rounded-2xl py-3">
                <div className="font-display text-lg">5.0</div>
                <div className="text-xs text-white/60">Качество</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-2xl py-3">
                <div className="font-display text-lg">100%</div>
                <div className="text-xs text-white/60">Советы</div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-2xl py-3">
                <div className="font-display text-lg">DIKIDI</div>
                <div className="text-xs text-white/60">Проверено</div>
              </div>
            </div>
          </div>

          {master.reviewsList.map((r, i) => (
            <div key={i} className="bg-white rounded-[24px] border border-[#E8D5B7]/50 p-5 lg:p-6 relative">
              <Quote className="w-8 h-8 text-[#FDE8E9] absolute top-4 right-4" />
              <div className="flex gap-1 text-[#C9A96A]">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C9A96A]" />
                ))}
              </div>
              <p className="mt-3 text-[15px] leading-relaxed">“{r.text}”</p>
              <div className="mt-3 text-sm">
                <span className="font-medium">{r.author}</span> <span className="text-[#8C7A78]">• {r.service}</span>
              </div>
              <div className="mt-1 text-xs text-[#8C7A78]">Отзыв с Dikidi • мастер {master.shortName}</div>
            </div>
          ))}

          <a href={master.dikidiUrl} target="_blank" className="w-full bg-white border border-[#E8D5B7] py-3 rounded-full text-sm font-medium text-center flex items-center justify-center gap-2 hover:bg-[#FDF2EE] transition">
            Все отзывы на Dikidi <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-4 lg:px-6 mt-8 lg:mt-10">
        <div className="bg-gradient-to-br from-[#1A1A1A] via-[#1A1A1A] to-[#2A1E1A] rounded-[28px] p-6 lg:p-8 text-white flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={master.avatar.replace("?size=m", "?size=s")} alt={master.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#C9A96A]" />
            <div>
              <div className="font-display text-xl">Хотите к {master.shortName}?</div>
              <div className="text-sm text-white/60">Свободные окна сегодня • подтвердим за 2 минуты</div>
            </div>
          </div>
          <div className="flex gap-2 w-full lg:w-auto">
            <a href={master.dikidiUrl} target="_blank" className="flex-1 lg:flex-none bg-[#C9A96A] text-[#1A1A1A] px-7 py-3 rounded-full text-sm font-medium text-center hover:bg-[#E8D5B7] transition">
              Записаться на Dikidi
            </a>
            <a href="tel:+74852336618" className="flex-1 lg:flex-none bg-white text-[#1A1A1A] px-7 py-3 rounded-full text-sm font-medium text-center">
              Позвонить
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-10 bg-[#1A1A1A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-6 py-8 flex flex-col lg:flex-row justify-between gap-6 text-sm">
          <div className="text-white/60">© {new Date().getFullYear()} Салон «Роза» • Сосновая, 11 • <Link href="/" className="underline">На главную</Link></div>
          <div className="flex gap-4 text-white/60">
            <Link href="/#services" className="hover:text-white">Услуги</Link>
            <Link href="/#masters" className="hover:text-white">Мастера</Link>
            <a href={master.dikidiUrl} target="_blank" className="hover:text-white">Dikidi</a>
          </div>
        </div>
      </footer>

      {activeImg && (
        <div onClick={() => setActiveImg(null)} className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8">
          <img src={activeImg} alt="Портфолио увеличено" className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain" onError={(e)=>{ const img=e.currentTarget as HTMLImageElement; if(!img.src.includes("unsplash")) img.src = fallbackWorks[0]; }} />
          <button onClick={() => setActiveImg(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center">
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
