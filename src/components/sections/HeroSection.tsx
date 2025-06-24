"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 text-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center md:items-start justify-center">
        
          <div className="space-y-4 text-center md:text-left text-black">
            <div className="flex gap-5 mb-12 md:mb-8 space-y-2 md:space-y-0 text-xs">
              <div className="flex flex-col items-start">
                <span>Production</span>
                <span >House</span>
              </div>
              <span className="mx-2">+</span>
              <div className="flex flex-col items-start">
                <span>Creative</span>
                <span>Studio</span>
                
              </div>
              <span className="mx-2">+</span>
              <div className="flex flex-col items-start">
                <span>Digital Content</span>
                <span>Creation</span>
              </div>
            </div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-left">
              Good times <br />
              <span className="font-bold italic">with </span>
              <span className="font-bold">Good Co.</span>
            </h1>
          </div>
      </div>
    </section>
  );
}
