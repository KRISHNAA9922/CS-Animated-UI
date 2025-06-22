"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cardImg =
  "https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e2ec6ff072b4bc5eab6f4a_gynger-card.avif";

export default function GetInTouch() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setTimeout(() => {
      setSubmitted(true);
      setEmail("");
      setError("");
    }, 300);
  };

  return (
    <section className="py-24 px-4 bg-[#e6f4f1]">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl px-8 sm:px-14 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Ready to <br /> learn more?
            </h2>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0"
              >
                <input
                  type="email"
                  placeholder="Enter your work email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-3 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-gray-700 outline-none text-sm"
                />
                <button
                  type="submit"
                  className="bg-[#0b3d3b] text-white px-6 py-3 rounded-md hover:bg-[#062c2b] transition text-sm font-semibold"
                >
                  Get in touch
                </button>
              </form>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-600 font-medium text-lg mt-2"
              >
                ✅ Thanks! We’ll be in touch shortly.
              </motion.p>
            )}

            {error && (
              <p className="text-red-500 text-sm mt-2 font-medium">{error}</p>
            )}
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <Image
                src={cardImg}
                alt="Gynger Card"
                width={300}
                height={180}
                className="rounded-xl shadow-xl"
              />

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[260px] bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center gap-3">
                <div className="flex gap-2 w-full">
                  <button className="bg-[#0b3d3b] text-white text-sm font-medium px-4 py-2 rounded-full w-1/2">
                    Pay monthly
                  </button>
                  <button className="bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full w-1/2">
                    Net terms
                  </button>
                </div>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm">
                  <option>3 months</option>
                  <option>6 months</option>
                  <option>12 months</option>
                </select>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24">
          <div className="relative mb-6">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#0b3d3b] via-gray-300 to-[#0b3d3b] opacity-70" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 py-1 rounded-full shadow text-sm font-medium text-[#0b3d3b] border border-gray-200">
              Over $100 million in contracts closed
            </div>
          </div>

          <div className="text-center md:text-right">
            <a
              href="#"
              className="text-[#0b3d3b] text-base font-semibold hover:underline transition-all"
            >
              Learn what Gynger can finance →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
