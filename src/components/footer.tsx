"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  Award,
} from "lucide-react";
import { COMPANY_INFO, CORE_VERTICALS } from "@/lib/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* Top Banner: Corporate Positioning */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-800/80">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#10b981] bg-[#059669]/15 px-3 py-1 rounded-full border border-[#059669]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
              SINGLE-PARTNER TURNKEY ACCOUNTABILITY
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to Engineer Your Infrastructure or Digital Ecosystem?
            </h3>
            <p className="text-sm text-slate-400 max-w-2xl">
              From HT/LT substations and solar power plants to enterprise cloud platforms and ELV command centers, Corevilt delivers single-source execution without multi-vendor friction.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-3 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] text-white text-xs font-bold transition shadow-lg inline-flex items-center gap-2"
            >
              <span>Submit Technical BOQ / RFP</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919012323555"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-bold transition shadow-lg inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid: Info, Verticals, Multi-Office Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand & Identity Column */}
        <div className="lg:col-span-4 space-y-5">
          <Link href="/" className="inline-block bg-white p-3 rounded-xl shadow-md">
            <Image
              src="/logo.png"
              alt="COREVILT Technologies"
              width={160}
              height={48}
              className="object-contain"
            />
          </Link>

          <p className="text-xs text-slate-400 leading-relaxed">
            <strong className="text-white">{COMPANY_INFO.name}</strong> is a premier turnkey technology and physical infrastructure contractor. We bridge industrial power engineering, commercial solar EPC, physical security, and scalable software ecosystems.
          </p>

          <div className="space-y-1.5 text-xs font-mono text-slate-400">
            <div className="text-[#38bdf8] font-bold">TAGLINE: &quot;{COMPANY_INFO.tagline}&quot;</div>
            <div className="text-slate-500">MOTTO: {COMPANY_INFO.motto}</div>
          </div>

          {/* Compliance & Registration Strip */}
          <div className="pt-2 border-t border-slate-800 space-y-1.5 text-[11px] font-mono text-slate-400">
            <div><span className="text-slate-500">CIN:</span> {COMPANY_INFO.registration.cin}</div>
            <div><span className="text-slate-500">GSTIN:</span> {COMPANY_INFO.registration.gstin}</div>
            <div><span className="text-slate-500">MSME:</span> {COMPANY_INFO.registration.msme}</div>
            <div className="text-[#10b981] flex items-center gap-1 mt-1">
              <Award className="w-3.5 h-3.5" />
              <span>{COMPANY_INFO.registration.iso}</span>
            </div>
          </div>
        </div>

        {/* 10 Verticals Index */}
        <div className="lg:col-span-4 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] font-bold pb-1 border-b border-slate-800">
            10 Connected Verticals
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
            {CORE_VERTICALS.map((v) => (
              <li key={v.id}>
                <Link
                  href={`/solutions/${v.slug}`}
                  className="text-slate-400 hover:text-white transition flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-[#0B66C3]"></span>
                  <span className="line-clamp-1">{v.shortTitle}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t border-slate-800">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              Corporate Governance
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
              <Link href="/about" className="hover:text-white transition">About Us</Link>
              <Link href="/methodology" className="hover:text-white transition">8-Phase Methodology</Link>
              <Link href="/industries" className="hover:text-white transition">Industries</Link>
              <Link href="/projects" className="hover:text-white transition">Project Showcase</Link>
              <Link href="/contact" className="hover:text-white transition">Dual Office Directory</Link>
            </div>
          </div>
        </div>

        {/* Dual Office Directory (Side-by-Side Corporate Locations) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#10b981] font-bold pb-1 border-b border-slate-800">
            Dual Corporate Directory
          </div>

          {/* Delhi HQ */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <MapPin className="w-3.5 h-3.5 text-[#0B66C3]" />
              <span>{COMPANY_INFO.delhiOffice.title}</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {COMPANY_INFO.delhiOffice.address}, {COMPANY_INFO.delhiOffice.city} - {COMPANY_INFO.delhiOffice.pincode}, {COMPANY_INFO.delhiOffice.country}
            </p>
          </div>

          {/* Bareilly Hub */}
          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <MapPin className="w-3.5 h-3.5 text-[#059669]" />
              <span>{COMPANY_INFO.bareillyOffice.title}</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              {COMPANY_INFO.bareillyOffice.address}, {COMPANY_INFO.bareillyOffice.city}, {COMPANY_INFO.bareillyOffice.state} - {COMPANY_INFO.bareillyOffice.pincode}, {COMPANY_INFO.bareillyOffice.country}
            </p>
          </div>

          {/* Direct Telecom */}
          <div className="pt-2 space-y-2 text-xs">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B66C3]" />
              <span>Central Office: {COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>General Inquiries: {COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {currentYear} {COMPANY_INFO.name} All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy-policy" className="hover:text-slate-400 transition">
            Privacy Policy
          </Link>
          <Link href="/terms-of-engagement" className="hover:text-slate-400 transition">
            Terms of Engagement
          </Link>
          <Link href="/amc-sla" className="hover:text-slate-400 transition">
            AMC Service Level Agreements (SLA)
          </Link>
        </div>
      </div>
    </footer>
  );
}
