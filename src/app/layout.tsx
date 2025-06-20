import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GyngerClone your cash flow",
  description: "Flexible payments and embedded financing solutions for buyers and sellers of technology.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-teal-900 relative overflow-hidden">
          {/* Spline 3D Background */}
          <div className="absolute inset-0 z-0">
            <iframe
              src="https://my.spline.design/cubiccopy-58ccfada32ada29de256862c00e83a1f/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="w-full h-full"
            />
          </div>

          {/* Header */}
          <Header />

          {/* Page Content */}
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  )
}
