import { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  HeartPulse,
  GraduationCap,
  Building,
  Hotel,
  Truck,
  Home,
  Landmark,
  ArrowRight,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Industry Blueprints & Operational Use Cases | Corevilt",
  description:
    "Tailored turnkey infrastructure, power, and digital systems blueprints for Manufacturing, Healthcare, Education, Corporate, Hospitality, Logistics, Real Estate, and Government.",
};

export default function IndustriesPage() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Factory": return <Factory className="w-6 h-6 text-[#0B66C3]" />;
      case "HeartPulse": return <HeartPulse className="w-6 h-6 text-[#0284C7]" />;
      case "GraduationCap": return <GraduationCap className="w-6 h-6 text-[#059669]" />;
      case "Building": return <Building className="w-6 h-6 text-[#0B66C3]" />;
      case "Hotel": return <Hotel className="w-6 h-6 text-[#0284C7]" />;
      case "Truck": return <Truck className="w-6 h-6 text-[#059669]" />;
      case "Home": return <Home className="w-6 h-6 text-[#0B66C3]" />;
      case "Landmark": return <Landmark className="w-6 h-6 text-[#0284C7]" />;
      default: return <Building className="w-6 h-6 text-[#0B66C3]" />;
    }
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>DOMAIN BLUEPRINTS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Tailored Engineering Blueprints Across 8 Core Sectors.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Every sector possesses distinct operational constraints, statutory compliance requirements, and power load profiles. Explore how Corevilt structures customized physical and digital turnkey blueprints.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-8 shadow-sm hover:border-[#0B66C3] transition flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#059669] font-mono text-xs font-bold border border-emerald-200">
                    {ind.stat}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {ind.name}
                </h2>

                <p className="text-xs sm:text-sm font-semibold text-[#0B66C3]">
                  {ind.tagline}
                </p>

                {/* Challenge vs Solution */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Operational Challenge:</span>
                    <p className="text-slate-600 text-[11px] mt-0.5">{ind.challenges}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100">
                    <span className="font-bold text-[#0B66C3] uppercase tracking-wider text-[10px]">Corevilt Turnkey Blueprint:</span>
                    <p className="text-slate-800 text-[11px] mt-0.5 font-medium">{ind.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#0B66C3] hover:text-[#09529e] flex items-center gap-1"
                >
                  Request Blueprint Consultation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
