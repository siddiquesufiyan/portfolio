"use client";

import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-red-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        
        {/* Small Label */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs md:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            About Me
          </span>
        </div>

        {/* Main Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            Digital Marketing Freelancer &{" "}
            <span className="text-red-600">
              Web Designer
            </span>
          </h1>

          {/* SEO Description */}
          <p className="max-w-2xl mx-auto mt-6 text-sm sm:text-base md:text-lg leading-7 md:leading-8 text-gray-600">
            I help businesses, startups and brands build a strong online
            presence through professional website design, SEO, social media
            marketing, Facebook Ads, WhatsApp marketing and other digital
            marketing solutions.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300 shadow-sm"
            >
              Let's Work Together
              <FaArrowRight
                size={12}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-red-600 hover:text-red-600 transition-all duration-300"
            >
              Explore My Services
            </Link>

          </div>
        </div>

        {/* Trust Points */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-10">
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheckCircle className="text-red-600 text-xs" />
            4+ Years Experience
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheckCircle className="text-red-600 text-xs" />
            50+ Clients
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheckCircle className="text-red-600 text-xs" />
            80+ Projects
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutHero;