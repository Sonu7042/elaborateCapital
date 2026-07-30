import React from "react";
import test1 from "../../assets/HeroImages/test_1.jpeg";
import test2 from "../../assets/HeroImages/test_2.jpeg";
import test3 from "../../assets/HeroImages/test_3.jpeg";
import test4 from "../../assets/HeroImages/test_4.jpeg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  message: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Technical Co-Founder, CTO",
    image: test1,
    message:
      "Unlike most MFDs, he isn’t driven by sales targets. It’s truly refreshing to work with someone who prioritizes my needs over pushing products.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Entrepreneur",
    image: test2,
    message:
      "I completely trust the advice and guidance. Everything is transparent and aligned with my long-term goals.",
  },
  {
    id: 3,
    name: "Rohit Mehta",
    role: "Startup Founder",
    image: test3,
    message:
      "Professional, honest, and highly knowledgeable. The investment journey has been smooth and stress-free.",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Business Owner",
    image: test4,
    message:
      "Clear strategy and disciplined planning helped me grow my portfolio consistently.",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-black">Trusted by Investors Across India & Beyond</h2>

        {/* Infinite Scroll Wrapper */}
        <div className="mt-16 relative">
          <div className="flex gap-6 w-max animate-scroll">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="w-[373px] h-[200px] flex flex-col justify-between bg-white rounded-[8px] p-6 shadow-sm border border-gray-100 shrink-0"
              >
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  “{item.message}”
                </p>

                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient fade effect */}
          {/* <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div> */}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
