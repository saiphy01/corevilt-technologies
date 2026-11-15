"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Zap,
  SunMedium,
  Building2,
  Server,
  Layers,
  Sparkles,
  ChevronRight,
  Shield,
  Activity,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const CAPABILITIES = [
  "High-Voltage Electrical Turnkey",
  "Solar EPC & Power Backup",
  "Custom Enterprise Software",
  "Command & Control ELV Systems",
  "Enterprise IT & Hyperconvergence",
];

export function HeroSection({ onOpenRfp }: { onOpenRfp?: () => void }) {
  const [activeCapIndex, setActiveCapIndex] = useState(0);
  const [activeLayer, setActiveLayer] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCapIndex((prev) => (prev + 1) % CAPABILITIES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const schematicLayers = [
    {
      id: 0,
      title: "Layer 04: Cloud & Enterprise Intelligence",
      tech: "Next.js Microservices • AI Workflows • Distributed ERP • OCR",
      color: "#0B66C3",
      accent: "border-blue-500/40 bg-blue-950/40",
      status: "OPERATIONAL",
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
    },
    {
      id: 1,
      title: "Layer 03: High-Density IT Infrastructure",
      tech: "VMware / Hyper-V • 40G Fiber Backbones • UTM Firewalls • SAN",
      color: "#0284C7",
      accent: "border-sky-500/40 bg-sky-950/40",
      status: "ACTIVE 10G",
      icon: <Server className="w-4 h-4 text-sky-400" />,
    },
    {
      id: 2,
      title: "Layer 02: Solar EPC & Resilient Power Backup",
      tech: "Bifacial TOPCon Solar • Online UPS 1.0 PF • LiFePO4 BESS",
      color: "#059669",
      accent: "border-emerald-500/40 bg-emerald-950/40",
      status: "GREEN GENERATING",
      icon: <SunMedium className="w-4 h-4 text-emerald-400" />,
    },
    {
      id: 3,
      title: "Layer 01: Physical Automation, ELV & HT/LT Power",
      tech: "11kV/33kV Substations • 4K AI CCTV • Fire Suppression • BMS",
      color: "#0B66C3",
      accent: "border-slate-600/40 bg-slate-900/60",
      status: "STABLE 415V",
      icon: <Zap className="w-4 h-4 text-blue-400" />,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A192F] text-white py-16 lg:py-24 border-b border-slate-800">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 engineering-grid-dark pointer-events-none opacity-60"></div>
      
      {/* Subtle Radial Glows (No rainbow gradients) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0B66C3]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-[#059669]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Executive Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#059669]/15 border border-[#059669]/30 text-[#10b981] text-xs font-mono font-bold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
              <span>ONE COORDINATED PARTNER. TEN CONNECTED VERTICALS.</span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Architecting Intelligent Infrastructure, Power Continuity &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-400">
                Enterprise Digital Ecosystems.
              </span>
            </h1>

            {/* Dynamic Capability Cycler */}
            <div className="flex items-center gap-2.5 py-1 text-sm sm:text-base font-semibold">
              <span className="text-slate-400">Core Expertise:</span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-[#38bdf8] font-mono text-xs sm:text-sm transition-all duration-300 shadow-inner">
                <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
                <span className="animate-fade-in key={activeCapIndex}">
                  {CAPABILITIES[activeCapIndex]}
                </span>
              </div>
            </div>

            {/* Value Subtitle */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Bridging physical engineering and digital intelligence. From HT/LT power distribution and commercial solar EPC to enterprise cloud software, Corevilt delivers single-source turnkey accountability for multi-crore infrastructure projects.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenRfp ? onOpenRfp : () => {
                  const el = document.getElementById("rfp-generator");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else window.location.href = "/contact#rfp-form";
                }}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white font-bold text-sm shadow-lg shadow-blue-900/40 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Request Technical Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 text-slate-200 hover:text-white font-semibold text-sm transition"
              >
                <span>Explore 10 Core Verticals</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">10</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  Connected Verticals
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-[#10b981] font-mono">TURNKEY</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  EPC Execution
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-[#38bdf8] font-mono">TIER-1</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  OEM Alliances
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-white font-mono">24/7</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                  SLA Support
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D / SVG Engineering Schematic */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0F172A] border border-slate-700/80 p-5 shadow-2xl overflow-hidden">
              {/* Header of Schematic */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse"></div>
                  <span className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider">
                    Corevilt Integrated Architecture Topology
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  LIVE INTERCONNECT
                </span>
              </div>

              {/* Stacked Architecture Layers */}
              <div className="space-y-3">
                {schematicLayers.map((layer) => {
                  const isSelected = activeLayer === layer.id;
                  return (
                    <div
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={`cursor-pointer rounded-xl p-3.5 border transition-all duration-200 ${
                        isSelected
                          ? "bg-slate-800/90 border-blue-400 shadow-md ring-1 ring-blue-500/30"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2 text-xs font-bold text-white">
                          {layer.icon}
                          <span>{layer.title}</span>
                        </div>
                        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-950 text-[#10b981] border border-slate-800">
                          {layer.status}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-slate-400 pl-6 leading-relaxed">
                        {layer.tech}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Schematic Diagnostics Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#10b981]" />
                  <span>Substation → Busduct → UPS → Server → Cloud</span>
                </div>
                <span className="text-slate-500">ISO 9001 / CEA Standard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
