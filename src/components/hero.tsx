"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  SunMedium,
  Shield,
  Server,
  Code2,
  Building2,
  Layers,
  Phone,
  MessageSquare,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

interface HeroSlide {
  id: string;
  tabLabel: string;
  image: string;
  tagline: string;
  title: string;
  description: string;
  accent: string;
  glowColor: string;
  primaryCtaText: string;
  primaryCtaAction?: "rfp" | "link";
  primaryCtaLink?: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  isReception?: boolean;
}

const SLIDES: HeroSlide[] = [
  {
    id: "reception",
    tabLabel: "HQ & Overview",
    image: "/office-reception.png",
    tagline: "ONE COORDINATED PARTNER • TEN CONNECTED VERTICALS",
    title: "Architecting Intelligent Infrastructure, Power Continuity & Digital Ecosystems",
    description:
      "Bridging heavy physical engineering and digital intelligence. From 11kV/33kV substations and commercial solar EPC to enterprise cloud platforms and ELV command centers — Corevilt delivers single-source turnkey accountability.",
    accent: "text-emerald-300",
    glowColor: "from-blue-600/30 to-emerald-600/30",
    primaryCtaText: "Request Technical Proposal",
    primaryCtaAction: "rfp",
    secondaryCtaText: "Explore 10 Turnkey Verticals",
    secondaryCtaLink: "#solutions",
    isReception: true,
  },
  {
    id: "software",
    tabLabel: "Software & Digital",
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&w=1920&q=80",
    tagline: "SOFTWARE & DIGITAL ENGINEERING • CRM & ERP",
    title: "Building Digital Products & AI Ecosystems That Scale",
    description:
      "Web, mobile, custom enterprise ERP/CRM systems, cloud microservices, and AI workflow automation engineered around your actual business workflow and compliance requirements.",
    accent: "text-sky-300",
    glowColor: "from-blue-600/40 to-sky-500/30",
    primaryCtaText: "Request Technical Proposal",
    primaryCtaAction: "rfp",
    secondaryCtaText: "Explore Software Solutions",
    secondaryCtaLink: "/solutions/software-digital",
  },
  {
    id: "solar",
    tabLabel: "Solar EPC & Energy",
    image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "COMMERCIAL SOLAR EPC & RESILIENT POWER BACKUP",
    title: "Sustainable Power For A Brighter Tomorrow",
    description:
      "On-grid, off-grid and hybrid rooftop solar EPC, industrial online UPS with unity power factor (1.0 PF), and LiFePO4 energy storage backed by disciplined turnkey execution.",
    accent: "text-emerald-300",
    glowColor: "from-emerald-500/40 to-teal-500/30",
    primaryCtaText: "Request Solar Assessment",
    primaryCtaAction: "rfp",
    secondaryCtaText: "Explore Solar EPC",
    secondaryCtaLink: "/solutions/solar-energy",
  },
  {
    id: "security",
    tabLabel: "ELV & Surveillance",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "ELECTRONIC SECURITY & ELV LIFE SAFETY",
    title: "Protecting What Matters Most",
    description:
      "4K AI CCTV/IP surveillance, biometric access control, fire suppression, voice evacuation (PA), and integrated Building Management Systems (BMS) designed around real operational risk.",
    accent: "text-cyan-300",
    glowColor: "from-cyan-500/40 to-blue-600/30",
    primaryCtaText: "Request Security Consultation",
    primaryCtaAction: "rfp",
    secondaryCtaText: "Explore ELV Systems",
    secondaryCtaLink: "/solutions/elv-security",
  },
  {
    id: "infra",
    tabLabel: "IT Infrastructure",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "IT INFRASTRUCTURE & SMART SYSTEMS",
    title: "Infrastructure Engineered For Resilient Scale",
    description:
      "Enterprise server virtualization, 40G fiber backbones, structured cabling, Next-Gen UTM firewalls, and command center turnkey buildouts built for 99.999% availability.",
    accent: "text-amber-300",
    glowColor: "from-blue-600/40 to-amber-500/30",
    primaryCtaText: "Request Infrastructure Audit",
    primaryCtaAction: "rfp",
    secondaryCtaText: "Explore IT Infrastructure",
    secondaryCtaLink: "/solutions/it-infrastructure",
  },
  {
    id: "electrical",
    tabLabel: "Electrical EPC",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    tagline: "ELECTRICAL TURNKEY & HIGH-VOLTAGE DISTRIBUTION",
    title: "Industrial Power Engineering & Substation Continuity",
    description:
      "11kV/33kV substations, CPRI-tested HT/LT distribution panels, transformer cabling, lightning protection, and zero-downtime industrial electrification.",
    accent: "text-blue-300",
    glowColor: "from-blue-600/40 to-indigo-600/30",
    primaryCtaText: "Request Electrical Proposal",
    primaryCtaAction: "rfp",
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

  const handlePrimaryClick = (slideItem: HeroSlide) => {
    if (slideItem.primaryCtaAction === "rfp") {
      if (onOpenRfp) onOpenRfp();
      else {
        const el = document.getElementById("rfp-generator");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.location.href = "/contact#rfp-form";
      }
    } else if (slideItem.primaryCtaLink) {
      window.location.href = slideItem.primaryCtaLink;
    }
  };

  return (
    <>
      {/* ============================================================== */}
      {/* 1. CINEMATIC FULL-BLEED SLIDER HERO (Apple / Siemens Standard)  */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative h-[86vh] min-h-[580px] max-h-[860px] w-full overflow-hidden bg-slate-950 group select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Corevilt Capabilities Hero Carousel"
      >
        {/* All Background Slides with Smooth Hardware-Accelerated Crossfade */}
        {SLIDES.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              {/* Slide Image */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-[6000ms] ease-out scale-100 group-hover:scale-105"
              />

              {/* Gradient Scrims: Dark Vignette & Brand Accent Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-950/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${s.glowColor} mix-blend-overlay opacity-30 pointer-events-none`}
              />

              {/* Subtle Tech Grid Texture */}
              <div className="absolute inset-0 engineering-grid-dark opacity-35 pointer-events-none" />
            </div>
          );
        })}

        {/* Foreground Content Container */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-3xl space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-500 key={currentSlide}">
            {/* Tagline / Eyebrow with Animated Pulse */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-xs font-mono font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span className={slide.accent}>{slide.tagline}</span>
            </div>

            {/* H1 Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white leading-[1.12] tracking-tight drop-shadow-md">
              {slide.title}
            </h1>

            {/* Description Subtitle */}
            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl drop-shadow">
              {slide.description}
            </p>

            {/* Reception Slide Extra Credentials Banner */}
            {slide.isReception && (
              <div className="pt-1 pb-1">
                <div className="inline-flex flex-wrap items-center gap-2 sm:gap-4 px-3.5 py-2 rounded-xl bg-slate-900/70 backdrop-blur border border-slate-700/70 text-xs font-mono text-slate-300">
                  <span className="text-[#38bdf8] font-bold">MOTTO:</span>
                  <span>People</span>
                  <span className="text-slate-500">•</span>
                  <span>Technology</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-[#10b981] font-semibold">Sustainability</span>
                  <span className="text-slate-500">•</span>
                  <span>A Brighter Tomorrow</span>
                </div>
              </div>
            )}

            {/* Dual High-Impact Action CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => handlePrimaryClick(slide)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-bold text-xs sm:text-sm shadow-xl shadow-blue-900/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href={slide.secondaryCtaLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold text-xs sm:text-sm shadow-md transition-all duration-200"
              >
                <span>{slide.secondaryCtaText}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Left & Right Frosted Glass Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-slate-900/60 hover:bg-[#0B66C3] backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-slate-900/60 hover:bg-[#0B66C3] backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Interactive Slide Switcher & Progress Bar */}
        <div className="absolute bottom-5 inset-x-0 z-30 flex flex-col items-center gap-3 px-4">
          {/* Quick-Switch Category Tabs (Desktop) */}
          <div className="hidden md:flex items-center gap-2 p-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-800 shadow-xl">
            {SLIDES.map((s, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[#0B66C3] text-white shadow-md shadow-blue-900/30 scale-105"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {s.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Slide Indicator Dots / Progress Pills (Mobile & Tablet) */}
          <div className="flex md:hidden items-center gap-2">
            {SLIDES.map((s, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive ? "w-8 bg-[#0B66C3]" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. THE HIGH-TRUST 4-METRIC STRIP (Directly Below Hero)         */}
      {/* ============================================================== */}
      <section className="bg-white border-b border-slate-200 py-6 sm:py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {/* Metric 1 */}
            <div className="pt-4 lg:pt-0 lg:px-4 first:pt-0 first:pl-0 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#0F172A] font-mono">10</span>
                <span className="text-xs font-mono font-bold text-[#0B66C3] bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  CONNECTED
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Turnkey Engineering Verticals
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Software, Solar, Electrical, ELV, IT, Trading & Lifecycle AMC under one roof.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="pt-4 lg:pt-0 lg:px-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#059669] font-mono">EPC</span>
                <span className="text-xs font-mono font-bold text-[#059669] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  SINGLE-SOURCE
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Turnkey Accountability
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Zero multi-contractor finger pointing; single contract from design to handover.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="pt-4 lg:pt-0 lg:px-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#0284C7] font-mono">TIER-1</span>
                <span className="text-xs font-mono font-bold text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  AUTHORIZED
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                OEM Partner Alliances
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Schneider Electric, ABB, Waaree, Cisco, Dell Technologies & CPRI switchgear.
              </p>
            </div>

            {/* Metric 4 */}
            <div className="pt-4 lg:pt-0 lg:px-4 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl font-black text-[#0F172A] font-mono">24/7</span>
                <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  DISPATCH
                </span>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                SLA Maintenance Support
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                Guaranteed 2-to-4 hour emergency response with dedicated spares inventory.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
