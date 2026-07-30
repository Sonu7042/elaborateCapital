
import about1 from "../../assets/about/about1.jpg";
import about2 from "../../assets/about/about2.jpg";
import about3 from "../../assets/about/about3.jpg";
import about4 from "../../assets/about/about4.jpg";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#F7F9F5]  py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Left Side Images */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src={about1}
                alt="team"
                className="w-full h-[220px] object-cover hover:scale-105 duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={about2}
                alt="meeting"
                className="w-full h-[220px] object-cover hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* Center Content Card */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#0B1120] px-8 py-16 text-center flex flex-col justify-center min-h-[470px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:60px_60px]" />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />

            {/* Icon */}
            {/* <div className="relative z-10 flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a8.94 8.94 0 0 0 3-6.72A9 9 0 0 0 3 12a8.94 8.94 0 0 0 3 6.72M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 9a9 9 0 1 0-18 0h18Z"
                  />
                </svg>
              </div>
            </div> */}

            {/* Content */}
            <div className="relative  z-10">
              {/* <p className="text-[#C9A86A] uppercase tracking-[4px] text-sm font-semibold mb-4">
                Trusted & Transparent
              </p> */}

              <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-6">
                {/* Trusted & Transparent */}
                Years of Trust, Built for Growth
              </h2>

              <p className="text-gray-300 text-[18px] leading-8 max-w-md mx-auto">
              With 250+ years of combined experience and ₹700+ Cr in managed investments, Elaborate Capital is built on trust, expertise, and long-term financial growth. Backed by experienced leadership and a growing client network, we deliver transparent guidance and personalized wealth management solutions.
              </p>

              {/* <p className="text-gray-400 text-[15px] leading-7 mt-6 max-w-md mx-auto">
                We are committed to helping individuals build secure financial
                futures through smart investment planning, reliable insurance
                coverage, and personalized financial guidance.
              </p> */}
            </div>
          </div>

          {/* Right Side Images */}
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src={about3}
                alt="business"
                className="w-full h-[220px] object-cover hover:scale-105 duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-[24px]">
              <img
                src={about4}
                alt="women"
                className="w-full h-[220px] object-cover hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
