import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TabKey = "sip" | "lump" | "swp" | "goal" | "loan" | "ret";

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
  suffix = "",
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  suffix?: string;
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <label className="text-[12px] font-bold text-gray-600 font-primary uppercase tracking-wider">
          {label}
        </label>
        <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-xl border border-gray-100 shadow-sm focus-within:border-[#99C336] transition-all">
          <input
            type="number"
            aria-label={`${label} value`}
            value={value === 0 ? "" : value}
            placeholder="0"
            onChange={(e) => {
              const val = Number(e.target.value);
              if (val >= 0) onChange(val);
            }}
            className="w-16 text-right text-lg font-bold text-[#0a2540] font-heading bg-transparent outline-none"
          />
          <span className="text-[10px] font-semibold text-gray-600 font-primary">
            {suffix}
          </span>
        </div>
      </div>
      <div className="relative h-1.5 flex items-center">
        <input
          type="range"
          aria-label={label}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1 bg-gray-100 rounded-full appearance-none cursor-pointer accent-[#99C336]"
          style={{
            background: `linear-gradient(to right, #99C336 0%, #99C336 ${
              ((value - min) / (max - min)) * 100
            }%, #f1f5f9 ${((value - min) / (max - min)) * 100}%, #f1f5f9 100%)`,
          }}
        />
      </div>
    </div>
  );
};

interface OutputCardProps {
  title: string;
  totalValue: number;
  invested: number;
  returns: number;
  years: number;
  customLegend?: { label: string; value: number; color: string }[];
  note?: string;
}

const OutputSection = ({
  title,
  totalValue,
  invested,
  returns,
  years,
  customLegend,
  note,
}: OutputCardProps) => {
  const total = invested + returns;
  // const investedPercent = (invested / total) * 100;
  const returnsPercent = (returns / total) * 100;

  const legend = customLegend || [
    { label: "Invested Amount", value: invested, color: "#f97316" },
    { label: "Est. Returns", value: returns, color: "#99C336" },
  ];

  return (
    <div className="flex-1 p-8 lg:p-12 flex flex-col items-center bg-white border-l border-gray-100">
      <div className="w-full text-center mb-8">
        <p className="text-[#3e5266] text-sm  font-medium mb-2">
          {title} after{" "}
          <span className="font-bold text-[#0a2540]">{years} Years</span> will
          be
        </p>
        <h2 className="text-xl md:text-4xl font-bold text-[#0a2540] tracking-tight font-heading">
          {formatCurrency(totalValue)}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full mb-12">
        {/* Donut Chart */}
        <div className="relative w-48 h-48">
          <svg
            viewBox="0 0 42 42"
            className="w-full h-full transform -rotate-90 filter drop-shadow-sm"
          >
            {legend.map((item, idx) => {
              const prevTotal = legend
                .slice(0, idx)
                .reduce((acc, curr) => acc + curr.value, 0);
              const offset = -(prevTotal / total) * 100;
              const percent = (item.value / total) * 100;
              return (
                <circle
                  key={idx}
                  cx="21"
                  cy="21"
                  r="15.9"
                  fill="transparent"
                  stroke={item.color}
                  strokeWidth="6"
                  strokeDasharray={`${percent} ${100 - percent}`}
                  strokeDashoffset={offset}
                  className="transition-all duration-1000 ease-out"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">
              Returns
            </span>
            <div className="flex items-center">
              <input
                type="number"
                aria-label="Estimated returns percentage"
                value={
                  Math.round(returnsPercent) === 0
                    ? ""
                    : Math.round(returnsPercent)
                }
                placeholder="0"
                readOnly
                className="w-11 text-center text-lg font-bold text-[#0a2540] font-heading bg-transparent outline-none cursor-default"
              />
              <span className="text-sm font-bold text-[#0a2540]">%</span>
            </div>
          </div>
        </div>

        {/* Legend Items */}
        <div className="flex flex-col gap-6">
          {legend.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div
                className="w-1 h-10 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <div className="text-left">
                <p className="text-gray-600 text-[10px] font-bold uppercase tracking-wider font-primary">
                  {item.label}
                </p>
                <p className="text-xl font-bold text-[#0a2540] font-heading">
                  {formatCurrency(item.value)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="w-full max-w-sm py-4 bg-[#99C336] text-black rounded-xl font-bold uppercase tracking-[0.15em] text-[13px] hover:bg-[#86ac2f] transition-all shadow-lg shadow-green-500/10 active:scale-95">
        INVEST NOW
      </button>
      {note && (
        <p className="mt-6 text-[10px] text-gray-600 italic text-center max-w-xs">
          {note}
        </p>
      )}
    </div>
  );
};

const CalculatorWrapper = ({
  icon,
  title,
  desc,
  inputs,
  output,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  inputs: React.ReactNode;
  output: React.ReactNode;
}) => {
  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.   04)] flex flex-col lg:flex-row overflow-hidden mt-8">
      {/* Left Column: Inputs */}
      <div className="flex-1 p-8 lg:p-10 bg-[#fafbfc]">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#587A00] border border-gray-100">
            {icon}
          </div>
          <div>
            <h3 className="text-[16px] font-bold text-[#0a2540] font-heading">
              {title}
            </h3>
            <p className="text-[10px] font-bold text-gray-600 uppercase tracking-wider font-primary">
              {desc}
            </p>
          </div>
        </div>
        <div className="space-y-8">{inputs}</div>
      </div>
      {/* Right Column: Output */}
      {output}
    </div>
  );
};

const SIPCalc = () => {
  const [amount, setAmount] = useState(100);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const i = rate / 100 / 12;
  const n = years * 12;
  const totalValue = amount * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const invested = amount * n;
  const returns = totalValue - invested;

  return (
    <CalculatorWrapper
      icon={
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="16" y2="14" />
        </svg>
      }
      title="SIP Calculator"
      desc="Estimation based on historical growth"
      inputs={
        <>
          <div className="relative group max-w-xs mx-auto">
            <div className="absolute -top-2 left-5 px-2 bg-[#fafbfc] text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] z-10">
              Enter Amount
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-white border-2 border-[#99C336]/10 rounded-[16px] transition-all group-focus-within:border-[#99C336]">
              <span className="text-base font-bold text-[#0a2540] opacity-40 mt-0.5">
                ₹
              </span>
              <input
                type="number"
                aria-label="Investment amount"
                value={amount === 0 ? "" : amount}
                placeholder="0"
                onChange={(e) => setAmount(Number(e.target.value))}
                className="text-xl md:text-2xl font-bold text-[#0a2540] bg-transparent outline-none w-full text-center font-heading tracking-tight"
              />
            </div>
          </div>
          <Slider
            label="Select Duration"
            value={years}
            min={1}
            max={30}
            step={1}
            onChange={setYears}
            suffix=" Yrs"
          />
          <Slider
            label="Expected Rate of Return"
            value={rate}
            min={1}
            max={30}
            step={0.5}
            onChange={setRate}
            suffix=" %"
          />
        </>
      }
      output={
        <OutputSection
          title="Total value of your investment"
          totalValue={totalValue}
          invested={invested}
          returns={returns}
          years={years}
        />
      }
    />
  );
};

const LumpsumCalc = () => {
  const [amount, setAmount] = useState(5000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);

  const totalValue = amount * Math.pow(1 + rate / 100, years);
  const invested = amount;
  const returns = totalValue - invested;

  return (
    <CalculatorWrapper
      icon={
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="12" y1="8" x2="12" y2="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      }
      title="Lumpsum Calculator"
      desc="One-time investment estimation"
      inputs={
        <>
          <div className="relative group max-w-xs mx-auto">
            <div className="absolute -top-2 left-5 px-2 bg-[#fafbfc] text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] z-10">
              Enter Amount
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-white border-2 border-[#99C336]/10 rounded-[16px] transition-all group-focus-within:border-[#99C336]">
              <span className="text-base font-bold text-[#0a2540] opacity-40 mt-0.5">
                ₹
              </span>
              <input
                type="number"
                aria-label="Investment amount"
                value={amount === 0 ? "" : amount}
                placeholder="0"
                onChange={(e) => setAmount(Number(e.target.value))}
                className="text-xl md:text-2xl font-bold text-[#0a2540] bg-transparent outline-none w-full text-center font-heading tracking-tight"
              />
            </div>
          </div>
          <Slider
            label="Select Duration"
            value={years}
            min={1}
            max={30}
            step={1}
            onChange={setYears}
            suffix=" Yrs"
          />
          <Slider
            label="Expected Rate of Return"
            value={rate}
            min={1}
            max={30}
            step={0.5}
            onChange={setRate}
            suffix=" %"
          />
        </>
      }
      output={
        <OutputSection
          title="Total value of your investment"
          totalValue={totalValue}
          invested={invested}
          returns={returns}
          years={years}
        />
      }
    />
  );
};

const SWPCalc = () => {
  const [corpus, setCorpus] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(10000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(8);

  const i = rate / 100 / 12;
  const n = years * 12;
  let remaining = corpus;
  let totalWithdrawn = 0;
  for (let k = 0; k < n; k++) {
    remaining = remaining * (1 + i) - withdrawal;
    if (remaining < 0) {
      remaining = 0;
      break;
    }
    totalWithdrawn += withdrawal;
  }
  const returns = Math.max(0, remaining + totalWithdrawn - corpus);

  return (
    <CalculatorWrapper
      icon={
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      }
      title="SWP Calculator"
      desc="Systematic Withdrawal Plan estimation"
      inputs={
        <>
          <Slider
            label="Total Investment"
            value={corpus}
            min={100000}
            max={10000000}
            step={50000}
            onChange={setCorpus}
          />
          <Slider
            label="Monthly Withdrawal"
            value={withdrawal}
            min={1000}
            max={500000}
            step={1000}
            onChange={setWithdrawal}
          />
          <Slider
            label="Expected Return Rate"
            value={rate}
            min={1}
            max={20}
            step={0.5}
            onChange={setRate}
            suffix=" %"
          />
          <Slider
            label="Time Period"
            value={years}
            min={1}
            max={30}
            step={1}
            onChange={setYears}
            suffix=" Yrs"
          />
        </>
      }
      output={
        <OutputSection
          title="Final corpus remaining"
          totalValue={remaining}
          invested={corpus}
          returns={returns}
          years={years}
          customLegend={[
            { label: "Total Investment", value: corpus, color: "#f97316" },
            {
              label: "Total Withdrawn",
              value: totalWithdrawn,
              color: "#99C336",
            },
            { label: "Final Corpus", value: remaining, color: "#22c55e" },
          ]}
        />
      }
    />
  );
};

const GoalCalc = () => {
  const [target, setTarget] = useState(5000000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(12);

  const i = rate / 100 / 12;
  const n = years * 12;
  const sipNeeded = (target * i) / ((Math.pow(1 + i, n) - 1) * (1 + i));
  const invested = sipNeeded * n;
  const returns = target - invested;

  return (
    <CalculatorWrapper
      icon={
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      }
      title="Goal Calculator"
      desc="Planning for your future goals"
      inputs={
        <>
          <div className="relative group max-w-xs mx-auto">
            <div className="absolute -top-2 left-5 px-2 bg-[#fafbfc] text-[9px] font-bold text-gray-600 uppercase tracking-[0.2em] z-10">
              Target Amount
            </div>
            <div className="flex items-center justify-center gap-2 p-4 bg-white border-2 border-[#99C336]/10 rounded-[16px] transition-all group-focus-within:border-[#99C336]">
              <span className="text-base font-bold text-[#0a2540] opacity-40 mt-0.5">
                ₹
              </span>
              <input
                type="number"
                aria-label="Target amount"
                value={target === 0 ? "" : target}
                placeholder="0"
                onChange={(e) => setTarget(Number(e.target.value))}
                className="text-xl md:text-2xl font-bold text-[#0a2540] bg-transparent outline-none w-full text-center font-heading tracking-tight"
              />
            </div>
          </div>
          <Slider
            label="Years to Goal"
            value={years}
            min={1}
            max={40}
            step={1}
            onChange={setYears}
            suffix=" Yrs"
          />
          <Slider
            label="Expected Rate of Return"
            value={rate}
            min={1}
            max={30}
            step={0.5}
            onChange={setRate}
            suffix=" %"
          />
        </>
      }
      output={
        <OutputSection
          title="Monthly SIP required"
          totalValue={sipNeeded}
          invested={invested}
          returns={returns}
          years={years}
          note={"To reach your goal of " + formatCurrency(target)}
        />
      }
    />
  );
};

const HomeLoanCalc = () => {
  const [loan, setLoan] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const r = rate / 100 / 12;
  const n = years * 12;
  const emi = (loan * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayable = emi * n;
  const interest = totalPayable - loan;

  return (
    <CalculatorWrapper
      icon={
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      }
      title="Home Loan EMI Calculator"
      desc="Calculate your monthly home loan installments"
      inputs={
        <>
          <Slider
            label="Loan Amount"
            value={loan}
            min={100000}
            max={100000000}
            step={100000}
            onChange={setLoan}
          />
          <Slider
            label="Interest Rate"
            value={rate}
            min={5}
            max={15}
            step={0.1}
            onChange={setRate}
            suffix=" %"
          />
          <Slider
            label="Loan Tenure"
            value={years}
            min={1}
            max={30}
            step={1}
            onChange={setYears}
            suffix=" Yrs"
          />
        </>
      }
      output={
        <OutputSection
          title="Monthly EMI"
          totalValue={emi}
          invested={loan}
          returns={interest}
          years={years}
          customLegend={[
            { label: "Principal Amount", value: loan, color: "#99C336" },
            { label: "Total Interest", value: interest, color: "#f97316" },
          ]}
        />
      }
    />
  );
};

const RetirementCalc = () => {
  const [expense, setExpense] = useState(50000);
  const [age, setAge] = useState(30);
  const [retAge, setRetAge] = useState(60);
  const [inflation, setInflation] = useState(6);

  const yearsToRetire = retAge - age;
  const futureExpense = expense * Math.pow(1 + inflation / 100, yearsToRetire);
  const corpusNeeded = futureExpense * 12 * 25;

  return (
    <CalculatorWrapper
      icon={
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      }
      title="Retirement Calculator"
      desc="Estimate your retirement nest egg"
      inputs={
        <>
          <Slider
            label="Monthly Expense Today"
            value={expense}
            min={5000}
            max={500000}
            step={5000}
            onChange={setExpense}
          />
          <Slider
            label="Current Age"
            value={age}
            min={18}
            max={60}
            step={1}
            onChange={setAge}
          />
          <Slider
            label="Retirement Age"
            value={retAge}
            min={40}
            max={75}
            step={1}
            onChange={setRetAge}
          />
          <Slider
            label="Expected Inflation"
            value={inflation}
            min={1}
            max={12}
            step={0.5}
            onChange={setInflation}
            suffix=" %"
          />
        </>
      }
      output={
        <OutputSection
          title="Corpus required at retirement"
          totalValue={corpusNeeded}
          invested={corpusNeeded * 0.4}
          returns={corpusNeeded * 0.6}
          years={yearsToRetire}
        />
      }
    />
  );
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "sip", label: "SIP" },
  { key: "lump", label: "Lumpsum" },
  { key: "swp", label: "SWP" },
  { key: "goal", label: "Goal" },
  { key: "loan", label: "Home Loan" },
  { key: "ret", label: "Retirement" },
];

export default function CalculatorsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>("sip");

  return (
    <section className="py-16 bg-[#FAFAFA]" id="tools">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540] mb-4 font-heading">
            Financial Tools
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[17px]">
            Precise calculators to help you plan your investments and reach your
            financial goals with confidence.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex gap-8 border-b border-gray-100 overflow-x-auto whitespace-nowrap scrollbar-hide mb-6"
          role="tablist"
          aria-label="Financial calculators"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setActiveTab(tab.key)}
              role="tab"
              aria-selected={activeTab === tab.key}
              className={`pb-4 text-[12px] font-bold tracking-widest uppercase transition-all relative font-primary ${
                activeTab === tab.key
                  ? "text-[#587A00]"
                  : "text-gray-600 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.div
                  layoutId="tabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-[#99C336] rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "sip" && <SIPCalc />}
            {activeTab === "lump" && <LumpsumCalc />}
            {activeTab === "swp" && <SWPCalc />}
            {activeTab === "goal" && <GoalCalc />}
            {activeTab === "loan" && <HomeLoanCalc />}
            {activeTab === "ret" && <RetirementCalc />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

