"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getGrowthSection } from "@/helper";

export function GrowWithConfidenceCard() {
const [growthData, setGrowthData] = useState<{
  mrr_percentage?: number;
  cac_percentage?: number;
  arr_percentage?: number;
  revenue?: string;
  title?: string;
  description?: string;
} | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGrowthSection();
      setGrowthData(data);
    };
    fetchData();
  }, []);

  if (!growthData) return null;

  const mrr = growthData.mrr_percentage || 12;
  const cac = growthData.cac_percentage || 12;
  const arr = growthData.arr_percentage || 12;
  const revenue = growthData.revenue || "$17M";

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {growthData.title || "Grow with confidence"}
      </h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        {growthData.description ||
          "Embed Gynger across your financial workflows to optimize key performance indicators and achieve lasting success."}
      </p>

      <div className="relative h-32">
        <div className="relative w-full h-full">
          <motion.div
            className="absolute top-0 left-0 w-24 bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col justify-between"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-600">MRR</span>
              <motion.span
                className="text-green-500 text-sm"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                ↗
              </motion.span>
            </div>
            <div className="text-lg font-bold text-green-500">{mrr}%</div>
          </motion.div>

          <motion.div
            className="absolute top-0 right-0 w-24 bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col justify-between"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-600">CAC</span>
              <motion.span
                className="text-red-500 text-sm"
                animate={{ y: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                ↘
              </motion.span>
            </div>
            <div className="text-lg font-bold text-red-500">{cac}%</div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-6 w-24 bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col justify-between shadow-md"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-600">ARR</span>
              <motion.span
                className="text-green-500 text-sm"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                ↗
              </motion.span>
            </div>
            <div className="text-lg font-bold text-green-500">{arr}%</div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 right-6 w-24 bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col justify-between shadow-md"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
          >
            <div className="text-xs font-medium text-gray-600 mb-1">Revenue</div>
            <div className="text-lg font-bold text-green-500">{revenue}</div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
