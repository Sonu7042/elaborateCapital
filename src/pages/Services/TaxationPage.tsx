import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import taxation from "../../assets/service/taxation2.jpeg";
import heroBanner from "../../assets/service/taxation.jpeg";
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";

const TaxationPage = () => {
  const services = [
    {
      title: "Tax Saving",
      desc: "Smart Tax Planning",
      href: "/services/taxation/tax-saving",
    },
    {
      title: "Tax Slab",
      desc: "Know Tax Rates",
      href: "/services/taxation/tax-slab",
    },
    {
      title: "Tax Deduction",
      desc: "Reduce Tax Liability",
      href: "/services/taxation/tax-deduction",
    },
    {
      title: "Tax Calculator",
      desc: "Quick Tax Estimate",
      href: "/services/taxation/tax-calculator",
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Page Heading */}
        <h1 className="text-2xl heading ml-5 md:text-4xl md:pl-20 mb-4 mt-8 font-bold">
          Taxation <span className="text-[#99C336]"></span>
        </h1>

        <div className="relative h-[450px] w-full overflow-hidden pb-12 px-6 md:px-12">
          <img
            src={heroBanner}
            alt="Taxation"
            className="w-full h-full object-cover object-center rounded-2xl shadow-xl border border-gray-100"
          />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#22c55e" strokeWidth="1">
            <path d="M100 0 C 120 100, 80 200, 100 300 S 120 500, 100 600 S 80 750, 100 800" />
            <circle cx="250" cy="250" r="40" />
            <circle cx="550" cy="550" r="110" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pt-24 px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE - CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block bg-white p-6 rounded-xl border border-green-200 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer h-full"
                >
                  {/* Icon Placeholder */}
                  <div className="w-12 h-12 mb-4 rounded-lg bg-green-50 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 8c-3 0-6 2-6 5v3h12v-3c0-3-3-5-6-5z" />
                      <circle cx="12" cy="4" r="2" />
                    </svg>
                  </div>

                  <h3 className="font-semibold heading text-lg mb-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 para text-sm">{service.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <img
              src={taxation}
              alt="Business handshake"
              className="w-full max-w-md"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TaxationPage;
