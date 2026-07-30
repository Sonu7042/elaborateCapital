import { motion } from "framer-motion";
import serviceImage from "../../assets/HeroImages/Welcome-Best.png";
import { Link } from "react-router-dom";

const InvestmentService = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl lg:text-5xl  heading  text-gray-900 leading-tight mb-6 mt-4">
              {/* Welcome Best
              Investment Services */}
              Personalized Financial Solutions for Long-Term Growth
            </h2>

            <p className="text-gray-600 para text-base md:text-[18px] leading-relaxed mb-10">
              At Elaborate Capital, we deliver tailored investment and financial
              strategies that help individuals and families build, manage, and
              protect their wealth with confidence and clarity.
            </p>

            {/* <button className="group relative p-px rounded-full bg-linear-to-r from-red-500 to-green-500 hover:shadow-lg transition-all active:scale-95 inline-block">
              <div className="px-8 py-3 rounded-full bg-white">
                <span className="text-gray-900 font-medium">More About Us</span>
              </div>
            </button> */}

            <Link
              to="/about"
              className="relative mt-5 p-[2px] rounded-full hover:cursor-pointer
                    bg-linear-to-r from-[#7ECA9C] via-[#0D3052] to-red-500 
                    bg-size-[200%_100%]
                    hover:shadow-lg active:scale-95 transition-all inline-block"
              style={{
                animation: "borderRun 4s linear infinite",
              }}
            >
              <div className="px-8 py-2.5 rounded-full bg-white">
                <span className="text-gray-900 heading font-medium text-sm">
                  More About Us
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
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-xl lg:max-w-none"
          >
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute -inset-10 bg-linear-to-tr from-green-50/50 to-blue-50/50 blur-3xl -z-10 rounded-full" />

              <img
                src={serviceImage}
                alt="Investment Services Illustration"
                className="w-10/12 h-auto drop-shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentService;
