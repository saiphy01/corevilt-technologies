import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Boxes,
  FileText,
} from "lucide-react";
import { CORE_VERTICALS } from "@/lib/constants";
import { RfpSection } from "@/components/rfp-section";

export async function generateStaticParams() {
  return CORE_VERTICALS.map((v) => ({
    slug: v.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vertical = CORE_VERTICALS.find((v) => v.slug === slug);
  if (!vertical) return { title: "Solution Not Found" };

  return {
    title: `${vertical.title} | Corevilt Technologies`,
    description: vertical.description,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vertical = CORE_VERTICALS.find((v) => v.slug === slug);

  if (!vertical) {
    notFound();
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0B66C3] hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO ALL 10 VERTICALS</span>
          </Link>
        </div>

        {/* Hero Section of Sub-Route */}
        <div className="max-w-4xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
            <span>{vertical.category}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
            {vertical.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            {vertical.tagline}
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {vertical.longDescription}
          </p>
        </div>

        {/* Technical Specs Metric Strip (JetBrains Mono Accents) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#0F172A] text-white border border-slate-800 shadow-xl">
          {vertical.specMetrics.map((spec, i) => (
            <div key={i} className="space-y-1">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                {spec.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#38bdf8]">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Grid: Key Capabilities & Equipment Tiers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Capabilities */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Cpu className="w-5 h-5 text-[#0B66C3]" />
              <h2 className="text-xl font-bold text-slate-900">
                Key Engineering Capabilities
              </h2>
            </div>
            <ul className="space-y-3">
              {vertical.keyCapabilities.map((cap, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment Tiers & Standards */}
          <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <Boxes className="w-5 h-5 text-[#0284C7]" />
              <h2 className="text-xl font-bold text-slate-900">
                Tier-1 Equipment & Frameworks
              </h2>
            </div>
            <ul className="space-y-3">
              {vertical.equipmentTiers.map((tier, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0B66C3] flex-shrink-0 mt-2"></span>
                  <span className="leading-relaxed font-mono-spec">{tier}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Concrete Deliverables & Handover Assurance */}
        <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-8 space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
            <FileText className="w-5 h-5 text-[#059669]" />
            <h2 className="text-xl font-bold text-slate-900">
              Contractual Engineering Deliverables
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vertical.deliverables.map((del, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-slate-800 font-medium leading-relaxed">
                  {del}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded RFP Section for Immediate Conversion */}
      <div className="mt-16">
        <RfpSection />
      </div>
    </div>
  );
}
