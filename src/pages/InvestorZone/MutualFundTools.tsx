
// import process from "process";
import mftoolimg from "../../assets/InvestorZone/mftools/mfhero.png"

const MutualFundHero = () => {
  return (
    <section className="relative overflow-hidden  py-16 lg:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div
          className="w-full h-full bg-repeat"
        //   style={{
        //     backgroundImage:
        //       `url('${process.env.PUBLIC_URL}/assets/InvestorZone/mftools/Pattern.png')`,
        //   }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-[11px] uppercase tracking-[2px] font-semibold text-[#555] mb-6">
              Smart Mutual Fund Tools
            </p>

            <h1 className="text-[42px] md:text-[58px] leading-[1.05] font-bold text-black max-w-[620px]">
              Everything You Need
              <br />
              for Smarter Mutual
              <br />
              Fund Investing
            </h1>

            {/* Bottom Menu */}
            <div className="flex flex-wrap items-center gap-5 lg:gap-8 mt-16 text-[15px] font-semibold text-black">
              <span>SIP Performance</span>

              <span className="text-gray-400">|</span>

              <span>Latest NAV</span>

              <span className="text-gray-400">|</span>

              <span>Recent Dividends</span>

              <span className="text-gray-400">|</span>

              <span>Fund Factsheets</span>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={mftoolimg}
              alt="Mutual Fund Tools"
              className="w-full max-w-md "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MutualFundHero;