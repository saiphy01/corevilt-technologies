import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Wrench, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "AMC Service Level Agreements (SLA) | Corevilt Technologies",
  description: "Comprehensive and Non-Comprehensive AMC SLA commitments, emergency response times, and preventative maintenance schedules.",
};

export default function AmcSlaPage() {
  const slaTiers = [
    {
      name: "Gold Tier (8x5 Business Continuity)",
      coverage: "Monday to Saturday: 08:30 AM to 06:30 PM",
      responseTime: "4 Hours Emergency Response",
      features: [
        "Quarterly scheduled preventative maintenance (PM) visits",
        "Infrared thermography scan for LT distribution panels",
        "Solar PV string performance checks and inverter firmware updates",
        "Fluke network drop recertification for damaged links",
        "Dedicated web portal ticket logging and tracking",
      ],
    },
    {
      name: "Platinum Tier (24x7x365 Mission-Critical)",
      coverage: "Continuous 24 Hours / 7 Days / 365 Days",
      responseTime: "2 Hours Guaranteed On-Site Emergency Dispatch",
      features: [
        "Monthly preventative maintenance and battery discharge audits",
        "Priority spare parts buffer stocked in regional depot",
        "Dedicated Resident Engineer (FTE) option for campus sites",
        "Automated SCADA alerts & continuous remote telemetry monitoring",
        "Root Cause Analysis (RCA) within 24 hours of incident resolution",
      ],
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-mono font-bold">
            <Wrench className="w-3.5 h-3.5" />
            <span>LIFECYCLE CONTINUITY STANDARDS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            AMC Service Level Agreements (SLA)
          </h1>
          <p className="text-sm text-slate-600">
            Committed operational response times and preventative governance for industrial electrical, solar, and enterprise IT infrastructure.
          </p>
        </div>

        {/* SLA Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {slaTiers.map((tier, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-[#059669] transition"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#059669]">
                  SLA LEVEL 0{i + 1}
                </span>
                <h2 className="text-xl font-bold text-slate-900">{tier.name}</h2>
                <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5 pt-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{tier.coverage}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 font-mono">
                ⚡ {tier.responseTime}
              </div>

              <ul className="space-y-2 text-xs text-slate-600">
                {tier.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 24/7 Escalation Hotline */}
        <div className="p-6 rounded-2xl bg-[#0A192F] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-[#10b981] font-bold">
              24/7 EMERGENCY INCIDENT HOTLINE
            </div>
            <div className="text-xl font-bold text-white mt-1">
              Need immediate technical dispatch or escalation?
            </div>
          </div>
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="px-5 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold transition flex-shrink-0"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
