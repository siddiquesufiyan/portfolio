"use client";

import { motion } from "motion/react";
import { assets } from "@/assets/assets";
import Image from "next/image";

function Header() {
  return (
    <header
      id="home"
      className="
        w-11/12 max-w-5xl
        mx-auto
        min-h-screen
        flex flex-col items-center justify-center
        text-center
        gap-4
        pt-28 pb-16
        sm:pt-32 sm:pb-20
        md:pt-36 md:pb-24
      "
    >
      {/* =====================================================
          PROFILE IMAGE
          Straight + Centered + Smooth Floating Animation
      ====================================================== */}

      <motion.div
        className="
          relative
          mt-2
          w-28 h-28
          sm:w-32 sm:h-32
          md:w-36 md:h-36
          flex items-center justify-center
        "
        initial={{
          opacity: 0,
          scale: 0.8,
          y: 25,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -7, 0],
        }}
        transition={{
          opacity: {
            duration: 0.45,
            ease: "easeOut",
          },
          scale: {
            duration: 0.6,
            type: "spring",
            stiffness: 140,
            damping: 14,
          },
          y: {
            delay: 0.7,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* =========================
            ROTATING ORBIT
        ========================== */}

        <motion.div
          className="
            absolute
            -inset-4
            rounded-full
            border
              border-blue-500/20 
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* =========================
            ORBIT DOT
        ========================== */}

        <motion.div
          className="
            absolute
            inset-[-16px]
            rounded-full
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-2.5
              h-2.5
              rounded-full 
              bg-blue-400 
              shadow-[0_0_18px_rgba(59,130,246,0.9)] 
            "
          />
        </motion.div>

        {/* =========================
            SOFT RED GLOW
        ========================== */}

        <motion.div
          className="
            absolute
            -inset-3
            rounded-full
            bg-gradient-to-r
             from-blue-500 
            via-purple-500 
            to-pink-500 
            blur-xl
            -z-10
          "
          animate={{
            scale: [0.95, 1.08, 0.95],
            opacity: [0.18, 0.35, 0.18],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* =========================
            IMAGE
            NEVER ROTATES
        ========================== */}

        <motion.div
          className="
            relative
            w-full
            h-full
            rounded-full
            overflow-hidden
          "
          whileHover={{
            scale: 1.05,
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
          }}
        >
          <Image
            src={assets.sufiyan_hero_banner}
            alt="Sufiyan Siddique - Digital Marketing Freelancer"
           
            sizes="
              (max-width: 640px) 112px,
              (max-width: 768px) 128px,
              144px
            "
            className="
              object-cover
              object-center
              rounded-full
              border-2
              border-white/20
              shadow-2xl
            "
          />
        </motion.div>
      </motion.div>

      {/* =====================================================
          GREETING
      ====================================================== */}

      <motion.h2
        className="
          flex
          items-center
          justify-center
          flex-wrap
          gap-x-2
          gap-y-1
          text-lg
          sm:text-xl
          md:text-2xl
          font-medium
          mb-2
          px-2
        "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05,
              delayChildren: 0.08,
            },
          },
        }}
      >
        {[
          { text: "Hi!" },
          { text: "I" },
          { text: "am" },
          { text: "Sufiyan", red: true },
          { text: "Siddique", red: true },
        ].map((word, index) => (
          <motion.span
            key={index}
            className={`
              inline-block
              ${word.red ? "text-red-500 font-semibold" : ""}
            `}
            variants={{
              hidden: {
                opacity: 0,
                y: 10,
                filter: "blur(3px)",
              },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {word.text}
          </motion.span>
        ))}

        {/* Waving Hand */}

        <motion.span
          className="inline-flex"
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: [0, 12, -7, 8, 0],
          }}
          transition={{
            opacity: {
              delay: 0.45,
              duration: 0.2,
            },
            scale: {
              delay: 0.45,
              duration: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 15,
            },
            rotate: {
              delay: 0.6,
              duration: 0.55,
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src={assets.hand_icon}
            alt="Hand waving"
            width={24}
            height={24}
            className="w-5 sm:w-6"
          />
        </motion.span>
      </motion.h2>

      {/* =====================================================
          MAIN HEADING
      ====================================================== */}

      <motion.h1
        className="
          relative
          overflow-hidden
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          max-w-4xl
        "
        initial={{
          opacity: 0,
          y: 22,
          filter: "blur(7px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          delay: 0.65,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        I’m a Digital Marketing Freelancer

        {/* Light Sweep */}

        <motion.span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-y-0
            -left-[40%]
            w-[25%]
            skew-x-[-20deg]
            bg-gradient-to-r
            from-transparent
            via-white/30
            to-transparent
          "
          initial={{
            left: "-40%",
          }}
          animate={{
            left: "140%",
          }}
          transition={{
            delay: 1.25,
            duration: 0.9,
            ease: "easeInOut",
          }}
        />
      </motion.h1>

      {/* =====================================================
          DESCRIPTION
      ====================================================== */}

      <motion.p
        className="
          max-w-2xl
          text-sm
          sm:text-base
          md:text-lg
          dark:text-white
          leading-7
          text-gray-600
          px-2
        "
        initial={{
          opacity: 0,
          y: 14,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.95,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        I help businesses grow online with digital marketing, website design,
        SEO, Facebook Ads, Video Editing, WhatsApp Marketing, and social media
        solutions.
      </motion.p>

      {/* =====================================================
          BUTTONS
      ====================================================== */}

      <motion.div
        className="
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-3
          sm:gap-4
          mt-4
          w-full
        "
        initial={{
          opacity: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.15,
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Contact */}

        <motion.a
          href="/contact"
          className="
            px-8 sm:px-10
            py-3
            border
            border-red-600
            rounded-full
            bg-black
            text-white
            flex
            items-center
            justify-center
            gap-2
            w-full
            sm:w-auto
            hover:bg-red-600
            transition-colors
            duration-300
          "
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Contact me

          <Image
            src={assets.right_arrow_white}
            alt=""
            width={16}
            height={16}
            className="w-4"
          />
        </motion.a>

        {/* Download Profile */}

        <motion.a
          href="/sample-resume.pdf"
          download
          className="
            px-8 sm:px-10
            py-3
            border
            border-gray-500
            rounded-full
            dark:text-white
            flex
            items-center
            justify-center
            gap-2
            w-full
            sm:w-auto
            hover:bg-gray-100
            dark:hover:bg-white
            dark:hover:text-black
            transition-colors
            duration-300
          "
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          Download Profile

          <Image
            src={assets.download_icon}
            alt=""
            width={16}
            height={16}
            className="w-4"
          />
        </motion.a>
      </motion.div>
    </header>
  );
}

export default Header;