"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface ShowcaseSlide {
  id: string;
  image: string;
  verticalCode: string;
  badge: string;
  title: string;
  highlight: string;
  stat: string;
  statLabel: string;
  link: string;
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "headquarters",
    image: "/office-reception.png",
    verticalCode: "HEADQUARTERS",
    badge: "DELHI & BAREILLY",
    title: "Corevilt Technologies Corporate HQ",
    highlight: "Single-Partner Turnkey Accountability for Enterprise Infrastructure",
    stat: "10",
    statLabel: "Connected Verticals",
    link: "/about",
  },
  {
    id: "software",
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&w=1920&q=80",
    verticalCode: "VERTICAL 01",
    badge: "DIGITAL SYSTEMS",
    title: "Custom Enterprise Software & ERP/CRM",
    highlight: "Full-Stack Web, Native Mobile Portals, Cloud Microservices & AI Automation",
    stat: "99.9%",
    statLabel: "Uptime SLA",
    link: "/solutions/software-digital",
  },
  {
    id: "energy",
    image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920",
    verticalCode: "VERTICAL 06",
    badge: "SOLAR EPC",
    title: "C&I Rooftop Solar EPC & Storage",
    highlight: "On-Grid & Hybrid Solar Plants, Industrial Online UPS & LiFePO4 BESS",
    stat: "25-Yr",
    statLabel: "Performance Warranty",
    link: "/solutions/solar-energy",
  },
  {
    id: "security",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    verticalCode: "VERTICAL 05",
    badge: "ELV SECURITY",
    title: "4K AI CCTV & Integrated BMS Systems",
    highlight: "Biometric Access Gates, NFPA Addressable Fire Alarms & Command Walls",
    stat: "< 1s",
    statLabel: "Alert Latency",
    link: "/solutions/elv-security",
  },
  {
    id: "infrastructure",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1920",
    verticalCode: "VERTICAL 02",
    badge: "IT INFRASTRUCTURE",
    title: "Mission-Critical Server Virtualization",
    highlight: "High-Density Fiber Backbones, Hyper-Converged Clusters & UTM Firewalls",
    stat: "40G",
    statLabel: "Fiber Speed",
    link: "/solutions/it-infrastructure",
  },
];

const CAPABILITY_PILLS = [
  "High-Voltage Electrical Turnkey",
  "Commercial Solar EPC & Power Backup",
  "Custom Enterprise Software & ERP",
  "Command & Control ELV Security",
  "Mission-Critical IT Infrastructure",
];

export function HeroSection({ onOpenRfp }: { onOpenRfp?: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCapabilityIndex, setActiveCapabilityIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance showcase slides every 5.5s
  useEffect(() => {
    if (isPaused) return;

    slideTimerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
      setActiveCapabilityIndex((prev) => (prev + 1) % CAPABILITY_PILLS.length);
    }, 5500);

    return () => {
      if (slideTimerRef.current) clearInterval(slideTimerRef.current);
    };
  }, [isPaused]);

  const slide = SHOWCASE_SLIDES[currentSlide];

  return (
    <>
      {/* ============================================================== */}
      {/* 1. ARCHITECTURAL LIGHT-THEMED AUTHORITY HERO (Stripe/Siemens)  */}
      {/* Side-by-Side Dual Column on all screens (md:grid-cols-12)      */}
      {/* 100% Fits in Viewport: Zero clipping, zero overflow            */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative w-full min-h-[500px] md:h-[calc(100vh-140px)] md:max-h-[680px] bg-[#F8FAFC] text-slate-900 overflow-hidden flex items-center border-b border-slate-200/80"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Corevilt Enterprise Authority Hero"
      >
        {/* Subtle engineering precision blueprint grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

        {/* Soft radial ambient illumination */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full py-6 md:py-0 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* ========================================================== */}
            {/* LEFT COLUMN (58% width): High-Authority Typography         */}
            {/* ========================================================== */}
            <div className="md:col-span-7 xl:col-span-7 space-y-3.5 sm:space-y-4">
              {/* Eyebrow Badge with Pulse Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0B66C3] animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-[#0B66C3] uppercase">
                  ONE COORDINATED PARTNER • TEN CONNECTED VERTICALS
                </span>
              </div>

              {/* H1 Display Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[40px] xl:text-[45px] font-black text-slate-900 leading-[1.1] tracking-tight">
                Architecting Intelligent Infrastructure, Power Continuity &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B66C3] via-[#0284C7] to-[#059669]">
                  Enterprise Digital Systems.
                </span>
              </h1>

              {/* Dynamic Capability Cycler Pill */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                <span className="text-slate-500 font-medium text-xs">Core Expertise:</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-white border border-slate-300 text-[#0B66C3] font-mono text-xs shadow-sm transition-all duration-300">
                  <Sparkles className="w-3 h-3 mr-1.5 text-blue-500 inline" />
                  {CAPABILITY_PILLS[activeCapabilityIndex]}
                </span>
              </div>

              {/* Value Subtitle */}
              <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl font-normal">
                Bridging physical electrical engineering, commercial solar EPC, and enterprise cloud software.
                Corevilt eliminates multi-contractor friction with single-source turnkey accountability.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <button
                  onClick={() => {
                    if (onOpenRfp) onOpenRfp();
                    else {
                      const el = document.getElementById("rfp-generator");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = "/contact#rfp-form";
                    }
                  }}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-600/25 hover:scale-105 transition-all duration-200"
                >
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#solutions"
                  className="inline-flex items-center gap-1.5 px-5 sm:px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm shadow-sm hover:scale-105 transition-all duration-200"
                >
                  <span>Explore 10 Verticals</span>
                </a>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-2.5 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                {[
                  { label: "10 Verticals", desc: "Turnkey Integrated" },
                  { label: "CEA & CPRI", desc: "Statutory Standards" },
                  { label: "Tier-1 OEMs", desc: "Authorized Alliances" },
                  { label: "24/7 SLA", desc: "Emergency AMC Support" },
                ].map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-slate-900 text-xs">{m.label}</div>
                    <div className="text-[10px] text-slate-500 font-medium leading-tight">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========================================================== */}
            {/* RIGHT COLUMN (42% width): Perfectly Proportioned Showcase  */}
            {/* Fits 100% inside the viewport on the right side of hero    */}
            {/* ========================================================== */}
            <div className="md:col-span-5 xl:col-span-5 relative w-full">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg shadow-slate-200/80 group/showcase aspect-[16/10] max-h-[360px] w-full">
                {SHOWCASE_SLIDES.map((s, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <div
                      key={s.id}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                      }`}
                    >
                      {/* Authentic, 100% full-brightness, vivid photograph */}
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover object-center transform transition-transform duration-[6000ms] ease-out scale-100 group-hover/showcase:scale-105"
                      />

                      {/* Clean bottom information badge (high-contrast frosted glass) */}
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent flex items-end justify-between gap-3">
                        <div className="space-y-0.5 min-w-0">
                          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/25 border border-blue-400/50 text-[9px] font-mono font-bold text-sky-300 uppercase">
                            {s.verticalCode} • {s.badge}
                          </div>
                          <div className="text-white font-bold text-xs sm:text-sm leading-tight drop-shadow-md truncate">
                            {s.title}
                          </div>
                          <div className="text-slate-300 text-[11px] hidden sm:block truncate max-w-[220px]">
                            {s.highlight}
                          </div>
                        </div>

                        {/* Live stat pill */}
                        <div className="text-right shrink-0 bg-slate-900/90 backdrop-blur border border-slate-700 px-2.5 py-1 rounded-lg shadow-md">
                          <div className="text-xs sm:text-sm font-black text-emerald-400 font-mono">
                            {s.stat}
                          </div>
                          <div className="text-[9px] text-slate-400 font-medium">
                            {s.statLabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Slider Nav Arrows */}
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length
                    )
                  }
                  aria-label="Previous showcase vertical"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white/90 hover:bg-[#0B66C3] hover:text-white border border-slate-200 text-slate-800 flex items-center justify-center transition shadow-md"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % SHOWCASE_SLIDES.length)
                  }
                  aria-label="Next showcase vertical"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 h-8 w-8 rounded-full bg-white/90 hover:bg-[#0B66C3] hover:text-white border border-slate-200 text-slate-800 flex items-center justify-center transition shadow-md"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Quick-Select Tabs below the visual frame */}
              <div className="grid grid-cols-5 gap-1.5 mt-2.5">
                {SHOWCASE_SLIDES.map((s, index) => {
                  const isActive = index === currentSlide;
                  const labels: Record<string, string> = {
                    headquarters: "HQ",
                    software: "SOFTWARE",
                    energy: "SOLAR",
                    security: "SECURITY",
                    infrastructure: "IT INFRA",
                  };
                  return (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold transition-all text-center tracking-tight truncate ${
                        isActive
                          ? "bg-[#0B66C3] text-white shadow-sm ring-2 ring-blue-500/20"
                          : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-sm"
                      }`}
                    >
                      {labels[s.id] || s.id.toUpperCase()}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CORPORATE CORE VALUES STRIP (People | Tech | Green | Impact) */}
      {/* ============================================================== */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
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
              className="group p-2.5 sm:p-3 border-r last:border-0 border-slate-200 cursor-default"
            >
              <div
                className={`text-base sm:text-lg lg:text-xl font-black text-slate-900 tracking-tight transition-colors duration-300 ${item.color}`}
              >
                {item.title}
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-500 mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
