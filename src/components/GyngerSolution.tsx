"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { getGyngerSolution } from "@/helper";

const GyngerSolution: NextPage = () => {
  const [solutionData, setSolutionData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getGyngerSolution();
      setSolutionData(data);
    }

    fetchData();
  }, []);

  const Card: React.FC<{
    title: string;
    imageSrc: string;
    items: string[] | string;
    linkText: string;
    linkUrl: string;
    onLearnMore?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }> = ({ title, imageSrc, items, linkText, linkUrl, onLearnMore }) => {
    const safeItems = Array.isArray(items)
      ? items
      : typeof items === "string"
      ? items.split("\n")
      : [];

    return (
      <div className="bg-teal-900 p-6 rounded-xl text-left shadow-md hover:shadow-lg transition w-full">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-full w-20 h-20 mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold text-teal-100 mb-4">{title}</h3>
        <ul className="text-teal-200 space-y-2 mb-4">
          {safeItems.map((item, index) => (
            <li key={index} className="text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <a
          href={linkUrl}
          onClick={onLearnMore}
          className="text-teal-300 hover:underline text-sm font-medium"
        >
          {linkText}
        </a>
      </div>
    );
  };

  const handleLearnMore = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Learn more clicked");
  };

  if (!solutionData) return null;

  return (
    <div className="min-h-screen bg-white px-4 py-32">
      <div className="bg-teal-950 p-8 sm:p-10 lg:p-14 rounded-2xl max-w-6xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-10 gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            {solutionData.title}
          </h1>
          <a
            href="#"
            className="bg-teal-100 text-teal-900 px-6 py-3 rounded-lg text-sm font-medium hover:bg-teal-200"
          >
            Talk to us
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionData.cards?.map((card: any, index: number) => (
            <Card
              key={index}
              title={card.title}
              imageSrc={card.image?.href}
              items={card.items}
              linkText={card.link_text}
              linkUrl={card.link_url}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GyngerSolution;