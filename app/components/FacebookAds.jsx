"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

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

function FacebookAds() {
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

  const heroCardY = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, shouldReduceMotion ? 0 : -60]
  );

  const adSteps = [
    {
      number: "01",
      title: "Business & Audience Research",
      description:
        "I understand your business, offer, ideal customers and competitors before creating your advertising strategy.",
    },
    {
      number: "02",
      title: "Campaign Strategy",
      description:
        "I select the right campaign objective, audience, targeting and funnel based on whether your goal is leads or sales.",
    },
    {
      number: "03",
      title: "Ad Creative",
      description:
        "I prepare scroll-stopping ad creatives and messaging designed around your offer and target audience.",
    },
    {
      number: "04",
      title: "Campaign Setup",
      description:
        "I set up Meta campaigns, ad sets, targeting, placements, budgets and lead or conversion objectives.",
    },
    {
      number: "05",
      title: "Launch & Testing",
      description:
        "I launch campaigns and test different audiences, creatives and ad variations to identify what performs better.",
    },
    {
      number: "06",
      title: "Performance Optimization",
      description:
        "I continuously monitor campaign performance and optimize targeting, creatives, budgets and placements.",
    },
    {
      number: "07",
      title: "Reporting & Improvement",
      description:
        "I track results, identify winning campaigns and provide performance insights for the next optimization cycle.",
    },
  ];

  const benefits = [
    "Affordable freelancer pricing",
    "Customized ad strategy",
    "Creative + campaign management",
    "Lead generation campaigns",
    "Sales generation campaigns",
    "Continuous performance optimization",
  ];

  const offers = [
    "Facebook & Instagram Ads",
    "Lead Generation Campaigns",
    "Sales Generation Campaigns",
    "Audience Research",
    "Ad Creative & Copy",
    "Campaign Setup",
    "Retargeting Campaigns",
    "Performance Optimization",
  ];

  return (
    <>
      {/* =====================================================
          GLOBAL SCROLL PROGRESS
      ====================================================== */}

      {!shouldReduceMotion && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left z-[9999]"
          style={{
            scaleX: scrollYProgress,
          }}
        />
      )}

      {/* =====================================================
          SECTION 1 — FACEBOOK ADS INTRO + PRICING
      ====================================================== */}
      <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        {!shouldReduceMotion && (
          <motion.div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px]"
            style={{
              y: heroGlowY,
            }}
          />
        )}

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
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
              className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-blue-600"
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
              Facebook Ads Services
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight"
            >
              Turn Facebook & Instagram Ads Into
              <motion.span
                className="text-blue-600 inline-block"
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        x: 4,
                      }
                }
              >
                {" "}Real Business Leads
              </motion.span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7"
            >
              I help businesses generate targeted leads and sales through
              professionally managed Facebook and Instagram advertising
              campaigns designed around their business goals.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7"
            >
              As a freelancer, I personally manage your campaigns, from
              audience research and ad creatives to campaign optimization,
              performance tracking and continuous improvements.
            </motion.p>

            {/* FEATURES */}
            <motion.div
              variants={staggerContainer}
              className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200"
            >
              {[
                "Lead Generation",
                "Sales Campaigns",
                "Ad Creative & Copy",
                "Performance Optimization",
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
                    className="text-blue-600"
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
              y: heroCardY,
            }}
            className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden"
          >
            {!shouldReduceMotion && (
              <>
                <motion.div
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl"
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
                  className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-red-600/10 blur-3xl"
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
                Facebook Ads Management Starting From
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
                  ₹4,000
                </motion.span>

                <span className="mb-1 text-gray-400 text-sm">
                  / month
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Lead Generation Campaign
              </p>

              <div className="mt-5 h-px bg-gray-800" />

              <h3 className="mt-6 text-xl font-semibold text-white">
                Sales Generation Campaign
              </h3>

              <div className="mt-2 flex items-end gap-2">
                <motion.span
                  className="text-3xl sm:text-4xl font-semibold text-blue-500"
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
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  ₹5,000
                </motion.span>

                <span className="mb-1 text-gray-400 text-sm">
                  / month
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Complete campaign management & optimization
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-300">
                {[
                  "Campaign setup & management",
                  "Ad creative & copy",
                  "Audience targeting",
                  "Campaign testing",
                  "Performance optimization",
                  "Regular performance monitoring",
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
                    <span className="text-blue-500">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
                <p className="text-xs text-gray-400 leading-5">
                  <span className="text-blue-400 font-medium">
                    Important:
                  </span>{" "}
                  My management fee is separate from your advertising budget.
                  The Facebook/Instagram ad spend is paid directly by the
                  client to Meta.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2 — HOW I MANAGE FACEBOOK ADS
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
            className="max-w-2xl mb-10 sm:mb-12"
          >
            <span className="text-blue-600 text-sm font-medium">
              My Facebook Ads Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              How I Manage Your Facebook Ads
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              Running ads is not just about pressing the publish button. I
              follow a complete process to understand your business, reach
              the right audience and continuously improve campaign
              performance.
            </p>
          </motion.div>


          {/* STEPS */}
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
            {adSteps.map((step, index) => (
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
                className={`group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 overflow-hidden transition-colors duration-300 hover:border-blue-200 dark:hover:border-blue-900 ${
                  index === 6 ? "lg:col-span-2" : ""
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
                  className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600 origin-left"
                />

                <div className="flex items-center justify-between">

                  <span className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600/30 transition">
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
                    className="text-blue-600 text-lg"
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
          SECTION 3 — LEADS VS SALES
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
            <span className="text-blue-600 text-sm font-medium">
              Choose Your Campaign
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Lead Generation or Sales?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Different businesses need different advertising strategies.
              I create campaigns according to what you actually want from
              your ads.
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
            className="mt-10 grid md:grid-cols-2 gap-5"
          >

            {/* LEADS */}
            <motion.div
              variants={cardReveal}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -8,
                    }
              }
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8"
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-blue-600 font-medium">
                    Campaign 01
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    Lead Generation
                  </h3>
                </div>

                <motion.span
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
                    duration: 0.6,
                    delay: 0.15,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className="text-3xl font-semibold text-blue-600"
                >
                  ₹4K
                </motion.span>

              </div>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-6">
                Best for businesses that want potential customers to submit
                their details through Facebook or Instagram lead forms.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Lead form campaign setup",
                  "Audience targeting",
                  "Ad creative",
                  "Lead-focused copy",
                  "Campaign testing",
                  "Performance optimization",
                ].map((item) => (
                  <motion.div
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
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600">✓</span>
                    {item}
                  </motion.div>
                ))}

              </div>

              <div className="mt-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 p-4">
                <p className="text-xs text-blue-700 dark:text-blue-300 leading-5">
                  Ideal for travel agencies, gyms, service businesses,
                  interior designers, consultants and local businesses.
                </p>
              </div>

            </motion.div>


            {/* SALES */}
            <motion.div
              variants={cardReveal}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -8,
                    }
              }
              className="relative rounded-2xl bg-gray-950 p-6 sm:p-8 overflow-hidden"
            >

              {!shouldReduceMotion && (
                <motion.div
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-600/20 blur-3xl"
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

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-blue-400 font-medium">
                      Campaign 02
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      Sales Generation
                    </h3>
                  </div>

                  <motion.span
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
                      duration: 0.6,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="text-3xl font-semibold text-blue-500"
                  >
                    ₹5K
                  </motion.span>

                </div>

                <p className="mt-4 text-sm text-gray-400 leading-6">
                  Designed for businesses that want to promote products,
                  services or offers and drive customers towards enquiries,
                  purchases or conversions.
                </p>

                <div className="mt-6 space-y-3">

                  {[
                    "Sales campaign strategy",
                    "Audience research",
                    "Ad creative & messaging",
                    "Conversion-focused campaigns",
                    "A/B testing",
                    "Continuous optimization",
                  ].map((item) => (
                    <motion.div
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
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="text-blue-500">✓</span>
                      {item}
                    </motion.div>
                  ))}

                </div>

                <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">
                  <p className="text-xs text-gray-400 leading-5">
                    Best suited for businesses with a clear product,
                    service, offer or conversion goal.
                  </p>
                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4 — WHY CHOOSE ME + EXPERIENCE
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* WHY ME */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <span className="text-blue-600 text-sm font-medium">
              Why Work With Me?
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Professional Ads Management
              <span className="text-blue-600">
                {" "}Without Agency-Level Pricing
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I work as a freelancer, which means you get direct
              communication with the person actually managing your
              advertising campaigns.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Instead of paying large agency fees, you get focused campaign
              management, optimization and performance marketing at an
              affordable monthly price.
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

              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={cardReveal}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: 4,
                        }
                  }
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5 bg-white dark:bg-gray-900"
                >

                  <motion.span
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.15,
                          }
                    }
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center text-xs"
                  >
                    ✓
                  </motion.span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>

                </motion.div>
              ))}

            </motion.div>

          </motion.div>


          {/* EXPERIENCE CARD */}
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
              amount: 0.2,
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
                className="absolute -right-20 -top-20 w-56 h-56 rounded-full bg-blue-600/10 blur-3xl"
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

              <p className="text-sm text-blue-500 font-medium">
                My Experience
              </p>

              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                Ads For Different Types of Businesses
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-6">
                I have experience working on advertising campaigns for
                different industries, helping businesses reach their target
                customers through Meta advertising.
              </p>


              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="mt-7 grid grid-cols-2 gap-3"
              >

                {[
                  "Travel Businesses",
                  "Gyms & Fitness",
                  "Digital Marketing",
                  "Interior Designers",
                  "Local Businesses",
                  "Service Businesses",
                  "Tourism Businesses",
                  "Other Industries",
                ].map((industry) => (
                  <motion.div
                    key={industry}
                    variants={cardReveal}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            y: -4,
                          }
                    }
                    className="rounded-xl border border-gray-800 p-4"
                  >

                    <span className="text-blue-500 text-sm">
                      ✓
                    </span>

                    <p className="mt-2 text-sm text-gray-300">
                      {industry}
                    </p>

                  </motion.div>
                ))}

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SECTION 5 — WHAT I OFFER
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

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

            <span className="text-blue-600 text-sm font-medium">
              What I Offer
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Complete Facebook Ads Management
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              From planning and creative development to campaign management
              and optimization, I handle the important parts of your Meta
              advertising campaign.
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
            className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >

            {offers.map((offer, index) => (
              <motion.div
                key={offer}
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
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-5 transition-colors duration-300 hover:border-blue-200 dark:hover:border-blue-900"
              >

                <span className="text-xs text-blue-600 font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  {offer}
                </h3>

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          x: 6,
                        }
                  }
                  className="mt-5 text-blue-600"
                >
                  →
                </motion.div>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SECTION 6 — CAMPAIGN PERFORMANCE / REPORTING
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

            <div className="grid lg:grid-cols-2 items-center">

              {/* CONTENT */}
              <div className="p-7 sm:p-9 lg:p-12">

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
                  className="inline-flex px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm"
                >
                  Campaign Performance
                </motion.span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Don't Just Run Ads.
                  <span className="text-blue-500">
                    {" "}Optimize Them.
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  I monitor your campaigns to understand which audiences,
                  creatives and ads are producing better results. Based on
                  performance, I make regular improvements instead of
                  simply letting the campaign run.
                </p>


                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  className="mt-6 space-y-3"
                >

                  {[
                    "Cost per lead monitoring",
                    "Campaign performance tracking",
                    "Audience performance analysis",
                    "Creative performance testing",
                    "Budget & placement optimization",
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
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="text-blue-500">✓</span>
                      {item}
                    </motion.div>
                  ))}

                </motion.div>

              </div>


              {/* IMAGE */}
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
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative h-[300px] sm:h-[380px] lg:h-full min-h-[460px]"
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
                    src="/facebook-ads.webp"
                    alt="Facebook Ads Campaign Performance"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gray-950/30" />


                {/* PERFORMANCE CARD */}
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
                  className="absolute bottom-6 left-5 right-5 sm:left-8 sm:right-8 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Campaign Performance
                      </p>

                      <p className="mt-1 text-xl font-semibold text-gray-900">
                        Optimizing →
                      </p>
                    </div>

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
                      className="text-blue-600 text-2xl"
                    >
                      ↗
                    </motion.div>

                  </div>

                  <div className="mt-4 flex gap-1">

                    {[
                      "bg-blue-600",
                      "bg-blue-500",
                      "bg-blue-400",
                      "bg-gray-200",
                    ].map((color, index) => (
                      <motion.div
                        key={index}
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
                          duration: 0.6,
                          delay: 0.1 * index,
                        }}
                        className={`h-2 flex-1 rounded-full origin-left ${color}`}
                      />
                    ))}

                  </div>

                </motion.div>

              </motion.div>

            </div>

          </div>

        </motion.div>

      </section>
    </>
  );
}

export default FacebookAds;
