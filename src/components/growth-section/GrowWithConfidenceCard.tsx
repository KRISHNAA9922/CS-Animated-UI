"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function GrowWithConfidenceCard() {
  const [mrr, setMrr] = useState(0)
  const [cac, setCac] = useState(0)

  useEffect(() => {
    const mrrInterval = setInterval(() => {
      setMrr((prev) => {
        if (prev >= 12) {
          clearInterval(mrrInterval)
          return 12
        }
        return prev + 0.5
      })
    }, 100)

    const cacInterval = setInterval(() => {
      setCac((prev) => {
        if (prev >= 12) {
          clearInterval(cacInterval)
          return 12
        }
        return prev + 0.5
      })
    }, 120)

    return () => {
      clearInterval(mrrInterval)
      clearInterval(cacInterval)
    }
  }, [])

  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Grow with confidence</h3>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Embed Gynger across your financial workflows to optimize key performance indicators and achieve lasting
        success.
      </p>

      {/* Animated metrics cards */}
      <div className="relative h-32">
        <div className="relative w-full h-full">
          {/* MRR Card */}
          <motion.div
            className="absolute top-0 left-0 w-24 bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col justify-between"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-600">MRR</span>
              <motion.span
                className="text-green-500 text-sm"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                ↗
              </motion.span>
            </div>
            <div className="text-lg font-bold text-green-500">{mrr.toFixed(0)}%</div>
          </motion.div>

          {/* CAC Card */}
          <motion.div
            className="absolute top-0 right-0 w-24 bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col justify-between"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-600">CAC</span>
              <motion.span
                className="text-red-500 text-sm"
                animate={{ y: [0, 2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                ↘
              </motion.span>
            </div>
            <div className="text-lg font-bold text-red-500">{cac.toFixed(0)}%</div>
          </motion.div>

          {/* ARR Card - Overlapping MRR */}
          <motion.div
            className="absolute bottom-0 left-6 w-24 bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col justify-between shadow-md"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-gray-600">ARR</span>
              <motion.span
                className="text-green-500 text-sm"
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                ↗
              </motion.span>
            </div>
            <div className="text-lg font-bold text-green-500">12%</div>
          </motion.div>

          {/* Revenue Card - Overlapping CAC */}
          <motion.div
            className="absolute bottom-0 right-6 w-24 bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col justify-between shadow-md"
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
          >
            <div className="text-xs font-medium text-gray-600 mb-1">Revenue</div>
            <div className="text-lg font-bold text-green-500">$17M</div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
