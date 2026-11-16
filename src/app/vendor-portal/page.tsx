import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Boxes, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Vendor & OEM Partner Portal | Corevilt Technologies",
  description:
    "Join Corevilt's Tier-1 procurement ecosystem. OEM partner registration, supplier code of conduct, and GeM tender fulfillment.",
};

export default function VendorPortalPage() {
  const procurementCategories = [
    "HT/LT Switchgear, Air Circuit Breakers & VCBs (ABB, Schneider, Siemens, L&T)",
    "Armoured HT/LT Cables & Busduct Systems (Polycab, Havells, Finolex)",
    "Tier-1 Solar PV Modules & String Inverters (Waaree, Adani, Sungrow, SolarEdge)",
    "Industrial Online UPS & BESS Battery Banks (Vertiv, APC, Exide, Amaron)",
    "Enterprise Servers, Hypervisors & Switches (Dell, HPE, Cisco, Aruba)",
    "Surveillance, Biometrics & Life Safety (Hikvision, Honeywell, Bosch, HID)",
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold">
            <Boxes className="w-3.5 h-3.5" />
            <span>SUPPLY CHAIN & OEM ALLIANCES</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Vendor & OEM Partner Portal
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            COREVILT TECHNOLOGIES PVT. LTD. maintains direct relationships with the world&apos;s leading manufacturers of electrical switchgear, solar hardware, enterprise computing, and ELV security equipment.
          </p>
        </div>

        {/* Categories */}
        <div className="bg-white p-7 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Active Procurement Categories
          </h2>
          <ul className="space-y-2.5">
            {procurementCategories.map((cat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#0B66C3] flex-shrink-0 mt-0.5" />
                <span>{cat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Vendor Registration CTA */}
        <div className="p-8 rounded-2xl bg-[#0A192F] text-white border border-slate-800 space-y-4">
          <div className="text-xs font-mono text-[#10b981] font-bold uppercase tracking-wider">
            BECOME AN APPROVED COREVILT OEM SUPPLIER
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            To register your product line for project-specific special pricing (OIP) or to submit Manufacturer Authorization Forms (MAFs), contact our procurement desk directly:
          </p>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
            <div>• Procurement Desk: procurement@corevilt.com</div>
            <div>• Central Office Line: {COMPANY_INFO.phone}</div>
            <div>• Warehousing Hubs: Okhla Industrial Area (Delhi NCR) & Bareilly Hub (UP)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
