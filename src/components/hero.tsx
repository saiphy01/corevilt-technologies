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
      {/* 1. ARCHITECTURAL LIGHT-THEMED EXECUTIVE SPLIT HERO             */}
      {/* Full-Height Right Canvas: Visual covers 100% canvas height      */}
      {/* 100% Fits Above-The-Fold in Viewport with Zero Scrolling       */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative w-full min-h-[calc(100vh-118px)] md:h-[calc(100vh-118px)] md:min-h-[660px] md:max-h-[960px] bg-[#F8FAFC] text-slate-900 overflow-hidden flex flex-col justify-between border-b border-slate-200/80"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Corevilt Enterprise Authority Hero"
      >
        {/* Subtle engineering precision blueprint grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

        {/* Soft radial ambient illumination */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full h-full flex flex-col md:flex-row relative z-10 flex-1">
          {/* ========================================================== */}
          {/* LEFT COLUMN (54% width): High-Authority Typography         */}
          {/* ========================================================== */}
          <div className="w-full md:w-[54%] xl:w-[55%] flex flex-col justify-between px-6 sm:px-10 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-10 xl:pr-14 py-8 lg:py-12">
            <div className="space-y-4 lg:space-y-6 my-auto">
              {/* Eyebrow Badge with Pulse Indicator */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0B66C3] animate-ping" />
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#0B66C3] uppercase">
                  ONE COORDINATED PARTNER • TEN CONNECTED VERTICALS
                </span>
              </div>

              {/* H1 Display Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-black text-slate-900 leading-[1.12] tracking-tight">
                Architecting Intelligent Infrastructure, Power Continuity &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B66C3] via-[#0284C7] to-[#059669]">
                  Enterprise Digital Systems.
                </span>
              </h1>

              {/* Dynamic Capability Cycler Pill */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                <span className="text-slate-500 font-medium">Core Expertise:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-white border border-slate-300 text-[#0B66C3] font-mono text-xs sm:text-sm shadow-sm transition-all duration-300">
                  <Sparkles className="w-3.5 h-3.5 mr-2 text-blue-500 inline" />
                  {CAPABILITY_PILLS[activeCapabilityIndex]}
                </span>
              </div>

              {/* Value Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                Bridging physical electrical engineering, commercial solar EPC, and enterprise cloud software.
                Corevilt eliminates multi-contractor friction with single-source turnkey accountability.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  onClick={() => {
                    if (onOpenRfp) onOpenRfp();
                    else {
                      const el = document.getElementById("rfp-generator");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = "/contact#rfp-form";
                    }
                  }}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-bold text-sm sm:text-base shadow-md shadow-blue-600/25 hover:scale-105 transition-all duration-200"
                >
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#solutions"
                  className="inline-flex items-center gap-1.5 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-sm sm:text-base shadow-sm hover:scale-105 transition-all duration-200"
                >
                  <span>Explore 10 Verticals</span>
                </a>
              </div>
            </div>

            {/* Trust Metric Strip */}
            <div className="pt-4 lg:pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              {[
                { label: "10 Verticals", desc: "Turnkey Integrated" },
                { label: "CEA & CPRI", desc: "Statutory Standards" },
                { label: "Tier-1 OEMs", desc: "Authorized Alliances" },
                { label: "24/7 SLA", desc: "Emergency AMC Support" },
              ].map((m, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">{m.label}</div>
                  <div className="text-[11px] text-slate-500 font-medium leading-tight">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================== */}
          {/* RIGHT COLUMN: Covers 100% Canvas Height on Right Side      */}
          {/* ========================================================== */}
          <div className="w-full md:w-[46%] xl:w-[45%] h-[520px] md:h-full relative overflow-hidden border-t md:border-t-0 md:border-l border-slate-200 bg-slate-950 group/showcase">
            {SHOWCASE_SLIDES.map((s, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={s.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                  }`}
                >
                  {/* Full canvas height authentic photograph */}
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover object-center transform transition-transform duration-[6000ms] ease-out scale-100 group-hover/showcase:scale-105"
                  />

                  {/* Top-floating Category & Telemetry Badges */}
                  <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 flex items-center justify-between pointer-events-none z-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/75 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono font-bold text-sky-300 uppercase shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      {s.verticalCode} • {s.badge}
                    </div>

                    <div className="bg-slate-950/80 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2.5">
                      <div className="text-right">
                        <div className="text-sm sm:text-base font-black text-emerald-400 font-mono leading-none">
                          {s.stat}
                        </div>
                        <div className="text-[9px] text-slate-300 font-medium">
                          {s.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Floating Control Dock */}
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent z-20 space-y-3 sm:space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white drop-shadow-md leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 max-w-lg leading-relaxed">
                        {s.highlight}
                      </p>
                    </div>

                    {/* 5-Pill Quick Select Dock */}
                    <div className="grid grid-cols-5 gap-1.5 pt-1">
                      {SHOWCASE_SLIDES.map((item, idx) => {
                        const isPillActive = idx === currentSlide;
                        const labels: Record<string, string> = {
                          headquarters: "HQ",
                          software: "SOFTWARE",
                          energy: "SOLAR",
                          security: "SECURITY",
                          infrastructure: "IT INFRA",
                        };
                        return (
                          <button
                            key={item.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentSlide(idx);
                            }}
                            className={`py-2 px-1 rounded-lg text-[10px] sm:text-[11px] font-mono font-bold transition-all text-center tracking-tight truncate ${
                              isPillActive
                                ? "bg-[#0B66C3] text-white shadow-lg shadow-blue-500/40 ring-2 ring-blue-400/50"
                                : "bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-white/10 backdrop-blur-md"
                            }`}
                          >
                            {labels[item.id] || item.id.toUpperCase()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Slide Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length
                )
              }
              aria-label="Previous showcase vertical"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-slate-900/70 hover:bg-[#0B66C3] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition shadow-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % SHOWCASE_SLIDES.length)
              }
              aria-label="Next showcase vertical"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-slate-900/70 hover:bg-[#0B66C3] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition shadow-xl"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
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
