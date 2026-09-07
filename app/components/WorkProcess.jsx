"use client";

import { motion } from "motion/react";
import {
  FaComments,
  FaClipboardList,
  FaLaptopCode,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const defaultSteps = [
  {
    icon: FaComments,
    number: "01",
    title: "Consultation",
    description:
      "We discuss your business, goals, requirements and the right digital solution for your project.",
  },
  {
    icon: FaClipboardList,
    number: "02",
    title: "Planning",
    description:
      "I create a clear strategy, project structure and plan based on your requirements.",
  },
  {
    icon: FaLaptopCode,
    number: "03",
    title: "Design & Development",
    description:
      "Your website, marketing campaign or digital solution is designed and developed professionally.",
  },
  {
    icon: FaRocket,
    number: "04",
    title: "Launch & Optimization",
    description:
      "After testing everything, the project is launched and optimized for better performance.",
  },
  {
    icon: FaHeadset,
    number: "05",
    title: "Support",
    description:
      "I provide ongoing support, updates and improvements whenever you need them.",
  },
];

function WorkProcess({
  title = "How I Work",
  subtitle = "A simple and transparent process from idea to execution.",
  steps = defaultSteps,
}) {
  return (
    <section className="w-full py-10 sm:py-12 overflow-hidden">
      {/* HEADING */}
      <motion.div
        className="text-center mb-10 sm:mb-12 px-4"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.p
          className="text-red-600 text-sm font-medium mb-2"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          My Process
        </motion.p>

        <h2 className="text-3xl md:text-4xl dark:text-white font-semibold text-gray-900">
          {title}
        </h2>

        <p className="text-gray-500 dark:text-gray-200 text-sm md:text-base mt-3 max-w-xl mx-auto leading-6">
          {subtitle}
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-0">
        {/* DESKTOP TIMELINE LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-red-600 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        <div className="space-y-5 sm:space-y-6 md:space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-12 md:min-h-[150px]"
                initial={{
                  opacity: 0,
                  x: isLeft ? -35 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* CONTENT */}
                <div
                  className={`w-full ${
                    isLeft ? "md:text-right" : "md:col-start-2"
                  }`}
                >
                  <motion.div
                    className={`
                      group
                      w-full
                      border
                      border-gray-200
                      rounded-2xl
                      p-4
                      sm:p-5
                      bg-white
                      hover:border-red-200
                      hover:shadow-[0_10px_30px_rgba(239,68,68,0.08)]
                      transition-all
                      duration-300
                      ${isLeft ? "" : "md:ml-0"}
                    `}
                    whileHover={{
                      y: -5,
                      scale: 1.01,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  >
                    {/* CARD HEADER */}
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <motion.span
                        className="text-red-600 text-sm font-bold shrink-0"
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.08 + 0.15,
                        }}
                      >
                        {step.number}
                      </motion.span>

                      <motion.div
                        className="text-red-600 text-lg shrink-0"
                        whileHover={{
                          rotate: [0, -8, 8, 0],
                        }}
                        transition={{
                          duration: 0.35,
                        }}
                      >
                        <Icon />
                      </motion.div>

                      <h3 className="font-semibold text-gray-800 dark:text-gray-900 text-sm sm:text-base leading-5">
                        {step.title}
                      </h3>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-500 leading-6">
                      {step.description}
                    </p>

                    {/* SMALL HOVER LINE */}
                    <motion.div
                      className="h-[2px] bg-red-600 rounded-full mt-4 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>

                {/* CENTER DOT */}
                <motion.div
                  className="
                    hidden
                    md:flex
                    absolute
                    left-1/2
                    top-8
                    -translate-x-1/2
                    w-8
                    h-8
                    rounded-full
                    bg-red-600
                    border-4
                    border-white
                    shadow-sm
                    items-center
                    justify-center
                    z-10
                  "
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.08 + 0.15,
                    type: "spring",
                    stiffness: 300,
                    damping: 18,
                  }}
                >
                  <motion.span
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.35, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.15,
                    }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;