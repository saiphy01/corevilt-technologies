import {
  Laptop,
  Gauge,
  ShieldAlert,
  Terminal,
  Activity,
} from "lucide-react";
import { QA_FRAMEWORK_STEPS } from "@/lib/constants";

export function QAEngineSection() {
  const testingCapabilities = [
    {
      title: "Automated Regression Suites",
      desc: "End-to-end Cypress & Playwright integration suites executing across every git pull request.",
      icon: <Terminal className="w-4 h-4 text-[#0B66C3]" />,
    },
    {
      title: "Cross-Browser & Multi-Device Matrices",
      desc: "Pixel-perfect visual and interaction validation across Chromium, Safari, Firefox, iOS, and Android.",
      icon: <Laptop className="w-4 h-4 text-[#0284C7]" />,
    },
    {
      title: "Performance & Stress Benchmarking",
      desc: "k6 load testing simulating 10,000+ concurrent requests to certify sub-100ms API response under load.",
      icon: <Gauge className="w-4 h-4 text-[#059669]" />,
    },
    {
      title: "Security & Penetration Audits",
      desc: "OWASP Top-10 automated vulnerability scanning, SQL injection barriers, and JWT token rotation.",
      icon: <ShieldAlert className="w-4 h-4 text-[#0B66C3]" />,
    },
  ];

  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
            <Activity className="w-3.5 h-3.5" />
            <span>SPECIALIST CAPABILITY: QUALITY ASSURANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            The 4-Step Software QA & Testing Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Enterprise software requires institutional resilience. Our structured testing pipeline ensures zero regressions reach production.
          </p>
        </div>

        {/* 4-Step Horizontal Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {QA_FRAMEWORK_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#0B66C3] transition"
            >
              <div className="absolute top-3 right-4 font-mono text-4xl font-black text-slate-100 group-hover:text-blue-50 transition">
                {step.step}
              </div>
              <div className="relative z-10 space-y-2">
                <span className="font-mono text-xs font-bold text-[#0B66C3] uppercase tracking-wider">
                  Phase {step.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{step.name}: {step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed pt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testing Capabilities Grid */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-6">
            ENTERPRISE VALIDATION MODULES
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingCapabilities.map((cap, i) => (
              <div key={i} className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200">
                  {cap.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900">{cap.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
