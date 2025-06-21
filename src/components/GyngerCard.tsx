"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const GyngerCard = () => {
  const [capital, setCapital] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let start = 0;
      const end = 80000;
      const duration = 2000;
      const incrementTime = 10;
      const step = end / (duration / incrementTime);

      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCapital(Math.floor(start));
      }, incrementTime);

      setHasAnimated(true);
      return () => clearInterval(timer);
    }
  }, [isInView, hasAnimated]);

  const progressPercent = (capital / 400000) * 100;

  return (
    <section
      ref={ref}
      className="bg-white py-28 sm:py-32 overflow-hidden w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Gynger Capital
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-md leading-relaxed">
            Access fast, non-dilutive capital with Gynger Capital's embedded
            AP and AR financing solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-sky-100 text-sky-800 rounded-md text-sm font-medium">
              🌸 AP Financing →
            </button>
            <button className="px-4 py-2 bg-pink-100 text-pink-800 rounded-md text-sm font-medium">
              🌱 AR Financing →
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e2ec6ff072b4bc5eab6f4a_gynger-card.avif"
              alt="Gynger Card"
              width={600}
              height={380}
              className="rounded-lg shadow-lg"
            />

            {/* Capital Info Box */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md px-6 py-4 w-[85%] text-center">
              <div className="text-sm text-gray-500 font-medium mb-1 flex justify-center items-center gap-2">
                🏦 Available capital
              </div>
              <div className="text-3xl font-bold text-gray-900">
                ${capital.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </div>
              <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-2 bg-green-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 2 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GyngerCard;
