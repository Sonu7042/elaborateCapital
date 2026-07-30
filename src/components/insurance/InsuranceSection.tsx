// import React from "react";

const InsuranceSection = () => {
  return (
    <section className="w-full py-6 flex items-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[80vh]">
          {/* Left Image Section */}
          <div className="relative overflow-hidden rounded-[32px] h-full">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1400&auto=format&fit=crop"
              alt="insurance"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content Section */}
          <div className="bg-[#EEF0F4] rounded-[32px] px-5 py-6 lg:px-8 lg:py-8 flex flex-col justify-between h-full">
            {/* Top Content */}
            <div>
              {/* Heading */}
              <div className="text-center lg:text-left">
                <p className="text-[#7fbd13] font-semibold uppercase tracking-[2px] mb-2 text-xs">
                  What Makes Elaborate Capital
                </p>

                <h2 className="text-2xl lg:text-[32px] font-bold text-gray-900 leading-[1.15] max-w-2xl">
                  Why Elaborate Capital Is the Right Choice for Your Insurance?
                </h2>

                <p className="text-gray-600 text-sm leading-6 mt-3 max-w-2xl">
                  Secure your future with trusted insurance solutions,
                  transparent guidance, and reliable coverage.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  "Insurance on a Click",
                  "Claim Assistance",
                  "Customized Insurance Plan",
                  "Presence in 440+ Cities",
                  "A Legacy of Trust",
                  "Data Security",
                  "Transparency in All Stages",
                  "Reliable Coverage",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white min-h-[58px] flex items-center rounded-[16px] px-4 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-sm font-semibold text-gray-900 leading-5">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-5 flex justify-center lg:justify-start">
              <button className="px-6 py-3 bg-[#99C336] hover:bg-[#a2e032] transition-all duration-300 text-black rounded-full text-base font-semibold shadow-lg">
                Buy Insurance Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;
