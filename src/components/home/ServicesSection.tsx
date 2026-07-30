import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import vectorImg from "../../assets/HeroImages/Vector.png";

interface Service {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.4" stroke="currentColor" class="w-10 h-10 text-gray-500">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18.75A2.25 2.25 0 018.25 16.5h31.5A2.25 2.25 0 0142 18.75v18A2.25 2.25 0 0139.75 39H8.25A2.25 2.25 0 016 36.75v-18zm6-9a3 3 0 016 0v2.25H12V9.75zm12 0a3 3 0 016 0v2.25H24V9.75zM36 9.75a3 3 0 016 0v2.25H36V9.75z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 26.25h6v4.5h-6v-4.5zm9 0h6v4.5h-6v-4.5zm9 0h6v4.5h-6v-4.5z"/>
    </svg>`,
    title: "Equity",
    description: "Elaborate Capital Investment Services...",
    href: "/services/equity",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.4" stroke="currentColor" class="w-10 h-10 text-gray-500">
      <ellipse cx="24" cy="20" rx="16" ry="8" stroke-linecap="round"/>
      <path stroke-linecap="round" d="M8 20v8c0 4.4 7.2 8 16 8s16-3.6 16-8v-8"/>
      <path stroke-linecap="round" d="M20 18l2 2 6-6"/>
    </svg>`,
    title: "Mutual Fund",
    description: "A mutual fund is simply ...",
    href: "/services/mutual-funds",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.4" stroke="currentColor" class="w-10 h-10 text-gray-500">
      <rect x="6" y="10" width="36" height="28" rx="3"/>
      <path stroke-linecap="round" d="M14 22l6 6 14-14"/>
      <path stroke-linecap="round" d="M6 18h36M14 10v4M34 10v4"/>
    </svg>`,
    title: "PMS / AIF",
    description: "PMS is a customized and...",
    href: "/services/pms-aif",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.4" stroke="currentColor" class="w-10 h-10 text-gray-500">
      <rect x="8" y="10" width="32" height="28" rx="4"/>
      <circle cx="24" cy="24" r="7"/>
      <path stroke-linecap="round" d="M24 21v3l2 2"/>
      <rect x="12" y="14" width="4" height="4" rx="1"/>
      <rect x="32" y="14" width="4" height="4" rx="1"/>
    </svg>`,
    title: "Fixed Deposit",
    description: "Fixed Deposits are one of the...",
    href: "/services/fixed-deposits",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.4" stroke="currentColor" class="w-10 h-10 text-gray-500">
      <rect x="8" y="10" width="32" height="28" rx="2"/>
      <path stroke-linecap="round" d="M16 22h4M16 28h4M24 22h8M24 26h8M24 30h8"/>
      <path stroke-linecap="round" d="M14 14h6v5h-6z"/>
    </svg>`,
    title: "Tax Saving",
    description: "There is more to tax sav...",
    href: "/services/taxation",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.4" stroke="currentColor" class="w-10 h-10 text-gray-500">
      <path stroke-linecap="round" d="M8 16h32M8 24h16M8 32h10"/>
      <path stroke-linecap="round" d="M34 28l-6 10h14l-8-10z"/>
    </svg>`,
    title: "Bonds",
    description: "An investment avenue in...",
    href: "/services/bonds",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.4" stroke="currentColor" class="w-10 h-10 text-gray-500">
      <path stroke-linecap="round" d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8z"/>
      <path stroke-linecap="round" d="M20 20l-4 4 4 4M28 20l4 4-4 4"/>
    </svg>`,
    title: "Insurance",
    description: " Insurance is a contract...",
    href: "/services/insurance",
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="1.4" stroke="currentColor" class="w-10 h-10 text-gray-500">
      <path stroke-linecap="round" d="M24 10l-14 6v10c0 8.4 6 16.2 14 18 8-1.8 14-9.6 14-18V16L24 10z"/>
      <path stroke-linecap="round" d="M20 24l3 3 6-6"/>
    </svg>`,
    title: "Health Insurance",
    description: "Life throws challenges at...",
    href: "/services/health-insurance",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: Service;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
  >
    <Link
      to={service.href}
      className="flex flex-col  gap-3 p-5 rounded-lg border border-[#e8e8e8]  text-[#090909] transition-all duration-300 group h-full cursor-pointer shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#F2F7EE] hover:border-white active:shadow-[4px_4px_12px_#c5c5c5,-4px_-4px_12px_#ffffff]"
    >
      <div
        className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300"
        dangerouslySetInnerHTML={{ __html: service.icon }}
      />
      <div>
        <h3 className="font-semibold heading text-gray-900 text-sm md:text-base mb-1 group-hover:text-[#99C336] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 para text-xs leading-relaxed line-clamp-1">
          {service.description}
        </p>
      </div>
    </Link>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 lg:pb-51  bg-[#EEF3EA] overflow-hidden relative">
      {/* Background Vector Image */}
      <img
        src={vectorImg}
        alt="Background Vector"
        className="absolute bottom-15 left-0 w-full max-w-[330px] h-auto object-contain pointer-events-none z-0"
      />
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:w-80 shrink-0 flex flex-col items-start"
          >
            {/* <p className="text-[#99C336] font-semibold text-[40px] leading-[42px] mb-1">
                            Market &amp; Finance
                        </p> */}
            <h2 className="text-3xl heading md:text-4xl font-semibold text-gray-800 leading-snug mb-5">
              Strategic Market & Financial Services
            </h2>
            <p className="text-gray-600 para text-base md:text-lg leading-relaxed  mb-10">
              Elaborate Capital provides personalized financial and investment guidance designed to help clients make informed decisions, achieve their financial goals, and build long-term wealth with confidence.</p>

            {/* <button className="group p-px rounded-full mt-5 bg-linear-to-r from-red-500 to-green-500 hover:shadow-lg transition-all active:scale-95">
                            <div className="px-8 py-2.5 rounded-full bg-white">
                                <span className="text-gray-900 font-medium text-sm">See more</span>
                            </div>
                        </button> */}
            {/* <Link to="/about">
              <button
                className="relative mt-5 p-[2px] rounded-full hover:cursor-pointer
                    bg-gradient-to-r from-[#7ECA9C] via-[#0D3052] to-red-500 
                    bg-[length:200%_100%]
                    hover:shadow-lg active:scale-95 transition-all"
                style={{
                  animation: "borderRun 4s linear infinite",
                }}
              >
                <div className="px-8 py-2.5 rounded-full bg-white">
                  <span className="text-gray-900 heading font-medium text-sm">
                    See more
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
            </Link> */}
          </motion.div>

          {/* Right: Service Cards Grid */}
          <div className="flex-1 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;