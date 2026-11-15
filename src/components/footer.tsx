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
  Shield,
  FileText,
  Zap,
  Cpu,
  HeartHandshake,
} from "lucide-react";
import { COMPANY_INFO, CORE_VERTICALS } from "@/lib/constants";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      {/* Top Banner: Corporate Action Strip */}
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
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              From HT/LT substations and solar power plants to enterprise cloud platforms and ELV command centers, Corevilt delivers single-source execution without multi-vendor friction.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact#rfp-form"
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

      {/* Main Grid: Brand, Verticals, Governance, Multi-Office Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
        {/* Brand & Identity Column (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          <Link href="/" className="inline-block bg-white px-3.5 py-2.5 rounded-2xl shadow-md hover:shadow-lg transition">
            <img
              src="/logo.png"
              alt="COREVILT Technologies"
              className="h-11 sm:h-12 w-auto max-w-[220px] object-contain"
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

        {/* 10 Verticals Index (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#38bdf8] font-bold pb-1 border-b border-slate-800">
            10 Connected Verticals
          </div>
          <ul className="space-y-2 text-xs">
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
        </div>

        {/* Corporate Governance & Statutory Policies (2 cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-[#10b981] font-bold pb-1 border-b border-slate-800">
            Corporate Policies
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <Link href="/quality-policy" className="hover:text-white transition flex items-center gap-1">
                <span>• Quality Policy (QMS)</span>
              </Link>
            </li>
            <li>
              <Link href="/hse-policy" className="hover:text-white transition flex items-center gap-1">
                <span>• HSE & Safety Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/infosec-policy" className="hover:text-white transition flex items-center gap-1">
                <span>• InfoSec & Cyber Code</span>
              </Link>
            </li>
            <li>
              <Link href="/sustainability" className="hover:text-white transition flex items-center gap-1">
                <span>• Sustainability & CSR</span>
              </Link>
            </li>
            <li>
              <Link href="/vendor-portal" className="hover:text-white transition flex items-center gap-1">
                <span>• Vendor / OEM Portal</span>
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition flex items-center gap-1">
                <span>• Engineering Careers</span>
              </Link>
            </li>
            <li>
              <Link href="/amc-sla" className="hover:text-white transition flex items-center gap-1">
                <span>• 24/7 AMC SLA Tiers</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Dual Office Directory (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-bold pb-1 border-b border-slate-800">
            Dual Operating Hubs
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <MapPin className="w-3.5 h-3.5 text-[#0B66C3]" />
              <span>Delhi NCR Corporate HQ</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              F Block, Bldg 133/2, 2nd Floor, Shaheen Bagh, Okhla, New Delhi - 110025
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <MapPin className="w-3.5 h-3.5 text-[#059669]" />
              <span>Bareilly Regional Operations</span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Bldg 60, 1st Floor, Sadbhawna Nagar, 100 Futa Road, Bareilly - 243122
            </p>
          </div>

          <div className="pt-1 space-y-1.5 text-xs">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B66C3]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {currentYear} {COMPANY_INFO.name} • All rights reserved.
        </div>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <Link href="/privacy-policy" className="hover:text-slate-400 transition">
            Privacy Policy
          </Link>
          <Link href="/terms-of-engagement" className="hover:text-slate-400 transition">
            Terms of Engagement
          </Link>
          <Link href="/amc-sla" className="hover:text-slate-400 transition">
            AMC Service Level Agreements (SLA)
          </Link>
          <Link href="/quality-policy" className="hover:text-slate-400 transition">
            Quality Assurance
          </Link>
          <Link href="/hse-policy" className="hover:text-slate-400 transition">
            HSE Standards
          </Link>
        </div>
      </div>
    </footer>
  );
}
