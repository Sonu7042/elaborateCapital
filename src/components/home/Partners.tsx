import { motion } from "framer-motion";
import adsBanner from "../../assets/HeroImages/ads.png";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <section className="w-full pt-20">
      {/* Outer wrapper — 80% width, centered */}
      <div className="mx-auto w-full" style={{ maxWidth: "100%" }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full overflow-hidden "
          style={{ height: "100vh", minHeight: "320px", maxHeight: "680px" }}
        >
          {/* Background Image */}
          <img
            src={adsBanner}
            alt="Partner with Elaborate Capital"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* Gradient Overlay — dark at center for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(20,20,40,0.72) 100%)",
            }}
          />

          {/* Subtle color accent glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(176,242,61,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Centered Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 sm:px-8 text-center gap-5 sm:gap-7">
            {/* Eyebrow label */}
            {/* <motion.span
                            initial={{ opacity: 0, y: -10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block px-4 py-1 rounded-full text-[#99C336] border border-[#99C336]/40 bg-white/5 text-xs sm:text-sm font-semibold tracking-widest uppercase backdrop-blur-sm"
                        >
                            Partnership
                        </motion.span> */}

            {/* Main heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white drop-shadow-lg text-center tracking-normal"
              style={{
                fontWeight: 700,
                fontStyle: "normal",
                fontSize: "clamp(28px, 5vw, 48px)",
                lineHeight: "62.4px",
                letterSpacing: "0%",
                textAlign: "center",
                verticalAlign: "middle",
                maxWidth: "900px",
              }}
            >
              Would you like to partner with us?
            </motion.h2>

            {/* Sub text */}
            {/* <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="text-white/70 text-xs sm:text-sm md:text-base leading-relaxed
                                       max-w-xs sm:max-w-md md:max-w-xl"
                        >
                            Join Elaborate Capital Investment Services and grow together. Let's build a lasting financial partnership that delivers real results.
                        </motion.p> */}

            {/* CTA Button */}
            {/* <motion.button
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.55 }}
                            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(176,242,61,0.35)' }}
                            whileTap={{ scale: 0.96 }}
                            className="mt-2 px-8 sm:px-12 py-3 sm:py-3.5 rounded-full
                                       font-semibold text-sm sm:text-base text-white
                                       bg-linear-to-r from-[#99C336] to-[#3b30ad]
                                       hover:from-[#3b30ad] hover:to-[#99C336]
                                       shadow-lg transition-all duration-300 cursor-pointer"
                        >
                            
                        </motion.button> */}
            {/* <div className="px-8 py-2.5 rounded-full bg-white"><span className="text-gray-900 font-medium text-sm">See more</span></div> */}
            <Link
              to="/partner"
              className="relative mt-5 p-[2px] rounded-full hover:cursor-pointer
                    bg-gradient-to-r from-[#7ECA9C] via-[#0D3052] to-red-500
                    bg-[length:200%_100%]
                    hover:shadow-lg active:scale-95 transition-all"
              style={{ animation: "borderRun 4s linear infinite" }}
            >
              {/* <button className=" hover:cursor-pointer group p-[1.5px] rounded-full mt-5 bg-linear-to-r from-red-500 to-green-500  transition-all active:scale-95">
                            <div className="px-8 py-2.5 rounded-full bg-white   transition-colors">
                                <span className="text-black font-semibold  text-sm tracking-wide"></span>
                            </div>

                        </button> */}
                <div className="px-8 py-2.5 rounded-full bg-white">
                  <span className="text-gray-900 font-medium text-sm">
                    Click Here
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
          </div>

          {/* Decorative corner badges */}
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full border border-white/10 opacity-30 pointer-events-none" />
          <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full border border-[#99C336]/20 opacity-40 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
