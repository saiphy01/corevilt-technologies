import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Corporate Quality Policy | Corevilt Technologies",
  description:
    "Corevilt's Institutional Quality Policy, CPRI panel type-testing, Fluke calibration, FAT/SAT inspection standards, and comprehensive quality assurance standards.",
};

export default function QualityPolicyPage() {
  const qualityPillars = [
    {
      title: "CPRI Type-Tested Switchgear & Panels",
      desc: "All high-voltage and low-voltage distribution panels, motor control centers (MCC), and APFC banks are fabricated and tested in certified facilities meeting CPRI standards.",
    },
    {
      title: "Calibrated Field Diagnostic Instruments",
      desc: "Fluke DSX-5000 / DTX-1800 cable analyzers, Hi-Pot testers, and Class-A power quality analyzers are calibrated annually with traceable NABL laboratory certificates.",
    },
    {
      title: "Stage-Gate Factory & Site Acceptance (FAT/SAT)",
      desc: "Strict pre-dispatch factory acceptance testing (FAT) witnessed by client engineers, followed by rigorous on-site commissioning and SAT sign-off.",
    },
    {
      title: "Defect Elimination & Continuous Improvement",
      desc: "Systematic root cause analysis (RCA) on all warranty or service interventions, feeding directly into engineering design improvements.",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-mono font-bold">
            <Award className="w-3.5 h-3.5" />
            <span>INSTITUTIONAL QUALITY ASSURANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Corporate Quality Policy & Standards
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            COREVILT TECHNOLOGIES PVT. LTD. operates under an uncompromising Quality Management System (QMS) ensuring institutional reliability across physical electrical contracting, solar EPC, and software engineering.
          </p>
        </div>

        {/* Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualityPillars.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                <h3 className="font-bold text-slate-900 text-sm">{p.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Executive Statement */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#0F172A] text-white border border-slate-800 space-y-4">
          <div className="text-xs font-mono text-[#38bdf8] font-bold uppercase tracking-wider">
            EXECUTIVE QUALITY COMMITMENT
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
            &quot;Our mandate is simple: zero operational downtime resulting from workmanship or component failure. Every single line diagram, solar string layout, and software microservice delivered by Corevilt must meet or exceed applicable Indian and international engineering standards.&quot;
          </p>
          <div className="pt-2 border-t border-slate-800 text-xs font-mono text-slate-400">
            Director of Engineering & Quality Control • {COMPANY_INFO.name}
          </div>
        </div>
      </div>
    </div>
  );
}
