"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Shield,
  Zap,
  Cpu,
  Sun,
  Server,
  Building2,
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
    verticalCode: "EXECUTIVE HEADQUARTERS",
    badge: "DELHI NCR & BAREILLY",
    title: "Corevilt Technologies Corporate HQ",
    highlight: "Single-Partner Turnkey Accountability for Enterprise & Government Projects",
    stat: "10",
    statLabel: "Connected Verticals",
    link: "/about",
  },
  {
    id: "software",
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&w=1920&q=80",
    verticalCode: "VERTICAL 01",
    badge: "SOFTWARE & DIGITAL SYSTEMS",
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
    badge: "SOLAR EPC & POWER BACKUP",
    title: "C&I Rooftop Solar EPC & Storage",
    highlight: "On-Grid & Hybrid Solar Plants, Industrial Online UPS (1.0 PF) & LiFePO4 BESS",
    stat: "25-Yr",
    statLabel: "Performance Warranty",
    link: "/solutions/solar-energy",
  },
  {
    id: "security",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    verticalCode: "VERTICAL 05",
    badge: "ELV SECURITY & LIFE SAFETY",
    title: "4K AI CCTV & Integrated BMS Systems",
    highlight: "Biometric Access Gates, NFPA Addressable Fire Alarms & Central Command Walls",
    stat: "< 1s",
    statLabel: "Event Alert Latency",
    link: "/solutions/elv-security",
  },
  {
    id: "infrastructure",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1920",
    verticalCode: "VERTICAL 02",
    badge: "IT INFRASTRUCTURE & SERVERS",
    title: "Mission-Critical Server Virtualization",
    highlight: "High-Density Fiber Backbones, Hyper-Converged Clusters & Next-Gen UTM Firewalls",
    stat: "40G",
    statLabel: "Fiber Backbone Speed",
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
      {/* 1. MASTER CDO SPLIT-SCREEN AUTHORITY HERO                     */}
      {/* Locked height: 100% fits on screen above fold with zero scroll */}
      {/* Deep Obsidian Navy background: 100% razor-sharp typography     */}
      {/* Right column showcase: 100% vivid, un-obscured photography    */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative w-full min-h-[580px] lg:h-[calc(100vh-130px)] lg:max-h-[760px] bg-[#0A192F] text-white overflow-hidden flex items-center border-b border-slate-800"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Corevilt Enterprise Authority Hero"
      >
        {/* Subtle geometric grid ambient background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        {/* Radial glow accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0B66C3]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0284C7]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full py-8 lg:py-0 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* ========================================================== */}
            {/* LEFT COLUMN (55% width): Authoritative Display Typography  */}
            {/* ========================================================== */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {/* Eyebrow Badge with Pulse */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                  ONE COORDINATED PARTNER • TEN CONNECTED VERTICALS
                </span>
              </div>

              {/* H1 Display Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black text-white leading-[1.08] tracking-tight">
                Architecting Intelligent Infrastructure, Power Continuity &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#0B66C3]">
                  Enterprise Digital Systems.
                </span>
              </h1>

              {/* Dynamic Capability Cycler Pill */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300">
                <span className="text-slate-400">Core Expertise:</span>
                <span className="inline-flex items-center px-3 py-1 rounded-lg bg-blue-950/80 border border-blue-500/30 text-sky-300 font-mono text-xs transition-all duration-300">
                  {CAPABILITY_PILLS[activeCapabilityIndex]}
                </span>
              </div>

              {/* Value Subtitle */}
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal">
                Bridging physical electrical engineering, commercial solar EPC, and enterprise cloud software.
                Corevilt eliminates multi-contractor friction with single-source turnkey accountability.
              </p>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={() => {
                    if (onOpenRfp) onOpenRfp();
                    else {
                      const el = document.getElementById("rfp-generator");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = "/contact#rfp-form";
                    }
                  }}
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-bold text-sm shadow-xl shadow-blue-900/40 hover:scale-105 transition-all duration-200"
                >
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#solutions"
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <span>Explore 10 Verticals</span>
                </a>
              </div>

              {/* Trust Metric Strip */}
              <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                {[
                  { label: "10 Verticals", desc: "Turnkey Integrated" },
                  { label: "CEA & CPRI", desc: "Statutory Standards" },
                  { label: "Tier-1 OEMs", desc: "Authorized Alliances" },
                  { label: "24/7 SLA", desc: "Emergency AMC Support" },
                ].map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-white text-xs sm:text-sm">{m.label}</div>
                    <div className="text-[11px] text-slate-400">{m.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ========================================================== */}
            {/* RIGHT COLUMN (45% width): 100% Vivid Visual Showcase       */}
            {/* No text over images! The photo is 100% clear & bright!     */}
            {/* ========================================================== */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl group/showcase aspect-[4/3] sm:aspect-[16/11]">
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

                      {/* Clean bottom information badge (does not obstruct main subject) */}
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-end justify-between gap-4">
                        <div className="space-y-1">
                          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-blue-500/20 border border-blue-400/40 text-[10px] font-mono font-bold text-sky-300 uppercase">
                            {s.verticalCode} • {s.badge}
                          </div>
                          <div className="text-white font-bold text-sm sm:text-base leading-tight">
                            {s.title}
                          </div>
                          <div className="text-slate-300 text-xs hidden sm:block">
                            {s.highlight}
                          </div>
                        </div>

                        {/* Live stat pill */}
                        <div className="text-right shrink-0 bg-slate-900/90 backdrop-blur border border-slate-700 px-3 py-1.5 rounded-lg shadow-lg">
                          <div className="text-sm sm:text-base font-black text-emerald-400 font-mono">
                            {s.stat}
                          </div>
                          <div className="text-[10px] text-slate-400 font-medium">
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
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-slate-950/70 hover:bg-[#0B66C3] border border-white/20 text-white flex items-center justify-center transition shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % SHOWCASE_SLIDES.length)
                  }
                  aria-label="Next showcase vertical"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-slate-950/70 hover:bg-[#0B66C3] border border-white/20 text-white flex items-center justify-center transition shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnail Quick Selector below the visual frame */}
              <div className="flex items-center justify-between gap-2 mt-3">
                {SHOWCASE_SLIDES.map((s, index) => {
                  const isActive = index === currentSlide;
                  const labels: Record<string, string> = {
                    headquarters: "HQ",
                    software: "SOFTWARE",
                    energy: "SOLAR EPC",
                    security: "SECURITY",
                    infrastructure: "IT INFRA",
                  };
                  return (
                    <button
                      key={s.id}
                      onClick={() => setCurrentSlide(index)}
                      className={`flex-1 py-2 px-1 rounded-lg text-[11px] font-mono font-bold transition-all text-center tracking-wide ${
                        isActive
                          ? "bg-[#0B66C3] text-white shadow-lg ring-1 ring-sky-400"
                          : "bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700/80"
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
      <section className="py-8 bg-white border-b border-slate-200">
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
              className="group p-3 border-r last:border-0 border-slate-200 cursor-default"
            >
              <div
                className={`text-lg sm:text-xl font-black text-slate-900 tracking-tight transition-colors duration-300 ${item.color}`}
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
