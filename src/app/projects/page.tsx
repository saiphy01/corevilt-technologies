import { Metadata } from "next";
import { ShieldCheck, MapPin } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/constants";
import { RfpSection } from "@/components/rfp-section";

export const metadata: Metadata = {
  title: "Engineering Projects Showcase & Case Studies | Corevilt",
  description:
    "Explore Corevilt's completed turnkey projects: 1.2MW solar plants, 33kV substations, campus data centers, and enterprise ERP deployments.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>VERIFIED CASE STUDIES & ROI</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Institutional Proof: Executed Turnkey Projects.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Examine our track record across commercial solar installations, high-voltage electrical substations, Tier-II server rooms, and distributed cloud software deployments.
          </p>
        </div>

        {/* Detailed Projects List */}
        <div className="space-y-12">
          {FEATURED_PROJECTS.map((proj, idx) => (
            <div
              key={proj.id}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:border-[#0B66C3] transition"
            >
              <div className="p-8 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0B66C3] border border-blue-200">
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      CASE STUDY 0{idx + 1}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-[#059669]" />
                    <span>{proj.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {proj.title}
                  </h2>
                  <div className="text-xs font-semibold text-slate-500">
                    Client Entity: <span className="text-slate-800">{proj.client}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {proj.scope}
                </p>

                {/* Before / After Operational Overhaul */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                      <span>Baseline Challenges (Pre-Engagement)</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {proj.before}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                    <div className="text-xs font-bold text-[#059669] uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                      <span>Corevilt Turnkey Delivery & ROI</span>
                    </div>
                    <p className="text-xs text-slate-800 leading-relaxed font-medium">
                      {proj.after}
                    </p>
                  </div>
                </div>

                {/* Performance Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                  {proj.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                      <div className="text-xl font-black text-slate-900 font-mono">{m.value}</div>
                      <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {proj.tags.map((t, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RFP Section */}
        <div className="pt-8">
          <RfpSection />
        </div>
      </div>
    </div>
  );
}
