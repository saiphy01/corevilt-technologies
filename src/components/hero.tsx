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
  Compass,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

interface HeroSlide {
  id: string;
  tabLabel: string;
  code: string;
  image: string;
  tagline: string;
  title: string;
  subtitle: string;
  accentColor: string;
  badgeBg: string;
  badgeBorder: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  specHighlight: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: "headquarters",
    tabLabel: "Turnkey Overview",
    code: "OVERVIEW",
    image: "/office-reception.png",
    tagline: "ONE COORDINATED PARTNER • TEN CONNECTED VERTICALS",
    title: "Architecting Intelligent Infrastructure, Power Continuity & Digital Ecosystems.",
    subtitle:
      "Bridging heavy industrial electrical engineering, commercial solar EPC, low-voltage life safety, and scalable enterprise software into a single accountable turnkey delivery contract.",
    accentColor: "text-emerald-400",
    badgeBg: "bg-emerald-950/60",
    badgeBorder: "border-emerald-500/40",
    primaryCtaText: "Request Technical Proposal",
    secondaryCtaText: "Explore 10 Turnkey Verticals",
    secondaryCtaLink: "#solutions",
    specHighlight: "Delhi NCR Corporate HQ & Regional Operations Hub",
  },
  {
    id: "software",
    tabLabel: "Software & AI",
    code: "DIGITAL",
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&w=1920&q=80",
    tagline: "ENTERPRISE SOFTWARE • ERP/CRM • AI WORKFLOWS",
    title: "Building Enterprise Digital Products & AI Ecosystems That Scale.",
    subtitle:
      "Custom web and mobile platforms, distributed ERP/CRM systems, cloud microservices, APIs, and intelligent workflow automation engineered around your operational reality.",
    accentColor: "text-sky-400",
    badgeBg: "bg-blue-950/60",
    badgeBorder: "border-blue-500/40",
    primaryCtaText: "Request Software Architecture Scope",
    secondaryCtaText: "Explore Software & Digital",
    secondaryCtaLink: "/solutions/software-digital",
    specHighlight: "Full-Stack Web, Mobile, ERP & Custom SaaS Modules",
  },
  {
    id: "solar",
    tabLabel: "Solar EPC",
    code: "SOLAR",
    image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "COMMERCIAL SOLAR EPC • INDUSTRIAL ONLINE UPS • BESS",
    title: "Sustainable Industrial Power & Clean Energy Continuity.",
    subtitle:
      "Commercial & Industrial rooftop solar EPC, on-grid/hybrid power plants, industrial online UPS with unity power factor (1.0 PF), and LiFePO4 battery energy storage systems.",
    accentColor: "text-emerald-400",
    badgeBg: "bg-emerald-950/60",
    badgeBorder: "border-emerald-500/40",
    primaryCtaText: "Request Solar BOQ Assessment",
    secondaryCtaText: "Explore Solar EPC Solutions",
    secondaryCtaLink: "/solutions/solar-energy",
    specHighlight: "Bifacial TOPCon Modules • Tier-1 String Inverters",
  },
  {
    id: "security",
    tabLabel: "ELV & Security",
    code: "SECURITY",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "4K AI SURVEILLANCE • ACCESS CONTROL • LIFE SAFETY",
    title: "Electronic Security & Integrated Building Intelligence.",
    subtitle:
      "4K AI CCTV/IP surveillance, biometric access control, fire detection & voice evacuation (PA), and integrated Building Management Systems (BMS) designed around real operational risk.",
    accentColor: "text-cyan-400",
    badgeBg: "bg-cyan-950/60",
    badgeBorder: "border-cyan-500/40",
    primaryCtaText: "Request Security Consultation",
    secondaryCtaText: "Explore ELV & Life Safety",
    secondaryCtaLink: "/solutions/elv-security",
    specHighlight: "Zero-Blindspot Design • UL-Listed Fire & BMS Systems",
  },
  {
    id: "infra",
    tabLabel: "IT Infrastructure",
    code: "NETWORK",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "TIER-3 SERVER ROOMS • 40G FIBER • HYPERCONVERGENCE",
    title: "Enterprise IT Infrastructure Engineered For 99.999% Uptime.",
    subtitle:
      "Mission-critical server room fit-outs, command & control centers, 40G structured cabling backbones, enterprise virtualization (VMware/Hyper-V), and Next-Gen UTM firewalls.",
    accentColor: "text-amber-400",
    badgeBg: "bg-amber-950/60",
    badgeBorder: "border-amber-500/40",
    primaryCtaText: "Request Infrastructure Audit",
    secondaryCtaText: "Explore IT Infrastructure",
    secondaryCtaLink: "/solutions/it-infrastructure",
    specHighlight: "TIA-942 Rated Designs • Fortinet & Cisco Integration",
  },
  {
    id: "electrical",
    tabLabel: "Electrical EPC",
    code: "ELECTRICAL",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    tagline: "HT/LT DISTRIBUTION • 11kV/33kV SUBSTATIONS • SWITCHGEAR",
    title: "Industrial Electrical Turnkey & Substation Continuity.",
    subtitle:
      "11kV/33kV substations, CPRI-tested HT/LT distribution panels, transformer cabling, harmonic mitigation, lightning protection, and zero-downtime industrial power distribution.",
    accentColor: "text-blue-400",
    badgeBg: "bg-blue-950/60",
    badgeBorder: "border-blue-500/40",
    primaryCtaText: "Request Electrical EPC Proposal",
    secondaryCtaText: "Explore Electrical Turnkey",
    secondaryCtaLink: "/solutions/electrical-turnkey",
    specHighlight: "CPRI-Type-Tested Panels • CEA Safety Compliance",
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
    }, 6000);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused]);

  const slide = SLIDES[currentSlide];

  return (
    <>
      {/* ============================================================== */}
      {/* 1. SEAMLESS PANORAMIC STAGE HERO (Apple / Siemens Architecture) */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative min-h-[640px] lg:min-h-[720px] w-full overflow-hidden bg-[#0A192F] text-white flex flex-col justify-between select-none group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Corevilt Capabilities Hero"
      >
        {/* Background Panoramic Viewport */}
        {SLIDES.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-0" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              {/* Image positioned on right 65% on desktop, full on mobile */}
              <img
                src={s.image}
                alt={s.title}
                className="absolute right-0 top-0 h-full w-full lg:w-[65%] object-cover object-center lg:object-right transition-transform duration-[8000ms] ease-out scale-100 group-hover:scale-105"
              />

              {/* Seamless Multi-Stop Organic Gradient */}
              {/* Left 45% is 100% Solid Deep Obsidian Navy for crystal-clear readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/98 via-40% md:via-48% to-transparent/30 lg:to-transparent/10" />
              {/* Top and Bottom soft vignettes */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent via-50% to-[#0A192F]/60" />
              {/* Subtle Tech Grid Texture */}
              <div className="absolute inset-0 engineering-grid-dark opacity-25 pointer-events-none" />
            </div>
          );
        })}

        {/* Foreground Content: Perfectly Balanced on Left Side */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full flex-1 flex flex-col justify-center">
          <div className="max-w-2xl lg:max-w-3xl space-y-6">
            {/* Eyebrow Badge with Live Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700/80 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span className={`text-xs font-mono font-bold tracking-wider uppercase ${slide.accentColor}`}>
                {slide.tagline}
              </span>
            </div>

            {/* H1 Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-white leading-[1.12] tracking-tight drop-shadow-md">
              {slide.title}
            </h1>

            {/* Subtitle Value Proposition */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal drop-shadow">
              {slide.subtitle}
            </p>

            {/* Engineering Specification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-700/60 text-xs font-mono text-slate-300">
              <span className="text-[#38bdf8] font-bold">SPEC:</span>
              <span>{slide.specHighlight}</span>
            </div>

            {/* Dual Enterprise Action Buttons */}
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
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-bold text-sm shadow-xl shadow-blue-900/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{slide.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href={slide.secondaryCtaLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-sm backdrop-blur transition-all duration-200"
              >
                <span>{slide.secondaryCtaText}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Side Arrow Controls */}
        <button
          onClick={prevSlide}
          aria-label="Previous capability"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-slate-900/60 hover:bg-[#0B66C3] backdrop-blur border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next capability"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-slate-900/60 hover:bg-[#0B66C3] backdrop-blur border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-lg hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Interactive Horizontal Capability Progression Bar */}
        <div className="relative z-10 border-t border-slate-800/80 bg-[#0A192F]/90 backdrop-blur-md py-3.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
              {SLIDES.map((s, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`group relative text-left py-2 px-3 rounded-xl transition-all duration-200 border ${
                      isActive
                        ? "bg-white/10 border-blue-400/50 shadow-md"
                        : "border-transparent hover:bg-white/5 hover:border-slate-800"
                    }`}
                  >
                    {/* Animated Progress Indicator */}
                    <div className="h-0.5 w-full bg-slate-800 rounded-full mb-1.5 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          isActive ? "w-full bg-[#0B66C3]" : "w-0"
                        }`}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-[9px] font-mono font-bold px-1.5 py-0.2 rounded ${
                          isActive
                            ? "bg-blue-500/20 text-[#38bdf8]"
                            : "text-slate-500 group-hover:text-slate-400"
                        }`}
                      >
                        {s.code}
                      </span>
                    </div>
                    <div
                      className={`text-xs font-bold truncate mt-0.5 ${
                        isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {s.tabLabel}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. HIGH-TRUST METRIC & CORPORATE PILLARS STRIP                 */}
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
                Software, Solar EPC, Electrical, ELV, IT, Trading & Lifecycle AMC under one roof.
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
                Guaranteed emergency field response with dedicated spares inventory.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
