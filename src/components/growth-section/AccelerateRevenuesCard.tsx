"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AccelerateRevenuesCard() {
  const [revenue, setRevenue] = useState(0)

  useEffect(() => {
    const revenueInterval = setInterval(() => {
      setRevenue((prev) => {
        if (prev >= 150000) {
          clearInterval(revenueInterval)
          return 150000
        }
        return prev + 3000
      })
    }, 50)

    return () => {
      clearInterval(revenueInterval)
    }
  }, [])

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Accelerate revenues</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Streamline receivables and close cash gaps without compromising customer relationships.
      </p>

      {/* Animated bar chart with SVG */}
      <div className="relative h-32">
        <div className="absolute top-4 left-4">
          <div className="text-sm text-gray-500 mb-2">Revenue</div>
          <motion.div
            className={`text-2xl font-bold transition-colors duration-500 ${
              revenue < 75000 ? "text-red-500" : "text-green-500"
            }`}
          >
            +${revenue.toLocaleString()}
          </motion.div>
        </div>

        <div className="absolute bottom-0 right-0 flex items-end space-x-1 h-20">
          <svg width="200" height="80" className="absolute bottom-0 right-0">
            <text x="10" y="20" fill="gray" fontSize="12" fontWeight="bold">
              Revenue Growth
            </text>
            {[20, 30, 25, 40, 35, 50, 45, 60, 55, 70, 65, 80, 75, 90].map((height, index) => (
              <motion.rect
                key={index}
                x={index * 12 + 20}
                width="8"
                fill={index < 7 ? "#ef4444" : "#22c55e"}
                initial={{
                  height: 0,
                  y: 80,
                }}
                animate={{
                  height: height * 0.8,
                  y: 80 - height * 0.8,
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  ease: "easeOut",
              
                }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  )
}
