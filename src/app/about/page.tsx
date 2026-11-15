import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Building2,
  Target,
  Award,
  ArrowRight,
  Zap,
  Cpu,
  Layers,
  Sparkles,
  MapPin,
} from "lucide-react";
import { COMPANY_INFO, DELIVERY_TRIAD } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Corevilt Technologies | Corporate Leadership & Turnkey Model",
  description:
    "Learn about COREVILT TECHNOLOGIES PVT. LTD. - our corporate direction, Vision, Mission, Values, leadership, and single-partner turnkey accountability model.",
};

export default function AboutPage() {
  const corporateValues = [
    {
      name: "Integrity",
      desc: "Transparent engineering BOQs, verified tier-1 equipment authenticity, and zero hidden commercial escalation.",
      icon: <ShieldCheck className="w-5 h-5 text-[#0B66C3]" />,
    },
    {
      name: "Quality",
      desc: "CPRI-certified switchgear, Fluke certified network drops, and strict adherence to IS, CEA, and NFPA safety codes.",
      icon: <Award className="w-5 h-5 text-[#059669]" />,
    },
    {
      name: "Accountability",
      desc: "Single-source turnkey ownership. We bridge physical civil/electrical works and digital systems under one accountable team.",
      icon: <Target className="w-5 h-5 text-[#0284C7]" />,
    },
    {
      name: "Innovation",
      desc: "Modernizing traditional infrastructure with AI analytics, real-time SCADA telemetry, and cloud-native software platforms.",
      icon: <Sparkles className="w-5 h-5 text-[#0B66C3]" />,
    },
  ];

  const leadershipPrinciples = [
    {
      title: "Single-Source Turnkey Accountability",
      desc: "In multi-crore infrastructure projects, the greatest risk is blame-shifting between electrical contractors, solar installers, IT vendors, and software houses. Corevilt eliminates this fragmentation by executing all layers under one consolidated engineering contract.",
    },
    {
      title: "Industrial & Government Readiness",
      desc: "With ISO 9001:2015 certification, GeM compliance, and central engineering hubs in Delhi NCR and Bareilly, our teams are structured to execute government tenders and corporate turnkey overhauls seamlessly.",
    },
    {
      title: "Lifecycle Support Beyond Handover",
      desc: "An infrastructure project does not end at commission. Our dedicated 24/7 AMC and lifecycle operations team ensures continuous preventative maintenance, emergency response within 2 hours, and guaranteed uptime SLAs.",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>CORPORATE PROFILE & GOVERNANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Single-Partner Turnkey Accountability for Enterprise Infrastructure.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            <strong className="text-slate-900">{COMPANY_INFO.name}</strong> was founded to bridge the critical gap between heavy physical engineering (HT/LT substations, solar plants, ELV systems) and enterprise digital intelligence (ERP/CRM platforms, AI workflow automation).
          </p>
        </div>

        {/* Vision & Mission Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-[#0A192F] text-white p-8 border border-slate-800 space-y-4 relative overflow-hidden shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-[#38bdf8] flex items-center justify-center border border-blue-500/30">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-[#38bdf8] font-bold uppercase tracking-wider block">
              OUR VISION
            </span>
            <h2 className="text-2xl font-bold text-white">
              To be the trusted single-source infrastructure & technology partner across India.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To empower industrial enterprises, institutions, and government bodies with intelligent, secure, connected, and sustainable engineering solutions that drive long-term resilience and operational excellence.
            </p>
          </div>

          <div className="rounded-2xl bg-[#0F172A] text-white p-8 border border-slate-800 space-y-4 relative overflow-hidden shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-[#10b981] flex items-center justify-center border border-emerald-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono text-[#10b981] font-bold uppercase tracking-wider block">
              OUR MISSION
            </span>
            <h2 className="text-2xl font-bold text-white">
              Engineering seamless physical continuity and digital transformation.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              We execute multi-disciplinary engineering projects with transparent BOQs, rigorous stage-gate delivery, certified tier-1 OEM hardware, and persistent 24/7 lifecycle maintenance support.
            </p>
          </div>
        </div>

        {/* Core Corporate Values */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#0B66C3] font-bold">
              OUR GUIDING PRINCIPLES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Corporate Values
            </h2>
            <p className="text-sm text-slate-600">
              Every proposal, single line diagram, cable pull, and line of code adheres to our 4 foundational pillars:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateValues.map((v, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* The Turnkey Model Advantage */}
        <div className="rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#13233c] text-white p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-[#10b981] font-bold uppercase tracking-wider">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Single-Partner Turnkey Model
            </h2>
            <p className="text-sm text-slate-300">
              Why leading organizations choose Corevilt over fragmented sub-contracting models:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {leadershipPrinciples.map((lp, i) => (
              <div key={i} className="bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-3">
                <div className="font-mono text-xs font-bold text-[#38bdf8]">
                  PRINCIPLE 0{i + 1}
                </div>
                <h3 className="text-base font-bold text-white">{lp.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{lp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Registration & Offices */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Corporate Registration & Standards
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fully registered corporate entity compliant with Indian company law and statutory industrial standards.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-50 text-[#059669] text-xs font-mono font-bold border border-emerald-200">
                {COMPANY_INFO.registration.iso}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-slate-400 text-[10px]">CORPORATE ID (CIN)</div>
              <div className="font-bold text-slate-800 mt-0.5">{COMPANY_INFO.registration.cin}</div>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-slate-400 text-[10px]">QUALITY & STATUTORY AUDIT</div>
              <div className="font-bold text-slate-800 mt-0.5">{COMPANY_INFO.registration.iso}</div>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <div className="text-slate-400 text-[10px]">EMERGENCY HOTLINE / DISPATCH</div>
              <div className="font-bold text-[#0B66C3] mt-0.5">{COMPANY_INFO.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
