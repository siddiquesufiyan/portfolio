
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaRocket,
  FaServer,
  FaSearch,
  FaPalette,
  FaLaptopCode,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

function WebsiteDesign() {
  const [activeProject, setActiveProject] = useState(0);

  /* =====================================================
     WEBSITE TYPES
  ====================================================== */

  const websiteTypes = [
    {
      icon: <FaLaptopCode />,
      title: "Business Websites",
      description:
        "Professional websites for businesses, companies and service providers who want a strong online presence.",
    },
    {
      icon: <FaGlobe />,
      title: "Portfolio Websites",
      description:
        "Modern personal and freelancer portfolio websites designed to showcase your skills, services and work.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Websites",
      description:
        "Online stores with product pages, shopping functionality and a professional customer experience.",
    },
    {
      icon: <FaRocket />,
      title: "Landing Pages",
      description:
        "Conversion-focused landing pages for advertising campaigns, products, services and lead generation.",
    },
  ];

  /* =====================================================
     PRICING
  ====================================================== */

  const packages = [
    {
      name: "Starter",
      price: "₹5,000",
      description: "Perfect for individuals and small businesses.",
      pages: "Up to 5 Pages",
      features: [
        "Responsive Website",
        "Up to 5 Pages",
        "Modern UI Design",
        "Mobile Friendly",
        "Basic SEO Setup",
        "Contact Form",
        "Domain Included",
        "Hosting Included",
      ],
    },
    {
      name: "Business",
      price: "₹10,000",
      description: "For businesses that need a stronger online presence.",
      pages: "Up to 8 Pages",
      popular: true,
      features: [
        "Everything in Starter",
        "Up to 8 Pages",
        "Premium UI Design",
        "Advanced Sections",
        "Basic SEO Optimization",
        "WhatsApp Integration",
        "Google Map Integration",
        "Domain Included",
        "Hosting Included",
      ],
    },
    {
      name: "Professional",
      price: "₹15,000",
      description: "A complete professional business website.",
      pages: "Up to 12 Pages",
      features: [
        "Everything in Business",
        "Up to 12 Pages",
        "Advanced UI/UX",
        "Custom Components",
        "SEO Friendly Structure",
        "Speed Optimization",
        "Analytics Integration",
        "Domain Included",
        "Hosting Included",
      ],
    },
    {
      name: "E-Commerce",
      price: "₹25,000",
      description: "Complete online store for selling products online.",
      pages: "E-Commerce Website",
      features: [
        "Everything Required for Store",
        "Product Pages",
        "Shopping Cart",
        "Order Functionality",
        "Payment Integration",
        "WhatsApp Integration",
        "Responsive Design",
        "Domain Included",
        "Hosting Included",
      ],
    },
  ];

  /* =====================================================
     DEVELOPMENT PROCESS
  ====================================================== */

  const process = [
    {
      number: "01",
      title: "Requirement Discussion",
      description:
        "I understand your business, goals, target audience, required pages and website requirements.",
    },
    {
      number: "02",
      title: "Design Planning",
      description:
        "I plan the website structure, sections, user journey, content hierarchy and overall visual direction.",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "I create a clean, modern and responsive interface designed around your brand and customers.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "The approved design is converted into a functional, responsive and performance-focused website.",
    },
    {
      number: "05",
      title: "Mobile Optimization",
      description:
        "The website is tested across mobile, tablet and desktop layouts for a consistent experience.",
    },
    {
      number: "06",
      title: "SEO & Performance",
      description:
        "I implement basic SEO structure, metadata, performance improvements and important integrations.",
    },
    {
      number: "07",
      title: "Testing",
      description:
        "Forms, links, navigation, responsiveness and important website functionality are checked before launch.",
    },
    {
      number: "08",
      title: "Launch",
      description:
        "Finally, I connect the domain and hosting and make your website live for your customers.",
    },
  ];

  /* =====================================================
     PORTFOLIO
  ====================================================== */

  const projects = [
    {
      image: "/website-1.webp",
      category: "Business Website",
      title: "Modern Business Website",
      description:
        "A professional responsive website designed to present services and generate enquiries.",
    },
    {
      image: "/website-2.webp",
      category: "Travel Website",
      title: "Travel & Tourism Website",
      description:
        "A visually engaging tourism website with destination-focused sections and enquiry flow.",
    },
    {
      image: "/website-3.webp",
      category: "Portfolio Website",
      title: "Personal Portfolio",
      description:
        "A clean portfolio website designed for showcasing services, skills and previous work.",
    },
    {
      image: "/website-4.webp",
      category: "E-Commerce",
      title: "Online Store",
      description:
        "A modern e-commerce interface designed to showcase products and make online shopping easier.",
    },
    {
      image: "/website-5.webp",
      category: "Service Business",
      title: "Service Company Website",
      description:
        "A conversion-focused website created to explain services and generate customer enquiries.",
    },
  ];

  /* =====================================================
     INCLUDED FEATURES
  ====================================================== */

  const features = [
    "Responsive Design",
    "Modern UI/UX",
    "Mobile Friendly",
    "Domain Included",
    "Hosting Included",
    "Contact Forms",
    "WhatsApp Integration",
    "Google Maps",
    "Basic SEO Setup",
    "Social Media Integration",
    "Speed Optimization",
    "SSL Security",
  ];

  /* =====================================================
     AUTO CAROUSEL
  ====================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((current) =>
        current === projects.length - 1 ? 0 : current + 1
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [projects.length]);

  const nextProject = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const previousProject = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  return (
    <>
      {/* =====================================================
          SECTION 1 — HERO + STARTING PRICE
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* CONTENT */}

          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Website Design & Development
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Professional Websites That
              <span className="text-red-600"> Grow Your Business</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              I design and develop modern, responsive and business-focused
              websites for startups, small businesses, freelancers,
              professionals and growing brands.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              From a simple 5-page business website to a complete
              e-commerce store, I handle the design, development, hosting,
              domain setup and launch.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200">

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Responsive Websites
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Modern UI/UX
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Domain & Hosting
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                E-Commerce Development
              </div>

            </div>
          </div>


          {/* PRICING CARD */}

          <div className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden">

            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-red-600/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-orange-500/10 blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm text-gray-400">
                Website Development Starting From
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl sm:text-5xl font-semibold text-white">
                  ₹5,000
                </span>

                <span className="mb-1 text-gray-400 text-sm">
                  starting
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Basic 5-page website
              </p>

              <div className="mt-5 h-px bg-gray-800" />

              <div className="mt-6 grid grid-cols-2 gap-3">

                <div className="rounded-xl border border-gray-800 p-4">
                  <FaGlobe className="text-red-500" />

                  <p className="mt-3 text-sm font-medium text-white">
                    Domain
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Included
                  </p>
                </div>

                <div className="rounded-xl border border-gray-800 p-4">
                  <FaServer className="text-red-500" />

                  <p className="mt-3 text-sm font-medium text-white">
                    Hosting
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Included
                  </p>
                </div>

              </div>

              <ul className="mt-6 space-y-3 text-sm text-gray-300">

                <li className="flex gap-2">
                  <span className="text-red-500">✓</span>
                  5-page responsive website
                </li>

                <li className="flex gap-2">
                  <span className="text-red-500">✓</span>
                  Modern website design
                </li>

                <li className="flex gap-2">
                  <span className="text-red-500">✓</span>
                  Mobile & tablet optimized
                </li>

                <li className="flex gap-2">
                  <span className="text-red-500">✓</span>
                  Basic SEO setup
                </li>

                <li className="flex gap-2">
                  <span className="text-red-500">✓</span>
                  Domain + hosting included
                </li>

              </ul>

              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <p className="text-xs text-gray-400 leading-5">
                  <span className="text-red-400 font-medium">
                    Pricing Note:
                  </span>{" "}
                  Prices include website development, domain and hosting.
                  GST is not included. Final pricing may vary depending on
                  website requirements and features.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2 — TYPES OF WEBSITES
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl">

            <span className="text-red-600 text-sm font-medium">
              What I Build
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Websites For Different Business Needs
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              Whether you need a simple business website, personal portfolio,
              landing page or online store, I build websites according to
              your business goals.
            </p>

          </div>


          <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {websiteTypes.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 dark:hover:border-red-900"
              >

                <div className="w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 flex items-center justify-center text-lg">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <div className="mt-5 text-red-600 group-hover:translate-x-1 transition-transform">
                  →
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 3 — WEBSITE PACKAGES
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-red-600 text-sm font-medium">
              Website Packages
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Choose The Right Website For Your Business
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Flexible website packages starting from ₹5,000 and going up
              to complete e-commerce solutions.
            </p>

          </div>


          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  pkg.popular
                    ? "border-red-500 bg-gray-950 text-white"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                }`}
              >

                {pkg.popular && (
                  <span className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-medium">
                    Most Popular
                  </span>
                )}

                <p
                  className={`text-sm font-medium ${
                    pkg.popular
                      ? "text-red-400"
                      : "text-red-600"
                  }`}
                >
                  {pkg.name}
                </p>

                <div className="mt-3">
                  <span
                    className={`text-3xl font-semibold ${
                      pkg.popular
                        ? "text-white"
                        : "text-gray-900 dark:text-white"
                    }`}
                  >
                    {pkg.price}
                  </span>
                </div>

                <p
                  className={`mt-2 text-xs leading-5 ${
                    pkg.popular
                      ? "text-gray-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {pkg.description}
                </p>

                <div
                  className={`mt-5 h-px ${
                    pkg.popular
                      ? "bg-gray-800"
                      : "bg-gray-200 dark:bg-gray-800"
                  }`}
                />

                <p
                  className={`mt-5 text-sm font-medium ${
                    pkg.popular
                      ? "text-white"
                      : "text-gray-900 dark:text-white"
                  }`}
                >
                  {pkg.pages}
                </p>

                <ul className="mt-5 space-y-3">

                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-xs ${
                        pkg.popular
                          ? "text-gray-300"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      <FaCheck
                        className={`mt-0.5 flex-shrink-0 ${
                          pkg.popular
                            ? "text-red-500"
                            : "text-red-600"
                        }`}
                      />

                      {feature}
                    </li>
                  ))}

                </ul>

                <Link
                  href="/contact"
                  className={`mt-7 flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-medium transition ${
                    pkg.popular
                      ? "bg-red-600 hover:bg-red-700 text-white"
                      : "bg-gray-950 dark:bg-white text-white dark:text-gray-950 hover:opacity-90"
                  }`}
                >
                  Get Started
                  <FaArrowRight className="text-xs" />
                </Link>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4 — DEVELOPMENT PROCESS
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-10">

            <span className="text-red-600 text-sm font-medium">
              My Development Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              From Idea To Live Website
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I follow a structured development process so your website
              looks professional, works properly and is ready for your
              customers.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {process.map((step, index) => (
              <div
                key={step.number}
                className={`group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 ${
                  index === 7 ? "lg:col-span-2" : ""
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-red-600/30 transition">
                    {step.number}
                  </span>

                  <span className="text-red-600">
                    →
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 5 — PORTFOLIO CAROUSEL
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">

            <div className="max-w-2xl">

              <span className="text-red-600 text-sm font-medium">
                My Recent Work
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                Websites I've Built
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
                I have worked on websites for different businesses and
                industries. Here are some examples of the type of websites
                I can design and develop.
              </p>

            </div>


            {/* CONTROLS */}

            <div className="flex gap-2">

              <button
                onClick={previousProject}
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-red-500 hover:text-red-600 transition"
                aria-label="Previous project"
              >
                <FaChevronLeft />
              </button>

              <button
                onClick={nextProject}
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-red-500 hover:text-red-600 transition"
                aria-label="Next project"
              >
                <FaChevronRight />
              </button>

            </div>

          </div>


          {/* CAROUSEL */}

          <div className="mt-9 relative overflow-hidden rounded-2xl bg-gray-950">

            <div className="grid lg:grid-cols-2">

              {/* IMAGE */}

              <div className="relative h-[280px] sm:h-[380px] lg:h-[500px]">

                <Image
                  src={projects[activeProject].image}
                  alt={projects[activeProject].title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gray-950/10" />

              </div>


              {/* CONTENT */}

              <div className="p-7 sm:p-9 lg:p-12 flex flex-col justify-center">

                <span className="inline-flex w-fit px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs">
                  {projects[activeProject].category}
                </span>

                <h3 className="mt-5 text-2xl sm:text-3xl font-semibold text-white">
                  {projects[activeProject].title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  {projects[activeProject].description}
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">

                  <div className="rounded-xl border border-gray-800 p-4">
                    <FaMobileAlt className="text-red-500" />

                    <p className="mt-3 text-sm text-gray-300">
                      Responsive
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-800 p-4">
                    <FaCode className="text-red-500" />

                    <p className="mt-3 text-sm text-gray-300">
                      Custom Development
                    </p>
                  </div>

                </div>

                {/* DOTS */}

                <div className="mt-8 flex gap-2">

                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveProject(index)}
                      className={`h-1.5 rounded-full transition-all ${
                        index === activeProject
                          ? "w-8 bg-red-600"
                          : "w-2 bg-gray-700"
                      }`}
                      aria-label={`Go to project ${index + 1}`}
                    />
                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 6 — FEATURES INCLUDED
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* IMAGE */}

          <div className="relative h-[320px] sm:h-[430px] rounded-2xl overflow-hidden">

            <Image
              src="/website-design.webp"
              alt="Website Design and Development"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div className="absolute inset-0 bg-gray-950/20" />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl">

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
                  <FaRocket />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Website Experience
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    Modern • Responsive • Business Focused
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* CONTENT */}

          <div>

            <span className="text-red-600 text-sm font-medium">
              What's Included
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Everything You Need To
              <span className="text-red-600">
                {" "}Get Online
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I focus on creating websites that are not only visually
              attractive but also easy to use, mobile friendly and ready
              for your customers.
            </p>


            <div className="mt-7 grid sm:grid-cols-2 gap-3">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-3.5"
                >

                  <span className="w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center text-xs">
                    ✓
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 7 — WHY WORK WITH ME
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8">

            <div>

              <span className="text-red-600 text-sm font-medium">
                Why Work With Me?
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
                Professional Website Development
                <span className="text-red-600">
                  {" "}Without Agency-Level Pricing
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
                As a freelancer, I work directly with you instead of passing
                your project between different teams. This allows me to
                understand your requirements and build the website around
                your business.
              </p>

              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
                Whether you're starting a new business or upgrading an
                existing website, I focus on clean design, responsive
                development and a better customer experience.
              </p>

            </div>


            <div className="rounded-2xl bg-gray-950 p-6 sm:p-8">

              <p className="text-sm text-red-500 font-medium">
                What You Get
              </p>

              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                More Than Just A Website
              </h3>

              <div className="mt-7 space-y-4">

                {[
                  "Direct communication with the freelancer",
                  "Custom design according to your business",
                  "Responsive mobile-first development",
                  "Domain & hosting included in packages",
                  "Basic SEO-ready website structure",
                  "Support during website launch",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs">
                      ✓
                    </span>

                    <p className="text-sm text-gray-300">
                      {item}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 8 — DOMAIN / HOSTING NOTE
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-14 sm:pb-20">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl bg-gray-950">

            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-600/20 blur-3xl" />

            <div className="relative z-10 p-7 sm:p-9 lg:p-12">

              <div className="max-w-3xl">

                <span className="inline-flex px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs sm:text-sm">
                  Simple Pricing
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Domain, Hosting & Website
                  <span className="text-red-500">
                    {" "}All In One Package
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  You don't have to separately arrange your domain and
                  hosting for the listed packages. I can handle the website
                  setup, domain connection, hosting setup and launch as part
                  of the package.
                </p>

                <div className="mt-7 grid sm:grid-cols-3 gap-3">

                  <div className="rounded-xl border border-gray-800 p-4">
                    <FaGlobe className="text-red-500" />

                    <p className="mt-3 text-sm font-medium text-white">
                      Domain
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Included
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-800 p-4">
                    <FaServer className="text-red-500" />

                    <p className="mt-3 text-sm font-medium text-white">
                      Hosting
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Included
                    </p>
                  </div>

                  <div className="rounded-xl border border-gray-800 p-4">
                    <FaCode className="text-red-500" />

                    <p className="mt-3 text-sm font-medium text-white">
                      Development
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Included
                    </p>
                  </div>

                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-medium text-white hover:bg-red-700 transition"
                  >
                    Start Your Website
                    <FaArrowRight className="text-xs" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
                  >
                    View My Work
                  </Link>

                </div>

                <p className="mt-5 text-xs text-gray-500">
                  * Prices shown are without GST. Additional third-party
                  services or paid premium tools, if specifically required,
                  may be charged separately.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default WebsiteDesign;

