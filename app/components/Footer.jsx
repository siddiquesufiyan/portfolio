"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";

import { MdEmail, MdPhone } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

function Footer() {
  const linkClass =
    "relative inline-block text-gray-400 transition duration-300 " +
    "hover:text-white " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 " +
    "after:h-[1px] after:w-0 after:bg-red-500 " +
    "after:transition-all after:duration-300 " +
    "hover:after:w-full";

  return (
    <footer className="bg-[#0b0b0b] text-white px-2 md:px-8">

      {/* ================= MAIN FOOTER ================= */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-12 sm:py-14 lg:py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-x-10 xl:gap-x-14">


          {/* ================= BRAND ================= */}
          <div className="min-w-0">

            {/* Logo */}
            <Link
              href="/"
              className="inline-block mb-4"
            >
              <Image
                src="/portfolio-hero-logo.png"
                alt="Sufiyan WebMarketing"
                width={170}
                height={70}
                priority
                className="
                  w-[120px]
                  sm:w-[130px]
                  md:w-[135px]
                  lg:w-[130px]
                  xl:w-[140px]
                  h-auto
                  object-contain
                "
              />
            </Link>

            {/* Short About */}
            <p className="text-gray-400 text-sm leading-6 max-w-[260px]">
              Helping businesses grow online with websites, SEO and
              effective digital marketing solutions.
            </p>


            {/* Social Media */}
            <div className="flex items-center gap-2.5 mt-5">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sufiyanwebmarketing?igsi=MTVsNm80dmk3ZjB1Nw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="
                  w-9 h-9
                  shrink-0
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-red-600
                  hover:border-red-600
                  transition duration-300
                "
              >
                <FaInstagram size={16} />
              </a>


              {/* Facebook */}
              <a
                href="https://www.facebook.com/sufiyan.sk.182940"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="
                  w-9 h-9
                  shrink-0
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-red-600
                  hover:border-red-600
                  transition duration-300
                "
              >
                <FaFacebookF size={15} />
              </a>


              {/* X */}
              <a
                href="https://x.com/Sufiyan25462233"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="
                  w-9 h-9
                  shrink-0
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-red-600
                  hover:border-red-600
                  transition duration-300
                "
              >
                <FaXTwitter size={15} />
              </a>


              {/* YouTube */}
              <a
                href="https://www.youtube.com/@SufiyanWebMarketing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="
                  w-9 h-9
                  shrink-0
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-red-600
                  hover:border-red-600
                  transition duration-300
                "
              >
                <FaYoutube size={17} />
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sufiyan-siddique-3b48472a7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  w-9 h-9
                  shrink-0
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  text-gray-400
                  hover:text-white
                  hover:bg-red-600
                  hover:border-red-600
                  transition duration-300
                "
              >
                <FaLinkedinIn size={16} />
              </a>

            </div>

          </div>


          {/* ================= SERVICES ================= */}
          <div>

            <h3 className="text-base sm:text-lg font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link href="#services" className={linkClass}>
                  Website Design
                </Link>
              </li>

              <li>
                <Link href="#services" className={linkClass}>
                  SEO
                </Link>
              </li>

              <li>
                <Link href="#services" className={linkClass}>
                  Facebook Ads
                </Link>
              </li>

              <li>
                <Link href="#services" className={linkClass}>
                  WhatsApp Marketing
                </Link>
              </li>

              <li>
                <Link href="#services" className={linkClass}>
                  Video Editing
                </Link>
              </li>

              <li>
                <Link href="#services" className={linkClass}>
                  GNB Creation
                </Link>
              </li>

              <li>
                <Link href="#services" className={linkClass}>
                  Social Media Management
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= QUICK LINKS ================= */}
          <div>

            <h3 className="text-base sm:text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link href="/" className={linkClass}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="#about" className={linkClass}>
                  About Me
                </Link>
              </li>

            
              <li>
                <Link href="#work" className={linkClass}>
                  My Work
                </Link>
              </li>

              <li>
                <Link href="#contact" className={linkClass}>
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className={linkClass}
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className={linkClass}
                >
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>


          {/* ================= LET'S CONNECT ================= */}
          <div>

            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Let's Connect
            </h3>

            <p className="text-gray-400 text-sm leading-6 max-w-[280px]">
              Have a project in mind? Let’s discuss your requirements and
              find the right digital solution for your business.
            </p>


            {/* Start Project */}
            <Link
              href="#contact"
              className="
                inline-flex
                items-center
                gap-2
                mt-5
                px-5
                py-2.5
                rounded-full
                bg-red-600
                text-white
                text-sm
                font-medium
                hover:bg-red-700
                hover:shadow-lg
                hover:shadow-red-600/20
                transition
                duration-300
              "
            >
              Start a Project
              <FiArrowRight size={16} />
            </Link>


            {/* Contact Details */}
            <div className="mt-6 space-y-3.5">

              {/* Email */}
              <a
                href="mailto:sufiyan9769285713@gmail.com"
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-400
                  hover:text-white
                  transition
                  duration-300
                  group
                "
              >
                <span
                  className="
                    w-8 h-8
                    shrink-0
                    rounded-full
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                    group-hover:bg-red-600
                    group-hover:border-red-600
                    transition
                    duration-300
                  "
                >
                  <MdEmail size={17} />
                </span>

                <span className="text-xs sm:text-sm break-all">
                  sufiyansiddiqu@gmail.com
                </span>
              </a>


              {/* Phone */}
              <a
                href="tel:+919769285713"
                className="
                  flex
                  items-center
                  gap-3
                  text-gray-400
                  hover:text-white
                  transition
                  duration-300
                  group
                "
              >
                <span
                  className="
                    w-8 h-8
                    shrink-0
                    rounded-full
                    bg-white/5
                    border border-white/10
                    flex items-center justify-center
                    group-hover:bg-red-600
                    group-hover:border-red-600
                    transition
                    duration-300
                  "
                >
                  <MdPhone size={17} />
                </span>

                <span className="text-xs sm:text-sm">
                  +91 97692 85713
                </span>
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10">

        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-5">

          <div className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-3
          ">

            <p className="
              text-gray-500
              text-xs
              sm:text-sm
              text-center
              md:text-left
            ">
              © {new Date().getFullYear()} Sufiyan WebMarketing.
              All rights reserved.
            </p>


            <div className="
              flex
              items-center
              justify-center
              gap-5
              text-xs
              sm:text-sm
            ">

              <Link
                href="/privacy-policy"
                className="text-gray-500 hover:text-red-500 transition"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="text-gray-500 hover:text-red-500 transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;