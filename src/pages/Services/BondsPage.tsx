import React from "react";
import topImage from "../../assets/service/bonds.jpg"; // Top banner image
import sideImage from "../../assets/service/bonds2.jpg"; // Small right image
import bgHero from "../../assets/InvestorZone/mftools/Bg.png";
import { Link } from "react-router-dom";

const BondsPage: React.FC = () => {
  return (
    <section className="min-h-screen font-sans">
      <div
        className="relative overflow-hidden px-6 md:px-16 pb-12"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Title */}
        <h1 className="text-4xl heading font-bold mb-4 mt-8">
          Corporate <span className="text-[#99C336]">Bond</span>
        </h1>

        {/* Top Banner Image */}
        <div className="w-full">
          <img
            src={topImage}
            alt="Corporate Bond"
            className="w-full h-[350px] object-cover rounded-lg shadow-xl"
          />
        </div>
      </div>
      <div className="px-6 md:px-16 py-12">
        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl heading font-semibold mb-6">
          What Is a Corporate Bond?
            </h2>

            <p className="text-gray-600 para leading-7 mb-6">
           A corporate bond is a debt instrument issued by a company to raise capital from investors. In return for the funds, the company agrees to pay regular interest at a fixed or variable rate over a specified period. This provides investors with a steady income stream while supporting the company’s financing needs.
            </p>

            <p className="text-gray-600 para leading-7 mb-6">
             At maturity, the bond expires and the principal amount is repaid to the investor. The repayment depends on the issuing company’s financial strength, future cash flows, and overall profitability.
            </p>

            <h3 className="text-xl heading font-semibold mt-10 mb-4">
              Key Takeaways:
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600 para">
              <li>
 Corporate bonds are debt instruments issued by companies to raise funds.
              </li>
              <li>
 Investors earn regular interest income in exchange for lending money.
              </li>
              <li>
 They typically offer higher returns than government bonds but carry higher risk.
              </li>
              <li>Highest-rated bonds are known as AAA bonds, indicating strong credit quality.</li>  
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
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <img
              src={sideImage}
              alt="Corporate Illustration"
              className="w-[400x] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BondsPage;
