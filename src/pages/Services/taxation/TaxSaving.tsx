import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TaxSaving = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-slate max-w-none"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            There is more to tax saving than the exemptions available on
            investment made by you. With right investments, you will pay the
            right amount of tax and know how to tax proof your income and gains.
            After all, your capital is more productive in your hands and it can
            work wonders for you if invested properly. It starts with tax saving
            which can increase the take home income. These investments can also
            cater to a few of your needs. Tax saving is not restricted only to
            tax savings investments under Section 80C. There are several other
            components e.g. HRA, Home Loans, LTA, Sec 80D, Re-imbursements, etc
            to reduce the taxable income.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6 uppercase tracking-tight border-b-2 border-[#99C336] w-fit">
            Keynotes:
          </h2>

          <ul className="list-disc pl-6 space-y-4 text-gray-700">
            <li className="leading-relaxed">
              By careful understanding, one can reduce tax liability
              substantially.
            </li>
            <li className="leading-relaxed">
              Do not wait for last minute. Start in April and use monthly
              investments to reduce risk. It will be easier on your pocket as
              well.
            </li>
            <li className="leading-relaxed">
              Use tax efficient investment avenues. You should not be paying too
              much tax on their returns.
            </li>
          </ul>

          <Link to="/contact">
            <button
              className="relative mt-12 p-[2px] rounded-full hover:cursor-pointer
                                                bg-linear-to-r from-[#7ECA9C] via-[#0D3052] to-red-500 
                                                bg-size-[200%_100%]
                                                hover:shadow-lg active:scale-95 transition-all"
              style={{
                animation: "borderRun 4s linear infinite",
              }}
            >
              <div className="px-8 py-2.5 rounded-full bg-white">
                <span className="text-gray-900 heading font-medium text-sm">
                  Contact us.
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
  );
};

export default TaxSaving;
