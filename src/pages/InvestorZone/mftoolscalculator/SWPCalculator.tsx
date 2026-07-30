import { motion } from "framer-motion";

const SWPCalculator = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans">
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
              style={{ background: "linear-gradient(#7b0020, #99C336)" }}
            />
            <h2 className="text-lg heading font-bold text-gray-800">
              SWP Calculator
            </h2>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden bg-white">
            <iframe
              src="https://www.investwell.in/updation/parameter/par_swpcalculator.jsp?tbg=ffffff&amp;hbg=cccccc&amp;ht=111111&amp;bt=222222&amp;r1=eeeeee&amp;r2=f1f1f1&amp;fs=12"
              width="100%"
              height="850"
              frameBorder="0"
              scrolling="no"
              title="SWP Calculator Tool"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SWPCalculator;
