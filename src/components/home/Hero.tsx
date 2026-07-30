import { motion } from "framer-motion";
import heroImage from "../../assets/HeroImages/I-pad.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="relative w-full bg-[#F7F9F5] min-h-screen pb-12 mt-20 xl:mt-12 overflow-hidden"
      style={
        {
          // backgroundColor: "hsla(204,0%,100%,1)",
          // backgroundImage:
          //   "radial-gradient(circle at 28.611195189049216% 176.3240910962111%, hsla(143,41%,64%,0.2) 9.68240017296987%,transparent 56.38516943179943%),radial-gradient(circle at 112.56526398327779% 85.93963839402423%, hsla(85,80%,55%,0.2) 9.014648436902926%,transparent 52.582332597696094%)",
          // backgroundBlendMode: "normal,normal",
        }
      }
    >
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[44px]  text-gray-900 max-w-4xl mx-auto md:mt-12  text-center"
        >
          {/* Your Trusted Path to Prosperity, Smart Investing & Lasting Wealth */}
          Building Wealth Through{" "}
          <span className="text-[#99C336] italic ">Smart Investments</span> &
          Trusted Financial Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-[15px] md:text-[17px] font-normal para text-gray-600 max-w-2xl mx-auto leading-[1.7] text-center"
        >
          Achieve your financial goals with personalized investment strategies
          and dependable financial solutions designed for long-term growth,
          stability, and wealth creation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="https://wa.me/919990105522"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-0 p-[2px] rounded-full hover:cursor-pointer
            bg-linear-to-r from-[#7ECA9C] via-[#0D3052] to-red-500 
            bg-size-[200%_100%]
            hover:shadow-lg active:scale-95 transition-all"
            style={{
              animation: "borderRun 4s linear infinite",
            }}
          >
            <div className="px-8 py-2.5 rounded-full bg-white">
              <Link to="/contact">
                <span className="text-gray-900 font-medium text-sm">
                  Connect Today
                </span>
              </Link>
            </div>

            <style>
              {`
                  @keyframes borderRun {
                    from { background-position: 0% 0%; }
                    to { background-position: 500% 0%; }
                  }
                `}
            </style>
          </a>

          <Link to="https://wa.me/919990105522" target="_blank">
            <button className="px-10 py-3 rounded-full cursor-pointer bg-[#1c1c1c] text-white font-medium transition-all hover:bg-black hover:shadow-lg active:scale-95">
              Talk to Advisor
            </button>
          </Link>
        </motion.div>

        {/* Hero Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative perspective-1000"
        >
          <div className="relative mx-auto max-w-5xl group">
            {/* Subtle glow behind image */}
            <div className="absolute -inset-4 bg-linear-to-r from-green-100/30 via-white to-blue-100/30 blur-2xl -z-10 group-hover:opacity-75 transition-opacity duration-500" />

            <img
              src={heroImage}
              alt="Investment Portfolio Dashboard"
              className="w-full h-auto rounded-xl border border-gray-100 transform transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
