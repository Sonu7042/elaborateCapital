import { motion } from "framer-motion";

const DisclosurePage = () => {
  const commissionData = [
    { scheme: "Liquid/Ultra Short Term Schemes", trail: "0.05% – 0.70%" },
    { scheme: "Short Term Income Funds", trail: "0.50% – 0.90%" },
    { scheme: "Income Funds", trail: "0.40% – 1.00%" },
    { scheme: "Gilt Funds", trail: "0.15% – 0.90%" },
    { scheme: "Hybrid Debt/Monthly Income Plans", trail: "0.90% – 1.20%" },
    { scheme: "Arbitrage Funds", trail: "0.55% – 0.70%" },
    { scheme: "Fund of Funds", trail: "0.25% – 0.50%" },
    { scheme: "ELSS", trail: "0.65% – 2.00%" },
    { scheme: "Index Funds", trail: "0.30% – 1.00%" },
    { scheme: "Equity/ Hybrid Equity/ Balance Funds", trail: "0.65% – 2.00%" },
    { scheme: "Fixed Maturity Plans", trail: "Variable" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ══════════════════════════════
                HERO / HEADER SECTION
            ══════════════════════════════ */}
      <section className="relative w-full py-12 bg-linear-to-b from-white via-[#f0f9f3] to-white overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#99C336]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2d3a4b]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl heading font-bold text-[#1e293b] mb-4 leading-tight"
            >
              Legal <span className="text-[#1e293b]">Disclosure</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-20 h-1 bg-[#99C336] mx-auto rounded-full"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
                CONTENT SECTION
            ══════════════════════════════ */}
      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100"
        >
          <div className="p-8 md:p-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 px-6 text-sm font-bold text-[#1e293b] uppercase tracking-wider">
                      Scheme Type
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-[#1e293b] uppercase tracking-wider">
                      Trail-1st Year onwards
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {commissionData.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="py-4 px-6 text-[#4b5563] para text-sm">
                        {row.scheme}
                      </td>
                      <td className="py-4 px-6 text-[#1e293b] font-semibold text-sm">
                        {row.trail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 space-y-4 text-xs text-[#64748b] para leading-relaxed">
              <p className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0 mt-1.5" />
                <span>
                  Details of Scheme level commission on Mutual funds are
                  available with the Relationship Managers and would be produced
                  on demand.
                </span>
              </p>
              <p className="flex gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#99C336] shrink-0 mt-1.5" />
                <span>
                  This is on a best effort basis and rates are updated as and
                  when actual rates are received from AMCs.
                </span>
              </p>
              <p className="flex gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 text-[#1e293b] font-medium italic">
                <span>
                  We are a NISM certified / AMFI registered mutual fund
                  distributor and not an RIA. We get compensated / incentivised
                  by AMCs. We don't charge any fees for our services.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-8 text-center text-sm text-[#64748b] para"
                >
                    Source: <a href="https://resources.investwellonline.com/disclosure.html" target="_blank" rel="noopener noreferrer" className="text-[#1e293b] font-semibold hover:text-[#99C336] transition-colors underline underline-offset-4">InvestWell Disclosure</a>
                </motion.p> */}
      </section>
    </div>
  );
};

export default DisclosurePage;
