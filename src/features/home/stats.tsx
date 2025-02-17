"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AnimatedCounter = ({
  value,
  duration = 2,
}: {
  value: string;
  duration?: number;
}) => {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Parse the number from string (handling M+ and B+ suffixes)
  const parseValue = (val: string) => {
    const numericPart = parseFloat(val.replace(/[MB+]/g, ""));
    return numericPart;
  };

  useEffect(() => {
    if (isInView) {
      const finalValue = parseValue(value);
      const steps = 60; // Number of steps for the animation
      const stepDuration = (duration * 1000) / steps;

      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep += 1;
        const progress = currentStep / steps;
        const currentValue = Math.floor(finalValue * progress);

        setCounter(currentValue);

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  const formatNumber = (num: number) => {
    if (value.includes("M")) return `${num}M+`;
    if (value.includes("B")) return `${num}B+`;
    if (value.includes("+")) return `${num}+`;
    return num.toString();
  };

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {value.includes(".") ? parseValue(value) : formatNumber(counter)}
    </motion.span>
  );
};

const Stats = () => {
  const stats = [
    {
      number: "4.6",
      label: "Average Rating on App Store",
    },
    {
      number: "2M+",
      label: "Ratings on Apple & Google",
    },
    {
      number: "2B+",
      label: "Users",
    },
    {
      number: "295M+",
      label: "Downloads",
    },
  ];

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-white text-3xl sm:text-5xl leading-tight sm:leading-[70px] font-semibold">
            Join everyone,
            <br className="hidden sm:block" />
            literally everyone
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 sm:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Line decoration - only show on tablet and up */}
              {index < stats.length - 1 && (
                <div className="hidden sm:block absolute top-0 right-0 w-full h-[1px] bg-black/10" />
              )}

              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 sm:mb-4">
                <AnimatedCounter value={stat.number} />
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
