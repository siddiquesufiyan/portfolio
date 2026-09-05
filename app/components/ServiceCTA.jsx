import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function ServiceCTA({
  title = "Ready to Grow Your Business Online?",
  description = "Get professional-quality digital services at affordable freelancer pricing. Whether you need a website, SEO, ads, design, or marketing, let's find the right solution for your business.",
}) {
  return (
    <section className="w-full py-10 px-6 md:px-10 mb-2 md:mb-10">
      <div className="relative overflow-hidden bg-slate-900  px-6 py-10 md:px-10 md:py-12 text-center">
        
        {/* Background Glow */}
        <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-red-600/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative z-10 max-w-xl mx-auto">
          
          <span className="text-red-500 text-sm font-medium">
            Let's Work Together
          </span>

          <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-white">
            {title}
          </h2>

          <p className="mt-3 text-sm text-gray-400 leading-6 max-w-xl mx-auto">
            {description}
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300"
          >
            Start Your Project
            <FaArrowRight
              size={11}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>

        </div>
      </div>
    </section>
  );
}

export default ServiceCTA;