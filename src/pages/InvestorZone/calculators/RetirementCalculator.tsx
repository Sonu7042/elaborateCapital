import { motion } from "framer-motion";

const RetirementCalculator = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
      {/* ── Hero Banner ── */}
      {/* <section
                className="relative py-14 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1a2a3a 0%, #2c3e50 50%, #1a2a3a 100%)' }}
            >
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#99C336]/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 right-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-5xl mx-auto px-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Link to="/investor-zone/calculators" className="text-white/50 hover:text-white/80 text-sm transition-colors">
                            Calculators
                        </Link>
                        <span className="text-white/30">/</span>
                        <span className="text-[#99C336] text-sm font-semibold">Retirement Calculator</span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}
                        className="text-3xl md:text-4xl font-bold text-white"
                    >
                        Retirement <span className="text-[#99C336]">Planner</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }}
                        className="mt-2 text-white/60 text-sm max-w-xl"
                    >
                        Secure your golden years. Estimate your corpus required for a comfortable retirement and start planning today.
                    </motion.p>
                </div>
            </section> */}

      {/* ── Main Content ── */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-4 md:p-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-1 h-6 rounded-full"
              style={{ background: "linear-gradient(#2c3e50, #99C336)" }}
            />
            <h2 className="text-lg font-bold text-gray-800">
              Retirement Calculator
            </h2>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden bg-white">
            <iframe
              src="https://www.investwell.in/updation/parameter/Calculator/par_retirement_calculatorN.jsp?obgl=eeeeee&amp;fs=14&amp;ol=222222&amp;obgr=dddddddd&amp;or=111111&amp;share=N"
              width="100%"
              height="950"
              frameBorder="0"
              scrolling="no"
              title="Retirement Calculator"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RetirementCalculator;
