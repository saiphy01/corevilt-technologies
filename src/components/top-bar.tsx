"use client";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function TopBar() {
  return (
    <div className="bg-[#0A192F] text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Emergency AMC + Motto */}
        <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
          <div className="inline-flex items-center gap-1.5 bg-[#059669]/15 text-[#10b981] px-2.5 py-0.5 rounded-full font-mono text-[11px] font-semibold border border-[#059669]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
            24/7 EMERGENCY AMC DISPATCH
          </div>
          <span className="hidden lg:inline text-slate-500">|</span>
          <span className="hidden lg:inline text-slate-400 font-medium tracking-wide">
            {COMPANY_INFO.motto}
          </span>
        </div>

        {/* Right: Direct contacts + Offices */}
        <div className="flex items-center gap-5 text-xs font-medium">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 text-slate-200 hover:text-[#38bdf8] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#0B66C3]" />
            <span className="font-mono">{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-[#38bdf8] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          <div className="hidden xl:flex items-center gap-3 pl-3 border-l border-slate-800 text-slate-400">
            <Link href="/contact#delhi-office" className="hover:text-white transition flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-500" /> Delhi HQ
            </Link>
            <span className="text-slate-700">•</span>
            <Link href="/contact#bareilly-office" className="hover:text-white transition flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-500" /> Bareilly Hub
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
