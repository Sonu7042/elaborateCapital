import Hero from "../../components/home/Hero";
import StatsSection from "../../components/home/StatsSection";
import ServicesSection from "../../components/home/ServicesSection";
// import FinancialGoalsSection from "../../components/home/FinancialGoalsSection";
import AutoCarousel from "../../components/home/AutoCarousel";
import PartnerLogos from "../../components/home/PartnerLogos";
// import TestimonialSection from "../../components/home/TestimonialSection";
// import Partners from "../../components/home/Partners";
import SchemePerformance from "../InvestorZone/mftoolscalculator/SchemePerformance";
// import IPOWidget from "../InvestorZone/IpoPage";
import HomeNewsSection from "../../components/home/HomeNewsSection";
import InvestmentService from "../../components/home/InvestmentService";
// import IpoList from '../../components/home/IpoList';

import WhyChooseSection from "../../components/home/WhyChooseSection";
import SIPCalculator from "../../components/home/SIPCalculator";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsSection />
      <InvestmentService />
      <PartnerLogos />
      <ServicesSection />
      {/* <FinancialGoalsSection /> */}
      <SIPCalculator />
      <WhyChooseSection />
      <AutoCarousel />
      <SchemePerformance />
      <HomeNewsSection />
      {/* <Partners /> */}
      {/* <IpoList /> */}
      {/* <div className="p-10 bg-gray-50 min-h-screen">
        <IPOWidget />
      </div> */}
      {/* Video Section */}
      <div className="max-w-[1400px] lg:mt-10 mx-auto px-4 md:px-0 mb-24 flex justify-center">
        <div className="relative w-full max-w-[900px] aspect-video rounded-[12px] md:rounded-[12px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(34,197,94,0.2)]">
          {/* Background Glow */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-green-50/50 via-white to-cyan-50/50 blur-3xl -z-10" />

          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/kBfbSs7VbXc?si=-R89xXwZ3EhrOkdP"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
    </main>
  );
};

export default HomePage;
