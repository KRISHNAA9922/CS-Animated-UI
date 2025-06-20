"use client"

import { ControlBurnCard } from "./growth-section/ControlBurnCard"
import { AccelerateRevenuesCard } from "./growth-section/AccelerateRevenuesCard"
import { GrowWithConfidenceCard } from "./growth-section/GrowWithConfidenceCard"

export function GrowthSection() {
  return (
    <section className="relative z-10 py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Your blueprint for <em>lasting growth</em>
          </h2>
          <button
            className="bg-green-400 hover:bg-green-500 text-teal-900 font-semibold px-8 py-3 rounded-full transition-colors hover:scale-105 hover:shadow-[0_10px_25px_rgba(34,197,94,0.3)]"
            type="button"
          >
            Talk to us
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ControlBurnCard />
          <AccelerateRevenuesCard />
          <GrowWithConfidenceCard />
        </div>
      </div>
    </section>
  )
}
