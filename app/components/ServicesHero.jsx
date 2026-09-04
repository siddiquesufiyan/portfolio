
import Link from "next/link";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLaptopCode,
  FaBullhorn,
  FaSearch,
} from "react-icons/fa";

function ServicesHero() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pt-6 sm:pt-8">
      <div className="relative overflow-hidden rounded-2xl bg-gray-950 px-6 py-12 sm:px-10 md:px-14 md:py-14 lg:px-16">
        
        {/* Background Decoration */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-600/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 w-64 h-64 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          
          {/* Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs sm:text-sm font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Digital Services
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight">
            Professional Digital Services
            <br className="hidden sm:block" />
            <span className="text-red-500"> That Help Your Business Grow</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-6 sm:leading-7">
            From website design and SEO to digital marketing, advertising,
            social media and creative solutions — get professional services
            with flexible freelancer pricing.
          </p>

          {/* Service Highlights */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs sm:text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <FaLaptopCode className="text-red-500" />
              Website Design
            </span>

            <span className="flex items-center gap-2">
              <FaSearch className="text-red-500" />
              SEO
            </span>

            <span className="flex items-center gap-2">
              <FaBullhorn className="text-red-500" />
              Digital Marketing
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-red-500" />
              Flexible Pricing
            </span>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-col sm:flex-row justify-center items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300"
            >
              Get Started
              <FaArrowRight
                size={11}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </Link>

            <Link
              href="#services"
              className="px-6 py-3 rounded-full border border-gray-700 text-gray-300 text-sm font-medium hover:border-red-500 hover:text-white transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;


