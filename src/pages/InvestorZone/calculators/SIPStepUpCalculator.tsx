import { motion } from "framer-motion";

const SIPStepUpCalculator = () => {
  return (
    <div className="min-h-screen  font-sans">
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
              style={{ background: "linear-gradient(#f07043, #99C336)" }}
            />
            <h2 className="text-lg font-bold text-gray-800">
              SIP Step Up Calculator
            </h2>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden bg-white">
            <iframe
              src="https://www.investwell.in/updation/parameter/Calculator/par_sip_stepup_calculatorN.jsp?share=N&amp;00000"
              width="100%"
              height="650"
              frameBorder="0"
              scrolling="no"
              title="SIP Step Up Calculator"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SIPStepUpCalculator;
