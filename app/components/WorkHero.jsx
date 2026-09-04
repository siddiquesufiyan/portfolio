import Link from "next/link";
import {
  FaArrowRight,
  FaUsers,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

function WorkHero() {
  const highlights = [
    {
      icon: FaUsers,
      number: "50+",
      title: "Clients",
      text: "Businesses & individuals",
    },
    {
      icon: FaBriefcase,
      number: "80+",
      title: "Projects",
      text: "Successfully delivered",
    },
    {
      icon: FaCheckCircle,
      number: "4+",
      title: "Years",
      text: "Industry experience",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-14 md:pt-32 md:pb-18">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-red-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">

        {/* Label */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs md:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-red-600" />
            My Work & Experience
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            Work That Helps{" "}
            <span className="text-red-600">
              Businesses Grow
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-7 md:leading-8">
            With 4+ years of experience, I have worked with businesses,
            startups and professionals across different industries to build
            websites, improve their online presence and grow through digital
            marketing.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-7">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300"
            >
              Start a Project
              <FaArrowRight
                size={11}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <a
              href="#work"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium hover:border-red-600 hover:text-red-600 transition-all duration-300"
            >
              Explore My Work
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 md:p-5 hover:-translate-y-1 hover:border-red-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Icon size={17} />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-900">
                      {item.number}
                    </span>

                    <span className="text-sm font-semibold text-gray-700">
                      {item.title}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Work With Me */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Why Work With Me?
          </h2>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-5">
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheckCircle className="text-red-600" />
              Direct Communication
            </span>

            <span className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheckCircle className="text-red-600" />
              Flexible Pricing
            </span>

            <span className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheckCircle className="text-red-600" />
              Business-Focused Approach
            </span>

            <span className="flex items-center gap-2 text-sm text-gray-600">
              <FaCheckCircle className="text-red-600" />
              Long-Term Support
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WorkHero;