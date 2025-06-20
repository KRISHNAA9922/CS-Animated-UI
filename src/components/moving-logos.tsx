"use client"

export function MovingLogos() {
  const logos = [
    "ZoomInfo",
    "VMware",
    "Tipalti",
    "Snowflake",
    "Salesforce",
    "Palo Alto",
    "Oracle",
    "Okta",
    "Lambda",
    "Google Cloud",
    "HubSpot",
  ]

  return (
    <section className="relative z-10 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Moving logos container with fade edges */}
        <div className="relative overflow-hidden">
          {/* Left fade */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>

          {/* Right fade */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="text-gray-500 hover:text-gray-700 transition-colors text-xl font-medium whitespace-nowrap">
                  {logo}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 mx-8 flex items-center justify-center">
                <div className="text-gray-500 hover:text-gray-700 transition-colors text-xl font-medium whitespace-nowrap">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
