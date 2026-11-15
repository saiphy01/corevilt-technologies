"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import {
  UploadCloud,
  FileCheck,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ArrowRight,
  Shield,
  Building,
  Mail,
  Phone,
  FileText,
  MapPin,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

const VERTICAL_OPTIONS = [
  "Electrical Turnkey (HT/LT Substation)",
  "Commercial Solar EPC & Power Backup",
  "Custom Enterprise Software & ERP/CRM",
  "ELV Systems, CCTV & Life Safety",
  "IT Infrastructure, Servers & 10G Fiber",
  "Command & Control Center Turnkey",
  "Hardware Procurement & Tier-1 Supply",
  "Annual Maintenance Contracts (AMC/CMC)",
];

const BUDGET_TIERS = [
  "Under ₹25 Lakhs",
  "₹25 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹5 Crores",
  "₹5 Crores+ (Enterprise Turnkey)",
  "Feasibility Audit / DPR Phase",
];

const LOCATIONS = [
  "Delhi NCR (Gurugram, Noida, Faridabad)",
  "Bareilly & Western Uttar Pradesh",
  "Uttar Pradesh (Lucknow, Kanpur, Agra)",
  "Pan-India Multi-Location Rollout",
  "Other / Outside India",
];

export function RfpSection() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedVerticals, setSelectedVerticals] = useState<string[]>([
    "Electrical Turnkey (HT/LT Substation)",
  ]);
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [budgetTier, setBudgetTier] = useState(BUDGET_TIERS[1]);
  const [detailedBrief, setDetailedBrief] = useState("");
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedResult, setSubmittedResult] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const toggleVertical = (v: string) => {
    if (selectedVerticals.includes(v)) {
      setSelectedVerticals(selectedVerticals.filter((item) => item !== v));
    } else {
      setSelectedVerticals([...selectedVerticals, v]);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 25 * 1024 * 1024) {
        setErrorMsg("File exceeds maximum 25MB limit.");
        return;
      }
      setFileName(file.name);
      setErrorMsg("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!companyName.trim() || !contactName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg("Please complete all required fields: Company, Contact Name, Email, and Phone.");
      return;
    }

    if (selectedVerticals.length === 0) {
      setErrorMsg("Please select at least one primary vertical of interest.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/rfp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName,
          contactName,
          email,
          phone: `+91 ${phone.replace(/^\+91/, "").trim()}`,
          verticals: selectedVerticals,
          location,
          budgetTier,
          detailedBrief,
          fileName: fileName || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit proposal request.");
      }

      setSubmittedResult({
        referenceId: data.referenceId,
        message: data.message,
      });

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#0B66C3", "#059669", "#0284C7"],
        });
      } catch (e) {}
    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rfp-generator" className="py-20 bg-[#0A192F] text-white relative overflow-hidden">
      <div className="absolute inset-0 engineering-grid-dark opacity-50 pointer-events-none"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/15 text-[#10b981] text-xs font-mono font-bold tracking-wider border border-[#059669]/30">
            <Shield className="w-3.5 h-3.5" />
            <span>INSTANT TECH-COMMERCIAL ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Request an Institutional Technical Proposal & BOQ
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Submit your project parameters, single line diagrams, or architectural BOQ. Our central engineering office in Delhi NCR & Bareilly will analyze specifications and issue an initial technical-commercial response within 4 hours.
          </p>
        </div>

        {submittedResult ? (
          <div className="rounded-2xl bg-slate-900 border border-emerald-500/50 p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-5 shadow-2xl animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#059669]/20 text-[#10b981] flex items-center justify-center mx-auto border border-[#059669]/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold text-[#10b981] uppercase tracking-wider">
                RFP REGISTERED & TRANSMITTED
              </span>
              <h3 className="text-2xl font-bold text-white">
                Reference ID: <span className="font-mono text-[#38bdf8]">{submittedResult.referenceId}</span>
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed pt-2">
                {submittedResult.message}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 font-mono space-y-1 text-left">
              <div>• Transmitted To: Central Technical Design Office (info@corevilt.com)</div>
              <div>• Priority Dispatch: Delhi HQ & Bareilly Hub Regional Engineers</div>
              <div>• Direct Line: {COMPANY_INFO.phone}</div>
            </div>

            <button
              onClick={() => {
                setSubmittedResult(null);
                setCompanyName("");
                setContactName("");
                setEmail("");
                setPhone("");
                setDetailedBrief("");
                setFileName("");
              }}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
            >
              Submit Another Technical Scope
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-[#0F172A] border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-6"
          >
            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-200 text-xs font-medium flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Row 1: Company & Contact Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                  Organization / Corporate Entity <span className="text-[#38bdf8]">*</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Manufacturing Ltd. or Delhi Metro"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0B66C3] focus:ring-1 focus:ring-[#0B66C3] transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                  Primary Contact Person & Designation <span className="text-[#38bdf8]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar (VP Infrastructure)"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0B66C3] focus:ring-1 focus:ring-[#0B66C3] transition"
                />
              </div>
            </div>

            {/* Row 2: Work Email & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                  Official Work Email <span className="text-[#38bdf8]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0B66C3] focus:ring-1 focus:ring-[#0B66C3] transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                  Direct Phone Number (India) <span className="text-[#38bdf8]">*</span>
                </label>
                <div className="relative flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-700 bg-slate-800 text-xs font-mono text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="98765 43210"
                    className="w-full bg-slate-900 border border-slate-700 rounded-r-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0B66C3] focus:ring-1 focus:ring-[#0B66C3] transition"
                  />
                </div>
              </div>
            </div>

            {/* Row 3: Verticals of Interest (Multi-Select Checkboxes) */}
            <div className="space-y-2.5">
              <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                Primary Vertical(s) of Scope <span className="text-[#38bdf8]">*</span> (Select all that apply)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {VERTICAL_OPTIONS.map((v) => {
                  const checked = selectedVerticals.includes(v);
                  return (
                    <div
                      key={v}
                      onClick={() => toggleVertical(v)}
                      className={`cursor-pointer p-3 rounded-xl border text-xs font-medium transition flex items-center gap-2.5 ${
                        checked
                          ? "bg-blue-950/60 border-blue-500 text-white ring-1 ring-blue-500/30"
                          : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => {}}
                        className="rounded border-slate-700 text-[#0B66C3] focus:ring-0"
                      />
                      <span className="leading-tight">{v}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Row 4: Location & Budget Tier */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                  Project Site Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0B66C3] transition"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                  Estimated Project Budget / Scope Tier
                </label>
                <select
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#0B66C3] transition"
                >
                  {BUDGET_TIERS.map((tier) => (
                    <option key={tier} value={tier}>
                      {tier}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 5: Detailed Brief & Scope */}
            <div className="space-y-2">
              <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                Detailed Project Specifications, BOQ Highlights or Requirements
              </label>
              <textarea
                rows={4}
                value={detailedBrief}
                onChange={(e) => setDetailedBrief(e.target.value)}
                placeholder="Specify transformer ratings, solar plant kW targets, number of CCTV nodes, server hypervisor needs, or software integrations..."
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0B66C3] transition"
              />
            </div>

            {/* Row 6: BOQ File Upload */}
            <div className="space-y-2">
              <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                Attach RFP / BOQ / Single Line Diagram (PDF, DWG, DOCX up to 25MB)
              </label>
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-5 text-center bg-slate-900/50 hover:bg-slate-900 transition relative">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept=".pdf,.dwg,.doc,.docx,.xls,.xlsx,.zip"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center gap-1.5 pointer-events-none">
                  <UploadCloud className="w-6 h-6 text-[#38bdf8]" />
                  <div className="text-xs font-semibold text-slate-300">
                    {fileName ? (
                      <span className="text-[#10b981] font-mono">Selected: {fileName}</span>
                    ) : (
                      "Drag and drop file here, or click to browse"
                    )}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Supported: PDF, DWG, DOCX, XLSX (Max 25MB)
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#0B66C3] hover:bg-[#09529e] disabled:opacity-50 text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all duration-200"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Technical Proposal...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Request for Proposal (RFP)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
