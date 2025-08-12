import React from "react";

export default function EcommerceShowcase() {
  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-[#fdfdfd] to-[#f3f6fa]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left - Text */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Upgrade Your Style, Power Your Life
          </h2>
          <p className="text-lg text-gray-600">
            From premium fashion to cutting-edge electronics and sports gear — 
            shop the latest trends in one place.
          </p>
          <button className="px-6 py-3 bg-black text-white rounded-full shadow-lg hover:scale-105 transform transition-all duration-300">
            🛒 Shop Now
          </button>
        </div>

        {/* Right - 3D SVG Images */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          <img
            src="/3d-fashion.svg"
            alt="Fashion"
            className="w-full drop-shadow-xl hover:scale-105 transition-transform"
          />
          <img
            src="/3d-electronics.svg"
            alt="Electronics"
            className="w-full drop-shadow-xl hover:scale-105 transition-transform"
          />
          <img
            src="/3d-sports.svg"
            alt="Sports"
            className="w-full drop-shadow-xl hover:scale-105 transition-transform"
          />
          <img
            src="/3d-clothes.svg"
            alt="Clothes"
            className="w-full drop-shadow-xl hover:scale-105 transition-transform"
          />
        </div>

      </div>
    </section>
  );
}
