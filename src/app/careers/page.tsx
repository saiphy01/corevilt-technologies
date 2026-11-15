import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Users, Briefcase, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Engineering Careers & Opportunities | Corevilt Technologies",
  description:
    "Build India's intelligent infrastructure. Explore career opportunities in electrical engineering, solar EPC, cloud software, and ELV security.",
};

export default function CareersPage() {
  const openRoles = [
    {
      title: "Senior Electrical Project Engineer (HT/LT Substations)",
      location: "Delhi NCR HQ / Site Placement",
      type: "Full-Time • On-Site",
      exp: "5–8 Years in Substation Erection & CEA Clearance",
    },
    {
      title: "Solar PV Design & Simulation Engineer",
      location: "Bareilly Regional Hub",
      type: "Full-Time • Hybrid",
      exp: "3–5 Years in PVSyst, AutoCAD, DISCOM Liaison",
    },
    {
      title: "Full-Stack Software Engineer (Next.js / Node.js)",
      location: "Delhi Corporate Office / Remote",
      type: "Full-Time • Remote Friendly",
      exp: "3–6 Years in TypeScript, PostgreSQL, Microservices",
    },
    {
      title: "ELV Systems & CCTV Commissioning Specialist",
      location: "Pan-India Travel / Project Deployment",
      type: "Full-Time • Field Engineering",
      exp: "2–4 Years in Milestone VMS, Honeywell Fire, Access Control",
    },
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
            <Users className="w-3.5 h-3.5" />
            <span>TALENT & CULTURE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Build Intelligent Infrastructure with Corevilt
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Join an engineering team that bridges physical power, renewable continuity, and digital intelligence across India&apos;s most demanding turnkey infrastructure projects.
          </p>
        </div>

        {/* Roles List */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">Current Openings</h2>
          <div className="space-y-3">
            {openRoles.map((role, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#0B66C3] transition"
              >
                <div className="space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm">{role.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-mono">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {role.location}
                    </span>
                    <span>•</span>
                    <span>{role.type}</span>
                    <span>•</span>
                    <span>{role.exp}</span>
                  </div>
                </div>

                <a
                  href={`mailto:careers@corevilt.com?subject=${encodeURIComponent("Application: " + role.title)}`}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#0B66C3] text-white text-xs font-bold transition flex items-center justify-center gap-1.5 flex-shrink-0"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* General Application */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-2">
          <div className="font-bold text-slate-900 text-sm">Don&apos;t see your exact role?</div>
          <p className="text-xs text-slate-600">
            We are always looking for exceptional electrical engineers, project managers, and software architects. Email your CV to <strong className="text-slate-900">careers@corevilt.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
