// import React from "react";
import {
  ShieldCheck,
  HeartPulse,
  Car,
  Home,
  Plane,
  Baby,
  Phone,
  ArrowRight,
  ClipboardList,
  FileText,
  BadgeCheck,
  HandHeart,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Life Insurance",
    desc: "Financial security for your loved ones future.",
    bg: "bg-emerald-50",
    color: "text-[#99C336]",
  },
  {
    icon: <HeartPulse size={32} />,
    title: "Health Insurance",
    desc: "Quality healthcare without financial stress.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: <Car size={32} />,
    title: "Motor Insurance",
    desc: "Complete protection for your vehicle.",
    bg: "bg-orange-50",
    color: "text-orange-500",
  },
  {
    icon: <Home size={32} />,
    title: "Home Insurance",
    desc: "Protect your home and everything inside.",
    bg: "bg-cyan-50",
    color: "text-cyan-600",
  },
  {
    icon: <Plane size={32} />,
    title: "Travel Insurance",
    desc: "Travel worry-free with global coverage.",
    bg: "bg-purple-50",
    color: "text-purple-500",
  },
  {
    icon: <Baby size={32} />,
    title: "Child Plans",
    desc: "Secure your child’s future with early planning.",
    bg: "bg-pink-50",
    color: "text-pink-500",
  },
];

const steps = [
  {
    icon: <ClipboardList size={28} />,
    title: "Choose Your Plan",
    desc: "Select the plan that fits your needs.",
  },
  {
    icon: <FileText size={28} />,
    title: "Quick Process",
    desc: "Hassle-free paperwork and verification.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Get Insured",
    desc: "Instant policy issuance and support.",
  },
  {
    icon: <HandHeart size={28} />,
    title: "We’ve Got You",
    desc: "24/7 assistance whenever you need us.",
  },
];

const InsurancePage = () => {
  return (
    <div className="w-full bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full px-4 lg:px-10 pt-10 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full  border  text-[#99C336] text-sm font-semibold">
              <ShieldCheck size={16} />
              INSURANCE SOLUTIONS
            </div> */}

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 mt-6">
              Protect What Matters,
              <span className="text-[#99C336] block">Secure Your Future.</span>
            </h1>

            <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
              At Elaborate Capital, we provide trusted insurance solutions
              tailored to your needs. Because your tomorrow deserves the best
              protection today.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {/* Call Button */}
              <Link to="/contact">
                <button className="px-7 py-4 rounded-full bg-[#99C336] hover:bg-emerald-700 text-white font-semibold flex items-center gap-2 transition-all duration-300">
                  Contact Expert
                  <ArrowRight size={18} />
                </button>
              </Link>

              {/* WhatsApp Button */}
              <Link to="https://wa.me/919990105522" target="_blank">
                <button className="px-7 py-4 rounded-full border border-[#99C336] text-emerald-700 font-semibold hover:bg-emerald-50 transition-all duration-300">
                  Speak to Advisor
                </button>
              </Link>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
              {[
                "Trusted by 50K+ Customers",
                "100+ Plans to Choose",
                "24/7 Claim Assistance",
                "100% Secure & Transparent",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <ShieldCheck className="text-[#99C336] mt-1" size={22} />
                  <p className="text-sm text-gray-700 font-medium leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-[60px] blur-3xl opacity-40"></div>

            <div className="relative overflow-hidden rounded-[16px]">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* FLOATING CARD */}
            {/* <div className="absolute bottom-10 right-4 md:right-10 bg-white rounded-3xl shadow-2xl p-6 w-[260px]">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                <ShieldCheck className="text-[#99C336]" size={28} />
              </div>

              <h4 className="text-xl font-bold text-slate-900">
                Your Protection Is Our Priority
              </h4>

              <p className="text-gray-500 mt-3 text-sm leading-6">
                Simple. Transparent. Reliable.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-4 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 rounded-[40px] p-10 lg:p-14">
          <h2 className="text-center text-white text-3xl font-bold mb-14">
            Why Choose Elaborate Capital?
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              "Wide Range of Insurance Plans",
              "Easy & Quick Claim Process",
              "Expert Guidance at Every Step",
              "Customized Plans For Every Need",
              "Complete Transparency in All Stages",
            ].map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-[#99C336] ">
                  <ShieldCheck size={28} />
                </div>

                <p className="text-gray-200 text-sm leading-6 mt-5">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-[#99C336] font-semibold uppercase tracking-widest">
              OUR INSURANCE SOLUTIONS
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
              Coverage For Every Stage Of Life
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`w-20 h-20 rounded-3xl flex items-center justify-center ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-500 leading-7 mt-4">{item.desc}</p>

                <button className="flex items-center gap-2 text-[#99C336] font-semibold mt-8">
                  Explore Plans
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-4 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-emerald-50 to-white rounded-[40px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-16">
              <p className="text-slate-700 text-2xl font-medium">
                Why Wait for Uncertainty?
              </p>

              <h2 className="text-5xl font-bold text-emerald-700 leading-tight mt-5">
                Be Prepared, Not Scared.
              </h2>

              <p className="text-gray-600 leading-8 mt-6 max-w-lg">
                A small step today can secure your family’s happiness tomorrow.
                Let us help you choose the right plan.
              </p>
<Link to="https://wa.me/919990105522" target="_blank" >
              <button className="mt-10 px-8 py-4 rounded-full bg-[#99C336] text-white font-semibold flex items-center gap-2 hover:bg-emerald-700 transition-all duration-300">
                Get a Free Consultation
                <ArrowRight size={18} />
              </button>
</Link>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-center">
          {/* LEFT */}
          <div>
            <div className="text-center lg:text-left">
              <p className="text-[#99C336] uppercase tracking-widest font-semibold">
                OUR PROMISE
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mt-4">
                Insurance Made Simple
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {steps.map((item, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 text-[#99C336] flex items-center justify-center mx-auto lg:mx-0">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mt-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 leading-7 mt-3">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HELP CARD */}
          <div className="bg-[#99C336] rounded-[40px] p-10 text-white">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
              <Phone size={34} />
            </div>

            <h3 className="text-4xl font-bold leading-tight mt-8">
              Need Help? We’re Here!
            </h3>

            <p className="text-emerald-50 leading-8 mt-5">
              Talk to our insurance experts anytime.
            </p>

            <Link to="/contact">

            <button className="w-full mt-10 py-4 rounded-full bg-white text-emerald-700 font-bold hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="bg-[#99C336] text-white py-10 px-4 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold">
              Elaborate Capital
            </h3>

            <p className="text-emerald-100 mt-2">
              Securing Today, Empowering Tomorrow.
            </p>
          </div>

          <div className="text-center">
            <p>+91 888 888 1234</p>
            <p className="mt-2">support@elaboratecapital.com</p>
          </div>

          <div className="flex items-center gap-4">
            {["F", "T", "L", "I"].map((item, i) => (
              <div
                key={i}
                className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-emerald-700 transition-all duration-300 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default InsurancePage;
