"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    accent: "text-sky-300",
    ring: "from-sky-400 to-blue-600",
    btn: "hover:bg-sky-500 hover:border-sky-400",
  },
  {
    id: "energy",
    image: "https://images.pexels.com/photos/9875408/pexels-photo-9875408.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "SOLAR, POWER BACKUP & ENERGY",
    title: "Sustainable Power For A Brighter Tomorrow",
    description: "On-grid, off-grid and hybrid solar, UPS and energy monitoring backed by disciplined EPC delivery.",
    accent: "text-emerald-300",
    ring: "from-emerald-400 to-emerald-600",
    btn: "hover:bg-emerald-500 hover:border-emerald-400",
  },
  {
    id: "secure",
    image: "https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "ELECTRONIC SECURITY & SURVEILLANCE",
    title: "Protecting What Matters Most",
    description: "CCTV/IP surveillance, access control and intrusion systems designed around real operational risk.",
    accent: "text-cyan-300",
    ring: "from-cyan-400 to-cyan-600",
    btn: "hover:bg-cyan-500 hover:border-cyan-400",
  },
  {
    id: "infra",
    image: "https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tagline: "IT INFRASTRUCTURE & SMART SYSTEMS",
    title: "Infrastructure Engineered For Scale",
    description: "Networking, servers, cloud and smart-building systems built for reliability and future growth.",
    accent: "text-amber-300",
    ring: "from-amber-400 to-amber-600",
    btn: "hover:bg-amber-500 hover:border-amber-400",
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
      {/* 1. CINEMATIC FULL-BLEED SLIDER HERO (Exact corevilt.com style) */}
      {/* ============================================================== */}
      <section
        id="top"
        className="relative h-[88vh] min-h-[520px] max-h-[820px] w-full overflow-hidden bg-slate-950 group select-none"
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
              {/* Background Slide Image */}
              <img
                src={slide.image}
                alt={slide.raw ? "COREVILT office reception signage" : slide.title || "COREVILT Solution"}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {slide.raw ? (
                /* Slide 1 (Office Reception): Clean view with subtle bottom vignette only */
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent" />
              ) : (
                /* Slide 2-5: Crisp, cinematic overlay with punchy text */
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
                  {slide.ring && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${slide.ring} mix-blend-overlay opacity-30`}
                    />
                  )}
                  <div className="absolute inset-0 flex items-end sm:items-center">
                    <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-16 sm:pb-0 w-full">
                      <div className="max-w-xl animate-in fade-in duration-500">
                        <span
                          className={`text-xs uppercase tracking-widest font-extrabold block mb-3 ${slide.accent}`}
                        >
                          {slide.tagline}
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                          {slide.title}
                        </h1>
                        <p className="text-slate-200 text-base sm:text-lg mb-8 leading-relaxed">
                          {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                          <a
                            href="#solutions"
                            className={`bg-white/10 backdrop-blur border-2 border-white/70 text-white font-semibold px-6 py-3 rounded-xl shadow transition-colors duration-300 ${slide.btn}`}
                          >
                            Our Solutions
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
                            className="border-2 border-transparent text-slate-900 font-semibold px-6 py-3 rounded-xl bg-white shadow-sm hover:bg-slate-100 transition"
                          >
                            Partner With Us
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

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-[#0B66C3] hover:border-[#0B66C3]"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-[#059669] hover:border-[#059669]"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Bottom Pill Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "bg-white w-8" : "bg-white/40 hover:bg-white/70 w-2.5"
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
