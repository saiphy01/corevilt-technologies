import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Health, Safety & Environment (HSE) Policy | Corevilt Technologies",
  description:
    "Corevilt's Health, Safety, and Environment (HSE) protocols, Lockout/Tagout (LOTO), electrical arc-flash safety, and zero-accident mandate.",
};

export default function HsePolicyPage() {
  const safetyProtocols = [
    {
      title: "Lockout / Tagout (LOTO) Compliance",
      desc: "Mandatory zero-energy state verification prior to any physical work on HT/LT distribution panels, busducts, or 11kV/33kV substations.",
    },
    {
      title: "Arc-Flash & Calibrated PPE Gear",
      desc: "All on-site electrical engineers are equipped with arc-rated suits, insulated safety footwear, Class 4 composite gloves, and insulated 1000V tools.",
    },
    {
      title: "Rooftop Solar Fall Protection",
      desc: "Lifelines, harness tie-offs, safety perimeter netting, and structural load assessments prior to stepping on industrial factory roofs.",
    },
    {
      title: "Clean Agent & Fire Safety Standards",
      desc: "FM-200 and Novec 1230 gas flooding system protocols, evacuation drill sign-offs, and environmental venting verifications.",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0B66C3] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN HOME</span>
          </Link>
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-mono font-bold">
            <HardHat className="w-3.5 h-3.5" />
            <span>ZERO-ACCIDENT OCCUPATIONAL VISION</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Health, Safety & Environment (HSE) Policy
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Safety is non-negotiable. At COREVILT TECHNOLOGIES PVT. LTD., safeguarding our site personnel, contractor teams, and client environments takes precedence over execution speed.
          </p>
        </div>

        {/* Safety Protocols Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyProtocols.map((sp, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <h3 className="font-bold text-slate-900 text-sm">{sp.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{sp.desc}</p>
            </div>
          ))}
        </div>

        {/* Environmental Mandate */}
        <div className="p-8 rounded-2xl bg-[#0A192F] text-white border border-slate-800 space-y-4">
          <div className="text-xs font-mono text-[#10b981] font-bold uppercase tracking-wider">
            ENVIRONMENTAL STEWARDSHIP & E-WASTE PROTOCOLS
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            All decommissioned electrical equipment, transformer oil, lead-acid or lithium-ion batteries, and copper scrap are consigned exclusively to authorized, government-licensed recycling facilities compliant with Central Pollution Control Board (CPCB) directives.
          </p>
          <div className="text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
            Compliant with Indian Electricity Rules (CEA) & CPCB E-Waste Directives
          </div>
        </div>
      </div>
    </div>
  );
}
