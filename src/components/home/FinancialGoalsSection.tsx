import React from "react";
import { Link } from "react-router-dom";

import financialbuilding from "../../assets/HeroImages/financial-building.png";
interface CalculatorItem {
  title: string;
  href: string;
}

const calculators: CalculatorItem[] = [
  { title: "SIP Calculator", href: "/investor-zone/calculators/sip" },
  { title: "Kids Education", href: "/investor-zone/calculators/education" },
  { title: "Marriage Calculator", href: "/investor-zone/calculators/marriage" },
  {
    title: "Independent Retirement",
    href: "/investor-zone/calculators/retirement",
  },
];

const FinancialGoalsSection: React.FC = () => {
  return (
    <section className="w-full min-h-screen  bg-[#F7F9F5] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-32 items-center">
        {/* LEFT SIDE IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={financialbuilding}
            alt="Financial Building"
            className="w-[400px] md:w-[480px] lg:w-[600px] object-cover"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <h1 className="text-3xl heading md:text-4xl font-semibold text-gray-800 leading-snug">
            Turn Your <span className="text-gray-800">Financial</span>{" "}
            <span className="text-[#99C336]">Goals</span> <br />
            into Reality
          </h1>

          <p className="mt-4 text-gray-600 para max-w-md">
            Explore smart financial calculators to estimate returns, compare
            investment strategies, and build a disciplined path toward long-term
            wealth creation.
          </p>

          {/* Calculator Cards */}
          <div className="mt-8 space-y-4">
            {calculators.map((item, index) => (
              <Link to={item.href} key={index} className="block">
                <button className="w-full flex items-center justify-between px-5 py-4 bg-white rounded-xl border border-red-200 hover:border-green-400 hover:shadow-md transition-all duration-300 group cursor-pointer">
                  <span className="text-gray-700 heading font-medium">
                    {item.title}
                  </span>

                  <span className="text-gray-400 group-hover:text-green-500 transition">
                    →
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialGoalsSection;
