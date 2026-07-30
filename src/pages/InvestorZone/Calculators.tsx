import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Search } from "lucide-react";
import calculatorImg from "../../assets/InvestorZone/calculator.png";

/* ─────────────────────────────────────────────
   SVG Icons — Premium flat style
───────────────────────────────────────────── */

const SipIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <rect x="6" y="46" width="12" height="28" rx="3" fill="#90CAF9" />
    <rect x="22" y="36" width="12" height="38" rx="3" fill="#42A5F5" />
    <rect x="38" y="24" width="12" height="50" rx="3" fill="#1E88E5" />
    <rect x="54" y="14" width="12" height="60" rx="3" fill="#1565C0" />
    <polyline
      points="10,44 28,32 44,20 60,10 74,4"
      stroke="#4CAF50"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const EducationIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <polygon points="40,6 76,24 40,42 4,24" fill="#1A237E" />
    <path d="M20,34 L20,58 Q40,68 60,58 L60,34" fill="#3949AB" />
    <circle cx="70.5" cy="52" r="5" fill="#E53935" />
  </svg>
);

const MarriageIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <circle
      cx="28"
      cy="44"
      r="18"
      stroke="#FFA000"
      strokeWidth="7"
      fill="none"
    />
    <circle
      cx="52"
      cy="44"
      r="18"
      stroke="#FFD54F"
      strokeWidth="7"
      fill="none"
    />
    <circle cx="27" cy="22" r="7" fill="#81D4FA" />
  </svg>
);

const RetirementIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <path
      d="M40,10 A30,18 0 0 1 70,28 L10,28 A30,18 0 0 1 40,10 Z"
      fill="#795548"
    />
    <line x1="40" y1="28" x2="40" y2="62" stroke="#6D4C41" strokeWidth="3" />
    <circle cx="24" cy="50" r="6" fill="#FFCCBC" />
  </svg>
);

const EmiLoanIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <rect x="14" y="20" width="52" height="34" rx="5" fill="#66BB6A" />
    <rect x="14" y="30" width="52" height="10" fill="#388E3C" />
    <text
      x="34"
      y="41"
      textAnchor="middle"
      fill="#1B5E20"
      fontSize="12"
      fontWeight="bold"
    >
      ₹
    </text>
  </svg>
);

const SipStepUpIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <rect x="6" y="52" width="14" height="22" rx="3" fill="#42A5F5" />
    <rect x="24" y="40" width="14" height="34" rx="3" fill="#FF7043" />
    <rect x="67" y="14" width="14" height="20" rx="3" fill="#FF7043" />
    <path
      d="M50,28 L60,18 L70,28"
      stroke="#D32F2F"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="60"
      y1="18"
      x2="60"
      y2="40"
      stroke="#D32F2F"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const SipDelayIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <rect x="6" y="16" width="44" height="30" rx="5" fill="#43A047" />
    <circle
      cx="58"
      cy="55"
      r="20"
      fill="#FFF9C4"
      stroke="#F9A825"
      strokeWidth="3"
    />
    <line
      x1="58"
      y1="44"
      x2="58"
      y2="55"
      stroke="#F57F17"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <polyline
      points="58,55 50,60 58,66"
      stroke="#F57F17"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const SipLumpsumIcon = () => (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 h-10"
  >
    <ellipse cx="44" cy="58" rx="24" ry="18" fill="#43A047" />
    <text
      x="44"
      y="63"
      textAnchor="middle"
      fill="#FFD740"
      fontSize="18"
      fontWeight="bold"
    >
      $
    </text>
    <rect x="10" y="10" width="30" height="20" rx="3" fill="#FFD740" />
    <text
      x="25"
      y="25"
      textAnchor="middle"
      fill="#FFA000"
      fontSize="12"
      fontWeight="bold"
    >
      L
    </text>
  </svg>
);

interface Calc {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
  // Position for desktop layout (relative to center)
  positionX: string;
  positionY: string;
}

const calculators: Calc[] = [
  // Left side
  {
    id: "sip",
    label: "SIP",
    href: "/investor-zone/calculators/sip",
    icon: <SipIcon />,
    positionX: "-left-4 md:-left-12 lg:-left-40",
    positionY: "top-10 md:top-20",
  },
  {
    id: "sip-lumpsum",
    label: "SIP+Lumpsum",
    href: "/investor-zone/calculators/sip-lumpsum",
    icon: <SipLumpsumIcon />,
    positionX: "-left-8 md:-left-20 lg:-left-64 ",
    positionY: "top-32 md:top-48 lg:top-[220px]",
  },
  {
    id: "sip-step-up",
    label: "SIP Step Up",
    href: "/investor-zone/calculators/sip-step-up",
    icon: <SipStepUpIcon />,
    positionX: "-left-4 md:-left-12 lg:-left-40 ",
    positionY: "top-56 md:top-72 lg:top-[350px]",
  },
  {
    id: "sip-delay",
    label: "SIP Delay",
    href: "/investor-zone/calculators/sip-delay",
    icon: <SipDelayIcon />,
    positionX: "left-4 md:left-4 lg:-left-12",
    positionY:
      "bottom-4 md:bottom-8 lg:bottom-12 lg:top-[450px] xl:top-[480px]",
  },

  // Right side
  {
    id: "education",
    label: "Education",
    href: "/investor-zone/calculators/education",
    icon: <EducationIcon />,
    positionX: "-right-4 md:-right-12 lg:-right-40",
    positionY: "top-10 md:top-20",
  },
  {
    id: "marriage",
    label: "Marriage",
    href: "/investor-zone/calculators/marriage",
    icon: <MarriageIcon />,
    positionX: "-right-8 md:-right-20 lg:-right-64",
    positionY: "top-32 md:top-48 lg:top-[220px]",
  },
  {
    id: "retirement",
    label: "Retirement",
    href: "/investor-zone/calculators/retirement",
    icon: <RetirementIcon />,
    positionX: "-right-4 md:-right-12 lg:-right-40 ",
    positionY: "top-56 md:top-72 lg:top-[350px]",
  },
  {
    id: "emi-loan",
    label: "EMI / Loan",
    href: "/investor-zone/calculators/emi-loan",
    icon: <EmiLoanIcon />,
    positionX: "right-4 md:right-4 lg:-right-12",
    positionY:
      "bottom-4 md:bottom-8 lg:bottom-12 lg:top-[450px] xl:top-[480px]",
  },
];

const CalculatorPad = ({ calc }: { calc: Calc }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      onClick={() => navigate(calc.href)}
      className={`absolute ${calc.positionX} ${calc.positionY} z-20 cursor-pointer`}
    >
      <div className="relative group">
        {/* Fixed width plate with same dimensions for all */}
        <div className="bg-white min-w-28 md:w-44 py-2.5 md:py-4 rounded-lg shadow-md border-[1.5px] border-transparent transition-all duration-300 flex justify-center items-center">
          <div className="absolute inset-0 rounded-sm border border-red-500/30 -m-px"></div>
          <div className="absolute inset-0 rounded-sm border-l-2 border-b-2 border-[#99C336] -m-px"></div>

          <span className="relative z-10 text-xs md:text-base lg:text-lg font-bold text-gray-800 text-center leading-tight px-1">
            {calc.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const CalculatorsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCalculators = calculators.filter((calc) =>
    calc.label.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white overflow-x-hidden pt-20">
      {/* ── Header Section ── */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <h1 className="text-5xl font-bold text-[#1a2a3a]">Calculators</h1>

        <div className="relative w-full md:w-80">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search calculators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm focus:ring-2 focus:ring-[#3b30ad]/20 focus:border-[#3b30ad] outline-none transition-all"
          />
        </div>
      </div>

      {/* ── Main Interactive Section ── */}
      <section className="relative max-w-6xl mx-auto px-6 py-12 md:py-0 flex justify-center items-center overflow-visible">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 text-yellow-400 opacity-60">
          ✦
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-4 h-4 text-yellow-400 opacity-60">
          ✦
        </div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 text-yellow-400 opacity-40 animate-pulse">
          ✦
        </div>

        <div className="relative w-full max-w-md md:max-w-140 lg:max-w-122 xl:max-w-140">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full relative z-10"
          >
            <img
              src={calculatorImg}
              alt="Investor Calculators Illustration"
              className="w-full h-auto "
            />
          </motion.div>

          <div className="absolute inset-0 hidden md:block">
            {filteredCalculators.map((calc) => (
              <CalculatorPad key={calc.id} calc={calc} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile Interactive Grid ── */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:hidden bg-gray-50/50 rounded-t-[3rem] mt-8">
        {/* <div className="flex flex-col items-center mb-10"> */}
        {/* <span className="text-[#99C336] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Financial Suite</span>
          <h2 className="text-2xl font-black text-gray-900">Toolbox</h2> */}
        {/* </div> */}

        <div className="grid grid-cols-3 gap-x-4 gap-y-10">
          {filteredCalculators.map((calc, index) => (
            <motion.div
              key={calc.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => navigate(calc.href)}
              className="flex flex-col items-center gap-3 cursor-pointer active:scale-95 transition-transform"
            >
              <div className="relative group">
                <div className="absolute inset-[-4px] rounded-full bg-linear-to-tr from-red-500/20 to-[#99C336]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 h-1.5 bg-linear-to-r from-red-500 to-[#99C336]"></div>

                  <div className="scale-75">{calc.icon}</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-gray-500 text-center uppercase tracking-wider leading-tight w-full truncate px-1">
                {calc.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
    </div>
  );
};

export default CalculatorsPage;
