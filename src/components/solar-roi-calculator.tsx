"use client";

import { useState, useMemo } from "react";
import {
  SunMedium,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Sliders,
  ShieldCheck,
  FileSpreadsheet,
} from "lucide-react";

const FACILITY_TYPES = [
  "Manufacturing Plant / Factory",
  "Commercial Complex / IT Park",
  "Hospital / Healthcare Facility",
  "Educational Institution / Campus",
  "Cold Storage / Logistics Warehouse",
];

const TARIFF_OPTIONS = [
  { label: "Commercial LT Standard (₹8.50 / kWh)", rate: 8.5 },
  { label: "Industrial HT High-Tension (₹7.60 / kWh)", rate: 7.6 },
  { label: "Peak Commercial / ToD (₹9.80 / kWh)", rate: 9.8 },
  { label: "Institutional Subsidized (₹6.80 / kWh)", rate: 6.8 },
];

export function SolarRoiCalculator() {
  const [facilityType, setFacilityType] = useState(FACILITY_TYPES[0]);
  const [monthlyBill, setMonthlyBill] = useState<number>(250000);
  const [sanctionedLoad, setSanctionedLoad] = useState<number>(100);
  const [roofArea, setRoofArea] = useState<number>(12000);
  const [tariffRate, setTariffRate] = useState<number>(8.5);
  const [prefilledSuccess, setPrefilledSuccess] = useState(false);

  // Computations
  const calculations = useMemo(() => {
    // 100 sq ft per 1 kWp of mono-PERC bifacial array
    const roofCapacityKwp = Math.floor(roofArea / 100);

    // Grid net-metering limit ~90% of sanctioned load
    const loadConstraintKwp = Math.round(sanctionedLoad * 0.95);

    // Bill offset requirement (~85% offset target, ~123.3 kWh/kWp/month yield)
    const monthlyUnits = monthlyBill / (tariffRate || 8.5);
    const targetMonthlySolarUnits = monthlyUnits * 0.85;
    const billCapacityKwp = Math.round(targetMonthlySolarUnits / 123.3);

    // Recommended capacity bounded by roof space and electrical load
    const recommendedKwp = Math.max(
      10,
      Math.min(roofCapacityKwp, loadConstraintKwp, Math.max(15, billCapacityKwp))
    );

    // Turnkey commercial EPC capex benchmark (~₹45,000 / kWp in India)
    const capex = recommendedKwp * 45000;

    // Annual generation: ~1,480 kWh per kWp per year
    const annualGenerationKwh = Math.round(recommendedKwp * 1480);

    // Annual commercial tariff savings
    const annualSavings = Math.round(annualGenerationKwh * tariffRate);

    // Payback period
    const paybackYears = annualSavings > 0 ? (capex / annualSavings).toFixed(1) : "0.0";

    // 25-Year Cumulative Net Financial Benefit
    // Accounting for 0.7% annual solar degradation, 3.0% annual tariff inflation, minus 1% annual AMC
    let cumulativeSavings = 0;
    for (let yr = 1; yr <= 25; yr++) {
      const degradationFactor = Math.pow(1 - 0.007, yr - 1);
      const tariffEscalation = Math.pow(1 + 0.03, yr - 1);
      const yearGeneration = annualGenerationKwh * degradationFactor;
      const yearSavings = yearGeneration * (tariffRate * tariffEscalation);
      const yearAmcExpense = capex * 0.01; // 1% annual maintenance reserve
      cumulativeSavings += yearSavings - yearAmcExpense;
    }
    const twentyFiveYearNetBenefit = Math.round(cumulativeSavings - capex);

    // Environmental offsets: ~0.82 kg CO2 per kWh avoided
    const annualCo2Tons = Number(((annualGenerationKwh * 0.82) / 1000).toFixed(1));
    const treesPlanted = Math.round(annualCo2Tons * 45);

    // Space utilization constraint note
    const spaceConstrained = roofCapacityKwp < billCapacityKwp;

    return {
      recommendedKwp,
      capex,
      annualGenerationKwh,
      annualSavings,
      paybackYears,
      twentyFiveYearNetBenefit,
      annualCo2Tons,
      treesPlanted,
      spaceConstrained,
      roofCapacityKwp,
      loadConstraintKwp,
    };
  }, [roofArea, sanctionedLoad, monthlyBill, tariffRate]);

  const handlePreFillRfp = () => {
    // Determine budget tier
    let budgetTier = "₹25 Lakhs – ₹1 Crore";
    if (calculations.capex < 2500000) {
      budgetTier = "Under ₹25 Lakhs";
    } else if (calculations.capex <= 10000000) {
      budgetTier = "₹25 Lakhs – ₹1 Crore";
    } else if (calculations.capex <= 50000000) {
      budgetTier = "₹1 Crore – ₹5 Crores";
    } else {
      budgetTier = "₹5 Crores+ (Enterprise Turnkey)";
    }

    const scopeText = `EXECUTIVE SOLAR EPC & ENERGY FEASIBILITY PARAMETERS:
- Facility Type: ${facilityType}
- Recommended Solar Plant: ${calculations.recommendedKwp} kWp (Rooftop Mono-PERC / Bifacial Array)
- Estimated Turnkey Capex: ₹${(calculations.capex / 100000).toFixed(2)} Lakhs (Turnkey EPC)
- Current Monthly Electricity Bill: ₹${monthlyBill.toLocaleString("en-IN")} (@ ₹${tariffRate}/kWh)
- Sanctioned Connected Load: ${sanctionedLoad} kW | Usable Roof Area: ${roofArea.toLocaleString("en-IN")} Sq. Ft
- Projected Annual Solar Generation: ~${calculations.annualGenerationKwh.toLocaleString("en-IN")} kWh / year
- Projected Annual Tariff Savings: ₹${(calculations.annualSavings / 100000).toFixed(2)} Lakhs / year
- Estimated Payback Period: ~${calculations.paybackYears} Years
- Projected 25-Year Cumulative Net Benefit: ₹${(calculations.twentyFiveYearNetBenefit / 10000000).toFixed(2)} Crores
- Environmental ESG Metrics: ${calculations.annualCo2Tons} Tons CO2 Reduction / year (~${calculations.treesPlanted} mature trees equivalent)

Please provide detailed engineering proposal, structural roof load audit, single-line diagram (SLD), and DISCOM net-metering intertie feasibility for this scope.`;

    // Dispatch event to pre-fill RfpSection
    window.dispatchEvent(
      new CustomEvent("prefill-rfp", {
        detail: {
          verticals: [
            "Commercial Solar EPC & Power Backup",
            "Electrical Turnkey (HT/LT Substation)",
          ],
          budgetTier,
          detailedBrief: scopeText,
        },
      })
    );

    setPrefilledSuccess(true);

    // Smooth scroll down to RFP section
    const rfpElement = document.getElementById("rfp-generator");
    if (rfpElement) {
      rfpElement.scrollIntoView({ behavior: "smooth" });
    }

    setTimeout(() => {
      setPrefilledSuccess(false);
    }, 6000);
  };

  return (
    <section id="solar-roi-calculator" className="py-20 bg-[#0B1528] text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Engineering Grids */}
      <div className="absolute inset-0 engineering-grid-dark opacity-30 pointer-events-none"></div>
      <div className="absolute -top-32 left-1/3 w-80 h-80 rounded-full bg-[#059669]/10 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#059669]/20 border border-[#059669]/40 text-[#10b981] text-xs font-mono font-bold tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>EXECUTIVE SOLAR & ENERGY FEASIBILITY AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Commercial Solar & Energy ROI Calculator
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Tailored for Industrial Plant Heads, CFOS, and Infrastructure Directors. Input your current energy parameters to calculate optimal solar capacity, turnkey capex, payback duration, and 25-year compounding tariff savings.
          </p>
        </div>

        {/* Main Grid: Sliders (Left 6 cols) + Real-Time ROI Metrics (Right 6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs (6 cols) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0F172A] border border-slate-800 p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Sliders className="w-3.5 h-3.5 text-[#38bdf8]" />
                Facility Electrical Parameters
              </span>
              <span className="text-[11px] font-mono text-[#10b981] font-semibold">
                Instant Recalculation
              </span>
            </div>

            {/* Input 1: Facility Type */}
            <div className="space-y-2">
              <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                Facility Category
              </label>
              <select
                value={facilityType}
                onChange={(e) => setFacilityType(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#059669] transition"
              >
                {FACILITY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Input 2: Monthly Electricity Bill */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold uppercase text-slate-300">
                  Monthly Power Bill (DISCOM Utility)
                </label>
                <div className="text-sm font-mono font-bold text-[#38bdf8] bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  ₹{monthlyBill.toLocaleString("en-IN")} / mo
                </div>
              </div>
              <input
                type="range"
                min={50000}
                max={2500000}
                step={25000}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-[#0B66C3] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>₹50,000 / mo</span>
                <span>₹10,00,000</span>
                <span>₹25,00,000+ / mo</span>
              </div>
            </div>

            {/* Input 3: Connected Sanctioned Load (kW) */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold uppercase text-slate-300">
                  Contract Demand / Sanctioned Load
                </label>
                <div className="text-sm font-mono font-bold text-white bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  {sanctionedLoad} kW / kVA
                </div>
              </div>
              <input
                type="range"
                min={25}
                max={1500}
                step={25}
                value={sanctionedLoad}
                onChange={(e) => setSanctionedLoad(Number(e.target.value))}
                className="w-full accent-[#059669] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>25 kW</span>
                <span>500 kW</span>
                <span>1,500 kW</span>
              </div>
            </div>

            {/* Input 4: Usable Roof / Ground Area */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-mono font-bold uppercase text-slate-300">
                  Available Shadow-Free Roof Area
                </label>
                <div className="text-sm font-mono font-bold text-white bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                  {roofArea.toLocaleString("en-IN")} Sq. Ft
                </div>
              </div>
              <input
                type="range"
                min={1000}
                max={100000}
                step={2000}
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full accent-[#38bdf8] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>1,000 sq ft</span>
                <span>50,000 sq ft</span>
                <span>1,00,000+ sq ft</span>
              </div>
            </div>

            {/* Input 5: Grid Commercial Tariff */}
            <div className="space-y-2">
              <label className="block text-xs font-mono font-bold uppercase text-slate-300">
                Current Utility Tariff Slab
              </label>
              <select
                value={tariffRate}
                onChange={(e) => setTariffRate(Number(e.target.value))}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#059669] transition"
              >
                {TARIFF_OPTIONS.map((t) => (
                  <option key={t.label} value={t.rate}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Space Advisory Note */}
            {calculations.spaceConstrained && (
              <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-amber-200">
                <strong>Roof Area Constraint:</strong> Your available roof space ({roofArea.toLocaleString()} sq ft) supports up to {calculations.roofCapacityKwp} kWp. To meet 100% of your energy bill, elevated canopy or ground structures can expand capacity.
              </div>
            )}
          </div>

          {/* Right Column: Computed Feasibility Outputs (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            {/* Top Showcase: System Capacity & Payback */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/50 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <SunMedium className="w-5 h-5 text-[#10b981]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                    Engineered Feasibility Summary
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-[#38bdf8] bg-[#0B66C3]/20 px-2.5 py-1 rounded-md border border-[#0B66C3]/30">
                  Tier-1 EPC Specs
                </span>
              </div>

              {/* 2 Big Headline Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-slate-400">
                    Recommended Solar Capacity
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8] font-mono">
                      {calculations.recommendedKwp}
                    </span>
                    <span className="text-sm font-mono text-slate-300 font-bold">kWp</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans pt-1">
                    Mono-PERC / Bifacial 550Wp+ modules with multi-MPPT inverters.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-slate-400">
                    Estimated Simple Payback
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#10b981] font-mono">
                      {calculations.paybackYears}
                    </span>
                    <span className="text-sm font-mono text-slate-300 font-bold">Years</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans pt-1">
                    Free electricity generation for 21+ years following capital recovery.
                  </div>
                </div>
              </div>

              {/* 4 Supporting Financial Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">
                    Estimated Turnkey Capex
                  </div>
                  <div className="text-xl font-bold font-mono text-white">
                    ₹{(calculations.capex / 100000).toFixed(2)} Lakhs
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Includes structures, net-metering & commissioning.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">
                    Annual Tariff Savings
                  </div>
                  <div className="text-xl font-bold font-mono text-[#10b981]">
                    ₹{(calculations.annualSavings / 100000).toFixed(2)} Lakhs / yr
                  </div>
                  <div className="text-[10px] text-slate-500">
                    ~{calculations.annualGenerationKwh.toLocaleString("en-IN")} kWh / yr generated.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">
                    25-Year Net Benefit
                  </div>
                  <div className="text-xl font-bold font-mono text-[#38bdf8]">
                    ₹{(calculations.twentyFiveYearNetBenefit / 10000000).toFixed(2)} Crores
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Net cash flow after capex & maintenance reserves.
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                  <div className="text-[11px] font-mono text-slate-400">
                    Annual Carbon Offset
                  </div>
                  <div className="text-xl font-bold font-mono text-emerald-400 flex items-center gap-1.5">
                    <Leaf className="w-4 h-4" />
                    <span>{calculations.annualCo2Tons} Tons CO2</span>
                  </div>
                  <div className="text-[10px] text-slate-500">
                    Equivalent to ~{calculations.treesPlanted} mature trees planted.
                  </div>
                </div>
              </div>

              {/* Tax & Regulatory Advantage */}
              <div className="p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <strong className="text-white font-mono">Commercial Tax Advantage:</strong> Indian commercial and industrial entities are eligible for <strong>40% Accelerated Depreciation (AD)</strong> in Year 1 under Section 32 of the Income Tax Act, further accelerating cash payback.
                </div>
              </div>

              {/* 1-Click Action Button to Pre-fill RFP */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handlePreFillRfp}
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-[#059669] via-[#0B66C3] to-[#0B66C3] hover:from-[#047857] hover:to-[#09529e] text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2.5 transition-all duration-200 group"
                >
                  <FileSpreadsheet className="w-4 h-4 group-hover:scale-110 transition" />
                  <span>Pre-Fill Technical RFP with this Solar Scope (1-Click)</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>

                {prefilledSuccess && (
                  <div className="mt-2.5 p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-mono text-center flex items-center justify-center gap-2 animate-fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Feasibility parameters pre-filled into technical RFP below!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
