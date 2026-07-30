import React from "react";
import { motion } from "framer-motion";
import whyChooseImg from "../../assets/HeroImages/whychoose.jpeg";

const WhyChooseSection: React.FC = () => {


  return (
    <section className="py-20 bg-[#EEF3EA] overflow-hidden" 
    style={{ backgroundImage: `url(${whyChooseImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Side: Content */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading font-bold text-3xl md:text-[42px] leading-tight text-[#0D3052] mb-2">
                {/* Trusted Financial Expertise for <span className="text-[#99C336] italic"> Long-Term </span> Growth */}
                Smart Financial Strategies for Secure Wealth Growth  <span className="text-[#99C336] italic"> Why </span> 
              </h2>
              <p className="para text-gray-600 text-lg md:text-base max-w-xl mb-6 leading-relaxed">
                At Elaborate Capital, we combine smart financial planning with personalized wealth strategies to deliver secure, sustainable growth through trusted, transparent, and expert-driven guidance.
              </p>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Card 1: Research Driven Investment Strategies (FEATURED) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#F2F7EE] backdrop-blur-sm p-5.5 rounded-[24px] border border-white/50  hover:shadow-md transition-all duration-300"
                >
                  <h3 className="heading font-bold text-gray-900 text-lg mb-3">
                    Research  Driven Investment Strategies
                  </h3>
                  <p className="para text-gray-500 text-sm leading-relaxed">
                    Built on market research, data-driven insights, and financial analysis for smarter investment decisions.
                  </p>
                </motion.div>

                {/* Card 2: Personalized Wealth Planning */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#F2F7EE] backdrop-blur-sm p-8  self-start rounded-[24px] border border-white/50  hover:shadow-md transition-all duration-300"
                >
                  <h3 className="heading font-bold text-gray-900 text-lg mb-1.5">
                    Personalized Wealth Planning
                  </h3>
                  <p className="para text-gray-500 text-sm leading-relaxed">
                    Personalized financial solutions aligned with your goals and long-term wealth plans.
                  </p>
                </motion.div>

                {/* Card 3: Secure & Transparent Investing */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#F2F7EE] backdrop-blur-sm p-8 rounded-[24px] border border-white/50  hover:shadow-md transition-all duration-300"
                >
                  <h3 className="heading font-bold text-gray-900 text-lg mb-3">
                    Secure & Transparent Investing
                  </h3>
                  <p className="para text-gray-500 text-sm leading-relaxed">
                    Focused on transparency, discipline, and secure investing for long-term growth.
                  </p>
                </motion.div>

                {/* Card 4: Experienced Financial Guidance */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#F2F7EE] backdrop-blur-sm p-8 rounded-[24px] border border-white/50  hover:shadow-md transition-all duration-300"
                >
                  <h3 className="heading font-bold text-gray-900 text-lg mb-3">
                    Experienced Financial Guidance
                  </h3>
                  <p className="para text-gray-500 text-sm leading-relaxed">
                    Expert financial guidance and market insights for confident decision-making.
                  </p>
                </motion.div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#99C336] hover:bg-[#B0DD45] text-white heading font-semibold px-10 py-3.5 rounded-lg shadow-lg shadow-[#99C336]/20 transition-all"
              >
                Explore Investment Solutions
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Illustration */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-10 bg-[#99C336]/5 blur-3xl rounded-full -z-10" />
              <img
                src={whyChooseImg}
                alt="Why Investors Trust Elaborate Capital"
                className="w-full max-w-[500px] h-auto object-contain drop-shadow-xl"
              />
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
