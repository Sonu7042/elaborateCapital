import { motion } from "framer-motion";
import bannerImg from "../../assets/service/community.jpg";
import { Link } from "react-router-dom";
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";

const CommodityPage = () => {
  const offerings = [
    "Hedging",
    "Arbitrage",
    "Trading for speculative or investment purposes",
    "Direct Market Access connectivity",
    "Complete Execution and Clearing services.",
  ];

  const products = [
    "Gold",
    "Silver",
    "Copper",
    "Aluminium",
    "Zink",
    "Lead",
    "Nickel",
    "Steel",
    "Cotton",
    "Cummins",
    "Other Agree and Metal contacts.",
  ];

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
        <h1 className="text-2xl heading ml-5 md:text-4xl md:pl-32 mb-4 mt-8 font-bold">
          Commodity{" "}
        </h1>

        {/* Banner Section */}
        <div className="relative w-full max-w-7xl mx-auto px-6 overflow-hidden pb-12">
          <div className="aspect-21/9 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
            <img
              src={bannerImg}
              alt="Commodity Services"
              className="w-full h-full object-cover object-center"
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

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl"
          >
            <p className="text-xl heading text-gray-800 font-semibold mb-8 leading-relaxed">
              Commodity Trading Services with MCX Access
            </p>

            <ul className="space-y-4 para mb-12">
              {offerings.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 text-lg text-gray-700"
                >
                  <span className="w-2 h-2 bg-[#99C336] rounded-full"></span>
                  {item}
                </motion.li>
              ))}
            </ul>

            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mb-16 shadow-sm">
              <p className="text-lg para text-gray-700 leading-relaxed">
                  We are an Authorized Person of Edelweiss Broking Ltd., a member of MCX and NCDEX, enabling us to offer comprehensive commodity trading solutions including hedging, arbitrage, speculative trading, and investment-based strategies. Clients also benefit from direct market access connectivity along with complete execution and clearing services, ensuring efficient and transparent trading operations across commodity markets.
              </p>
              <br />
              <p className="text-lg para text-gray-700 leading-relaxed">
                  Access global bullion markets and participate in futures and derivative-based trading through a transparent execution process. Clients can request live pricing from our dealing desk for specific contract quantities. For rolling spot or forward contracts, positions can be maintained against a margin deposit. Financing and forward charges are linked to prevailing interest rates, and clients are advised to confirm current rates prior to trading for better cost planning and risk management.
              </p>
            </div>

            <h2 className="text-2xl heading font-bold text-gray-900 mb-8 border-l-4 border-[#99C336] pl-4">
                Access to MCX & Commodity Derivatives Products</h2>
              <p className="text-lg para text-gray-700 leading-relaxed">
                  We provide access to a wide range of MCX-listed metals and agricultural commodity derivatives, including Gold, Silver, Copper, Aluminium, Zinc, Lead, Nickel, Steel, Cotton, and other metal and agri-based contracts. This enables investors and traders to diversify their portfolio across multiple commodity segments and participate in both metals and agricultural markets through a single integrated platform.
              </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className="px-4 py-3 heading bg-white border border-gray-100 rounded-xl text-center font-medium text-gray-700 shadow-sm hover:border-[#99C336]/50 transition-colors"
                >
                  {product}
                </motion.div>
              ))}
            </div>

            {/* Contact Us Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-gray-100"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommodityPage;
