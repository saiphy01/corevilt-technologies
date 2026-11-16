"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap,
  Cpu,
  SunMedium,
  Server,
  Shield,
  Layers,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Sliders,
  ExternalLink,
  ChevronRight,
  Gauge,
} from "lucide-react";

type FlowMode = "all" | "power" | "compute" | "security";
type SimScenario = "nominal" | "grid-trip" | "solar-peak";

interface TopologyNode {
  id: string;
  number: string;
  title: string;
  category: "power" | "renewable" | "compute" | "security" | "digital";
  tagline: string;
  icon: typeof Zap;
  verticalSlug: string;
  verticalName: string;
  specifications: string[];
  standards: string[];
  nominalTelemetry: { label: string; value: string; unit: string; status: "good" | "warning" }[];
  gridTripTelemetry: { label: string; value: string; unit: string; status: "good" | "warning" }[];
  solarPeakTelemetry: { label: string; value: string; unit: string; status: "good" | "warning" }[];
  description: string;
}

const TOPOLOGY_NODES: TopologyNode[] = [
  {
    id: "substation",
    number: "01",
    title: "33kV Grid Substation",
    category: "power",
    tagline: "Primary Utility Intake & Protection Switchgear",
    icon: Zap,
    verticalSlug: "electrical-turnkey",
    verticalName: "Turnkey Electrical Infrastructure",
    specifications: [
      "33kV / 11kV Step-Down Outdoor Substation",
      "SF6 Gas-Insulated / Vacuum Circuit Breakers (VCB)",
      "Numerical Microprocessor Protection Relays",
      "Dual Redundant Earth Mats with Chemical Earthing",
    ],
    standards: ["CEA Grid Standards (2010)", "CBIP Manual 299", "IEC 62271-200"],
    nominalTelemetry: [
      { label: "Intake Voltage", value: "33.12", unit: "kV", status: "good" },
      { label: "Grid Frequency", value: "50.02", unit: "Hz", status: "good" },
      { label: "Phase Balance", value: "99.8", unit: "%", status: "good" },
      { label: "Current Draw", value: "184", unit: "A", status: "good" },
    ],
    gridTripTelemetry: [
      { label: "Intake Voltage", value: "0.00", unit: "kV (ISOLATED)", status: "warning" },
      { label: "Grid Frequency", value: "0.00", unit: "Hz", status: "warning" },
      { label: "VCB Status", value: "TRIPPED", unit: "Auto-Open", status: "warning" },
      { label: "Islanding Time", value: "12", unit: "ms (Seamless)", status: "good" },
    ],
    solarPeakTelemetry: [
      { label: "Intake Voltage", value: "33.08", unit: "kV", status: "good" },
      { label: "Grid Frequency", value: "50.01", unit: "Hz", status: "good" },
      { label: "Net Export Flow", value: "+142", unit: "kW to Grid", status: "good" },
      { label: "Power Factor", value: "0.998", unit: "Lead/Lag", status: "good" },
    ],
    description:
      "Engineered to utility grid standards with dual-redundant protection relays, motorized isolators, and automated fault clearance ensuring zero upstream blackouts.",
  },
  {
    id: "transformer",
    number: "02",
    title: "HT/LT Distribution & Panels",
    category: "power",
    tagline: "Cast-Resin Transformers & Power Quality Conditioning",
    icon: Cpu,
    verticalSlug: "electrical-turnkey",
    verticalName: "Turnkey Electrical Infrastructure",
    specifications: [
      "1,600 kVA Cast Resin Dry-Type Transformers (Fire-Safe)",
      "Fully Compartmentalized LT Panels (Form 4b)",
      "Active Harmonic Filters with APFC (PF 0.99+)",
      "Intelligent Motor Control Centers (iMCC) with Modbus/Ethernet",
    ],
    standards: ["IEEE 519 Harmonic Control", "IS 1180 / IS 8623", "IEC 61439-1"],
    nominalTelemetry: [
      { label: "LT Bus Voltage", value: "415.4", unit: "V", status: "good" },
      { label: "Power Factor", value: "0.994", unit: "PF", status: "good" },
      { label: "Total Harmonic (THD)", value: "1.82", unit: "% (<5% Target)", status: "good" },
      { label: "Core Temp", value: "48.2", unit: "°C", status: "good" },
    ],
    gridTripTelemetry: [
      { label: "Bus Mode", value: "UPS/Solar Intertie", unit: "Active", status: "good" },
      { label: "Transfer Time", value: "0.0", unit: "ms (No Sag)", status: "good" },
      { label: "Critical Bus PF", value: "0.991", unit: "PF", status: "good" },
      { label: "THD Distortion", value: "2.10", unit: "%", status: "good" },
    ],
    solarPeakTelemetry: [
      { label: "LT Bus Voltage", value: "416.0", unit: "V", status: "good" },
      { label: "Transformer Load", value: "38.2", unit: "% (Optimized)", status: "good" },
      { label: "Harmonic Filter", value: "Engaged", unit: "Active", status: "good" },
      { label: "Energy Offset", value: "86.4", unit: "%", status: "good" },
    ],
    description:
      "Form-4b power distribution boards with cast-resin dry transformers, automatic power factor correction, and active harmonic mitigation protecting precision electronics.",
  },
  {
    id: "solar",
    number: "03",
    title: "Commercial Solar & Inverters",
    category: "renewable",
    tagline: "High-Efficiency Mono PERC & Hybrid Synchronization",
    icon: SunMedium,
    verticalSlug: "solar-energy",
    verticalName: "C&I Solar EPC & Industrial Power Backup",
    specifications: [
      "550Wp+ Tier-1 Bifacial / Mono-PERC Modules",
      "Multi-MPPT High-Yield Commercial String Inverters",
      "Zero-Export & DG Synchronization Intertie Controllers",
      "Weather-Resistant Hot-Dip Galvanized Strut Structures",
    ],
    standards: ["IEC 61215 / IEC 61730", "CEA Technical Grid Intertie", "MNRE Guidelines"],
    nominalTelemetry: [
      { label: "Instant Generation", value: "324.6", unit: "kWp", status: "good" },
      { label: "Daily Energy Yield", value: "1,420", unit: "kWh", status: "good" },
      { label: "Inverter Efficiency", value: "98.7", unit: "%", status: "good" },
      { label: "CO2 Avoided Today", value: "1,164", unit: "kg", status: "good" },
    ],
    gridTripTelemetry: [
      { label: "Solar Mode", value: "Microgrid Islanding", unit: "Active", status: "good" },
      { label: "DG / UPS Sync", value: "Synchronized", unit: "Zero-Export", status: "good" },
      { label: "Load Carried", value: "72.4", unit: "% of Facility", status: "good" },
      { label: "Frequency Lock", value: "50.00", unit: "Hz", status: "good" },
    ],
    solarPeakTelemetry: [
      { label: "Instant Generation", value: "482.0", unit: "kWp (100% Peak)", status: "good" },
      { label: "Solar Insolation", value: "940", unit: "W/m²", status: "good" },
      { label: "Facility Offset", value: "100.0", unit: "%", status: "good" },
      { label: "Surplus Export", value: "+142", unit: "kW Net Export", status: "good" },
    ],
    description:
      "Rooftop & ground-mount industrial solar installations synchronized with grid power, diesel generators, and battery banks for maximum tariff avoidance.",
  },
  {
    id: "datacenter",
    number: "04",
    title: "Tier-II Data Center & Servers",
    category: "compute",
    tagline: "High-Density HCI Clusters, 10G Fiber & Redundant UPS",
    icon: Server,
    verticalSlug: "it-infrastructure",
    verticalName: "IT Infrastructure & Server Virtualization",
    specifications: [
      "Tier-1 Hyperconverged Blade Infrastructure (VMware / Proxmox)",
      "Modular Online Double-Conversion UPS (N+1 Redundancy)",
      "10G / 40G Low-Latency OM4 Structured Optical Backbone",
      "Cold-Aisle Containment with Precision PAC Cooling",
    ],
    standards: ["TIA-942 Tier-II Standards", "ASHRAE TC 9.9 Thermal", "IEEE 802.3ae 10G"],
    nominalTelemetry: [
      { label: "PUE Efficiency", value: "1.28", unit: "Target <1.4", status: "good" },
      { label: "UPS Power Source", value: "Solar + LT Bus", unit: "Online", status: "good" },
      { label: "Active Hypervisors", value: "16 / 16", unit: "Cluster OK", status: "good" },
      { label: "Network Bandwidth", value: "14.2", unit: "Gbps Thruput", status: "good" },
    ],
    gridTripTelemetry: [
      { label: "UPS Mode", value: "Double Conversion", unit: "0ms Switch", status: "good" },
      { label: "Battery Autonomy", value: "42", unit: "Mins Remaining", status: "good" },
      { label: "VM Server State", value: "100% Uptime", unit: "Zero Dropped", status: "good" },
      { label: "Temp Fluctuation", value: "+0.4", unit: "°C (Stable)", status: "good" },
    ],
    solarPeakTelemetry: [
      { label: "Green Energy Run", value: "100.0", unit: "% Solar Powered", status: "good" },
      { label: "Compute Headroom", value: "62.4", unit: "% Available", status: "good" },
      { label: "Cooling Load", value: "18.4", unit: "kW Optimized", status: "good" },
      { label: "Packet Jitter", value: "< 0.2", unit: "ms", status: "good" },
    ],
    description:
      "Enterprise on-premise cloud infrastructure designed for 99.98% availability, sub-millisecond edge compute, and automated disaster-recovery replication.",
  },
  {
    id: "security",
    number: "05",
    title: "AI CCTV & Life Safety (ELV)",
    category: "security",
    tagline: "Neural Perimeter Surveillance, Biometrics & NFPA Fire",
    icon: Shield,
    verticalSlug: "elv-security",
    verticalName: "ELV Systems, CCTV Surveillance & Life Safety",
    specifications: [
      "4K Neural Optical IP Cameras with Smart IR & WDR",
      "Edge-Inference Video Analytics (Intrusion, ANPR, PPE Detection)",
      "Addressable Multi-Loop Fire Alarm with Gas Flooding Integration",
      "Zero-Trust Flap Barriers & Facial Biometric Access Controllers",
    ],
    standards: ["NFPA 72 Fire Alarm Code", "EN 50132 CCTV Standards", "NDAA Compliant"],
    nominalTelemetry: [
      { label: "Active Camera Feeds", value: "128 / 128", unit: "All Online", status: "good" },
      { label: "AI Edge Latency", value: "14", unit: "ms Inference", status: "good" },
      { label: "Perimeter Status", value: "Secured", unit: "Nominal", status: "good" },
      { label: "Life Safety Loop", value: "Supervised", unit: "Normal", status: "good" },
    ],
    gridTripTelemetry: [
      { label: "Power Rail", value: "Emergency DC/UPS", unit: "Fail-Safe", status: "good" },
      { label: "Access Doors", value: "Egress Unlocked", unit: "Fire Safe", status: "good" },
      { label: "Surveillance", value: "100% Recording", unit: "No Blackout", status: "good" },
      { label: "Alert Dispatch", value: "Armed", unit: "Cellular Backup", status: "good" },
    ],
    solarPeakTelemetry: [
      { label: "PoE Switch Load", value: "4.8", unit: "kW Solar Run", status: "good" },
      { label: "Video Analytics", value: "128 Streams", unit: "Full Frame Rate", status: "good" },
      { label: "ANPR Accuracy", value: "99.4", unit: "% Validated", status: "good" },
      { label: "Storage Health", value: "RAID-6 Normal", unit: "45 Days", status: "good" },
    ],
    description:
      "Comprehensive Extra Low Voltage (ELV) architecture combining real-time edge vision analytics, centralized fire suppression, and perimeter intrusion fencing.",
  },
  {
    id: "digital",
    number: "06",
    title: "Unified Cloud ERP & SCADA",
    category: "digital",
    tagline: "Centralized Digital Twin, Telemetry & Operations",
    icon: Layers,
    verticalSlug: "software-digital",
    verticalName: "Enterprise Software & Digital Engineering",
    specifications: [
      "Real-Time SCADA Digital Twin & Industrial Telemetry Pipeline",
      "Enterprise Cloud ERP / CRM with Native Mobile Field Portals",
      "Predictive Maintenance Algorithms for Transformers & Inverters",
      "Integrated 24/7 Central Video Wall & Dispatch Console",
    ],
    standards: ["IEC 60870-5-104 Telemetry", "SOC 2 Type II Cloud", "IEC 62443 Industrial Cybersecurity"],
    nominalTelemetry: [
      { label: "Telemetry Stream", value: "24,800", unit: "Events / Sec", status: "good" },
      { label: "System Health", value: "99.8", unit: "% Aggregate", status: "good" },
      { label: "MTTR Response", value: "< 4", unit: "Hours SLA", status: "good" },
      { label: "Digital Twin Sync", value: "Real-time", unit: "Sub-second", status: "good" },
    ],
    gridTripTelemetry: [
      { label: "Incident Status", value: "Grid Trip Detected", unit: "Automated Ticket", status: "warning" },
      { label: "Load Shedding", value: "Executed", unit: "Non-Critical Cut", status: "good" },
      { label: "SMS / Email Alerts", value: "Dispatched", unit: "Plant CXOs", status: "good" },
      { label: "Audit Log Hash", value: "Verified", unit: "Cryptographic", status: "good" },
    ],
    solarPeakTelemetry: [
      { label: "Tariff Optimization", value: "Maximum", unit: "Export Yield", status: "good" },
      { label: "ESG Carbon Credit", value: "+4.8", unit: "Tons Logged", status: "good" },
      { label: "Predictive Health", value: "100.0", unit: "All Clear", status: "good" },
      { label: "Plant Efficiency", value: "94.6", unit: "% Performance", status: "good" },
    ],
    description:
      "The digital brain uniting physical power, clean solar energy, compute servers, and facility security into a unified glass dashboard with real-time analytics.",
  },
];

export function InfrastructureTopology() {
  const [activeNodeId, setActiveNodeId] = useState<string>("solar");
  const [flowMode, setFlowMode] = useState<FlowMode>("all");
  const [scenario, setScenario] = useState<SimScenario>("nominal");
  const [pulseTick, setPulseTick] = useState(0);

  // Subtle real-time heartbeat effect for telemetry realism
  useEffect(() => {
    const timer = setInterval(() => {
      setPulseTick((t) => (t + 1) % 100);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const activeNode = TOPOLOGY_NODES.find((n) => n.id === activeNodeId) || TOPOLOGY_NODES[2];

  const getTelemetry = (node: TopologyNode) => {
    if (scenario === "grid-trip") return node.gridTripTelemetry;
    if (scenario === "solar-peak") return node.solarPeakTelemetry;
    return node.nominalTelemetry;
  };

  const isNodeHighlighted = (node: TopologyNode) => {
    if (flowMode === "all") return true;
    if (flowMode === "power") return node.category === "power" || node.category === "renewable";
    if (flowMode === "compute") return node.category === "compute" || node.category === "digital" || node.category === "renewable";
    if (flowMode === "security") return node.category === "security" || node.category === "digital" || node.category === "compute";
    return true;
  };

  return (
    <section className="py-20 bg-[#070F1E] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Engineering Grids */}
      <div className="absolute inset-0 engineering-grid-dark opacity-35 pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#0B66C3]/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#059669]/15 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B66C3]/20 border border-[#0B66C3]/40 text-[#38bdf8] text-xs font-mono font-bold tracking-wider">
              <Activity className="w-3.5 h-3.5 animate-pulse text-[#38bdf8]" />
              <span>INTERACTIVE INFRASTRUCTURE TOPOLOGY & DIGITAL TWIN</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Single-Source Turnkey Integration:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#0B66C3] to-[#10b981]">
                Grid to Cloud
              </span>
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Explore how Corevilt synchronizes high-voltage electrical substations, commercial solar power plants, tier-II edge compute hypervisors, and AI security systems into one resilient, mission-critical ecosystem.
            </p>
          </div>

          {/* Scenario Simulation Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 p-2 rounded-2xl bg-slate-900/90 border border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider px-2 py-1 font-bold flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Simulate Scenario:</span>
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                type="button"
                onClick={() => setScenario("nominal")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
                  scenario === "nominal"
                    ? "bg-[#0B66C3] text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-800/80 text-slate-400 hover:text-white"
                }`}
              >
                Nominal
              </button>
              <button
                type="button"
                onClick={() => setScenario("solar-peak")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
                  scenario === "solar-peak"
                    ? "bg-[#059669] text-white shadow-md shadow-emerald-500/20"
                    : "bg-slate-800/80 text-slate-400 hover:text-white"
                }`}
              >
                Solar Noon
              </button>
              <button
                type="button"
                onClick={() => setScenario("grid-trip")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition ${
                  scenario === "grid-trip"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-500/20"
                    : "bg-slate-800/80 text-slate-400 hover:text-white"
                }`}
              >
                Grid Trip
              </button>
            </div>
          </div>
        </div>

        {/* Filter Strip: Flow Mode Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-slate-400 font-mono font-medium">Filter Flow:</span>
            <button
              onClick={() => setFlowMode("all")}
              className={`px-3 py-1.5 rounded-lg font-mono font-semibold transition ${
                flowMode === "all"
                  ? "bg-slate-800 text-[#38bdf8] border border-blue-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              All 6 Nodes
            </button>
            <button
              onClick={() => setFlowMode("power")}
              className={`px-3 py-1.5 rounded-lg font-mono font-semibold transition ${
                flowMode === "power"
                  ? "bg-slate-800 text-[#38bdf8] border border-blue-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Power & Solar (33kV / LT / PV)
            </button>
            <button
              onClick={() => setFlowMode("compute")}
              className={`px-3 py-1.5 rounded-lg font-mono font-semibold transition ${
                flowMode === "compute"
                  ? "bg-slate-800 text-[#38bdf8] border border-blue-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Compute & Cloud Fabric
            </button>
            <button
              onClick={() => setFlowMode("security")}
              className={`px-3 py-1.5 rounded-lg font-mono font-semibold transition ${
                flowMode === "security"
                  ? "bg-slate-800 text-[#38bdf8] border border-blue-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              ELV Security & Control Center
            </button>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
            <span>Live Telemetry Bus Active</span>
          </div>
        </div>

        {/* The Interactive Topology Pipeline Visual Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {TOPOLOGY_NODES.map((node, index) => {
            const Icon = node.icon;
            const isSelected = activeNodeId === node.id;
            const isDimmed = !isNodeHighlighted(node);

            return (
              <div
                key={node.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveNodeId(node.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveNodeId(node.id);
                  }
                }}
                className={`group relative text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-gradient-to-b from-slate-900 to-blue-950/40 border-[#0B66C3] ring-2 ring-[#0B66C3]/40 shadow-xl shadow-blue-900/20"
                    : isDimmed
                    ? "bg-slate-950/40 border-slate-900 opacity-40 hover:opacity-75"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                {/* Node Order Badge & Status Beacon */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] font-bold text-slate-500 group-hover:text-[#38bdf8] transition">
                    NODE {node.number}
                  </span>
                  <div
                    className={`w-2 h-2 rounded-full ${
                      scenario === "grid-trip" && node.id === "substation"
                        ? "bg-amber-500 animate-pulse"
                        : "bg-[#10b981]"
                    }`}
                  ></div>
                </div>

                {/* Node Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition ${
                    isSelected
                      ? "bg-[#0B66C3] text-white shadow-md shadow-blue-500/30 scale-105"
                      : "bg-slate-800 text-slate-300 group-hover:text-[#38bdf8] group-hover:bg-slate-700"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Node Title & Subtitle */}
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight mb-1 group-hover:text-[#38bdf8] transition">
                    {node.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                    {node.tagline}
                  </p>
                </div>

                {/* Flow indicator arrow for desktop */}
                {index < TOPOLOGY_NODES.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600 pointer-events-none">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Active Node Detail Inspector & Telemetry Console */}
        <div className="rounded-3xl bg-[#0F172A] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Architectural Overview & Specs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#10b981] bg-[#059669]/15 px-2.5 py-0.5 rounded-md border border-[#059669]/30">
                      NODE {activeNode.number} • {activeNode.category.toUpperCase()}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      Synchronized Integration
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight pt-1">
                    {activeNode.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#38bdf8] font-mono">
                    {activeNode.tagline}
                  </p>
                </div>

                {/* Direct Link to Dedicated Solution */}
                <Link
                  href={`/solutions/${activeNode.verticalSlug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0B66C3]/20 hover:bg-[#0B66C3]/30 border border-[#0B66C3]/50 text-[#38bdf8] text-xs font-bold transition group"
                >
                  <span>Explore Vertical Spec</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </Link>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeNode.description}
              </p>

              {/* Hardware Specifications */}
              <div className="space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                  Turnkey Engineering Architecture & Hardware:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeNode.specifications.map((spec, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Governing Engineering Standards */}
              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                  Engineering Standards:
                </span>
                {activeNode.standards.map((std, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
                  >
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Live Simulated Digital Twin Telemetry (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-slate-950/90 border border-slate-800 p-6 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-[#38bdf8]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Digital Twin Telemetry
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-500">
                  POLL: {(pulseTick % 2 === 0 ? "50ms" : "48ms")}
                </span>
              </div>

              {/* Scenario Context Banner */}
              <div
                className={`p-3 rounded-xl border text-xs font-mono flex items-center justify-between ${
                  scenario === "grid-trip"
                    ? "bg-amber-950/40 border-amber-500/40 text-amber-200"
                    : scenario === "solar-peak"
                    ? "bg-emerald-950/40 border-emerald-500/40 text-emerald-200"
                    : "bg-blue-950/40 border-blue-500/40 text-blue-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {scenario === "grid-trip" ? (
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  ) : (
                    <Activity className="w-4 h-4 text-[#38bdf8]" />
                  )}
                  <span className="font-bold">
                    {scenario === "grid-trip"
                      ? "SIMULATION: GRID OUTAGE / ISLANDING"
                      : scenario === "solar-peak"
                      ? "SIMULATION: PEAK SOLAR GENERATION"
                      : "STEADY STATE: ALL SYSTEMS SYNCHRONIZED"}
                  </span>
                </div>
              </div>

              {/* 4 Telemetry Gauges */}
              <div className="grid grid-cols-2 gap-3">
                {getTelemetry(activeNode).map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1"
                  >
                    <div className="text-[11px] font-mono text-slate-400 line-clamp-1">
                      {metric.label}
                    </div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl sm:text-2xl font-black font-mono text-white">
                        {metric.value}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400 font-semibold">
                        {metric.unit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Turnkey Integration Takeaway */}
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-1">
                <div className="text-[11px] font-mono text-[#38bdf8] font-bold uppercase">
                  Single-Partner Value Advantage:
                </div>
                <div>
                  Corevilt manages both the physical power equipment (Substation & LT panels) and the digital consumers (Servers, CCTV, and ERP), preventing vendor finger-pointing during unexpected transients.
                </div>
              </div>

              {/* Quick Jump to Next Node in Chain */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Navigate Cascade:</span>
                <div className="flex gap-1.5">
                  {TOPOLOGY_NODES.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => setActiveNodeId(n.id)}
                      className={`w-7 h-7 rounded-lg text-xs font-bold transition ${
                        activeNodeId === n.id
                          ? "bg-[#0B66C3] text-white"
                          : "bg-slate-800 text-slate-400 hover:text-white"
                      }`}
                    >
                      {n.number}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
