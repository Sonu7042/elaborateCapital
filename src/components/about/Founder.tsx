import { motion } from "framer-motion";
import SapnaAggarwal from "../../assets/about/sapna.png";
import tikaramgoyal from "../../assets/about/oneii.jpeg";
import SanjeevSrivastava from "../../assets/about/twoii.jpeg";

const founders = [
  {
    name: "Mr. Tika Ram Goyal",
    role: "Owner ",
    image: tikaramgoyal,
  },
  {
    name: "Ms. Sapna Aggarwal",
    role: "Co-founder ",
    image: SapnaAggarwal,
  },
  {
    name: "Mr. Sanjeev Srivastava",
    role: "CEO",
    image: SanjeevSrivastava,
  }
];

const Founder = () => {
  return (
    <section className="w-full py-30 bg-[#F7F9F5] relative overflow-hidden">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M-100 400C200 350 400 600 700 500C1000 400 1200 700 1500 650" stroke="#99C336" strokeWidth="1" />
          <path d="M1500 200C1200 250 1000 100 700 200C400 300 200 100 -100 150" stroke="#99C336" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-[1290px] mx-auto px-6 relative z-10">
        <div className="mb-10 text-center md:text-left">
          {/* <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 font-primary">
            Our Leadership
          </p> */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2540] mb-2 font-heading leading-tight">
            Meet our Management
          </h2>
          <p className="max-w-xl text-gray-500 pb-5 text-lg leading-relaxed font-primary mx-auto md:mx-0">
            Led by experienced directors Tika Ram Goyal and Sapna Aggarwal, our firm combines financial expertise with a dedicated team of 20+ professionals to deliver trusted solutions and excellent client service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto lg:mx-0">
          {founders.map((founder, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="relative group overflow-hidden rounded-[1.5rem] aspect-[3/3] shadow-xl shadow-black/5"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              
              {/* Founder Info */}
              <div className="absolute bottom-6 left-6 text-left text-white">
                <h3 className="text-2xl font-bold mb-0.5 font-heading text-[#E6B34A]">
                  {founder.name}
                </h3>
                <p className="text-[11px] font-bold text-gray-300 uppercase tracking-widest font-primary">
                  {founder.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder;