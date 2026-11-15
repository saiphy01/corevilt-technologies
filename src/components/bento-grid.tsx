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
  CheckCircle2,
  Activity,
  Layers,
} from "lucide-react";
import { CORE_VERTICALS } from "@/lib/constants";

export function BentoGrid() {
  return (
    <section id="solutions" className="py-20 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>CORE CAPABILITIES INDEX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            The 10 Connected Turnkey Verticals
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Eliminate multi-contractor friction. Corevilt integrates heavy electrical switchgear, commercial solar EPC, low-voltage life safety, and enterprise software engineering into a single accountable delivery contract.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Spotlight 1: Electrical Turnkey & Solar EPC (Power & Sustainability) - 6 cols */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#0F172A] text-white p-7 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#059669]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#059669]/20 text-[#10b981] font-mono text-xs font-bold border border-[#059669]/40 flex items-center gap-1.5">
                  <Zap className="w-3 h-3" />
                  <span>SPOTLIGHT: POWER CONTINUITY & EPC</span>
                </span>
                <span className="text-xs font-mono text-slate-400">CEA & CPRI STANDARDS</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                HT/LT Electrical Distribution & Commercial Solar EPC
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comprehensive 11kV/33kV substations, CPRI-certified LT distribution switchgear, transformer erection, and turnkey commercial rooftop solar power plants (50 kW to 5+ MW) with state DISCOM net-metering.
              </p>

              {/* Equipment & Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-[#10b981] flex items-center gap-1">
                    <SunMedium className="w-3.5 h-3.5" /> Solar EPC Systems
                  </div>
                  <p className="text-slate-400 text-[11px]">Waaree/Sungrow TOPCon Bifacial arrays with 25-yr PR warranty.</p>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-[#38bdf8] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5" /> 11kV/33kV Substations
                  </div>
                  <p className="text-slate-400 text-[11px]">ABB/Schneider VCB, PCC, MCC panels & chemical earthing grids.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                <span>Full CEA Clearance & CEIG Liaison</span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/solutions/electrical-turnkey"
                  className="text-xs font-bold text-[#38bdf8] hover:text-white transition flex items-center gap-1"
                >
                  Electrical Specs <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/solutions/solar-energy"
                  className="text-xs font-bold text-[#10b981] hover:text-white transition flex items-center gap-1"
                >
                  Solar Specs <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Enterprise Software & AI Automation (Digital Intelligence) - 6 cols */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-[#0A192F] to-[#13233c] text-white p-7 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B66C3]/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#0B66C3]/20 text-[#38bdf8] font-mono text-xs font-bold border border-[#0B66C3]/40 flex items-center gap-1.5">
                  <Cpu className="w-3 h-3" />
                  <span>SPOTLIGHT: DIGITAL INTELLIGENCE & AI</span>
                </span>
                <span className="text-xs font-mono text-slate-400">ENTERPRISE CLOUD</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Enterprise Software, ERP/CRM & AI Workflow Automation
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Mission-critical cloud software engineered with Next.js microservices, distributed PostgreSQL databases, cognitive document OCR pipelines, and deterministic RPA bots tailored to proprietary corporate processes.
              </p>

              {/* Equipment & Capabilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-blue-400 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" /> Custom ERP & CRM
                  </div>
                  <p className="text-slate-400 text-[11px]">Multi-branch real-time sync, role-based publishing & zero-trust APIs.</p>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-xs space-y-1">
                  <div className="font-bold text-cyan-400 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" /> OCR & Cognitive Bots
                  </div>
                  <p className="text-slate-400 text-[11px]">98.8% accuracy invoice extraction & automated business pipelines.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-[#38bdf8]"></span>
                <span>SOC 2 & 99.95% Availability SLA</span>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/solutions/software-digital"
                  className="text-xs font-bold text-[#38bdf8] hover:text-white transition flex items-center gap-1"
                >
                  Software Specs <ArrowRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/solutions/ai-automation"
                  className="text-xs font-bold text-blue-400 hover:text-white transition flex items-center gap-1"
                >
                  AI Specs <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* Mid Card 1: IT Infrastructure & Servers - 4 cols */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-6 border border-slate-200 hover:border-[#0B66C3] shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B66C3] flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                IT Infrastructure & Hyperconvergence
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dell/HPE server clusters, VMware hypervisors, 10G/40G structured optical fiber backbones, and Fortinet Next-Gen firewalls.
              </p>
              <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1">
                <div>• Fluke DTX-1800 certified drops</div>
                <div>• Zero-loss automated snapshot replication</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">TIA/EIA-568-D</span>
              <Link
                href="/solutions/it-infrastructure"
                className="text-xs font-bold text-[#0B66C3] hover:underline flex items-center gap-1"
              >
                View Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Mid Card 2: ELV Systems & CCTV - 4 cols */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-6 border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                ELV Security, CCTV & Life Safety
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                4K AI IP video surveillance, biometric turnstile gateways, NFPA addressable fire detection with voice evacuation, and central BMS.
              </p>
              <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1">
                <div>• Perimeter AI video analytics & ANPR</div>
                <div>• 30-90 day RAID-6 retention arrays</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">NFPA 72 Standard</span>
              <Link
                href="/solutions/elv-security"
                className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1"
              >
                View Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Mid Card 3: Command & Control Centers - 4 cols */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-6 border border-slate-200 hover:border-[#0B66C3] shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B66C3] flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Integrated Command Centers & Server Rooms
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Turnkey video display walls, modular 24/7 operator consoles, anti-static raised flooring, and FM-200 clean agent fire flooding.
              </p>
              <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1">
                <div>• Precision Air Conditioning (PAC)</div>
                <div>• Highway toll plaza lane technology</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Tier-II/III Ready</span>
              <Link
                href="/solutions/turnkey-infrastructure"
                className="text-xs font-bold text-[#0B66C3] hover:underline flex items-center gap-1"
              >
                View Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Mid Card 4: Hardware Trading & Procurement - 4 cols */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-6 border border-slate-200 hover:border-[#0284C7] shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center">
                <Boxes className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Hardware Procurement & Tier-1 Supply
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct OEM authorized procurement of servers, optical switches, solar balance of system, and switchgear with authentic MAFs.
              </p>
              <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1">
                <div>• Pre-shipment serial number audit</div>
                <div>• GeM compliant government fulfillment</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">100% Genuine OEM</span>
              <Link
                href="/solutions/trading-distribution"
                className="text-xs font-bold text-[#0284C7] hover:underline flex items-center gap-1"
              >
                View Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Mid Card 5: AMC Lifecycle Governance - 4 cols */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-6 border border-slate-200 hover:border-[#059669] shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                24/7 AMC & Lifecycle Management
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive (CMC) and non-comprehensive contracts covering electrical substations, solar arrays, and IT server clusters.
              </p>
              <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1">
                <div>• 2-Hour guaranteed emergency response</div>
                <div>• Quarterly thermographic scan audits</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Gold & Platinum SLAs</span>
              <Link
                href="/solutions/amc-lifecycle"
                className="text-xs font-bold text-[#059669] hover:underline flex items-center gap-1"
              >
                View Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Mid Card 6: Consulting & Audits - 4 cols */}
          <div className="lg:col-span-4 rounded-2xl bg-white p-6 border border-slate-200 hover:border-[#0B66C3] shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B66C3] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Technology Consulting & Audits
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Detailed Project Reports (DPR), industrial power quality audits, energy efficiency optimization, and cloud architecture reviews.
              </p>
              <div className="text-[11px] font-mono text-slate-500 space-y-1 pt-1">
                <div>• Fluke 435 Class A power logging</div>
                <div>• Vendor neutral technical verification</div>
              </div>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Class A Instruments</span>
              <Link
                href="/solutions/consulting-innovation"
                className="text-xs font-bold text-[#0B66C3] hover:underline flex items-center gap-1"
              >
                View Specs <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
