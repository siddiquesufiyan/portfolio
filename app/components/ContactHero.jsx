
"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaGlobe,
  FaBullhorn,
  FaSearch,
  FaPalette,
} from "react-icons/fa";
import { motion } from "framer-motion";

function ContactHero() {
  const services = [
    {
      icon: FaGlobe,
      title: "Website Design",
    },
    {
      icon: FaSearch,
      title: "SEO",
    },
    {
      icon: FaBullhorn,
      title: "Digital Marketing",
    },
    {
      icon: FaPalette,
      title: "Design & Content",
    },
  ];

  const fastReveal = {
    hidden: {
      opacity: 0,
      y: 18,
      scale: 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Main moving spotlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{
            opacity: 0.65,
            scale: 1,
            x: ["-50%", "-43%", "-50%"],
          }}
          transition={{
            opacity: { duration: 0.35 },
            scale: { duration: 0.5 },
            x: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute top-0 left-1/2 w-[520px] h-[300px] bg-red-50 rounded-full blur-3xl"
        />

        {/* Floating mini glow */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            x: [0, 12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-[8%] w-20 h-20 bg-red-100/40 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-52 right-[8%] w-24 h-24 bg-red-100/40 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">
        {/* ================= LABEL ================= */}
        <motion.div
          initial={{ opacity: 0, y: -12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: "backOut",
          }}
          className="flex justify-center mb-5"
        >
          <motion.span
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs md:text-sm font-medium"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-red-600" />
            </span>

            Let's Work Together
          </motion.span>
        </motion.div>

        {/* ================= HEADING ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fastReveal}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight"
          >
            Let's Talk About Your{" "}
            <motion.span
              initial={{
                opacity: 0,
                scale: 0.75,
                display: "inline-block",
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 0.45,
                type: "spring",
                stiffness: 180,
                damping: 12,
              }}
              className="text-red-600 inline-block"
            >
              Next Project
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fastReveal}
            className="max-w-2xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-7 md:leading-8"
          >
            I am a digital marketing freelancer and web designer with 4+
            years of experience helping businesses, startups and professionals
            build their online presence through websites, SEO, advertising,
            social media and creative digital solutions.
          </motion.p>

          <motion.p
            variants={fastReveal}
            className="max-w-xl mx-auto mt-3 text-sm text-gray-500 leading-6"
          >
            Whether you need a website, SEO, Facebook Ads, Google Business
            Profile, social media management, graphic design, video editing or
            any other digital service, feel free to get in touch.
          </motion.p>
        </motion.div>

        {/* ================= CONTACT CARDS ================= */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">
          {/* Phone */}
          <motion.a
            href="tel:9769285713"
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.28,
              duration: 0.4,
              type: "spring",
              stiffness: 180,
              damping: 16,
            }}
            whileHover={{
              y: -5,
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group flex items-center gap-3 w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-200 bg-white hover:border-red-200 hover:shadow-lg transition-shadow duration-300"
          >
            <motion.span
              whileHover={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 0.35 }}
              className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center"
            >
              <FaPhoneAlt size={13} />
            </motion.span>

            <div className="text-left">
              <p className="text-[11px] text-gray-500">
                Call Me
              </p>

              <p className="text-sm font-medium text-gray-800">
                +91 97692 85713
              </p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:sufiyan9769285713@gmail.com"
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.34,
              duration: 0.4,
              type: "spring",
              stiffness: 180,
              damping: 16,
            }}
            whileHover={{
              y: -5,
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group flex items-center gap-3 w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-200 bg-white hover:border-red-200 hover:shadow-lg transition-shadow duration-300"
          >
            <motion.span
              whileHover={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 0.35 }}
              className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center"
            >
              <FaEnvelope size={13} />
            </motion.span>

            <div className="text-left">
              <p className="text-[11px] text-gray-500">
                Email Me
              </p>

              <p className="text-sm font-medium text-gray-800 break-all">
                sufiyan9769285713@gmail.com
              </p>
            </div>
          </motion.a>
        </div>

        {/* ================= CTA ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            delay: 0.42,
            duration: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 14,
          }}
          className="flex justify-center mt-7"
        >
          <motion.div
            whileHover={{
              scale: 1.06,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link
              href="#contact-form"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-red-600 text-white text-sm font-medium shadow-sm"
            >
              {/* Shine */}
              <motion.span
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}
                transition={{
                  duration: 1.2,
                  delay: 0.8,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 w-10 bg-white/20 skew-x-12"
              />

              <span className="relative">
                Send Your Enquiry
              </span>

              <motion.span
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <FaArrowRight size={11} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= SERVICES ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.4,
          }}
          className="max-w-3xl mx-auto mt-10"
        >
          <p className="text-center text-xs text-gray-500 mb-4">
            Services I can help you with
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                    scale: 0.88,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.56 + index * 0.07,
                    duration: 0.35,
                    type: "spring",
                    stiffness: 220,
                    damping: 16,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 hover:border-red-200 hover:shadow-md transition-shadow duration-300 cursor-default"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 8,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                  >
                    <Icon className="text-red-600 text-sm" />
                  </motion.div>

                  <span className="text-xs md:text-sm text-gray-700 font-medium">
                    {service.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ================= TRUST POINTS ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.72,
            duration: 0.35,
          }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8"
        >
          {[
            "4+ Years Experience",
            "Flexible Pricing",
            "Direct Communication",
            "Business-Focused Solutions",
          ].map((item, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.76 + index * 0.06,
                duration: 0.3,
                type: "spring",
                stiffness: 250,
              }}
              whileHover={{
                y: -2,
              }}
              className="flex items-center gap-2 text-xs text-gray-500"
            >
              <motion.span
                whileHover={{
                  scale: 1.2,
                }}
              >
                <FaCheckCircle className="text-red-600" />
              </motion.span>

              {item}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactHero;

