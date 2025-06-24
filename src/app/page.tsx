"use client";
import { useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import { MovingLogos } from "@/components/moving-logos";
import { GrowthSection } from "@/components/growth-section";
import { GyngerPaySection } from "@/components/gynger-pay-section";
import GyngerCard from '@/components/GyngerCard';
import GyngerSolution from "@/components/GyngerSolution";
import Testimonials from "@/components/Testimonial-section";
import GetInTouch from "@/components/GetInTouch";
import Convenience from "@/components/ConvenienceAI/convenience";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full bg-black text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-30 border-t-white"></div>
        <span className="ml-4 text-xl font-semibold">Getting Gynger ready...</span>
      </div>
    );
  }

  return (
    <div className="relative">
      <Hero />
      <MovingLogos />
      <GrowthSection />
      <GyngerPaySection />
      <main className="bg-gray-50">
        <GyngerCard />
        <GyngerSolution />
        <Convenience />
        <Testimonials />
        <GetInTouch />
      </main>
    </div>
  );
}
