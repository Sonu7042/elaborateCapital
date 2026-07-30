import { motion } from "framer-motion";
import heroBanner from "../../assets/service/futureoptions.jpg";
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";
// const heroBanner = "/service/future_options_hero.png";

const FutureOptionsPage = () => {
  const benefits = [
    "Trade financials, stocks and indices, precious and base metals, oil and energies, agricultural, currencies.",
    "Best execution and price transparency",
    "Trade spreads and strategies on futures and options",
    "System and algorithmic trading offered online",
    "Multiple order types including Good ‘Til Cancelled (GTC) orders, stop-limits and synthetic orders",
    "Benefit from our dedicated and specialist Account Executives and support staff",
    "Segregated client accounts",
    "Lodge acceptable stock and other collateral to support initial margins on futures and written option positions",
    "Execution and clearing tools available for Fund Managers and Commodity Trading Advisors (CTAs)",
    "Other clearing and execution services available.",
  ];

  // const icons = ["🌐", "⚡", "📊", "🤖", "📑", "🎧", "🛡️", "💎", "⚙️", "🛠️"];
  const icons = [""];

  return (
    <div className="bg-white min-h-screen">
      {/* <div
                    className="text-white text-4xl md:text-6xl font-bold max-w-4xl"
                >
                    Future & <span className="text-[#99C336]">Options</span>
                </div> */}
      <div
        className="relative overflow-hidden font-sans"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-2xl heading ml-5 md:text-4xl md:pl-32 mb-4 mt-8 font-bold">
          Future & <span className="text-[#99C336]">Options</span>
        </h1>
        {/* Hero Section */}
        <div className="relative w-full max-w-7xl mx-auto px-6 overflow-hidden sm:pb-12">
          <div className="sm:aspect-21/9  rounded-xl overflow-hidden  border border-gray-100">
            <img
              src={heroBanner}
              alt="Future and Options"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Topographic Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" stroke="#22c55e" strokeWidth="1">
              <path d="M100 0 C 120 100, 80 200, 100 300 S 120 500, 100 600 S 80 750, 100 800" />
              <circle cx="250" cy="250" r="40" />
              <circle cx="550" cy="550" r="110" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-20"
          >
            <h2 className="text-3xl heading font-bold text-gray-900 mb-6">
              Advanced Futures & Options Trading Solutions
            </h2>
            <p className="text-lg para text-gray-600 leading-relaxed mb-6">
              Elaborate Capital has been offering Futures & Options (F&O)
              trading services for over 6 years, providing clients with access
              to major Indian derivatives markets. Through our advanced trading
              platforms mobile, desktop, and web or via our fully supported
              dealing desk, clients can efficiently place trades, track
              executions, and receive timely assistance, guidance, and market
              support from experienced professionals.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl heading font-bold text-gray-900 mb-8 flex items-center gap-3"
            >
              <span className="w-1 h-8 bg-[#99C336] rounded-full"></span>
              H- Key Benefits of Trading Futures & Options with Us
            </motion.h3>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4 text-gray-700 md:text-lg"
                >
                  <span className="text-xl pt-1">{icons[index] || ""}</span>
                  <span className="leading-relaxed para">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <p className="text-lg para text-gray-600 leading-relaxed mb-6">
            We enable trading across a wide range of asset classes including
            equities, indices, currencies, precious and base metals, crude oil,
            energy, and agricultural commodities. Clients benefit from
            best-in-class execution quality, transparent pricing, and the
            ability to execute complex trading strategies such as spreads and
            advanced options structures. Our platform also supports system-based
            and algorithmic trading for enhanced efficiency and precision.
          </p>
          <p className="text-lg para text-gray-600 leading-relaxed mb-6">
            Additional advantages include multiple order types such as
            Good-Till-Cancelled (GTC), stop-loss, stop-limit, and synthetic
            orders, giving traders greater control and flexibility. Clients are
            supported by dedicated account executives and specialist support
            teams, ensuring smooth trading experiences and informed
            decision-making.
          </p>
          <p className="text-lg para text-gray-600 leading-relaxed mb-6">
            We maintain segregated client accounts for maximum security and
            compliance. Investors can also utilize approved securities and
            collateral to meet margin requirements for futures and written
            options positions. Furthermore, we provide execution and clearing
            solutions designed for fund managers and Commodity Trading Advisors
            (CTAs), along with comprehensive operational support for
            institutional trading needs.
          </p>
          {/* CTA Section */}
          {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                        >
                        <button className="group relative p-0.5 rounded-full bg-linear-to-r from-red-500 via-green-400 to-blue-500 hover:shadow-lg transition-all active:scale-95">
                        <div className="px-12 py-4 rounded-full bg-white group-hover:bg-gray-50 transition-colors">
                        <span className="text-gray-900 font-bold">Contact us to start trading</span>
                        </div>
                        </button>
                        </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default FutureOptionsPage;
