"use client";
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

function SeoServices() {
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

  const seoSteps = [
    {
      number: "01",
      title: "SEO Audit",
      description:
        "I analyze your website, current rankings, technical issues, content and overall SEO health.",
    },
    {
      number: "02",
      title: "Keyword Research",
      description:
        "I find relevant keywords with good search potential based on your business, audience and competition.",
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description:
        "I optimize titles, meta descriptions, headings, URLs, content and internal linking.",
    },
    {
      number: "04",
      title: "Technical Fixes",
      description:
        "I work on technical SEO issues such as website structure, speed, indexing, mobile usability and crawlability.",
    },
    {
      number: "05",
      title: "Content Strategy",
      description:
        "I create a content-focused SEO strategy designed around your target keywords and customer search intent.",
    },
    {
      number: "06",
      title: "Authority Building",
      description:
        "I focus on improving your website authority through quality backlinks, business profiles and relevant online presence.",
    },
    {
      number: "07",
      title: "Monthly Monitoring",
      description:
        "I continuously track rankings, traffic, keywords and SEO performance to improve the strategy over time.",
    },
  ];

  const benefits = [
    "Affordable SEO packages",
    "Personalized SEO strategy",
    "Transparent monthly reporting",
    "Keyword-focused optimization",
    "Technical SEO improvements",
    "Regular performance monitoring",
  ];

  const offers = [
    "SEO Audit & Website Analysis",
    "Keyword Research & Mapping",
    "On-Page SEO Optimization",
    "Technical SEO",
    "Content Optimization",
    "Local SEO",
    "Competitor Analysis",
    "Monthly SEO Reports",
  ];

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
          SECTION 1 — SEO INTRO + PRICING
      ====================================================== */}
      <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">

        {!shouldReduceMotion && (
          <motion.div
            className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-red-500/10 blur-[120px]"
            style={{
              y: heroGlowY,
            }}
          />
        )}

        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
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
              className="inline-flex items-center px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-red-50 text-red-600 text-xs sm:text-sm font-medium"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2"
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
              SEO Services
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-2xl dark:text-white sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight"
            >
              Get Your Website Found on Google
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
                {" "}& Grow Organically
              </motion.span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-sm sm:text-base dark:text-gray-200 text-gray-600 leading-7"
            >
              I provide result-focused SEO services to improve your website's
              Google visibility, increase organic traffic and help your business
              reach potential customers searching for your services.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm sm:text-base dark:text-gray-200 text-gray-600 leading-7"
            >
              My SEO strategy focuses on keyword research, on-page SEO,
              technical improvements, content optimization and continuous
              performance tracking.
            </motion.p>

            <motion.div
              variants={staggerContainer}
              className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200"
            >
              {[
                "Keyword Research",
                "On-Page SEO",
                "Technical SEO",
                "Monthly SEO Monitoring",
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

          {/* Pricing Card */}
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
              <motion.div
                className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-red-600/15 blur-3xl"
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
            )}

            <div className="relative z-10">

              <p className="text-sm text-gray-400">
                SEO Plans Starting From
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
                  ₹3,000
                </motion.span>

                <span className="mb-1 text-gray-400 text-sm">
                  / month
                </span>
              </div>

              <div className="mt-5 h-px bg-gray-800" />

              <h3 className="mt-6 text-xl font-semibold text-white">
                Why Choose My SEO Service?
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-6">
                Every website needs a different SEO strategy. I analyze your
                website, competition and target keywords before creating a
                customized SEO plan.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-300">
                {[
                  "Customized SEO strategy",
                  "Targeted keyword optimization",
                  "Website SEO improvements",
                  "Competitor analysis",
                  "Monthly progress monitoring",
                  "Focused strategy for first-page rankings",
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

              <p className="mt-6 text-xs text-gray-500 leading-5">
                The goal is to build strong search visibility and work towards
                first-page Google rankings depending on competition, keywords
                and website condition.
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2 — HOW I DO SEO
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
            className="max-w-2xl mb-10 sm:mb-12"
          >
            <span className="text-red-600 text-sm font-medium">
              My SEO Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              How I Do SEO for Your Website
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              SEO is not just about adding keywords. I follow a structured
              process to understand your website, fix important issues and
              continuously improve its search visibility.
            </p>
          </motion.div>


          {/* Steps */}
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

            {seoSteps.map((step, index) => (
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
                className={`group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 overflow-hidden transition-colors duration-300 hover:border-red-200 ${
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
                    className="text-red-600 text-lg"
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
          SECTION 3 — BENEFITS + WHAT I OFFER
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Why Choose Me */}
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
              Why Work With Me?
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Professional SEO Without
              <span className="text-red-600"> Expensive Agency Prices</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I keep my SEO services affordable so small businesses,
              startups and individuals can invest in professional SEO without
              paying the high prices usually charged by large agencies.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              My focus is on providing quality work, clear communication and a
              strategy that is specifically created around your business goals.
            </p>


            {/* Benefits */}
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
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5"
                >
                  <motion.span
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            scale: 1.15,
                          }
                    }
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs"
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


          {/* What I Offer */}
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
                What I Offer
              </p>

              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                Complete SEO Services
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-6">
                From technical improvements to content and keyword optimization,
                I provide the essential SEO services your website needs.
              </p>


              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                className="mt-7 grid sm:grid-cols-2 gap-x-6"
              >

                {offers.map((offer, index) => (
                  <motion.div
                    key={offer}
                    variants={fadeUp}
                    whileHover={
                      shouldReduceMotion
                        ? {}
                        : {
                            x: 4,
                          }
                    }
                    className="flex items-center gap-3 py-3 border-b border-gray-800"
                  >
                    <span className="text-xs text-red-500 font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-gray-300">
                      {offer}
                    </span>
                  </motion.div>
                ))}

              </motion.div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4 — SEO REPORTING
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

              {/* Content */}
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
                  className="inline-flex px-3 py-1.5 rounded-full bg-white/10 text-red-400 text-xs sm:text-sm"
                >
                  Monthly SEO Reports
                </motion.span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Know Exactly How Your SEO
                  <span className="text-red-500"> Is Performing</span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  You will receive regular SEO performance updates so you can
                  clearly understand what is improving, what needs attention
                  and how your website is progressing.
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
                    "Keyword ranking progress",
                    "Organic traffic analysis",
                    "Search visibility tracking",
                    "SEO work completed",
                    "Next-month SEO recommendations",
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
                      <span className="text-red-500">✓</span>
                      {item}
                    </motion.div>
                  ))}

                </motion.div>

              </div>


              {/* Image */}
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
                className="relative h-[280px] sm:h-[350px] lg:h-full min-h-[420px]"
              >

                <motion.img
                  src="/seo-image.webp"
                  alt="SEO Analytics Report"
                  className="absolute inset-0 w-full h-full object-cover"
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
                />

                <div className="absolute inset-0 bg-gray-950/35" />

                {/* Fake report card */}
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
                        Organic Traffic
                      </p>

                      <motion.p
                        className="text-xl font-semibold text-gray-900"
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
                          delay: 0.5,
                          type: "spring",
                          stiffness: 120,
                        }}
                      >
                        +42.8%
                      </motion.p>
                    </div>

                    <motion.div
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              y: [0, -4, 0],
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-red-600 text-2xl"
                    >
                      ↗
                    </motion.div>
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
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
                        duration: 1,
                        delay: 0.4,
                      }}
                      className="h-full w-[72%] bg-red-600 rounded-full origin-left"
                    />
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

export default SeoServices;