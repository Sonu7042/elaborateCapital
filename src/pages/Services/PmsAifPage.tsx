import { motion } from "framer-motion";
import bannerImg from "../../assets/service/pmsaf.jpg";
import { Link } from "react-router-dom";
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";

const PmsAifPage = () => {
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
        {/* Header Title */}
        <h1 className="text-2xl heading ml-5 md:text-4xl md:pl-20 mb-4 mt-8 font-bold">
          PMS / <span className="text-[#99C336]">AIF</span>
        </h1>

        {/* Banner Section */}
        <div className="h-auto md:h-96 overflow-hidden pb-12 px-6 md:px-20">
          <img
            src={bannerImg}
            alt="PMS / AIF"
            className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-100"
          />
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

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 relative z-10">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl space-y-16"
          >
            {/* PMS Section */}
            <section>
              <h2 className="text-3xl heading font-bold text-gray-900 mb-6 underline decoration-[#99C336] decoration-4 underline-offset-8">
            Portfolio Management Services (PMS)
              </h2>
              <div className="space-y-6 text-lg para text-gray-600 leading-relaxed">
                <p>
                 Portfolio Management Services (PMS) is a customized and professionally managed investment solution designed to capture market-linked opportunities through well-structured investment strategies. It is particularly suitable for high net worth individuals who are willing to take calculated risks and gain direct exposure to capital markets by investing in a diversified basket of securities, including equities, fixed income instruments, structured products, and more.
                </p>
                <p>
                 Elaborate Capital is empanelled with a wide network of reputed third-party PMS providers across India, including leading Asset Management Companies (AMCs) and financial institutions. These partners offer specialized PMS strategies designed to meet diverse investment objectives and risk profiles.
                </p>
                
              </div>
            </section>

            {/* AIF Section */}
            <section>
              <h2 className="text-3xl heading font-bold text-gray-900 mb-6 underline decoration-[#99C336] decoration-4 underline-offset-8">
                Alternative Investment Funds (AIF)
              </h2>
              <div className="space-y-6 text-lg para text-gray-600 leading-relaxed">
                <p>
                 Alternative Investment Funds (AIFs) include investment avenues such as private equity, real estate, hedge funds, and venture capital funds, as well as advanced market strategies like long-short and arbitrage positions in equities and bonds. These investment structures go beyond traditional asset classes and are designed for investors seeking enhanced portfolio diversification and sophisticated investment approaches.
                </p>
                <p>
                 Since alternative investments often behave differently from conventional equity and debt markets, they can help improve portfolio diversification, reduce overall risk, and potentially enhance long-term returns. Elaborate Capital Investment is empanelled with leading third-party AIF providers, enabling investors to access exclusive investment opportunities and build a more diversified and growth-oriented portfolio.
                </p>
               

                <Link to="/contact">
                  <button
                    className="relative mt-5 p-[2px] rounded-full hover:cursor-pointer
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
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PmsAifPage;
