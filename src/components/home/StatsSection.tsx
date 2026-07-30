import { useEffect, useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

const StatItem = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const springValue = useSpring(0, {
    stiffness: 60,
    damping: 20,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest),
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#587A00] mb-2 flex items-center justify-center">
        <motion.span style={{ display: "inline-block" }}>
          {displayValue}
        </motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-gray-600 para font-medium text-sm md:text-base">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 400, suffix: "+", label: "Happy Clients" },
    { value: 8, suffix: "+", label: "Years Experience" },
    { value: 50, suffix: "+", label: "AMC Partners" },
    { value: 25, suffix: "+", label: "Winning Awards" },
  ];

  return (
    <section className="py-16 bg-[#F7F9F5] ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
