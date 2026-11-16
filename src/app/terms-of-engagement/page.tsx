import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Engagement | Corevilt Technologies",
  description: "Standard Terms of Engineering Engagement and Contracting Protocols of Corevilt Technologies.",
};

export default function TermsOfEngagementPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
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
            <FileText className="w-3.5 h-3.5" />
            <span>COMMERCIAL & LEGAL PROTOCOLS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Terms of Engineering Engagement
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Governing Turnkey Contracts, Procurement & System Handover
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Scope of Work (SOW) & Stage Gates</h2>
            <p>
              All physical infrastructure and software engineering services are executed pursuant to a formally signed Scope of Work (SOW) and itemized Bill of Quantities (BOQ). Phase transitions follow our 8-Phase Methodology with explicit milestone sign-offs.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Statutory Compliance & Approvals</h2>
            <p>
              Electrical and solar installations are delivered in accordance with CEA, CPRI, and state DISCOM regulations. Corevilt assists clients with necessary statutory liaison, CEIG inspections, and net-metering approvals as detailed in individual project schedules.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. OEM Warranties & Title Transfer</h2>
            <p>
              Title to hardware and equipment transfers to the client upon full commercial settlement. Manufacturer Authorization Forms (MAFs) and official OEM warranties (3 to 25 years depending on asset class) are formally registered in the client&apos;s legal entity name upon project handover.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
