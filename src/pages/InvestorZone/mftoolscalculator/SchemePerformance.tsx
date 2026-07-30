import { motion } from "framer-motion";

const SchemePerformance = () => {
  return (
    <div className="min-h-screen bg-[#EEF3EA] font-sans">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-sm  border border-gray-100 p-4 md:p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <div className="w-1 h-6 rounded-full" style={{ background: 'linear-gradient(#7b0020, #99C336)' }} /> */}
            {/* <h2 className="text-lg font-bold text-gray-800">Scheme Performance</h2> */}
            <h2 className="text-3xl md:text-4xl heading font-semibold text-gray-800 leading-snug">
              Top <span className="text-[#587A00]"> Performing </span>Schemes
            </h2>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden bg-white">
            <iframe
              src="https://www.investwell.in/updation/parameter/par_mfperform_schsort.jsp?&amp;ht=ffffff&amp;hbg=013974&amp;bt=000000&amp;r1=dddddd&amp;r2=f2f2f2"
              width="100%"
              height="680"
              loading="lazy"
              frameBorder="0"
              scrolling="no"
              title="Scheme Performance Tool"
              className="w-full"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SchemePerformance;
