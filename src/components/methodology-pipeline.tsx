"use client";

import { useState } from "react";
import {
  FileCheck,
  CheckCircle2,
  Shield,
  ClipboardList,
} from "lucide-react";
import { METHODOLOGY_PHASES, DELIVERY_TRIAD } from "@/lib/constants";

export function MethodologyPipeline() {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = METHODOLOGY_PHASES[activePhaseIndex];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 text-[#059669] text-xs font-mono font-bold tracking-wider">
            <ClipboardList className="w-3.5 h-3.5" />
            <span>DISCIPLINED EXECUTION FRAMEWORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            The 8-Phase Delivery Methodology
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From initial site condition audits to 24/7 post-handover AMC governance, each phase enforces measurable stage-gate deliverables to eliminate configuration friction.
          </p>
        </div>

        {/* Horizontal Stepper / Phase Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
          {METHODOLOGY_PHASES.map((p, index) => {
            const isSelected = activePhaseIndex === index;
            return (
              <button
                key={p.phase}
                onClick={() => setActivePhaseIndex(index)}
                className={`text-left p-3 rounded-xl border transition-all duration-150 ${
                  isSelected
                    ? "bg-[#0A192F] text-white border-blue-500 shadow-lg ring-1 ring-blue-500/20"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? "text-[#38bdf8]" : "text-slate-400"
                    }`}
                  >
                    {p.phase}
                  </span>
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>}
                </div>
                <div className="font-bold text-xs truncate">{p.name}</div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#13233c] text-white p-6 sm:p-8 border border-slate-800 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm px-3 py-1 rounded-md bg-blue-500/20 text-[#38bdf8] font-bold border border-blue-500/30">
                  {activePhase.code}
                </span>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Phase {activePhase.phase} of 08
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activePhase.name}: {activePhase.subtitle}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activePhase.description}
              </p>
            </div>

            <div className="lg:col-span-5 bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-3">
              <div className="text-xs font-mono font-bold text-[#10b981] uppercase tracking-wider flex items-center gap-1.5 pb-2 border-b border-slate-800">
                <FileCheck className="w-4 h-4" />
                <span>Phase Deliverables & Verification</span>
              </div>
              <ul className="space-y-2.5">
                {activePhase.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* The Delivery Assurance Triad Callout */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-mono text-[#0B66C3] uppercase tracking-wider font-bold">
              THE COREVILT GUARANTEE
            </div>
            <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
              The Delivery Assurance Triad
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Three pillars ensuring zero scope drift, complete auditability, and immediate operational readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DELIVERY_TRIAD.map((triad, index) => (
              <div
                key={index}
                className="rounded-2xl bg-[#F8FAFC] p-6 border border-slate-200 space-y-3 hover:border-slate-300 transition"
              >
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="font-mono text-xs font-bold text-[#0B66C3] tracking-wider">
                    {triad.pillar}
                  </span>
                  <Shield className="w-4 h-4 text-[#059669]" />
                </div>
                <h4 className="text-base font-bold text-slate-900">{triad.subtitle}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{triad.description}</p>
                <ul className="space-y-1.5 pt-2 text-[11px] text-slate-600">
                  {triad.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#059669] font-bold">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
