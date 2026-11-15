import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Corevilt Technologies",
  description: "Corporate Privacy Policy and Data Protection standards of COREVILT TECHNOLOGIES PVT. LTD.",
};

export default function PrivacyPolicyPage() {
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
            <Shield className="w-3.5 h-3.5" />
            <span>CORPORATE GOVERNANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]">
            Privacy Policy & Data Security
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated: November 2026 | Effective for {COMPANY_INFO.name}
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-6 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. Commitment to Data Integrity</h2>
            <p>
              COREVILT TECHNOLOGIES PVT. LTD. (&quot;Corevilt&quot;, &quot;we&quot;, &quot;our&quot;) is committed to upholding strict confidentiality and security regarding all corporate, financial, and technical project data shared by clients, tender authorities, and institutional partners.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. Technical & RFP Information Collection</h2>
            <p>
              When clients submit Requests for Proposals (RFPs), Bill of Quantities (BOQ), architectural drawings, or single line diagrams via our platform, this information is treated as privileged proprietary material used solely for feasibility assessments and commercial quotation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. Non-Disclosure & Security Standards</h2>
            <p>
              We adhere to ISO 27001 data protection principles. Architectural blueprints and network designs are stored on encrypted, role-restricted storage systems and are never licensed, leased, or disclosed to unauthorized third parties.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. Contact & Compliance Inquiries</h2>
            <p>
              For data protection questions or formal non-disclosure agreement (NDA) execution, contact our legal counsel at:
              <br />
              <strong>Email:</strong> legal@corevilt.com | <strong>Address:</strong> {COMPANY_INFO.delhiOffice.address}, New Delhi - 110025.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
