"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const DROPDOWN_MENUS = {
  Products: [
    { name: "Payment Solutions", href: "#" },
    { name: "Financing Options", href: "#" },
    { name: "API Integration", href: "#" },
    { name: "Analytics Dashboard", href: "#" },
  ],
  Solutions: [
    { name: "For Startups", href: "#" },
    { name: "For Enterprise", href: "#" },
    { name: "For Marketplaces", href: "#" },
    { name: "Custom Solutions", href: "#" },
  ],
  Resources: [
    { name: "Documentation", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Support Center", href: "#" },
  ],
  Company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Contact", href: "#" },
  ],
};

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const openDropdown = (name: string) => setActiveDropdown(name);
  const closeDropdown = () => setActiveDropdown(null);
  const isActive = (name: string) => activeDropdown === name;

  return (
    <header className="fixed z-50 top-5 left-0 right-0 px-4">
      <div className="max-w-7xl mx-auto px-6 py-4 pt-6 bg-emerald-900/40 backdrop-blur-md rounded-full border border-white/5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/headlogo.svg"
              alt="Gynger Logo"
              className="h-8 w-auto"
            />
          </a>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-teal-200 transition-colors">
              For buyers
            </a>
            <a href="#" className="text-white hover:text-teal-200 transition-colors">
              For sellers
            </a>

            {Object.entries(DROPDOWN_MENUS).map(([name, items]) => (
              <div
                key={name}
                className="relative group"
                onMouseEnter={() => openDropdown(name)}
                onMouseLeave={closeDropdown}
              >
                <button className="text-white hover:text-teal-200 transition-colors flex items-center">
                  {name}
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${isActive(name) ? "rotate-180" : ""}`}
                  />
                </button>

                {isActive(name) && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-teal-800/95 backdrop-blur-sm rounded-xl shadow-xl border border-teal-700/50 py-2">
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-white hover:text-teal-200 hover:bg-teal-700/50 transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-teal-200 transition-colors">
              Sign In
            </button>
            <Button className="bg-green-400 hover:bg-green-500 text-teal-900 font-semibold px-6 py-2 rounded-full">
              Get Started
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
