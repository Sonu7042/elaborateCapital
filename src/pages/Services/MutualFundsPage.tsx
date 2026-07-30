import { motion } from "framer-motion";
import bannerImg from "../../assets//service/mutualfund.jpg";
import advImg from "../../assets/service/mutualfundAdvantage.jpg";
import illustrationImg2 from "../../assets/service/mutaulfubds4.jpg";
import illustrationImg from "../../assets/service/mutualfubds5.jpg";
import { Link } from "react-router-dom";
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";

const MutualFundsPage = () => {
  const advantages = [
    {
      title: "Vast Fund Choice:",
      desc: "Access a wide range of mutual funds from leading Asset Management Companies (AMCs), covering equity, debt, hybrid, and tax-saving options designed to match different financial goals and risk profiles.",
    },
    {
      title: "User-Friendly Platform:",
      desc: "A simple and intuitive investment platform that allows you to search, compare, and invest in mutual funds with ease, ensuring a smooth and hassle-free experience.",
    },
    {
      title: "Research & Analysis:",
      desc: "Gain access to expert insights, detailed fund analysis, and research-backed recommendations to help you make informed and confident investment decisions.",
    },
    {
      title: "Seamless Transactions:",
      desc: "Stay informed with regular updates on market trends, fund performance, and new investment opportunities to stay ahead in your financial planning journey.",
    },
    // {
    //   title: "Market Updates",
    //   desc: "Stay updated with the latest mutual fund trends, market movements, and investment opportunities through regular updates and expert insights.",
    // },
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
        <h1 className="text-2xl heading ml-5 md:text-4xl md:pl-44 mb-8 mt-3 font-bold">
          Mutual <span className="text-[#99C336]">Funds</span>
        </h1>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-20 pb-12">
          <div className="h-[300px] md:h-[450px] w-full overflow-hidden rounded-2xl shadow-xl">
            <img
              src={bannerImg}
              alt="Mutual Funds"
              className="w-full h-full object-cover"
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
              <path d="M0 100 C 150 150, 300 50, 450 100 S 650 150, 800 100" />
              <circle cx="250" cy="250" r="40" />
              <circle cx="550" cy="550" r="110" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 relative z-10">
          {/* What is Mutual Fund? */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl heading font-bold text-gray-900 mb-6 font-primary">
                 Invest Smart: Discover Mutual Funds
              </h2>

              <p className="text-lg para text-gray-600 leading-relaxed mb-8">
                Get expert financial guidance and smart investment solutions tailored to your financial goals. Elaborate Capital helps you build long-term wealth through professionally managed mutual fund investments and disciplined financial planning.
              </p>

              <h2 className="text-3xl heading font-bold text-gray-900 mb-6 font-primary">
                Build Wealth Starting with Just Rs. 500
              </h2>

              <p className="text-lg para text-gray-600 leading-relaxed">
                Mutual funds are a powerful and accessible way to grow your wealth and achieve long-term financial goals. Whether you are a beginner or an experienced investor, you can start your SIP journey with as little as Rs. 500 and gradually build a strong, diversified investment portfolio with confidence.</p>
            </motion.div>

            <div className="hidden lg:flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src={illustrationImg}
                  alt="Process"
                  className="rounded-lg w-full h-auto opacity-80"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-lg"
              >
                <img
                  src={illustrationImg2}
                  alt="Growth"
                  className="w-full rounded-lg h-auto opacity-80"
                />
              </motion.div>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl heading font-bold text-gray-900 mb-12 flex items-center gap-3"
            >
              <span className="w-1 h-8 bg-[#99C336] rounded-full"></span>
             Why Choose Elaborate Capital for Your Mutual Fund Investments
            </motion.h3>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="flex-1 space-y-10">
                {advantages.map((adv, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <h4 className="text-xl heading font-bold text-gray-900 mb-3">
                      {adv.title}:
                    </h4>

                    <p className="text-gray-600 para leading-relaxed text-lg">
                      {adv.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:w-1/3 shrink-0"
              >
                <img
                  src={advImg}
                  alt="Advantages"
                  className="w-full h-auto rounded-2xl shadow-lg border border-gray-100"
                />
              </motion.div>
            </div>
          </div>

          {/* Contact Us CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 border-t border-gray-100 pt-12 text-start"
          >
            <p className="text-xl text-gray-700 mb-8">
              Start your mutual fund investment journey today and build a secure financial future through disciplined investing and expert guidance.</p>

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
                  <span className="text-gray-900 font-medium text-sm">
                    Start Your SIP Today
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
        </div>
      </div>
    </div>
  );
};

export default MutualFundsPage;
