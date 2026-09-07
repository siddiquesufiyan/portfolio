"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  FaArrowRight,
  FaCheck,
  FaCode,
  FaGlobe,
  FaMobileAlt,
  FaShoppingCart,
  FaRocket,
  FaServer,
  FaLaptopCode,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   COMPONENT
========================================================= */

function WebsiteDesign() {
  const [activeProject, setActiveProject] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  /* =====================================================
     SCROLL PROGRESS
  ====================================================== */

  const { scrollYProgress } = useScroll();

  const heroGlowY = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, shouldReduceMotion ? 0 : 180]
  );

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, shouldReduceMotion ? 0 : -60]
  );

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
      image: "/first.png",
      category: "Multi-Industry Website",
      title: "Business & E-commerce Websites",
      description:
        "Modern responsive websites designed for businesses, restaurants, fashion brands, furniture stores and online products.",
    },
    {
      image: "/second.png",
      category: "Multi-Industry Website",
      title: "Education, Fitness & Lifestyle Websites",
      description:
        "Modern responsive websites designed for education, fitness, travel, beauty and lifestyle businesses.",
    },
    {
      image: "/third.png",
      category: "Multi-Industry Website",
      title: "Education, Travel & Furniture Websites",
      description:
        "Modern responsive websites designed for education, travel, furniture and other growing businesses.",
    },
    {
      image: "/four.png",
      category: "Beauty & Modeling",
      title: "Beauty & Modeling Website",
      description:
        "A modern and elegant website designed for beauty brands, models, salons and personal beauty professionals.",
    },
    {
      image: "/five.png",
      category: "Excel Dashboard",
      title: "Excel Business Dashboard",
      description:
        "A professional Excel dashboard designed to organize business data, track performance and present insights clearly.",
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
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setActiveProject((current) =>
        current === projects.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length, shouldReduceMotion]);

  /* =====================================================
     CAROUSEL CONTROLS
  ====================================================== */

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
          GLOBAL SCROLL PROGRESS
      ====================================================== */}

      {!shouldReduceMotion && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-red-600 origin-left z-[9999]"
          style={{
            scaleX: scrollYProgress,
          }}
        />
      )}

      {/* =====================================================
          SECTION 1 — HERO
      ====================================================== */}

      <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        {/* Background glow */}

        {!shouldReduceMotion && (
          <motion.div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-red-500/10 blur-[120px]"
            style={{
              y: heroGlowY,
            }}
          />
        )}

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          {/* CONTENT */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400 text-xs sm:text-sm font-medium"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-red-600"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: [1, 1.8, 1],
                        opacity: [1, 0.5, 1],
                      }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              Website Design & Development
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight"
            >
              Professional Websites That{" "}
              <motion.span
                className="text-red-600 inline-block"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        x: 4,
                      }
                }
              >
                Grow Your Business
              </motion.span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7"
            >
              I design and develop modern, responsive and business-focused
              websites for startups, small businesses, freelancers,
              professionals and growing brands.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7"
            >
              From a simple 5-page business website to a complete e-commerce
              store, I handle the design, development, hosting, domain setup
              and launch.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200"
            >
              {[
                "Responsive Websites",
                "Modern UI/UX",
                "Domain & Hosting",
                "E-Commerce Development",
              ].map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: 5,
                        }
                  }
                  className="flex items-center gap-2"
                >
                  <motion.span
                    className="text-red-600"
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.3,
                          }
                    }
                  >
                    ✓
                  </motion.span>

                  {item}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* PRICING CARD */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={scaleIn}
            style={{
              y: heroImageY,
            }}
            className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden"
          >
            {!shouldReduceMotion && (
              <>
                <motion.div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-red-600/20 blur-3xl"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-orange-500/10 blur-3xl"
                  animate={{
                    x: [0, -25, 0],
                    y: [0, 25, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}

            <div className="relative z-10">
              <p className="text-sm text-gray-400">
                Website Development Starting From
              </p>

              <div className="mt-2 flex items-end gap-2">
                <motion.span
                  className="text-4xl sm:text-5xl font-semibold text-white"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  ₹5,000
                </motion.span>

                <span className="mb-1 text-gray-400 text-sm">starting</span>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Basic 5-page website
              </p>

              <div className="mt-5 h-px bg-gray-800" />

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  {
                    icon: <FaGlobe />,
                    title: "Domain",
                  },
                  {
                    icon: <FaServer />,
                    title: "Hosting",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -5,
                            scale: 1.02,
                          }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="rounded-xl border border-gray-800 p-4"
                  >
                    <div className="text-red-500">{item.icon}</div>

                    <p className="mt-3 text-sm font-medium text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">Included</p>
                  </motion.div>
                ))}
              </div>

              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {[
                  "5-page responsive website",
                  "Modern website design",
                  "Mobile & tablet optimized",
                  "Basic SEO setup",
                  "Domain + hosting included",
                ].map((item) => (
                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="flex gap-2"
                  >
                    <span className="text-red-500">✓</span>
                    {item}
                  </motion.li>
                ))}
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
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — TYPES OF WEBSITES
      ====================================================== */}

      <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="max-w-2xl"
          >
            <span className="text-red-600 text-sm font-medium">
              What I Build
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Websites For Different Business Needs
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              Whether you need a simple business website, personal portfolio,
              landing page or online store, I build websites according to your
              business goals.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {websiteTypes.map((item, index) => (
              <motion.div
                key={item.title}
                variants={cardReveal}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -9,
                        transition: {
                          duration: 0.25,
                        },
                      }
                }
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 overflow-hidden"
              >
                {/* Animated corner */}

                {!shouldReduceMotion && (
                  <motion.div
                    className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-red-500/5 blur-2xl"
                    whileHover={{
                      scale: 2,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />
                )}

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          rotate: 8,
                          scale: 1.1,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className="relative w-11 h-11 rounded-xl bg-red-50 dark:bg-red-950/30 text-red-600 flex items-center justify-center text-lg"
                >
                  {item.icon}
                </motion.div>

                <h3 className="relative mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: 6,
                        }
                  }
                  className="relative mt-5 text-red-600"
                >
                  →
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3 — PACKAGES
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-red-600 text-sm font-medium">
              Website Packages
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Choose The Right Website For Your Business
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Flexible website packages starting from ₹5,000 and going up to
              complete e-commerce solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={cardReveal}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -10,
                        scale: 1.015,
                      }
                }
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className={`relative rounded-2xl p-6 border ${
                  pkg.popular
                    ? "border-red-500 bg-gray-950 text-white"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
                }`}
              >
                {pkg.popular && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.25,
                    }}
                    className="absolute -top-3 left-5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-medium"
                  >
                    Most Popular
                  </motion.span>
                )}

                <p
                  className={`text-sm font-medium ${
                    pkg.popular ? "text-red-400" : "text-red-600"
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
                          pkg.popular ? "text-red-500" : "text-red-600"
                        }`}
                      />

                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.02,
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 0.98,
                        }
                  }
                >
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 4 — DEVELOPMENT PROCESS
      ====================================================== */}

      <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="max-w-2xl mb-10"
          >
            <span className="text-red-600 text-sm font-medium">
              My Development Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              From Idea To Live Website
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I follow a structured development process so your website looks
              professional, works properly and is ready for your customers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                variants={cardReveal}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        y: -7,
                      }
                }
                className={`group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 overflow-hidden ${
                  index === 7 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Animated progress line */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  whileInView={{
                    scaleX: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                  }}
                  className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 origin-left"
                />

                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-red-600/30 transition">
                    {step.number}
                  </span>

                  <motion.span
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            x: 6,
                          }
                    }
                    className="text-red-600"
                  >
                    →
                  </motion.span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 5 — PORTFOLIO CAROUSEL
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5"
          >
            <div className="max-w-2xl">
              <span className="text-red-600 text-sm font-medium">
                My Recent Work
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                Websites I've Built
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
                I have worked on websites for different businesses and
                industries. Here are some examples of the type of websites I
                can design and develop.
              </p>
            </div>

            <div className="flex gap-2">
              <motion.button
                onClick={previousProject}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.08,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.92,
                      }
                }
                className="w-10 h-10 cursor-pointer rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-red-500 hover:text-red-600 transition"
                aria-label="Previous project"
              >
                <FaChevronLeft />
              </motion.button>

              <motion.button
                onClick={nextProject}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.08,
                      }
                }
                whileTap={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 0.92,
                      }
                }
                className="w-10 h-10 cursor-pointer rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:border-red-500 hover:text-red-600 transition"
                aria-label="Next project"
              >
                <FaChevronRight />
              </motion.button>
            </div>
          </motion.div>

          {/* CAROUSEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="mt-9 relative overflow-hidden rounded-2xl bg-gray-950"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        x: 35,
                      }
                }
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: 1,
                        x: 0,
                      }
                }
                exit={
                  shouldReduceMotion
                    ? {}
                    : {
                        opacity: 0,
                        x: -35,
                      }
                }
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid lg:grid-cols-2"
              >
                {/* IMAGE */}

                <div className="relative h-[280px] sm:h-[380px] lg:h-[500px] overflow-hidden">
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.08,
                          }
                    }
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1,
                          }
                    }
                    transition={{
                      duration: 0.8,
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={projects[activeProject].image}
                      alt={projects[activeProject].title}
                      fill
                      priority={activeProject === 0}
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gray-950/10" />
                </div>

                {/* CONTENT */}

                <div className="p-7 sm:p-9 lg:p-12 flex flex-col justify-center">
                  <motion.span
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.15,
                    }}
                    className="inline-flex w-fit px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs"
                  >
                    {projects[activeProject].category}
                  </motion.span>

                  <motion.h3
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.22,
                    }}
                    className="mt-5 text-2xl sm:text-3xl font-semibold text-white"
                  >
                    {projects[activeProject].title}
                  </motion.h3>

                  <motion.p
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.3,
                    }}
                    className="mt-4 text-sm sm:text-base text-gray-400 leading-7"
                  >
                    {projects[activeProject].description}
                  </motion.p>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: -4,
                            }
                      }
                      className="rounded-xl border border-gray-800 p-4"
                    >
                      <FaMobileAlt className="text-red-500" />

                      <p className="mt-3 text-sm text-gray-300">
                        Responsive
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: -4,
                            }
                      }
                      className="rounded-xl border border-gray-800 p-4"
                    >
                      <FaCode className="text-red-500" />

                      <p className="mt-3 text-sm text-gray-300">
                        Custom Development
                      </p>
                    </motion.div>
                  </div>

                  {/* DOTS */}

                  <div className="mt-8 flex gap-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveProject(index)}
                        className="cursor-pointer"
                        aria-label={`Go to project ${index + 1}`}
                      >
                        <motion.span
                          animate={{
                            width: index === activeProject ? 32 : 8,
                          }}
                          transition={{
                            duration: 0.3,
                          }}
                          className={`block h-1.5 rounded-full ${
                            index === activeProject
                              ? "bg-red-600"
                              : "bg-gray-700"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 6 — FEATURES
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-[320px] sm:h-[430px] rounded-2xl overflow-hidden"
          >
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.03,
                    }
              }
              transition={{
                duration: 0.6,
              }}
              className="absolute inset-0"
            >
              <Image
                src="/website-6.png"
                alt="Website Design and Development"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <div className="absolute inset-0 bg-gray-950/20" />

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
              }}
              className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          rotate: [0, 5, 0],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center"
                >
                  <FaRocket />
                </motion.div>

                <div>
                  <p className="text-xs text-gray-500">
                    Website Experience
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    Modern • Responsive • Business Focused
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <span className="text-red-600 text-sm font-medium">
              What's Included
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Everything You Need To{" "}
              <span className="text-red-600">Get Online</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I focus on creating websites that are not only visually
              attractive but also easy to use, mobile friendly and ready for
              your customers.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-7 grid sm:grid-cols-2 gap-3"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={cardReveal}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: 4,
                        }
                  }
                  className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-3.5"
                >
                  <motion.span
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.15,
                          }
                    }
                    className="w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center text-xs"
                  >
                    ✓
                  </motion.span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SECTION 7 — WHY WORK WITH ME
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >
              <span className="text-red-600 text-sm font-medium">
                Why Work With Me?
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
                Professional Website Development{" "}
                <span className="text-red-600">
                  Without Agency-Level Pricing
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
                As a freelancer, I work directly with you instead of passing
                your project between different teams. This allows me to
                understand your requirements and build the website around your
                business.
              </p>

              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
                Whether you're starting a new business or upgrading an
                existing website, I focus on clean design, responsive
                development and a better customer experience.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -5,
                    }
              }
              className="relative rounded-2xl bg-gray-950 p-6 sm:p-8 overflow-hidden"
            >
              {!shouldReduceMotion && (
                <motion.div
                  className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-red-600/10 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              )}

              <div className="relative">
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
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs">
                        ✓
                      </span>

                      <p className="text-sm text-gray-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 8 — CTA
      ====================================================== */}

      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-14 sm:pb-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-gray-950">
            {!shouldReduceMotion && (
              <>
                <motion.div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-red-600/20 blur-3xl"
                  animate={{
                    x: [0, -35, 0],
                    y: [0, 25, 0],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute -bottom-32 left-1/3 w-64 h-64 rounded-full bg-red-500/5 blur-3xl"
                  animate={{
                    x: [0, 40, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </>
            )}

            <div className="relative z-10 p-7 sm:p-9 lg:p-12">
              <div className="max-w-3xl">
                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  className="inline-flex px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs sm:text-sm"
                >
                  Simple Pricing
                </motion.span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Domain, Hosting & Website{" "}
                  <span className="text-red-500">All In One Package</span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  You don't have to separately arrange your domain and hosting
                  for the listed packages. I can handle the website setup,
                  domain connection, hosting setup and launch as part of the
                  package.
                </p>

                <div className="mt-7 grid sm:grid-cols-3 gap-3">
                  {[
                    {
                      icon: <FaGlobe />,
                      title: "Domain",
                    },
                    {
                      icon: <FaServer />,
                      title: "Hosting",
                    },
                    {
                      icon: <FaCode />,
                      title: "Development",
                    },
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: -6,
                              scale: 1.02,
                            }
                      }
                      className="rounded-xl border border-gray-800 p-4"
                    >
                      <div className="text-red-500">{item.icon}</div>

                      <p className="mt-3 text-sm font-medium text-white">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">Included</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.03,
                          }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 0.97,
                          }
                    }
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-medium text-white hover:bg-red-700 transition"
                    >
                      Start Your Website
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.03,
                          }
                    }
                    whileTap={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 0.97,
                          }
                    }
                  >
                    <Link
                      href="/portfolio"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-700 px-6 py-3 text-sm font-medium text-white hover:bg-white/5 transition"
                    >
                      View My Work
                    </Link>
                  </motion.div>
                </div>

                <p className="mt-5 text-xs text-gray-500">
                  * Prices shown are without GST. Additional third-party
                  services or paid premium tools, if specifically required,
                  may be charged separately.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default WebsiteDesign;