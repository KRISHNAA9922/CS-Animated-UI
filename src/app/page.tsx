"use client"

import { Hero } from "@/components/hero"
import { MovingLogos } from "@/components/moving-logos"
import { GrowthSection } from "@/components/growth-section"
import { GyngerPaySection } from "@/components/gynger-pay-section"
import GyngerCard  from '@/components/GyngerCard'
import GyngerSolution from "@/components/GyngerSolution"
import Testimonials from "@/components/Testimonial-section"
import  GetInTouch  from "@/components/GetInTouch"


export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <MovingLogos />
      <GrowthSection />
      <GyngerPaySection />
      <main className="bg-gray-50">
      <GyngerCard /> 
      <GyngerSolution/>
      <Testimonials/>
      <GetInTouch/>
    </main>
    </div>
  )
}
