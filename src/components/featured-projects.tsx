import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Building,
  Zap,
  Server,
  Layers,
} from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/constants";

export function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>VERIFIED INSTITUTIONAL PROOF</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Featured Engineering & Infrastructure Overhauls
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Real-world multi-crore physical and digital engineering projects executed with single-partner accountability, measurable ROI, and zero operational downtime.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0B66C3] hover:text-[#09529e] transition flex-shrink-0"
          >
            <span>View All Engineering Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden hover:border-[#0B66C3] shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-blue-50 text-[#0B66C3] font-bold border border-blue-200">
                    {proj.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{proj.location}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {proj.title}
                </h3>

                <div className="text-xs font-semibold text-slate-500">
                  Client: <span className="text-slate-800">{proj.client}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {proj.scope}
                </p>

                {/* Before / After Box */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs space-y-2">
                  <div>
                    <span className="font-bold text-slate-500 uppercase tracking-wider text-[10px]">Previous State:</span>
                    <p className="text-slate-600 text-[11px] mt-0.5">{proj.before}</p>
                  </div>
                  <div className="pt-1.5 border-t border-slate-100">
                    <span className="font-bold text-[#059669] uppercase tracking-wider text-[10px]">Turnkey Delivery:</span>
                    <p className="text-slate-800 font-medium text-[11px] mt-0.5">{proj.after}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="bg-white p-2.5 rounded-lg border border-slate-200 text-center">
                      <div className="text-sm font-black text-slate-900 font-mono">{m.value}</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-100/60 border-t border-slate-200 flex flex-wrap gap-1.5">
                {proj.tags.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
