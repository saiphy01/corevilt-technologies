"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  tagline: string;
  title: string;
  subtitle: string;
  accentColor: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: "reception",
    image: "/office-reception.png",
    tagline: "COREVILT TECHNOLOGIES • TURNKEY INFRASTRUCTURE PARTNER",
    title: "Intelligence. Infrastructure. Impact.",
    subtitle:
      "Bridging heavy electrical engineering, commercial solar EPC, low-voltage security, and enterprise digital ecosystems with single-partner turnkey accountability.",
    accentColor: "text-emerald-400",
    primaryCtaText: "Request Technical Proposal",
    secondaryCtaText: "Explore 10 Verticals",
    secondaryCtaLink: "#solutions",
  },
  {
    id: "software",
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&w=1920&q=80",
    tagline: "SOFTWARE & DIGITAL ENGINEERING • ERP / CRM",
    title: "Building Digital Products That Work For You",
    subtitle:
      "Web, mobile, enterprise ERP/CRM platforms, cloud microservices, and AI workflow automation engineered around your operational reality.",
    accentColor: "text-sky-400",
    primaryCtaText: "Request Technical Proposal",
    secondaryCtaText: "Explore Software Solutions",
    secondaryCtaLink: "/solutions/software-digital",
  },
  {
    id: "solar",
    image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "COMMERCIAL SOLAR EPC & ENERGY CONTINUITY",
    title: "Sustainable Power For A Brighter Tomorrow",
    subtitle:
      "Commercial & Industrial rooftop solar EPC, on-grid/hybrid power plants, industrial online UPS (1.0 PF), and LiFePO4 energy storage systems.",
    accentColor: "text-emerald-400",
    primaryCtaText: "Request Solar Assessment",
    secondaryCtaText: "Explore Solar EPC",
    secondaryCtaLink: "/solutions/solar-energy",
  },
  {
    id: "security",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "ELECTRONIC SECURITY & ELV LIFE SAFETY",
    title: "Protecting What Matters Most",
    subtitle:
      "4K AI CCTV surveillance, biometric access control, fire suppression, voice evacuation (PA), and integrated Building Management Systems (BMS).",
    accentColor: "text-cyan-400",
    primaryCtaText: "Request Security Consultation",
    secondaryCtaText: "Explore ELV Systems",
    secondaryCtaLink: "/solutions/elv-security",
  },
  {
    id: "infra",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "IT INFRASTRUCTURE & SMART SYSTEMS",
    title: "Infrastructure Engineered For Scale",
    subtitle:
      "Mission-critical server rooms, command & control centers, 40G fiber backbones, enterprise virtualization, and Next-Gen UTM firewalls.",
    accentColor: "text-amber-400",
    primaryCtaText: "Request Infrastructure Audit",
    secondaryCtaText: "Explore IT Infrastructure",
    secondaryCtaLink: "/solutions/it-infrastructure",
  },
  {
    id: "electrical",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    tagline: "ELECTRICAL TURNKEY & POWER DISTRIBUTION",
    title: "Industrial Power Engineering & Substation Continuity",
    subtitle:
      "11kV/33kV substations, CPRI-tested HT/LT distribution panels, transformer cabling, lightning protection, and zero-downtime industrial power.",
    accentColor: "text-blue-400",
    primaryCtaText: "Request Electrical Proposal",
    secondaryCtaText: "Explore Electrical Turnkey",
    secondaryCtaLink: "/solutions/electrical-turnkey",
  },
];

export function HeroSection({ onOpenRfp }: { onOpenRfp?: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    if (isPaused) return;

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused]);

  const slide = SLIDES[currentSlide];

  return (
    <>
      {/* ============================================================== */}
      {/* 1. CINEMATIC FULL-SCREEN HERO (Apple / Tesla / Siemens Tier)    */}
      {/* Fits 100% above the fold: h-[calc(100vh-5rem)] without scroll */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative h-[calc(100vh-5rem)] min-h-[560px] max-h-[820px] w-full overflow-hidden bg-slate-950 group select-none flex items-end"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Corevilt Capabilities Hero Carousel"
      >
        {/* Full-Bleed Vivid Background Images (100% visible, not hidden in dark blocks) */}
        {SLIDES.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-[7000ms] ease-out scale-100 group-hover:scale-105"
              />

              {/* Cinematic Bottom-Up Scrim: Crystal-clear photo on top 65%, rich gradient on bottom 35% */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 via-40% to-black/15" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
            </div>
          );
        })}

        {/* Cinematic Foreground Text: Massive, Dramatic, Perfectly Composed */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pb-16 sm:pb-20">
          <div className="max-w-4xl space-y-4 sm:space-y-5 animate-in fade-in duration-500 key={currentSlide}">
            {/* Glowing Category Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span className={`text-xs sm:text-sm font-mono font-bold tracking-widest uppercase ${slide.accentColor}`}>
                {slide.tagline}
              </span>
            </div>

            {/* Massive Commanding H1 */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-black text-white leading-[1.06] tracking-tight drop-shadow-2xl">
              {slide.title}
            </h1>

            {/* Subtitle Description */}
            <p className="text-slate-100 text-base sm:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl drop-shadow-lg">
              {slide.subtitle}
            </p>

            {/* Large Prominent Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  if (onOpenRfp) onOpenRfp();
                  else {
                    const el = document.getElementById("rfp-generator");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else window.location.href = "/contact#rfp-form";
                  }
                }}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-extrabold text-sm sm:text-base shadow-2xl shadow-blue-950/70 hover:scale-105 transition-all duration-200"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link
                href={slide.secondaryCtaLink}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/20 hover:bg-white/30 text-white font-bold text-sm sm:text-base backdrop-blur-md border border-white/40 shadow-xl hover:scale-105 transition-all duration-200"
              >
                <span>{slide.secondaryCtaText}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Left Circular Navigation Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/40 hover:bg-[#0B66C3] backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-70 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-2xl hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Right Circular Navigation Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-black/40 hover:bg-[#0B66C3] backdrop-blur-md border border-white/30 text-white flex items-center justify-center opacity-70 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-2xl hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* Minimal Bottom Pill Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {SLIDES.map((s, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "w-10 bg-white shadow-lg" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CORPORATE CORE VALUES STRIP (Immediately Below the Fold)    */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              title: "People",
              desc: "Empowering Growth",
              color: "group-hover:text-[#0B66C3]",
            },
            {
              title: "Technology",
              desc: "Driving Innovation",
              color: "group-hover:text-[#0284C7]",
            },
            {
              title: "Sustainability",
              desc: "For a Greener Future",
              color: "group-hover:text-[#059669]",
            },
            {
              title: "Impact",
              desc: "Creating Lasting Value",
              color: "group-hover:text-[#0B66C3]",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-4 border-r last:border-0 border-slate-200 cursor-default"
            >
              <div
                className={`text-xl font-black text-slate-900 tracking-tight transition-colors duration-300 ${item.color}`}
              >
                {item.title}
              </div>
              <div className="text-xs font-medium text-slate-500 mt-1">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
