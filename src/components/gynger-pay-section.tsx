"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getGyngerPaySection } from "@/helper";

export function GyngerPaySection() {
  const [data, setData] = useState<any>(null);
  const [selectedOption, setSelectedOption] = useState<"monthly" | "net">("monthly");
  const [offerSent, setOfferSent] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await getGyngerPaySection();
      setData(res);
    }
    fetchData();
  }, []);

  if (!data) return null;

  const offer = data.offer_details;

  return (
    <section className="relative z-10 bg-white py-20 sm:py-32 px-4 sm:px-6">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h1 className="text-[120px] sm:text-[180px] font-bold text-black/5 leading-none">Pay</h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto bg-white rounded-[64px] shadow-md p-6 sm:p-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <h1 className="text-4xl md:text-5xl font-medium text-[#020518] leading-tight">
            {data.main_heading}
          </h1>

          <a
            href={data.subheading_link?.href || "#"}
            className="text-base font-medium text-gray-500 hover:text-gray-800 flex items-center gap-2 whitespace-nowrap pt-2 md:pt-0"
          >
            {data.subheading_link?.title}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <motion.div
            className="space-y-8 max-w-xl lg:pr-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-gray-900">{data.section_title}</h2>
            <p
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: data.section_description }}
            />
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 group"
                asChild
              >
                <a href={data.button?.href || "#"}>
                  <div className="w-8 h-8 bg-teal-500 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  {data.button?.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
                <div className="text-2xl font-semibold text-gray-700">{offer?.company_name}</div>
                <div className="text-2xl font-bold text-gray-900">{offer?.amount}</div>
              </div>

              {!offerSent ? (
                <>
                  {[offer?.payment_option_1, offer?.payment_option_2].map((optionText, i) => {
                    if (!optionText) return null;
                    const value = optionText.toLowerCase().includes("monthly") ? "monthly" : "net";
                    const isSelected = selectedOption === value;

                    return (
                      <motion.div
                        key={optionText}
                        className={`flex items-center gap-3 p-4 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? "bg-green-50 border-green-200"
                            : "border-gray-200 hover:border-gray-300"
                        } mb-4`}
                        initial={{ scale: 0.95, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                        onClick={() => setSelectedOption(value as "monthly" | "net")}
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
                        <span className="text-lg text-gray-700">{optionText}</span>
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
                    onClick={() => setOfferSent(true)}
                  >
                    {offer?.send_offer_button || "Send Offer"}
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
                  <p className="text-sm text-gray-500 text-center">Click to create new offer</p>
                </motion.div>
              )}
            </motion.div>

            {/* Mobile Preview Card */}
            <motion.div
              className="absolute -right-10 top-10 w-40 h-56 bg-gray-100 rounded-2xl shadow-lg border border-gray-200 p-4 transform rotate-12"
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="space-y-3">
                <div className="text-xs text-gray-600">{offer?.company_name} — Offer</div>
                <div className="text-lg font-bold text-gray-900">{offer?.amount}</div>
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
