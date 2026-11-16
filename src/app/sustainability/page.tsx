import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, SunMedium, Leaf, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sustainability & Corporate Social Responsibility | Corevilt",
  description:
    "Corevilt's clean energy continuity mission, industrial solar decarbonization, carbon offset milestones, and community engineering training.",
};

export default function SustainabilityPage() {
  const impactMetrics = [
    { value: "18.5 GWh", label: "Clean Solar Energy Generated Annually" },
    { value: "15,200 Tons", label: "Annual CO2 Emissions Abated" },
    { value: "98.4%", label: "Recyclability of Solar PV & Metal Structures" },
    { value: "450+ Youths", label: "Trained in Electrical & Solar Installation" },
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
            <Leaf className="w-3.5 h-3.5" />
            <span>ENVIRONMENTAL, SOCIAL & GOVERNANCE (ESG)</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Sustainability & A Brighter Tomorrow
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our corporate motto—<em>&quot;People | Technology | Sustainability | A Brighter Tomorrow&quot;</em>—is not marketing rhetoric; it is our fundamental operational ethos. Through high-efficiency rooftop solar EPC, power factor correction, and precision engineering, Corevilt accelerates industrial decarbonization across India.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0A192F] text-white border border-slate-800">
          {impactMetrics.map((m, i) => (
            <div key={i} className="text-center space-y-1">
              <div className="text-xl sm:text-2xl font-black font-mono text-[#10b981]">{m.value}</div>
              <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Key Programs */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Flagship Sustainability Initiatives</h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <SunMedium className="w-4 h-4 text-[#059669]" />
                Zero-Carbon Industrial Manufacturing Transition
              </h3>
              <p className="text-slate-600 text-xs">
                We partner with energy-intensive steel, automotive, and textile plants to replace expensive diesel generator power with commercial rooftop solar installations backed by industrial UPS systems and battery energy storage (BESS).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#0B66C3]" />
                Harmonic Pollution Mitigation
              </h3>
              <p className="text-slate-600 text-xs">
                Non-linear industrial loads pollute public electrical grids. Our APFC panels with tuned detuned reactors eliminate harmonic distortions, extending transformer lifespans and preventing transmission line energy waste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
