"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#001f1c] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Links */}
        <div className="space-y-8">
          {/* Logo */}
          <div className="text-3xl font-semibold">
            <span className="text-white">Gyng</span>
            <span className="text-green-600">er</span>
          </div>

          {/* Left Links */}
          <div className="grid grid-cols-2 gap-6 text-sm text-white/90 font-light">
            <div className="space-y-2">
              <p>Gynger Pay</p>
              <p>Gynger AP Financing</p>
              <p>Gynger AR Financing</p>
              <p>Blog</p>
              <p>FAQs</p>
              <p>About us</p>
              <p>Careers</p>
            </div>
            <div className="space-y-2">
              <p>LinkedIn</p>
              <p>X / Twitter</p>
              <p>Privacy Policy</p>
              <p>Terms of service</p>
              <p>contact@gynger.io</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2 flex flex-col justify-start md:items-end">
          <p className="text-sm text-white/90 mb-4 max-w-md">
            Check out the latest updates to our products here. Stay up to date on all changes by subscribing to our Newsletter.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md border border-[#0c3f3b] rounded-lg overflow-hidden"
          >
            <input
              type="email"
              placeholder="Input your email*"
              className="bg-[#043331] text-white placeholder:text-white/70 px-4 py-3 w-full outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#0b3d3b] px-5 text-sm font-medium hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/70 gap-4">
        {/* Copyright */}
        <p>© 2025 Gynger.io — 157 W 18th Street, Floor 5, New York, NY 10011</p>

        {/* Badge Images */}
        <div className="flex gap-8 items-center">
          <Image
            src="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e1edd15128b6e6e78de281_built-in.avif"
            alt="Built In Badge"
            width={60}
            height={60}
          />
          <Image
            src="https://cdn.prod.website-files.com/67de8f1c7b26a9b133f316cb/67e1edd12e0f1c1b7b9d6c1b_soc-2.avif"
            alt="SOC 2 Badge"
            width={60}
            height={60}
          />
        </div>
      </div>
    </footer>
  );
}
