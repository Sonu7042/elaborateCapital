import React, { useEffect, useRef, useState } from "react";
import investOnline from "../../assets/HeroImages/InvestOnline.png";
import PortfolioLogin from "../../assets/HeroImages/PortfolioLogin.png";
import ScheduleMeetings from "../../assets/HeroImages/ScheduleMeetingssecond.png";
import { Link } from "react-router-dom";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Schedule Meetings",
    description:
      "Check Your Investment, Comprehensive report, Asset Allocation.",
    image: ScheduleMeetings,
    href: "/schedule-meeting",
  },
  {
    id: 2,
    title: "Invest Online",
    description:
      "Now invest 24*7 in the mutual fund schemes without any hassles.",
    image: investOnline,
    // href: "https://Elaborate Capitalinvestment.investwell.app/",
    href: "#",
  },
  {
    id: 3,
    title: "Portfolio Login",
    description:
      "Check Your Investment, Comprehensive report, Asset Allocation.",
    image: PortfolioLogin,
    href: "#",
    // href: "https://Elaborate Capitalinvestment.investwell.app/",
  },
];

const AutoCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000); // 4 sec auto scroll

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="relative w-full h-[80vh] flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== current}
            {...(index !== current ? { inert: true } : {})}
            className={`absolute w-full transition-all duration-700 ease-in-out ${index === current
              ? "opacity-100 translate-x-0 z-10 pointer-events-auto"
              : "opacity-0 translate-x-10 z-0 pointer-events-none"
              }`}
          >
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
              {/* IMAGE */}
              <div className="flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-[400px] md:w-[500px] object-contain"
                />
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-4xl heading font-bold text-blue-900 ">
                  {slide.title}
                </h2>

                <p className="mt-4 text-gray-600 max-w-md para">
                  {slide.description}
                </p>
                {slide.href.startsWith("http") ? (
                  <a
                    href={slide.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 bg-[#99C336] text-black px-8 py-3 rounded-full para inline-flex items-center gap-2 hover:bg-[#9edb32] hover:shadow-lg transition-all font-bold uppercase text-sm tracking-wider"
                  >
                    Get Started →
                  </a>
                ) : (
                  <Link
                    to={slide.href}
                    className="mt-8 bg-[#99C336] text-black px-8 py-3 rounded-full para inline-flex items-center gap-2 hover:bg-[#9edb32] hover:shadow-lg transition-all font-bold uppercase text-sm tracking-wider"
                  >
                    Book Now →
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* DOTS */}
        <div
          className="absolute bottom-6 flex gap-3 z-20"
          role="group"
          aria-label="Select carousel slide"
        >
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-pressed={current === index}
              className={`min-w-6 min-h-6 rounded-full transition-all relative after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:h-3 after:rounded-full ${current === index ? "after:bg-[#99C336] after:w-6" : "after:bg-gray-500 after:w-3"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoCarousel;
