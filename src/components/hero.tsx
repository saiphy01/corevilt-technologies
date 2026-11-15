"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  raw?: boolean;
  tagline: string;
  title: string;
  description: string;
  /* Scientifically selected complementary accent color based on background palette */
  accentColor: string;
  badgeBorder: string;
  pulseColor: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: "signage",
    image: "/office-reception.png",
    raw: true,
    tagline: "COREVILT TECHNOLOGIES • CORPORATE HEADQUARTERS",
    title: "Intelligence. Infrastructure. Impact.",
    description:
      "Bridging heavy industrial engineering, commercial solar EPC, low-voltage security, and enterprise software with single-partner turnkey accountability.",
    accentColor: "text-cyan-400",
    badgeBorder: "border-cyan-500/40",
    pulseColor: "bg-cyan-400",
    primaryCtaText: "Request Technical Proposal",
    secondaryCtaText: "Explore 10 Verticals",
    secondaryCtaLink: "#solutions",
  },
  {
    id: "software",
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&w=1920&q=80",
    tagline: "SOFTWARE & DIGITAL SYSTEMS • ERP / CRM",
    title: "Building Digital Products That Work For You",
    description:
      "Web, mobile, enterprise ERP/CRM platforms, cloud microservices, and AI workflow automation engineered around your actual business workflow.",
    /* Background is deep cobalt blue & dark shadows -> Chromatic complement is Vibrant Solar Amber */
    accentColor: "text-amber-400",
    badgeBorder: "border-amber-400/50",
    pulseColor: "bg-amber-400",
    primaryCtaText: "Request Technical Proposal",
    secondaryCtaText: "Explore Software Solutions",
    secondaryCtaLink: "/solutions/software-digital",
  },
  {
    id: "energy",
    image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "SOLAR, POWER BACKUP & ENERGY CONTINUITY",
    title: "Sustainable Power For A Brighter Tomorrow",
    description:
      "Commercial & Industrial rooftop solar EPC, on-grid/hybrid power plants, industrial online UPS (1.0 PF), and LiFePO4 battery energy storage.",
    /* Background is bright azure sky & blue silicon -> Chromatic complement is High-Luminance Sun Gold */
    accentColor: "text-yellow-400",
    badgeBorder: "border-yellow-400/50",
    pulseColor: "bg-yellow-400",
    primaryCtaText: "Request Solar Assessment",
    secondaryCtaText: "Explore Solar EPC",
    secondaryCtaLink: "/solutions/solar-energy",
  },
  {
    id: "secure",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "ELECTRONIC SECURITY & ELV LIFE SAFETY",
    title: "Protecting What Matters Most",
    description:
      "4K AI CCTV surveillance, biometric access control, fire suppression, voice evacuation (PA), and integrated Building Management Systems (BMS).",
    /* Background is concrete gray & daytime sky -> Chromatic complement is High-Visibility Safety Emerald */
    accentColor: "text-emerald-400",
    badgeBorder: "border-emerald-400/50",
    pulseColor: "bg-emerald-400",
    primaryCtaText: "Request Security Consultation",
    secondaryCtaText: "Explore ELV Systems",
    secondaryCtaLink: "/solutions/elv-security",
  },
  {
    id: "infra",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "IT INFRASTRUCTURE & SMART SYSTEMS",
    title: "Infrastructure Engineered For Scale",
    description:
      "Mission-critical server rooms, command & control centers, 40G fiber backbones, enterprise virtualization, and Next-Gen UTM firewalls.",
    /* Background has glowing amber/orange fiber cables -> Chromatic complement is Electric Hyper-Cyan */
    accentColor: "text-cyan-400",
    badgeBorder: "border-cyan-400/50",
    pulseColor: "bg-cyan-400",
    primaryCtaText: "Request Infrastructure Audit",
    secondaryCtaText: "Explore IT Infrastructure",
    secondaryCtaLink: "/solutions/it-infrastructure",
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
      {/* 1. CINEMATIC FULL-BLEED SLIDER (100% Above-the-Fold Viewport)  */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative h-[88vh] min-h-[540px] max-h-[820px] w-full overflow-hidden bg-slate-950 group select-none flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Corevilt Capabilities Hero Carousel"
      >
        {SLIDES.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={s.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              {/* Background Slide Image: Full bleed, 100% visible across the whole screen */}
              <img
                src={s.image}
                alt={s.raw ? "COREVILT corporate office reception signage" : s.title}
                className="absolute inset-0 h-full w-full object-cover object-center transform transition-transform duration-[7000ms] ease-out scale-100 group-hover:scale-105"
              />

              {s.raw ? (
                /* Slide 1 (Office Reception): Clean view with subtle bottom vignette only */
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
              ) : (
                /* Slide 2-5: Multi-Stop Directional Scrim guaranteeing 100% text contrast without hiding the picture */
                <>
                  {/* Left 45% has 70%-90% contrast scrim under text; Right 55% dissolves to transparent so picture is 100% visible */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 via-45% to-black/20" />
                  {/* Bottom-up vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 via-35% to-transparent" />

                  {/* Left-Aligned High-Contrast Text Composition */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
                      <div className="max-w-2xl space-y-4 sm:space-y-5 animate-in fade-in duration-500">
                        {/* High-Visibility Eyebrow Badge inside Dark Translucent Capsule */}
                        <div
                          className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border ${s.badgeBorder} shadow-lg`}
                        >
                          <span className={`w-2 h-2 rounded-full ${s.pulseColor} animate-ping`} />
                          <span
                            className={`text-xs font-mono font-bold tracking-widest uppercase ${s.accentColor}`}
                          >
                            {s.tagline}
                          </span>
                        </div>

                        {/* Bold Display Headline with Razor-Sharp Drop Shadow */}
                        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white leading-[1.08] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]">
                          {s.title}
                        </h1>

                        {/* Crisp Subtitle */}
                        <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                          {s.description}
                        </p>

                        {/* High-Contrast Action CTAs */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                          <a
                            href="#solutions"
                            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-bold text-sm shadow-xl shadow-black/60 hover:scale-105 transition-all duration-200"
                          >
                            <span>Our Solutions</span>
                            <ArrowRight className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => {
                              if (onOpenRfp) onOpenRfp();
                              else {
                                const el = document.getElementById("rfp-generator");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                                else window.location.href = "/contact#rfp-form";
                              }
                            }}
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm shadow-xl shadow-black/40 hover:scale-105 transition-all duration-200"
                          >
                            <span>Partner With Us</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}

        {/* Left Circular Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-[#0B66C3] backdrop-blur border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-2xl hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Circular Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-[#0B66C3] backdrop-blur border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-2xl hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Bottom Pill Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {SLIDES.map((s, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "bg-white w-8 shadow-lg" : "bg-white/40 hover:bg-white/70 w-2.5"
                }`}
              />
            );
          })}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. CORPORATE CORE VALUES STRIP (Matching corevilt.com)        */}
      {/* ============================================================== */}
      <section className="py-12 bg-white border-b border-slate-200">
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
