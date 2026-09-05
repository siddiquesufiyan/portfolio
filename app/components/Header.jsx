"use client";

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
      {/* Profile Image */}
      <div className="mt-2">
        <Image
          src={assets.sufiyan_hero_banner}
          alt="Sufiyan Siddique - Digital Marketing Freelancer"
          className="
            w-28 h-28
            sm:w-32 sm:h-32
            md:w-36 md:h-36
            rounded-full
            object-cover
          "
        />
      </div>

      {/* Greeting */}
      <h3
        className="
          flex items-center justify-center gap-2
          text-lg
          sm:text-xl
          md:text-2xl
          font-medium
          mb-2
          px-2
        "
      >
        Hi! I am Sufiyan Siddique

        <Image
          src={assets.hand_icon}
          alt="Hand waving"
          className="w-5 sm:w-6"
        />
      </h3>

      {/* Main Heading */}
      <h1
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          max-w-4xl
        "
      >
        I’m a Digital Marketing Freelancer
      </h1>

      {/* Description */}
      <p
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
      >
        I help businesses grow online with digital marketing, website design,
        SEO, Facebook Ads, Video Editing, WhatsApp Marketing, and social media
        solutions.
      </p>

      {/* Buttons */}
      <div
        className="
          flex flex-col
          sm:flex-row
          items-center
          justify-center
          gap-3
          sm:gap-4
          mt-4
          w-full
        "
      >
        {/* Contact */}
        <a
          href="#contact"
          className="
            px-8 sm:px-10
            py-3
            border
            rounded-full
            bg-black
            text-white
            flex items-center justify-center gap-2
            w-full sm:w-auto
            hover:bg-gray-800
            transition
          "
        >
          Contact me

          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4 dark:text-white"
          />
        </a>

        {/* Resume */}
        <a
          href="/sample-resume.pdf"
          download
          className="
            px-8 sm:px-10
            py-3
            border
            rounded-full
            dark:hover:text-black
            dark:text-white
            border-gray-500
            flex items-center justify-center gap-2
            w-full sm:w-auto
            hover:bg-gray-100
            transition
          "
        >
          Download Profile

          <Image
            src={assets.download_icon}
            alt=""
            className="w-4 "
          />
        </a>
      </div>
    </header>
  );
}

export default Header;