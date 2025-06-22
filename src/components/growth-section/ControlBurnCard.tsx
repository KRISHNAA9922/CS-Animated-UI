"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getGrowthSection } from "@/helper";

export function ControlBurnCard() {
  const [growthData, setGrowthData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGrowthSection();
      setGrowthData(data);
    };
    fetchData();
  }, []);

  if (!growthData) return null;

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {growthData.burn_title || "Control burn"}
      </h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        {growthData.burn_description ||
          "Smooth out chunky payables, conserve your working capital, and invest where it matters most."}
      </p>

      {/* Animated moving element from left to right */}
      <div className="relative h-32 flex items-center justify-center">
        {/* Track line */}
        <div className="w-48 h-1 bg-gray-200 rounded-full"></div>

        {/* Moving element with framer motion */}
        <motion.div
          className="absolute w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white shadow-lg"
          initial={{
            x: -96,
            backgroundColor: "#ef4444",
            boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)",
          }}
          animate={{
            x: 96,
            backgroundColor: "#22c55e",
            boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        >
          $
        </motion.div>
      </div>
    </div>
  );
}
