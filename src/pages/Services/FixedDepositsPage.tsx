import { motion } from "framer-motion";
import heroBanner from "../../assets/service/fixdeposite.jpg";
import { Link } from "react-router-dom";
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";

const FixedDepositsPage = () => {
  return (
    <div className="min-h-screen font-sans">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Page Heading */}
        <h1 className="text-2xl heading ml-5 md:text-4xl md:pl-20 mb-4 mt-8 font-bold">
          Fixed <span className="text-[#99C336]">Deposits</span>
        </h1>

        <div className="relative h-[450px] w-full overflow-hidden pb-12 px-6 md:px-12">
          <img
            src={heroBanner}
            alt="Fixed Deposits"
            className="w-full h-full object-cover object-center rounded-2xl shadow-xl border border-gray-100"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-lg para text-gray-600 leading-relaxed mb-6">
            Fixed Deposits are one of the oldest and most trusted investment
            instruments, widely used for stable and predictable returns. When it
            comes to assured income, selecting the right savings option plays a
            key role.
          </p>

          <p className="text-lg para text-gray-600 leading-relaxed">
            Fixed Deposits allow investors to earn steady returns with
            relatively low risk while building wealth over time. Company Fixed
            Deposits are deposits placed with companies that offer a fixed rate
            of return over a defined period.
          </p>
        </motion.div>

        {/* Types of Companies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <h2 className="text-2xl heading font-bold text-gray-900 mb-6">
            Types of Companies Offering Fixed Deposits
          </h2>

          <ul className="space-y-3 para text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              Financial Institutions
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              Non-Banking Financial Companies (NBFCs)
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              Manufacturing Companies
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              Housing Finance Companies
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              Government-Owned Companies
            </li>
          </ul>
        </motion.div>

        {/* Features & Benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl heading font-bold text-gray-900 mb-6">
            Features and Benefits of Company Fixed Deposits
          </h2>

          <ul className="space-y-5 para text-gray-700 md:text-lg">
            <li className="flex gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              Company Fixed Deposits offer comparatively higher returns than
              banks.
            </li>

            <li>
              <div className="flex gap-3">
                <span className="text-[#99C336] font-bold text-xl">•</span>
                <div>
                  Choose the best tenure for you from a wide range as per your
                  convenience. You can choose how frequently you want to receive
                  your interest payments:
                  <ul className="mt-4 space-y-2">
                    <li className="flex gap-3">
                      <span className="text-gray-400">-</span> Maturity
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-400">-</span> Yearly
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-400">-</span> Half-yearly
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-400">-</span> Quarterly
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gray-400">-</span> Monthly
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="flex gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              Company Fixed Deposits generally offer higher interest rates
              compared to traditional bank fixed deposits, making them an
              attractive option for investors seeking better returns.
            </li>

            <li className="flex gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              Investors can choose flexible tenures based on their financial
              goals and liquidity needs, along with multiple interest payout
              options, including maturity payout, yearly, half-yearly,
              quarterly, and monthly interest payouts.
            </li>

            <li className="flex gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              <span>
                These deposits are non-transferable, ensuring safety from
                unauthorized use or fraud in case of misplaced certificates.
                Investors also have the option of premature withdrawal, subject
                to applicable penalties and terms and conditions.
              </span>
            </li>

            <li className="flex gap-3">
              <span className="text-[#99C336] font-bold text-xl">•</span>
              <span>
                Company Fixed Deposits allow investors to diversify risk by
                spreading investments across multiple companies and industries,
                helping reduce exposure to any single sector. With a wide range
                of issuers available in the market, investors can renew or
                restructure their deposits based on evolving financial needs.
                Additionally, these deposits offer attractive interest rates
                that are revised periodically based on market conditions.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* CTA */}
        <div className="mt-16 text-start">
          <Link to="/contact">
            <button
              className="relative mt-0 p-[2px] rounded-full hover:cursor-pointer
                    bg-linear-to-r from-[#7ECA9C] via-[#0D3052] to-red-500 
                    bg-size-[200%_100%]
                    hover:shadow-lg active:scale-95 transition-all"
              style={{
                animation: "borderRun 4s linear infinite",
              }}
            >
              <div className="px-8 py-2.5 rounded-full bg-white">
                <span className="text-gray-900 heading font-medium text-sm">
                  Contact us.
                </span>
              </div>

              <style>
                {`
                      @keyframes borderRun {
                        from { background-position: 0% 0%; }
                        to { background-position: 500% 0%; }
                      }
                    `}
              </style>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixedDepositsPage;
