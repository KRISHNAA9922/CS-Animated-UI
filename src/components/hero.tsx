"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getHeroSection } from "@/helper";

export function Hero() {
  const [heroData, setHeroData] = useState<any>(null);

  useEffect(() => {
  async function fetchHero() {
    const data = await getHeroSection();
    console.log("Fetched Hero:", data); // <---- ADD THIS
    setHeroData(data);
  }

  fetchHero();
}, []);

  if (!heroData) return null;

  return (
    <main className="relative z-10 flex flex-col items-center justify-center h-screen pt-[120px] px-6 text-center overflow-hidden">
      {heroData.background_image?.href && (
       <iframe
         src={heroData.background_image.href}
         className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
         frameBorder="0"
         allow="autoplay; fullscreen"
        allowFullScreen
        title={heroData.background_image.title || "Background Animation"}
         ></iframe>
        )
      }
      {/* ✨ Foreground Content */}
      <div className="max-w-4xl mx-auto relative z-20">
        {/* Headline */}
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-8 leading-tight">
          {heroData.title}
        </h1>

        {/* Subheadline */}
        <div
          className="text-teal-100 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
           dangerouslySetInnerHTML={{ __html: heroData.subtitle }}
        />

        {/* 📧 Email Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form submitted (mock)");
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <div className="flex-1 w-full">
            <Input
              type="email"
              required
              placeholder="Enter your work email*"
              className="bg-teal-800/50 border-teal-700 text-white placeholder:text-teal-300 focus:border-green-400 focus:ring-green-400 h-12 px-4 rounded-lg w-full"
            />
          </div>
          <Button
            type="submit"
            className="bg-green-400 hover:bg-green-500 text-teal-900 font-semibold px-8 py-3 rounded-lg h-12 whitespace-nowrap"
          >
            {heroData.call_to_action_text}
          </Button>
        </form>
      </div>
    </main>
  );
}
