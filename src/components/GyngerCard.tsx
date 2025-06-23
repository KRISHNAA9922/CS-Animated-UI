"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { getGyngerCapitalSection } from "@/helper";

interface GyngerCapitalData {
  gynger_capital_title: string;
  gynger_capital_text: string;
  button_1_text: string;
  button_2_text: string;
  gynger_capital_image?: {
    href: string;
  };
  capital_amount: number;
}

const GyngerCard = () => {
  const [data, setData] = useState<GyngerCapitalData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await getGyngerCapitalSection();
      setData(res);
    }
    fetchData();
  }, []);

  if (!data) return null;

  return (
    <motion.section
      className="relative z-10 bg-white py-24 sm:py-16 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative bg-white rounded-[64px] shadow-lg overflow-hidden p-8 sm:p-16 z-10">
          <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
            <h1 className="text-[120px] sm:text-[180px] font-bold text-black/5 select-none">
              Capital
            </h1>
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
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
                className="rounded-4xl shadow-lg"
                unoptimized
              />

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
        </div>
      </div>
    </motion.section>
  );
};

export default GyngerCard;
