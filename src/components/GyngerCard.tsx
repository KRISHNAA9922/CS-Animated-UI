"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getGyngerCapitalSection } from "@/helper";

const GyngerCard = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await getGyngerCapitalSection();
      // console.log(" Gynger Capital CMS:", res);
      setData(res);
    }
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <motion.section
      className="bg-white py-28 sm:py-23 overflow-hidden w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {data.gynger_capital_title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-md leading-relaxed">
            {data.gynger_capital_text}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 bg-sky-100 text-sky-800 rounded-md text-sm font-medium">
              {data.button_1_text}
            </button>
            <button className="px-4 py-2 bg-pink-100 text-pink-800 rounded-md text-sm font-medium">
              {data.button_2_text}
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="relative w-full max-w-md mx-auto"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src={data.gynger_capital_image?.href || ""}
            alt="Gynger Card"
            width={600}
            height={380}
            className="rounded-lg shadow-lg"
            unoptimized={true}
          />

          {/* Capital Info Box */}
          <motion.div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-md px-6 py-4 w-[85%] text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="text-sm text-gray-500 font-medium mb-1 flex justify-center items-center gap-2">
               Available capital
            </div>
            <div className="text-3xl font-bold text-gray-900">
              ${data.capital_amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GyngerCard;
