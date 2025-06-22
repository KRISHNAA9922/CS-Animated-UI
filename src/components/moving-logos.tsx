"use client";

import { useEffect, useState } from "react";
import { getMovingLogos } from "@/helper";

export function MovingLogos() {
  const [logos, setLogos] = useState<string[]>([]);

  useEffect(() => {
    async function fetchLogos() {
      const data = await getMovingLogos();
      console.log(" Fetched Moving Logos from CMS:", data); 

      if (data) {
        const logoUrls = Object.values(data).map(
          (logo: any) => logo.href
        );
        setLogos(logoUrls);
      }
    }

    fetchLogos();
  }, []);

  if (!logos.length) return null;

  return (
    <section className="relative z-10 py-20 bg-white">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-logo-scroll {
            animation: scroll 30s linear infinite;
            display: flex;
            width: max-content;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-logo-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
