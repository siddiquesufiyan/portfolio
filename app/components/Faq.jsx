"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const faqs = [
  {
    question: "Why should I hire a freelancer instead of a company?",
    answer:
      "Working directly with a freelancer can reduce agency overhead and give you more flexible pricing. I provide professional digital services at freelancer-friendly rates while maintaining a personal approach and direct communication throughout the project.",
  },
  {
    question: "What digital services do you provide?",
    answer:
      "I provide website design and development, SEO, Google Business Profile (GNB) creation and optimization, Facebook & Instagram Ads, social media management, graphic design, logo design, visiting card design, video editing, WhatsApp marketing and other digital marketing services.",
  },
  {
    question: "Can you handle multiple services for my business?",
    answer:
      "Yes. You can work with me for multiple digital requirements instead of hiring different people for every task. From your website and SEO to social media, advertising, graphics and video content, I can manage different parts of your online presence.",
  },
  {
    question: "How much can I save by working with you?",
    answer:
      "Freelancer pricing is generally much more flexible than agency or company pricing because there are fewer overhead costs. Depending on the service and project requirements, I can often offer significantly lower pricing while delivering professional work.",
  },
  {
    question: "What type of businesses have you worked with?",
    answer:
      "I have worked with different types of businesses, including travel companies, B2B and B2C businesses, digital marketing companies, manufacturers, gyms and fitness brands, local shops, electronics businesses and other small and growing businesses.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Absolutely. I work with startups, local businesses, small businesses, established companies and individual business owners. I can recommend services according to your actual requirements and budget instead of offering unnecessary packages.",
  },
  {
    question: "Do you provide customized pricing?",
    answer:
      "Yes. Every project is different, so I prefer understanding your requirements first and then providing a suitable quotation. You only pay for the services your business actually needs.",
  },
  {
    question: "How much experience do you have?",
    answer:
      "I have more than 4 years of experience working in digital marketing, website design and other digital services, with experience across different industries and business types.",
  },
];

function Faq() {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="relative w-full py-16 px-6 md:px-10 overflow-hidden">
      {/* Subtle moving background */}
      <motion.div
        className="absolute -z-10 w-72 h-72 rounded-full bg-red-50 dark:bg-red-950/20 blur-3xl"
        animate={{
          x: [-80, 100, -80],
          y: [-30, 40, -30],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Heading */}
      <motion.div
        className="text-center max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            type: "spring",
            stiffness: 300,
          }}
          className="inline-block text-red-600 text-sm font-medium"
        >
          Frequently Asked Questions
        </motion.span>

        <h2 className="mt-2 dark:text-white text-3xl md:text-4xl font-semibold text-gray-900">
          Why Work With Me?
        </h2>

        <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-200 leading-6">
          Everything you need to know about my services, experience,
          pricing and the way I work.
        </p>
      </motion.div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -18 : 18,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              animate={{
                y: isOpen ? -2 : 0,
              }}
              className="relative"
            >
              <motion.div
                layout
                transition={{
                  layout: {
                    duration: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className={`relative overflow-hidden rounded-2xl border bg-white dark:bg-[#111111] ${
                  isOpen
                    ? "border-red-200 dark:border-red-900/60 shadow-lg shadow-red-100/40 dark:shadow-red-950/20"
                    : "border-gray-200 dark:border-gray-800"
                }`}
              >
                {/* Animated vertical spotlight */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "100%",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="absolute left-0 top-0 w-[3px] bg-red-600 rounded-full"
                    />
                  )}
                </AnimatePresence>

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="relative w-full cursor-pointer flex items-center gap-4 p-5 md:p-6 text-left"
                >
                  {/* Number */}
                  <motion.div
                    animate={{
                      width: isOpen ? 38 : 30,
                      height: isOpen ? 38 : 30,
                      backgroundColor: isOpen
                        ? "rgb(220 38 38)"
                        : "transparent",
                      color: isOpen
                        ? "rgb(255 255 255)"
                        : "rgb(156 163 175)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 20,
                    }}
                    className={`shrink-0 rounded-full flex items-center justify-center text-[10px] font-semibold border ${
                      isOpen
                        ? "border-red-600"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  {/* Question */}
                  <motion.span
                    animate={{
                      x: isOpen ? 3 : 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`flex-1 font-medium cursor-pointer text-sm md:text-base ${
                      isOpen
                        ? "text-red-600"
                        : "dark:text-gray-200 text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </motion.span>

                  {/* Icon */}
                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      scale: isOpen ? 1.08 : 1,
                      backgroundColor: isOpen
                        ? "rgb(220 38 38)"
                        : "rgb(243 244 246)",
                      color: isOpen
                        ? "rgb(255 255 255)"
                        : "rgb(75 85 99)",
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 18,
                    }}
                    className="shrink-0 w-8  cursor-pointer h-8 rounded-full flex items-center justify-center dark:bg-gray-800"
                  >
                    <FaPlus size={10} />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.18,
                        },
                      }}
                    >
                      <motion.div
                        initial={{
                          y: -8,
                          clipPath: "inset(0 0 100% 0)",
                        }}
                        animate={{
                          y: 0,
                          clipPath: "inset(0 0 0% 0)",
                        }}
                        exit={{
                          y: -5,
                          clipPath: "inset(100% 0 0 0)",
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="px-5 md:px-6 pb-6 pl-[76px] md:pl-[86px]"
                      >
                        <div className="h-px w-full bg-gray-100 dark:bg-gray-800 mb-4" />

                        <p className="text-sm cursor-pointer dark:text-gray-300 text-gray-500 leading-7 max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Tiny active glow */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 0.45,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.7,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="absolute -inset-1 -z-10 rounded-2xl bg-red-200 dark:bg-red-900/20 blur-xl"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;