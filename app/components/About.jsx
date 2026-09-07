"use client";

import { motion } from "motion/react";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";

function About() {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-8 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
          },
        },
      }}
    >
      {/* SECTION TITLE */}
      <motion.h4
        className="text-center mb-2 text-lg"
        variants={{
          hidden: {
            opacity: 0,
            y: 10,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          },
        }}
      >
        Introduction
      </motion.h4>

      <motion.h2
        className="text-center text-5xl"
        variants={{
          hidden: {
            opacity: 0,
            y: 15,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.45,
              ease: "easeOut",
            },
          },
        }}
      >
        About Me
      </motion.h2>

      {/* MAIN ABOUT CONTENT */}
      <div
        className="
          flex
          justify-between
          items-center
          w-full
          flex-col
          lg:flex-row
          gap-20
          my-12
          md:my-16
        "
      >
        {/* IMAGE */}
        <motion.div
          className="w-64 sm:w-90 rounded-3xl max-w-none"
          variants={{
            hidden: {
              opacity: 0,
              x: -30,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          <motion.div
            whileHover={{
              y: -5,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="rounded-3xl overflow-hidden"
          >
            <Image
              src={assets.sufiyan_web_developer}
              alt="Sufiyan as a freelancer"
              className="w-full rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* CONTENT */}
        <motion.div
          className="flex-1"
          variants={{
            hidden: {
              opacity: 0,
              x: 30,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
        >
          {/* DESCRIPTION */}
          <motion.p
            className="mb-4 max-w-2xl"
            variants={{
              hidden: {
                opacity: 0,
                y: 10,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                },
              },
            }}
          >
            I am a professional freelancer with 4 years of experience in
            digital marketing and web services. I provide website design, SEO,
            social media management, WhatsApp marketing, Facebook Ads, video
            editing, and GNB creation. I help businesses, startups, B2B and B2C
            clients build a strong online presence, generate leads, and grow
            their business.
          </motion.p>

          {/* INFO CARDS */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
            {infoList.map(
              ({ icon, title, description }, index) => (
                <motion.li
                  key={index}
                  className="
                    border-[0.5px]
                    border-gray-400
                    rounded-xl
                    p-2
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    dark:hover:bg-black
                    hover:bg-lightHover
                    hover:shadow-black
                  "
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 15,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.35,
                        delay: index * 0.05,
                        ease: "easeOut",
                      },
                    },
                  }}
                  whileHover={{
                    y: -4,
                  }}
                >
                  <div className="text-2xl w-7 mt-1">
                    {icon}
                  </div>

                  <h3 className="my-3 font-semibold dark:text-white text-gray-700 text-sm">
                    {title}
                  </h3>

                  <p className="text-gray-600 text-xs leading-5 dark:text-white">
                    {description}
                  </p>
                </motion.li>
              )
            )}
          </ul>

          {/* TOOLS */}
          <motion.div
            className="w-full max-w-xl mx-auto text-center mt-4 px-4"
            variants={{
              hidden: {
                opacity: 0,
                y: 12,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  delay: 0.1,
                },
              },
            }}
          >
            <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
              Tools I Used
            </h4>

            <ul className="flex items-center justify-center gap-2.5 flex-wrap">
              {toolsData.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <motion.li
                    key={index}
                    title={tool.name}
                    className="
                      w-9 h-9
                      cursor-pointer
                      flex items-center justify-center
                      rounded-lg
                      bg-red-50
                      text-red-600
                      border border-red-100
                      shadow-sm
                      transition-all
                      duration-200
                      hover:bg-red-600
                      hover:text-white
                      hover:border-red-600
                      hover:shadow-md
                      dark:bg-red-950/30
                      dark:text-red-400
                      dark:border-red-900
                      dark:hover:bg-red-600
                      dark:hover:text-white
                    "
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
                      amount: 0.5,
                    }}
                    transition={{
                      duration: 0.25,
                      delay: index * 0.04,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -3,
                      scale: 1.08,
                    }}
                  >
                    <Icon className="text-[18px]" />
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;