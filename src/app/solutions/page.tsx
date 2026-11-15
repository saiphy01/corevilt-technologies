import { Metadata } from "next";
import Link from "next/link";
import {
  Code2,
  Server,
  Cpu,
  Zap,
  Shield,
  SunMedium,
  Building2,
  Boxes,
  Wrench,
  Compass,
  ArrowRight,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { CORE_VERTICALS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "10 Core Turnkey Verticals | Solutions Gateway",
  description:
    "Explore Corevilt's 10 integrated turnkey engineering verticals across Digital Systems, Electrical EPC, and Physical Infrastructure.",
};

export default function SolutionsGatewayPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return <Code2 className="w-5 h-5 text-[#0B66C3]" />;
      case "Server": return <Server className="w-5 h-5 text-[#0284C7]" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-[#0B66C3]" />;
      case "Zap": return <Zap className="w-5 h-5 text-[#0B66C3]" />;
      case "ShieldAlert": return <Shield className="w-5 h-5 text-[#0284C7]" />;
      case "SunMedium": return <SunMedium className="w-5 h-5 text-[#059669]" />;
      case "Building2": return <Building2 className="w-5 h-5 text-[#0B66C3]" />;
      case "Boxes": return <Boxes className="w-5 h-5 text-[#0284C7]" />;
      case "Wrench": return <Wrench className="w-5 h-5 text-[#059669]" />;
      case "Compass": return <Compass className="w-5 h-5 text-[#0B66C3]" />;
      default: return <Layers className="w-5 h-5 text-[#0B66C3]" />;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>TURNKEY CAPABILITIES GATEWAY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            10 Connected Turnkey Engineering Verticals.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            From high-voltage switchgear erection and solar rooftop EPC to enterprise software architectures, Corevilt provides deep domain execution across all 10 essential infrastructure disciplines.
          </p>
        </div>

        {/* 10 Detailed Vertical Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORE_VERTICALS.map((v, i) => (
            <div
              key={v.id}
              className="rounded-2xl bg-white border border-slate-200 hover:border-[#0B66C3] p-7 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-200">
                      {getIcon(v.iconName)}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold">
                      {v.category}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    VERTICAL 0{i + 1}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900 leading-tight">
                  {v.title}
                </h2>

                <p className="text-xs text-[#0B66C3] font-semibold">
                  {v.tagline}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {v.description}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    Core Engineering Highlights:
                  </div>
                  {v.keyCapabilities.slice(0, 3).map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics + Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="text-[11px] font-mono text-slate-500">
                  {v.specMetrics[0].label}: <strong className="text-slate-800">{v.specMetrics[0].value}</strong>
                </div>

                <Link
                  href={`/solutions/${v.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-900 hover:bg-[#0B66C3] text-white text-xs font-bold transition"
                >
                  <span>View Full Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
