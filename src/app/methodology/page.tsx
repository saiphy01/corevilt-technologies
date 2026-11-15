import { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  CheckCircle2,
  FileCheck,
  Shield,
  Layers,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";
import { METHODOLOGY_PHASES, DELIVERY_TRIAD } from "@/lib/constants";

export const metadata: Metadata = {
  title: "8-Phase Turnkey Delivery Framework | Corevilt Methodology",
  description:
    "Explore Corevilt's structured 8-phase turnkey execution methodology and the Delivery Assurance Triad: Documentation, Control, Readiness.",
};

export default function MethodologyPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-mono font-bold tracking-wider">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL EXECUTION FRAMEWORK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            The 8-Phase Delivery Methodology & Assurance Triad.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Multi-crore projects succeed on process discipline. Our 8-phase operational lifecycle enforces strict stage-gate verifications, preventing configuration friction, delays, and budget drift.
          </p>
        </div>

        {/* 8-Phase Vertical Stack with Deliverables */}
        <div className="space-y-6">
          {METHODOLOGY_PHASES.map((p) => (
            <div
              key={p.phase}
              className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:border-[#0B66C3] transition"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm px-2.5 py-0.5 rounded bg-blue-50 text-[#0B66C3] font-bold border border-blue-200">
                      {p.code}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">
                      Stage 0{p.phase}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {p.name}: {p.subtitle}
                  </h2>
                </div>

                <div className="lg:col-span-5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </div>

                <div className="lg:col-span-3 bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5 text-[#059669]" />
                    <span>Key Deliverables:</span>
                  </div>
                  <ul className="space-y-1.5">
                    {p.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3 h-3 text-[#059669] flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Assurance Triad Deep Dive */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#0F172A] text-white p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-[#10b981] font-bold uppercase tracking-wider">
              CORE METRIC GOVERNANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Delivery Assurance Triad
            </h2>
            <p className="text-sm text-slate-300">
              Three unyielding governance standards embedded into every turnkey contract:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DELIVERY_TRIAD.map((triad, index) => (
              <div key={index} className="bg-slate-900/90 p-6 rounded-xl border border-slate-800 space-y-3">
                <div className="font-mono text-xs font-bold text-[#38bdf8] flex items-center justify-between">
                  <span>PILLAR 0{index + 1}: {triad.pillar}</span>
                  <ShieldCheck className="w-4 h-4 text-[#10b981]" />
                </div>
                <h3 className="text-base font-bold text-white">{triad.subtitle}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{triad.description}</p>
                <div className="pt-2 border-t border-slate-800 space-y-1 text-[11px] text-slate-400 font-mono">
                  {triad.points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-[#10b981]">▸</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
