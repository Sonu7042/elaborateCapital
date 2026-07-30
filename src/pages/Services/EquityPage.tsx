import { motion } from "framer-motion";
// import eqalityimg from '../../assets/service/equity.png';
import eqalityimg from "../../assets/service/quidity.jpg";
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";

const EquityPage = () => {
  return (
    <div
      className="relative min-h-screen font-sans"
      style={{
        backgroundImage: `url(${bgHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative overflow-hidden">
        <h1 className="text-2xl ml-5 md:text-4xl md:pl-[76px] mb-4 mt-8 font-bold heading">
          Equity <span className="text-[#99C336]"></span>
        </h1>
        <div className="h-96">
          <img
            src={eqalityimg}
            alt="Equity"
            className="w-full h-96 object-cover object-[center_25%]"
          />
        </div>
      </div>
      <div className="relative min-h-1/2 w-full bg-white/80 backdrop-blur-sm overflow-hidden pt-16 px-6 md:px-12 lg:px-24">
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
              <path d="M200 0 C 250 150, 150 300, 200 450 S 250 650, 200 800" />
              <path d="M300 0 C 320 200, 280 400, 300 600 S 320 750, 300 800" />
              <path d="M400 0 C 450 100, 350 250, 400 400 S 450 600, 400 800" />
              <path d="M500 0 C 520 200, 480 350, 500 500 S 520 700, 500 800" />
              <path d="M600 0 C 650 150, 550 400, 600 550 S 650 750, 600 800" />
              <path d="M700 0 C 720 250, 680 500, 700 750" />

              <path d="M0 100 C 150 150, 300 50, 450 100 S 650 150, 800 100" />
              <path d="M0 200 C 200 250, 400 150, 600 200 S 750 250, 800 200" />
              <path d="M0 300 C 150 250, 350 350, 500 300 S 700 250, 800 300" />
              <path d="M0 400 C 250 450, 500 350, 750 400" />
              <path d="M0 500 C 100 550, 300 450, 500 500 S 750 550, 800 500" />
              <path d="M0 600 C 200 650, 450 550, 700 600 S 800 650, 800 600" />
              <path d="M0 700 C 150 750, 400 650, 650 700 S 800 750, 800 700" />

              {/* Loops */}
              <circle cx="250" cy="250" r="40" />
              <circle cx="250" cy="250" r="80" />
              <circle cx="550" cy="550" r="60" />
              <circle cx="550" cy="550" r="110" />
              <circle cx="150" cy="650" r="50" />
              <circle cx="650" cy="150" r="70" />
            </g>
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl heading md:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 tracking-tight"
          >
            Explore the World of Equity & {" "}
            <span className="text-gray-900">ETFs with Confidence</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-gray-600 leading-relaxed max-w-7xl"
          >
            <p className="text-lg heading font-medium text-gray-800">
              Elaborate Capital Investment Services Pvt. Ltd. is an Authorized Person of Edelweiss Broking Ltd., a member of BSE, NSE, and MCX, regulated by SEBI, offering trusted and transparent investment solutions for modern investors.</p>

            <p className="para">
              At Elaborate Capital, we provide reliable execution services across cash equities, fixed income, equity derivatives, mutual funds, and Exchange Traded Funds (ETFs). Backed by a team of experienced and qualified market professionals, we go beyond simple order execution by delivering strategic market guidance and efficient trade support tailored to your investment goals. Our clients gain seamless access to major Indian stock exchanges along with competitive brokerage, transparent pricing, and dependable execution services.</p>

            <p className="para">
              We believe successful investing begins with strong client relationships built on trust, transparency, and personalized attention. Whether you are an individual investor or a professional institution, our dedicated team ensures smooth account management, secure custody services, timely settlement processing, dividend and coupon handling, and corporate action updates. We also provide hassle-free portfolio and stock transfer assistance through our specialized support team, helping clients manage their investments with confidence and ease.</p>
          </motion.div>

          {/* Contact Us Button */}
          {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12"
                >
                    <button className="group relative p-0.5 rounded-full bg-linear-to-r from-red-500 via-green-400 to-blue-500 hover:shadow-lg transition-all active:scale-95">
                        <div className="px-8 py-3 rounded-full bg-white group-hover:bg-gray-50 transition-colors">
                            <span className="text-gray-900 font-medium">Contact us</span>
                        </div>
                    </button>
                </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default EquityPage;
