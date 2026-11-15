import { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { RfpSection } from "@/components/rfp-section";

export const metadata: Metadata = {
  title: "Contact & Corporate Offices | Corevilt Technologies",
  description:
    "Connect with COREVILT TECHNOLOGIES PVT. LTD. Central engineering headquarters in Delhi NCR and Regional Operations Hub in Bareilly, UP. Click to call +91 90123 23555.",
};

export default function ContactPage() {
  const departmentContacts = [
    {
      dept: "Central Design & Tenders Office",
      purpose: "RFP submissions, BOQ evaluations, Single Line Diagrams, DPR preparation",
      email: "info@corevilt.com",
      phone: COMPANY_INFO.phone,
      hours: "Mon – Sat: 09:00 AM – 07:00 PM IST",
    },
    {
      dept: "24/7 Emergency AMC & Helpdesk",
      purpose: "Critical substation trip escalations, server room outages, priority site dispatch",
      email: "support@corevilt.com",
      phone: COMPANY_INFO.phone,
      hours: "24 Hours / 7 Days / 365 Days",
    },
    {
      dept: "Vendor & OEM Alliances",
      purpose: "Tier-1 hardware distribution, authorized channel partnerships, GeM procurement",
      email: "procurement@corevilt.com",
      phone: COMPANY_INFO.phone,
      hours: "Mon – Fri: 09:30 AM – 06:30 PM IST",
    },
  ];

  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0B66C3] text-xs font-mono font-bold tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>CENTRAL DIRECTORY & SITES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Dual Corporate Operating Locations.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Directly connect with our central engineering teams in Delhi NCR and Western Uttar Pradesh. We welcome scheduled visits, technical audits, and institutional RFP consultations.
          </p>
        </div>

        {/* Dual Operating Locations Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Delhi HQ */}
          <div
            id="delhi-office"
            className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-6 hover:border-[#0B66C3] transition"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-[#0B66C3] border border-blue-200">
                CORPORATE HEADQUARTERS
              </span>
              <span className="text-xs font-mono text-slate-400">DELHI NCR</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">
                {COMPANY_INFO.delhiOffice.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0B66C3] flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.delhiOffice.address}, {COMPANY_INFO.delhiOffice.city} - {COMPANY_INFO.delhiOffice.pincode}, {COMPANY_INFO.delhiOffice.country}
                </span>
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-slate-700 hover:text-[#0B66C3] font-semibold"
              >
                <Phone className="w-4 h-4 text-[#0B66C3]" />
                <span>Central Office: {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-[#0B66C3] font-semibold"
              >
                <Mail className="w-4 h-4 text-[#0284C7]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Mon – Sat: 09:00 AM – 07:00 PM IST</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.delhiOffice.googleMapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B66C3] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/919012323555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>

          {/* Bareilly Hub */}
          <div
            id="bareilly-office"
            className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm space-y-6 hover:border-[#059669] transition"
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-[#059669] border border-emerald-200">
                REGIONAL OPERATIONS HUB
              </span>
              <span className="text-xs font-mono text-slate-400">WESTERN UP</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-slate-900">
                {COMPANY_INFO.bareillyOffice.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#059669] flex-shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.bareillyOffice.address}, {COMPANY_INFO.bareillyOffice.city}, {COMPANY_INFO.bareillyOffice.state} - {COMPANY_INFO.bareillyOffice.pincode}, {COMPANY_INFO.bareillyOffice.country}
                </span>
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-slate-700 hover:text-[#059669] font-semibold"
              >
                <Phone className="w-4 h-4 text-[#059669]" />
                <span>Regional Line: {COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 text-slate-700 hover:text-[#059669] font-semibold"
              >
                <Mail className="w-4 h-4 text-[#0284C7]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Mon – Sat: 09:00 AM – 07:00 PM IST</span>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(COMPANY_INFO.bareillyOffice.googleMapsQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] hover:underline"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://wa.me/919012323555"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#059669] hover:underline"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Dispatch</span>
              </a>
            </div>
          </div>
        </div>

        {/* Department Routing Matrix */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-2xl space-y-1">
            <h3 className="text-xl font-bold text-slate-900">
              Departmental Routing & Directory
            </h3>
            <p className="text-xs text-slate-500">
              Ensure rapid triaging by directing your technical documentation or inquiry to the appropriate engineering division:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departmentContacts.map((dept, i) => (
              <div key={i} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="font-bold text-sm text-slate-900">{dept.dept}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{dept.purpose}</p>
                <div className="pt-2 border-t border-slate-200 text-xs font-mono space-y-1 text-slate-600">
                  <div className="text-[#0B66C3] font-bold">{dept.email}</div>
                  <div className="text-[11px] text-slate-500">{dept.hours}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded RFP Form */}
        <div id="rfp-form" className="pt-8">
          <RfpSection />
        </div>
      </div>
    </div>
  );
}
