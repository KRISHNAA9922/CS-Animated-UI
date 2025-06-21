"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function GyngerPaySection() {
  const [selectedOption, setSelectedOption] = useState<"monthly" | "net">("monthly");
  const [offerSent, setOfferSent] = useState(false);

  const handleSendOffer = () => {
    setOfferSent(true);
  };

  return (
    <section className="relative z-10 bg-white py-28 sm:py-32">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8 max-w-xl lg:pr-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-900">Gynger Pay</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Extend flexible payment offers to your customers while getting paid up front.
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 group">
                <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                Explore Gynger Pay
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Main Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 w-full max-w-md z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={offerSent ? () => setOfferSent(false) : undefined}
              style={{ cursor: offerSent ? "pointer" : "default" }}
            >
              <div className="flex justify-between items-center mb-8">
                <div className="text-2xl font-semibold text-gray-700">Acme LLC</div>
                <div className="text-2xl font-bold text-gray-900">$80,000</div>
              </div>

              {!offerSent ? (
                <>
                  {["monthly", "net"].map((option, i) => {
                    const isSelected = selectedOption === option;
                    return (
                      <motion.div
                        key={option}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? "bg-green-50 border-green-200"
                            : "border-gray-200 hover:border-gray-300"
                        } mb-4`}
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                        onClick={() =>
                          setSelectedOption(option as "monthly" | "net")
                        }
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                            isSelected ? "bg-green-500" : "border-2 border-gray-300"
                          }`}
                        >
                          {isSelected && <Check className="w-4 h-4 text-white" />}
                        </div>
                        <span className="text-lg text-gray-700 capitalize">
                          {option === "monthly" ? "Pay monthly" : "Net terms"}
                        </span>
                      </motion.div>
                    );
                  })}

                  <motion.button
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-lg transition-all"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSendOffer}
                  >
                    Send offer
                  </motion.button>
                </>
              ) : (
                <motion.div
                  className="flex flex-col items-center justify-center py-8"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                  >
                    <Check className="w-10 h-10 text-white" />
                  </motion.div>
                  <p className="text-sm text-gray-500 text-center">
                    Click to create new offer
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Mobile Card Preview */}
            <motion.div
              className="absolute -right-10 top-10 w-40 h-56 bg-gray-100 rounded-2xl shadow-lg border border-gray-200 p-4 transform rotate-12"
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="space-y-3">
                <div className="text-xs text-gray-600">Acme LLC — Offer</div>
                <div className="text-lg font-bold text-gray-900">$80,000</div>
                <div className="w-full bg-gray-200 rounded-full h-1 my-3">
                  <motion.div
                    className="bg-teal-600 h-1 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: offerSent ? "100%" : "50%" }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Created</span>
                  <span className={offerSent ? "text-teal-600" : "text-gray-400"}>Viewed</span>
                </div>
                <div className="space-y-2 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Offer viewed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-3 h-3 text-gray-400" />
                    <span className="text-xs text-gray-600">Payment received</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-4">Offer created</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
