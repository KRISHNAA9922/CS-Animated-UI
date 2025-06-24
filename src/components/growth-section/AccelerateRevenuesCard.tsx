"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { getGrowthSection } from "@/helper";

export function AccelerateRevenuesCard() {
  const [hovered, setHovered] = useState(false);
  const [growthData, setGrowthData] = useState<{
    revenue_title?: string;
    revenue_description?: string;
  } | null>(null);
  const targetRevenue = useRef(150000);
  const animatedRevenue = useMotionValue(0);
  const smoothRevenue = useSpring(animatedRevenue, { stiffness: 80, damping: 20 });

  const displayRevenue = useTransform(smoothRevenue, (val) => `+$${Math.round(val).toLocaleString()}`);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getGrowthSection();
      setGrowthData(data);
    };
    fetchData();
  }, []);

  // Memoize growthData to avoid unnecessary re-renders
  const memoizedGrowthData = useMemo(() => growthData, [growthData]);

  const handleHover = () => {
    setHovered(true);
    animatedRevenue.set(0);
    animatedRevenue.set(targetRevenue.current);
  };

  if (!memoizedGrowthData) return null;

  return (
    <div
      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
      onMouseEnter={handleHover}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {memoizedGrowthData.revenue_title || "Accelerate revenues"}
      </h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        {memoizedGrowthData.revenue_description ||
          "Streamline receivables and close cash gaps without compromising customer relationships."}
      </p>

      <div className="relative h-32">
        <div className="absolute top-4 left-4">
          <div className="text-sm text-gray-500 mb-2">Revenue</div>
          <motion.div className="text-2xl font-bold text-green-500">
            {displayRevenue}
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 flex items-end space-x-1 h-20">
          <svg width="200" height="80" className="absolute bottom-0 right-0">
            <text x="19" y="20" fill="gray" fontSize="12" fontWeight="bold">
              Revenue Growth
            </text>
            {[20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90].map(
              (height, index) => (
                <motion.rect
                  key={`${hovered}-${index}`}
                  x={index * 12 + 20}
                  width="8"
                  fill={index < 7 ? "#ef4444" : "#22c55e"}
                  initial={{ height: 0, y: 80 }}
                  animate={{ height: height * 0.8, y: 80 - height * 0.8 }}
                  transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                />
              )
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}
