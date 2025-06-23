"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getTestimonialSection } from "@/helper";

interface Testimonial {
  image?: { url: string }[];
  name?: string;
  title?: string;
  text?: string;
}

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonialSection();
      if (Array.isArray(data)) {
        setTestimonials(data);
      } else {
        console.error("Testimonials data is not an array:", data);
      }
    };
    fetchData();
  }, []);

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="w-full py-20 overflow-hidden relative bg-white">
      <style>{`
        .swiper-slide.is-testimonials {
          opacity: 0.5;
          filter: blur(2px);
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        .swiper-slide.is-testimonials.swiper-slide-active {
          opacity: 1;
          filter: blur(0px);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
            Gynger is driving success across industries
          </h2>
          <div className="flex mt-6 md:mt-0 md:ml-6">
            <div
              className="swiper-arrow is-prev cursor-pointer p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200"
              role="button"
              aria-label="Previous slide"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 32 33">
                <path
                  d="M8.55 17.71L16.94 26.1L15.06 27.99L6.66 19.59L15.05 11.2L16.94 13.09L8.55 21.48"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div
              className="swiper-arrow is-next cursor-pointer p-3 ml-4 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200"
              role="button"
              aria-label="Next slide"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 32 33">
                <path
                  d="M23.45 15.29L15.06 6.9L16.94 5.01L25.34 13.41L16.95 21.8L15.06 19.91L23.45 11.52"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Swiper
            modules={[Navigation, Mousewheel]}
            navigation={{
              nextEl: ".swiper-arrow.is-next",
              prevEl: ".swiper-arrow.is-prev",
            }}
            mousewheel
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide is-testimonials">
                <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg h-full">
                  <div className="flex items-center gap-4 mb-4">
                    {item.image?.[0]?.url ? (
                      <Image
                        src={item.image?.[0]?.url}
                        alt={item.name || "testimonial"}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-[60px] h-[60px] rounded-full bg-gray-300" />
                    )}
                    <div>
                      <p className="text-gray-800 font-semibold text-sm">{item.name}</p>
                      <p className="text-gray-500 text-xs">{item.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base mb-4">
                    {"\u201C"}{item.text}{"\u201D"}
                  </p>
                  <a
                    href="#"
                    className="text-teal-600 text-sm font-medium hover:underline"
                  >
                    Read full story →
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
