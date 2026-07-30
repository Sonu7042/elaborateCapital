import { motion } from "framer-motion";
import healthImg from "../../assets/service/helthinsorenc.jpg";
import { Link } from "react-router-dom";
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";

const HealthInsurancePage = () => {
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
        <h1 className="text-2xl heading text-center ml-5 md:text-4xl md:pl-20 mb-4 mt-8 font-bold">
          Health <span className="text-[#99C336]">Insurance</span>
        </h1>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
          {/* Optional: could add an image here or just leave it for the title area */}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* First Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-2xl heading font-semibold mb-6">
              Protect What Matters Most
            </h2>

            <p className="text-gray-600 para leading-relaxed mb-6">
              With medical costs spiraling out of control and the increase in
              lifestyle diseases, healthcare today is at its all time high in
              terms of treatment costs. In the event of an unforeseen illness,
              you may have no option other than to utilize your hard earned
              savings built over your lifetime.
            </p>

            <p className="text-gray-600 para leading-relaxed">
              Finally, what’s more important than your health and what better
              way to protect it than with the right Health Insurance Plan.
            </p>
          </div>

          <div>
            <img
              src={healthImg}
              alt="Health Insurance"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl heading font-semibold mb-6">
            Peace of Mind for You & Your Family
          </h2>

          <p className="text-gray-600 para leading-relaxed mb-6">
            A Health Insurance plan ensures complete peace of mind and makes
            sure that you use your hard earned savings for the real reasons be
            it your child’s higher education or dream wedding, a well deserved
            family vacation or anything you dreamt of all your life.
          </p>

          <p className="text-gray-600 para leading-relaxed mb-6">
            For those who have a family, we recommend a family floater instead
            of a standalone policy since the probability of all family members
            needing hospitalisation at one go is remote.
          </p>

          <p className="text-gray-600 para leading-relaxed">
            Even if your employer offers group medical insurance, get your own
            cover. A change of job or retirement could leave you without health
            insurance. Getting a fresh cover after 45 is anyway difficult.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="text-start mt-16">
          <Link to="/contact">
            <button
              className="relative mt-0 p-[2px] rounded-full hover:cursor-pointer
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
        </div>
      </div>
    </div>
  );
};

export default HealthInsurancePage;
