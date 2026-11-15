"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  raw?: boolean;
  tagline?: string;
  title?: string;
  description?: string;
  accent?: string;
  ring?: string;
  btn?: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: "signage",
    image: "/office-reception.png",
    raw: true,
  },
  {
    id: "software",
    image: "https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?auto=format&fit=crop&w=1920&q=80",
    tagline: "SOFTWARE & DIGITAL ENGINEERING",
    title: "Building Digital Products That Work For You",
    description: "Web, mobile, ERP/CRM and SaaS platforms engineered around your actual business workflow.",
    accent: "text-sky-400",
    ring: "from-sky-500/20 to-blue-600/20",
    btn: "hover:bg-[#0B66C3] hover:border-[#0B66C3]",
  },
  {
    id: "energy",
    image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "SOLAR, POWER BACKUP & ENERGY",
    title: "Sustainable Power For A Brighter Tomorrow",
    description: "On-grid, off-grid and hybrid solar, UPS and energy monitoring backed by disciplined EPC delivery.",
    accent: "text-emerald-400",
    ring: "from-emerald-500/20 to-teal-600/20",
    btn: "hover:bg-[#059669] hover:border-[#059669]",
  },
  {
    id: "secure",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "ELECTRONIC SECURITY & SURVEILLANCE",
    title: "Protecting What Matters Most",
    description: "CCTV/IP surveillance, access control and intrusion systems designed around real operational risk.",
    accent: "text-cyan-400",
    ring: "from-cyan-500/20 to-blue-600/20",
    btn: "hover:bg-[#0284C7] hover:border-[#0284C7]",
  },
  {
    id: "infra",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "IT INFRASTRUCTURE & SMART SYSTEMS",
    title: "Infrastructure Engineered For Scale",
    description: "Networking, servers, cloud and smart-building systems built for reliability and future growth.",
    accent: "text-amber-400",
    ring: "from-amber-500/20 to-orange-600/20",
    btn: "hover:bg-[#0B66C3] hover:border-[#0B66C3]",
  },
  {
    id: "electrical",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1920&q=80",
    tagline: "ELECTRICAL TURNKEY & POWER DISTRIBUTION",
    title: "Industrial Power Engineering & Substation Continuity",
    description: "11kV/33kV substations, CPRI-tested panels, and industrial electrification delivered with single-source turnkey accountability.",
    accent: "text-blue-400",
    ring: "from-blue-600/20 to-indigo-600/20",
    btn: "hover:bg-[#0B66C3] hover:border-[#0B66C3]",
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

  return (
    <>
      {/* ============================================================== */}
      {/* 1. CINEMATIC HERO SLIDER WITH ULTRA-HIGH CONTRAST CLARITY      */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative h-[88vh] min-h-[560px] max-h-[880px] w-full overflow-hidden bg-slate-950 group select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Corevilt Capabilities Hero Carousel"
      >
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              {/* Background Slide Image: Darkened on capability slides so text has 100% contrast */}
              <img
                src={slide.image}
                alt={slide.raw ? "COREVILT corporate office reception signage" : slide.title || "COREVILT Solution"}
                className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[7000ms] ease-out ${
                  slide.raw ? "brightness-100" : "brightness-[0.38] contrast-[1.12] saturate-[1.1] scale-100 group-hover:scale-105"
                }`}
              />

              {slide.raw ? (
                /* Slide 1 (Office Reception): Clean view with subtle bottom vignette only */
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              ) : (
                /* Slide 2-6: Razor-Sharp, High-Contrast Text with Frosted Dark Scrim */
                <>
                  {/* Directional scrims guaranteeing dark canvas behind text */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/95 via-[#0A192F]/80 to-transparent/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/40 to-transparent/30" />

                  {/* Perfectly centered/left-aligned readable card container */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full">
                      <div className="max-w-xl p-6 sm:p-8 rounded-3xl bg-[#0A192F]/85 backdrop-blur-xl border border-white/10 shadow-2xl ring-1 ring-black/30 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        {/* Tagline Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-3.5">
                          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                          <span
                            className={`text-[11px] font-mono font-bold tracking-widest uppercase ${slide.accent}`}
                          >
                            {slide.tagline}
                          </span>
                        </div>

                        {/* High-Contrast Bold Headline */}
                        <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white mb-3.5 leading-[1.18] tracking-tight text-balance">
                          {slide.title}
                        </h1>

                        {/* Crisp Subtitle */}
                        <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                          {slide.description}
                        </p>

                        {/* Dual Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3">
                          <a
                            href="#solutions"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-900/40 transition-all duration-200 transform hover:-translate-y-0.5"
                          >
                            <span>Our Solutions</span>
                            <ArrowRight className="w-3.5 h-3.5" />
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
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs sm:text-sm shadow-md transition-all duration-200"
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

        {/* Navigation Arrow: Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-900/70 hover:bg-[#0B66C3] backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition shadow-lg hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Navigation Arrow: Right */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-slate-900/70 hover:bg-[#0B66C3] backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 transition shadow-lg hover:scale-105"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "bg-white w-8 shadow-md" : "bg-white/40 hover:bg-white/70 w-2.5"
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
