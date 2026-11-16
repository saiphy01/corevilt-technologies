"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Shield,
  Layers,
  Cpu,
  Zap,
  Building2,
  Server,
  Code2,
  Boxes,
  SunMedium,
  Wrench,
  Compass,
} from "lucide-react";
import { CORE_VERTICALS, COMPANY_INFO } from "@/lib/constants";

export function Navbar({ onOpenRfp }: { onOpenRfp?: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [govMenuOpen, setGovMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Close menus on route change without cascading renders in effect
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMegaMenuOpen(false);
    setGovMenuOpen(false);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const digitalVerticals = CORE_VERTICALS.filter((v) => v.category === "Digital Systems & AI");
  const electricalVerticals = CORE_VERTICALS.filter((v) => v.category === "Electrical & Power Engineering");
  const physicalVerticals = CORE_VERTICALS.filter((v) => v.category === "Physical Infrastructure & ELV Security");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2": return <Code2 className="w-4 h-4 text-[#0B66C3]" />;
      case "Server": return <Server className="w-4 h-4 text-[#0284C7]" />;
      case "Cpu": return <Cpu className="w-4 h-4 text-[#0B66C3]" />;
      case "Zap": return <Zap className="w-4 h-4 text-[#0B66C3]" />;
      case "ShieldAlert": return <Shield className="w-4 h-4 text-[#0284C7]" />;
      case "SunMedium": return <SunMedium className="w-4 h-4 text-[#059669]" />;
      case "Building2": return <Building2 className="w-4 h-4 text-[#0B66C3]" />;
      case "Boxes": return <Boxes className="w-4 h-4 text-[#0284C7]" />;
      case "Wrench": return <Wrench className="w-4 h-4 text-[#059669]" />;
      case "Compass": return <Compass className="w-4 h-4 text-[#0B66C3]" />;
      default: return <Layers className="w-4 h-4 text-[#0B66C3]" />;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50 border-b border-slate-200"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Subtitle */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="COREVILT Technologies"
              width={210}
              height={48}
              priority
              className="h-11 sm:h-12 w-auto max-w-[210px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
            <div className="hidden xl:block border-l border-slate-300 pl-3 py-0.5">
              <div className="text-[11px] font-bold text-[#0F172A] tracking-wider uppercase">
                TURNKEY INFRASTRUCTURE
              </div>
              <div className="text-[10px] text-slate-500 font-mono tracking-tight">
                & Digital Systems Partner
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-sm font-semibold text-slate-700">
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/" ? "text-[#0B66C3] bg-blue-50/60" : "hover:text-[#0B66C3] hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/about" ? "text-[#0B66C3] bg-blue-50/60" : "hover:text-[#0B66C3] hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            {/* Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaMenuOpen(true)}
              onMouseLeave={() => setMegaMenuOpen(false)}
            >
              <Link
                href="/solutions"
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  pathname.startsWith("/solutions")
                    ? "text-[#0B66C3] bg-blue-50/60"
                    : "hover:text-[#0B66C3] hover:bg-slate-50"
                }`}
              >
                <span>Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    megaMenuOpen ? "rotate-180 text-[#0B66C3]" : "text-slate-400"
                  }`}
                />
              </Link>

              {/* Mega Menu Dropdown */}
              {megaMenuOpen && (
                <div className="absolute top-full -left-48 w-[920px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#059669]"></span>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                        10 Turnkey Engineering Verticals
                      </span>
                    </div>
                    <Link
                      href="/solutions"
                      className="text-xs font-bold text-[#0B66C3] hover:underline flex items-center gap-1"
                    >
                      View All 10 Verticals Gateway <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-3 gap-6">
                    {/* Column 1: Digital Systems & AI */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0B66C3] flex items-center gap-1.5 pb-1 border-b border-blue-100">
                        <Cpu className="w-3.5 h-3.5" /> Digital Systems & AI
                      </div>
                      <div className="space-y-2">
                        {digitalVerticals.map((v) => (
                          <Link
                            key={v.id}
                            href={`/solutions/${v.slug}`}
                            className="group block p-2.5 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200"
                          >
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-[#0B66C3]">
                              {getIcon(v.iconName)}
                              <span>{v.shortTitle}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-normal">
                              {v.tagline}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 2: Electrical & Power Engineering */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#059669] flex items-center gap-1.5 pb-1 border-b border-emerald-100">
                        <Zap className="w-3.5 h-3.5" /> Electrical & Power EPC
                      </div>
                      <div className="space-y-2">
                        {electricalVerticals.map((v) => (
                          <Link
                            key={v.id}
                            href={`/solutions/${v.slug}`}
                            className="group block p-2.5 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200"
                          >
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-[#059669]">
                              {getIcon(v.iconName)}
                              <span>{v.shortTitle}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-normal">
                              {v.tagline}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Column 3: Physical Infrastructure & ELV Security */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#0284C7] flex items-center gap-1.5 pb-1 border-b border-sky-100">
                        <Building2 className="w-3.5 h-3.5" /> Infrastructure & ELV
                      </div>
                      <div className="space-y-2">
                        {physicalVerticals.map((v) => (
                          <Link
                            key={v.id}
                            href={`/solutions/${v.slug}`}
                            className="group block p-2.5 rounded-xl hover:bg-slate-50 transition border border-transparent hover:border-slate-200"
                          >
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 group-hover:text-[#0284C7]">
                              {getIcon(v.iconName)}
                              <span>{v.shortTitle}</span>
                            </div>
                            <p className="text-[11px] text-slate-500 line-clamp-1 mt-1 font-normal">
                              {v.tagline}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/industries"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/industries" ? "text-[#0B66C3] bg-blue-50/60" : "hover:text-[#0B66C3] hover:bg-slate-50"
              }`}
            >
              Industries
            </Link>

            <Link
              href="/methodology"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/methodology" ? "text-[#0B66C3] bg-blue-50/60" : "hover:text-[#0B66C3] hover:bg-slate-50"
              }`}
            >
              Methodology
            </Link>

            <Link
              href="/projects"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/projects" ? "text-[#0B66C3] bg-blue-50/60" : "hover:text-[#0B66C3] hover:bg-slate-50"
              }`}
            >
              Projects
            </Link>

            {/* Governance Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGovMenuOpen(true)}
              onMouseLeave={() => setGovMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                  ["/quality-policy", "/hse-policy", "/infosec-policy", "/sustainability", "/vendor-portal", "/careers", "/amc-sla"].includes(pathname)
                    ? "text-[#0B66C3] bg-blue-50/60"
                    : "hover:text-[#0B66C3] hover:bg-slate-50"
                }`}
              >
                <span>Governance</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    govMenuOpen ? "rotate-180 text-[#0B66C3]" : "text-slate-400"
                  }`}
                />
              </button>

              {govMenuOpen && (
                <div className="absolute top-full -left-20 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold px-3 py-1.5 border-b border-slate-100 mb-1">
                    Compliance & Standards
                  </div>
                  <div className="space-y-0.5">
                    <Link
                      href="/quality-policy"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0B66C3] hover:bg-slate-50 transition"
                    >
                      Quality Assurance Policy
                    </Link>
                    <Link
                      href="/hse-policy"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0B66C3] hover:bg-slate-50 transition"
                    >
                      HSE & Electrical Safety
                    </Link>
                    <Link
                      href="/infosec-policy"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0B66C3] hover:bg-slate-50 transition"
                    >
                      Information Security Policy
                    </Link>
                    <Link
                      href="/sustainability"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#059669] hover:bg-slate-50 transition"
                    >
                      Sustainability & Clean Energy
                    </Link>
                    <Link
                      href="/vendor-portal"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0B66C3] hover:bg-slate-50 transition"
                    >
                      OEM & Vendor Ecosystem
                    </Link>
                    <Link
                      href="/amc-sla"
                      className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-[#0B66C3] hover:bg-slate-50 transition"
                    >
                      24/7 SLA Matrix & AMC Tiers
                    </Link>
                    <div className="border-t border-slate-100 my-1 pt-1">
                      <Link
                        href="/careers"
                        className="block px-3 py-2 rounded-lg text-xs font-bold text-[#0B66C3] hover:bg-blue-50/60 transition"
                      >
                        Careers & Engineering Openings
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className={`px-3 py-2 rounded-lg transition-colors ${
                pathname === "/contact" ? "text-[#0B66C3] bg-blue-50/60" : "hover:text-[#0B66C3] hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/amc-sla"
              className="text-xs font-semibold px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition"
            >
              AMC Support
            </Link>

            <button
              onClick={onOpenRfp ? onOpenRfp : () => {
                const el = document.getElementById("rfp-generator");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                else router.push("/contact#rfp-form");
              }}
              className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 rounded-lg bg-[#0B66C3] hover:bg-[#09529e] text-white shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Request Technical Proposal</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 pb-4 border-b border-slate-200">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 hover:text-[#0B66C3]"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 hover:text-[#0B66C3]"
            >
              About Corevilt
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-[#0B66C3]"
            >
              All 10 Turnkey Verticals
            </Link>

            {/* Mobile Verticals List */}
            <div className="pl-3 py-2 space-y-2 border-l-2 border-blue-100 my-2">
              {CORE_VERTICALS.map((v) => (
                <Link
                  key={v.id}
                  href={`/solutions/${v.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-600 hover:text-[#0B66C3] py-1"
                >
                  • {v.title}
                </Link>
              ))}
            </div>

            <Link
              href="/industries"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 hover:text-[#0B66C3]"
            >
              Industry Blueprints
            </Link>
            <Link
              href="/methodology"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 hover:text-[#0B66C3]"
            >
              8-Phase Delivery Framework
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 hover:text-[#0B66C3]"
            >
              Case Studies & Proof
            </Link>

            {/* Mobile Governance & Policy Links */}
            <div className="pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold py-1">
                Governance & Standards
              </div>
              <div className="pl-3 py-1 space-y-1.5 border-l-2 border-slate-200 my-1">
                <Link
                  href="/quality-policy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-600 hover:text-[#0B66C3]"
                >
                  Quality Assurance Policy
                </Link>
                <Link
                  href="/hse-policy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-600 hover:text-[#0B66C3]"
                >
                  HSE & Electrical Safety
                </Link>
                <Link
                  href="/infosec-policy"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-600 hover:text-[#0B66C3]"
                >
                  InfoSec & Cyber Code
                </Link>
                <Link
                  href="/sustainability"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-600 hover:text-[#059669]"
                >
                  Sustainability & Clean Energy
                </Link>
                <Link
                  href="/vendor-portal"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-600 hover:text-[#0B66C3]"
                >
                  Vendor / OEM Portal
                </Link>
                <Link
                  href="/amc-sla"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-slate-600 hover:text-[#0B66C3]"
                >
                  24/7 AMC SLA Tiers
                </Link>
                <Link
                  href="/careers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs text-[#0B66C3] font-semibold"
                >
                  Engineering Careers
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-bold text-slate-900 hover:text-[#0B66C3]"
            >
              Contact & Offices
            </Link>
          </div>

          <div className="pt-2 space-y-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 text-slate-900 text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-[#0B66C3]" />
              <span>Call Technical Office: {COMPANY_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenRfp) onOpenRfp();
                else {
                  const el = document.getElementById("rfp-generator");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                  else router.push("/contact#rfp-form");
                }
              }}
              className="w-full py-3 rounded-xl bg-[#0B66C3] text-white text-xs font-bold text-center shadow"
            >
              Request Technical Proposal (RFP)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
