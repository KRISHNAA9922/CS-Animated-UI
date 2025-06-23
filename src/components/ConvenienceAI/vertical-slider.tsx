"use client";

import { useEffect, useState } from "react";
import { InfiniteMovingCardsDemo } from "./infiniteMovingCardsDemo";
import { getConvenienceSection } from "@/helper";

interface Logo {
  title?: string;
  href: string;
}

interface ConvenienceData {
  logos?: Logo[];
  no_code_title?: string;
  fast_approvals_text?: string;
  cta_link?: {
    href: string;
  };
  cta_text?: string;
}

function VerticalSlider() {
  const [data, setData] = useState<ConvenienceData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getConvenienceSection();
      setData(res);
    };
    fetchData();
  }, []);

  if (!data) return null;

  const companies = data.logos?.map((logo, index) => ({
    id: index,
    name: logo.title || `logo-${index + 1}`,
    logoUrl: logo.href,
  })) || [];

  return (
    <div className="flex items-center justify-center flex-col w-full lg:w-[45%] py-6">
      <div
        style={{
          backgroundImage: `url(
            'https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e316617d05e7865b020856_card-bg.avif'
          )`,
        }}
        className="relative rounded-2xl md:rounded-4xl px-4 md:px-8 w-full h-[500px] max-h-[500px]"
      >
        <div className="flex justify-center items-center gap-4 w-full">
          <InfiniteMovingCardsDemo items={companies} speed="fast" direction="up" />
          <InfiniteMovingCardsDemo items={companies} speed="fast" direction="down" />
          <InfiniteMovingCardsDemo items={companies} speed="fast" direction="up" />
        </div>

        <div className="flex justify-center items-center w-[5rem] h-[5rem] absolute bottom-[1.5rem] right-[1.5rem] z-100 ">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.3113 5.23253C36.7374 4.4238 38.3552 3.99805 40.0019 3.99805C41.6487 3.99805 43.2665 4.4238 44.6926 5.23253L68.3113 18.6227C69.7374 19.4314 70.9216 20.5946 71.745 21.9953C72.5684 23.396 73.0019 24.9849 73.002 26.6023V53.3901C73.0019 55.0075 72.5684 56.5964 71.745 57.9971C70.9216 59.3978 69.7374 60.561 68.3113 61.3697L44.6926 74.7636C43.2665 75.5723 41.6487 75.998 40.0019 75.998C38.3552 75.998 36.7374 75.5723 35.3113 74.7636L11.6927 61.3697C10.2665 60.561 9.08227 59.3978 8.25888 57.9971C7.43549 56.5964 7.002 55.0075 7.00195 53.3901V26.606C7.00134 24.988 7.43452 23.3983 8.25794 21.9969C9.08136 20.5955 10.266 19.4317 11.6927 18.6227L35.3113 5.23253Z"
              fill="#9FE29E"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.8344 25.8314C42.8346 25.52 42.7321 25.2172 42.5429 24.9699C42.3536 24.7225 42.0881 24.5445 41.7875 24.4632C41.4869 24.3819 41.1678 24.4019 40.8797 24.5202C40.5916 24.6385 40.3505 24.8484 40.1937 25.1174L30.2771 42.1174C30.1514 42.3327 30.0848 42.5774 30.084 42.8266C30.0831 43.0759 30.1481 43.321 30.2723 43.5371C30.3964 43.7533 30.5754 43.9328 30.7912 44.0577C31.0069 44.1825 31.2518 44.2482 31.5011 44.2481H37.1677V54.1648C37.1676 54.4762 37.27 54.779 37.4593 55.0264C37.6485 55.2737 37.914 55.4518 38.2146 55.5331C38.5153 55.6143 38.8343 55.5943 39.1224 55.476C39.4105 55.3578 39.6516 55.1479 39.8084 54.8788L49.7251 37.8788C49.8507 37.6635 49.9173 37.4189 49.9181 37.1696C49.919 36.9203 49.8541 36.6752 49.7299 36.4591C49.6057 36.243 49.4267 36.0634 49.211 35.9386C48.9952 35.8137 48.7503 35.748 48.5011 35.7481H42.8344V25.8314Z"
              fill="#032D2A"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center py-10 text-center px-4">
        <p className="text-[1.5rem] font-[400]">{data.no_code_title}</p>
        <p className="text-[1.12rem] text-[#66687c]">
          {data.fast_approvals_text}
        </p>
      </div>

      <div>
        <a
          href={data.cta_link?.href || "#"}
          className="flex flex-row text-[#688f8f] py-4 md:py-12 hover:text-[#59B684]"
        >
          <p>{data.cta_text}</p>
          <div className="h-[1.5rem] w-[1.5rem] flex justify-center items-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.75 11.7256L4.75 11.7256"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default VerticalSlider;
