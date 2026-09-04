"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// React Icons
import {
  FiSearch,
  FiMonitor,
  FiVideo,
  FiShare2,
  FiChevronDown,
  FiArrowRight,
  FiX,
} from "react-icons/fi";

import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

function Navbar() {
  // =========================
  // Menu States
  // =========================
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  // Services dropdown reference
  const servicesRef = useRef(null);

  // =========================
  // Services
  // =========================
  const services = [
    {
      name: "SEO",
      href: "/services/seo",
      icon: FiSearch,
    },
    {
      name: "Website Design",
      href: "/services/website-design",
      icon: FiMonitor,
    },
    {
      name: "WhatsApp Marketing",
      href: "/services/whatsapp-marketing",
      icon: FaWhatsapp,
    },
    {
      name: "Facebook Ads",
      href: "/services/facebook-ads",
      icon: FaFacebookF,
    },
    {
      name: "Video Editing",
      href: "/services/video-editing",
      icon: FiVideo,
    },
    {
      name: "GNB Creation",
      href: "/services/gnb-creation",
      icon: FiShare2,
    },
    {
      name: "Social Media Handling",
      href: "/services/social-media-handling",
      icon: FiShare2,
    },
  ];

  // =========================
  // Scroll Effect
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Close Dropdown / Escape
  // =========================
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // =========================
  // Prevent Background Scroll
  // =========================
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // =========================
  // Close Mobile Menu
  // =========================
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  // =========================
  // Toggle Desktop Services
  // =========================
  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  // =========================
  // Toggle Mobile Services
  // =========================
  const toggleMobileServices = () => {
    setIsMobileServicesOpen((prev) => !prev);
  };

  return (
    <>
      {/* ========================================
          HEADER BACKGROUND
      ========================================= */}
      <div className="fixed top-0 left-0 -z-10 w-full pointer-events-none">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full h-auto"
          priority
        />
      </div>

      {/* ========================================
          NAVBAR
      ========================================= */}
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-8 xl:px-[6%] pt-4 sm:pt-5">
        <nav
          className={`
            mx-auto
            w-full
            max-w-[1440px]
            h-[64px]
            sm:h-[68px]
            lg:h-[72px]

            flex
            items-center
            justify-between

            px-4
            sm:px-5
            lg:px-6
            xl:px-7

            rounded-2xl
            border
            border-white/70
            backdrop-blur-xl

            transition-all
            duration-300

            ${
              isScroll
                ? "bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
                : "bg-white/80"
            }
          `}
        >
          {/* ========================================
              LOGO
          ========================================= */}
          <Link
            href="/"
            aria-label="Go to homepage"
            onClick={closeMenu}
            className="shrink-0 cursor-pointer"
          >
            <Image
              src={assets.portfolio_logo}
              alt="Sufiyan Web Marketing"
              className="
                w-11
                sm:w-12
                lg:w-14
                xl:w-[60px]
                h-auto
                object-contain
              "
              priority
            />
          </Link>

          {/* ========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <ul
            className={`
              hidden
              md:flex
              items-center
              gap-1
              lg:gap-2

              rounded-full
              p-1.5
              lg:p-2

              transition-all
              duration-300

              ${
                isScroll
                  ? "bg-transparent border-transparent"
                  : "bg-gray-50/70 border border-gray-200"
              }
            `}
          >
            {/* HOME */}
            <li>
              <Link
                href="/"
                className="
                  block
                  px-4
                  lg:px-5
                  py-2
                  lg:py-2.5
                  text-sm
                  lg:text-[15px]
                  font-medium
                  rounded-full
                  cursor-pointer
                  hover:bg-white
                  hover:text-red-800
                  transition-all
                  duration-300
                "
              >
                Home
              </Link>
            </li>

            {/* ABOUT */}
            <li>
              <Link
                href="/about"
                className="
                  block
                  px-4
                  lg:px-5
                  py-2
                  lg:py-2.5
                  text-sm
                  lg:text-[15px]
                  font-medium
                  rounded-full
                  cursor-pointer
                  hover:bg-white
                  hover:text-red-800
                  transition-all
                  duration-300
                "
              >
                About
              </Link>
            </li>

            {/* ========================================
                SERVICES
            ========================================= */}
            <li
              ref={servicesRef}
              className="relative flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
            >
              {/* Services Link */}
              <Link
                href="/services"
                className="
                  flex
                  items-center
                  gap-1

                  px-4
                  lg:px-5

                  py-2
                  lg:py-2.5

                  text-sm
                  lg:text-[15px]
                  font-medium

                  rounded-l-full

                  cursor-pointer

                  hover:bg-white
                  hover:text-red-800

                  transition-all
                  duration-300
                "
              >
                Services
              </Link>

              {/* Dropdown Arrow */}
              <button
                type="button"
                onClick={toggleServices}
                aria-label="Open services menu"
                aria-expanded={isServicesOpen}
                className="
                  flex
                  items-center
                  justify-center

                  h-full

                  pr-4
                  lg:pr-5
                  pl-1

                  py-2
                  lg:py-2.5

                  rounded-r-full

                  cursor-pointer

                  hover:bg-white
                  hover:text-red-800

                  transition-all
                  duration-300
                "
              >
                <FiChevronDown
                  size={15}
                  strokeWidth={2}
                  className={`
                    transition-transform
                    duration-300

                    ${isServicesOpen ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* ========================================
                  DESKTOP SERVICES DROPDOWN
              ========================================= */}
              <div
                onMouseLeave={() => setIsServicesOpen(false)}
                className={`
                  absolute
                  left-1/2
                  -translate-x-1/2
                  top-full
                  mt-3

                  w-[310px]

                  p-2

                  rounded-2xl

                  bg-white

                  border
                  border-gray-100

                  shadow-[0_20px_50px_rgba(0,0,0,0.12)]

                  transition-all
                  duration-200

                  origin-top

                  ${
                    isServicesOpen
                      ? "opacity-100 visible scale-100 translate-y-0"
                      : "opacity-0 invisible scale-95 -translate-y-2 pointer-events-none"
                  }
                `}
              >
                {/* Dropdown Heading */}
                <div className="px-4 pt-3 pb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                    What I Do
                  </p>
                </div>

                {/* Services */}
                {services.map((service) => {
                  const Icon = service.icon;

                  return (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        gap-3

                        px-3
                        py-3

                        rounded-xl

                        cursor-pointer

                        hover:bg-gray-50

                        transition-all
                        duration-200
                      "
                    >
                      {/* Icon */}
                      <span
                        className="
                          w-9
                          h-9
                          shrink-0

                          flex
                          items-center
                          justify-center

                          rounded-lg

                          bg-gray-100
                          text-gray-700

                          group-hover:bg-red-800
                          group-hover:text-white

                          transition-all
                          duration-300
                        "
                      >
                        <Icon size={17} strokeWidth={2} />
                      </span>

                      {/* Service Name */}
                      <span
                        className="
                          flex-1

                          text-sm
                          font-medium
                          text-gray-700

                          group-hover:text-red-800

                          transition-colors
                          duration-300
                        "
                      >
                        {service.name}
                      </span>

                      {/* Arrow */}
                      <FiArrowRight
                        size={15}
                        className="
                          text-gray-300

                          group-hover:text-red-800
                          group-hover:translate-x-1

                          transition-all
                          duration-300
                        "
                      />
                    </Link>
                  );
                })}
              </div>
            </li>

            {/* MY WORK */}
            <li>
              <Link
                href="/work"
                className="
                  block
                  px-4
                  lg:px-5
                  py-2
                  lg:py-2.5
                  text-sm
                  lg:text-[15px]
                  font-medium
                  rounded-full
                  cursor-pointer
                  hover:bg-white
                  hover:text-red-800
                  transition-all
                  duration-300
                "
              >
                My Work
              </Link>
            </li>

            {/* CONTACT */}
            <li>
              <Link
                href="/contact"
                className="
                  block
                  px-4
                  lg:px-5
                  py-2
                  lg:py-2.5
                  text-sm
                  lg:text-[15px]
                  font-medium
                  rounded-full
                  cursor-pointer
                  hover:bg-white
                  hover:text-red-800
                  transition-all
                  duration-300
                "
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* ========================================
              RIGHT ACTIONS
          ========================================= */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Button */}
            <button
              type="button"
              aria-label="Toggle dark mode"
              className="
                w-9
                h-9
                sm:w-10
                sm:h-10

                flex
                items-center
                justify-center

                rounded-full

                border
                border-gray-200

                bg-white/70

                hover:bg-gray-100

                cursor-pointer

                transition-all
                duration-300
              "
            >
              <Image
                src={assets.moon_icon}
                alt=""
                className="w-4 sm:w-5"
              />
            </button>

            {/* Desktop Contact Button */}
            <Link
              href="/contact"
              className="
                hidden
                lg:flex

                items-center
                gap-2

                px-5
                xl:px-7

                py-2.5
                xl:py-3

                bg-black
                text-white

                rounded-full

                text-sm
                font-medium

                cursor-pointer

                hover:bg-red-800

                transition-all
                duration-300

                group
              "
            >
              Let's Talk

              <Image
                src={assets.arrow_icon}
                alt=""
                className="
                  w-3
                  invert

                  group-hover:translate-x-1

                  transition-transform
                  duration-300
                "
              />
            </Link>

            {/* ========================================
                MOBILE HAMBURGER
            ========================================= */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              className="
                md:hidden

                w-10
                h-10

                flex
                items-center
                justify-center

                rounded-full

                bg-black

                hover:bg-red-800

                cursor-pointer

                transition-all
                duration-300
              "
            >
              <Image
                src={assets.menu_black}
                alt=""
                className="w-5 invert"
              />
            </button>
          </div>
        </nav>
      </header>

      {/* ========================================
          MOBILE OVERLAY
      ========================================= */}
      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[60]

          bg-black/30
          backdrop-blur-sm

          md:hidden

          transition-all
          duration-300

          ${
            isMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      />

      {/* ========================================
          MOBILE SIDE MENU
      ========================================= */}
      <aside
        className={`
          fixed
          top-0
          right-0
          z-[70]

          h-dvh

          w-[300px]
          max-w-[88vw]

          bg-white

          shadow-[-20px_0_50px_rgba(0,0,0,0.15)]

          md:hidden

          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* ========================================
            MOBILE MENU HEADER
        ========================================= */}
        <div
          className="
            flex
            items-center
            justify-between

            px-6
            py-5

            border-b
            border-gray-100
          "
        >
          <Link href="/" onClick={closeMenu}>
            <Image
              src={assets.portfolio_logo}
              alt="Portfolio logo"
              className="w-11 h-auto"
            />
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="
              w-10
              h-10

              flex
              items-center
              justify-center

              rounded-full

              bg-gray-100

              hover:bg-black
              hover:text-white

              cursor-pointer

              transition-all
              duration-300
            "
          >
            <FiX size={19} strokeWidth={2} />
          </button>
        </div>

        {/* ========================================
            MOBILE NAVIGATION
        ========================================= */}
        <div className="h-[calc(100dvh-81px)] overflow-y-auto px-5 py-7">
          <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
            Navigation
          </p>

          <ul className="space-y-1">
            {/* HOME */}
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-between

                  px-4
                  py-3.5

                  rounded-xl

                  text-[15px]
                  font-medium

                  cursor-pointer

                  hover:bg-gray-50
                  hover:text-red-800

                  transition
                "
              >
                Home

                <FiArrowRight
                  size={16}
                  className="text-gray-300"
                />
              </Link>
            </li>

            {/* ABOUT */}
            <li>
              <Link
                href="/about"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-between

                  px-4
                  py-3.5

                  rounded-xl

                  text-[15px]
                  font-medium

                  cursor-pointer

                  hover:bg-gray-50
                  hover:text-red-800

                  transition
                "
              >
                About

                <FiArrowRight
                  size={16}
                  className="text-gray-300"
                />
              </Link>
            </li>

            {/* ========================================
                MOBILE SERVICES
            ========================================= */}
            <li>
              <div className="flex items-center">
                {/* Services Page Link */}
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="
                    flex-1

                    px-4
                    py-3.5

                    rounded-l-xl

                    text-[15px]
                    font-medium

                    cursor-pointer

                    hover:bg-gray-50
                    hover:text-red-800

                    transition
                  "
                >
                  Services
                </Link>

                {/* Services Dropdown Button */}
                <button
                  type="button"
                  onClick={toggleMobileServices}
                  aria-label="Open services menu"
                  aria-expanded={isMobileServicesOpen}
                  className="
                    px-4
                    py-3.5

                    rounded-r-xl

                    cursor-pointer

                    hover:bg-gray-50
                    hover:text-red-800

                    transition
                  "
                >
                  <FiChevronDown
                    size={17}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        isMobileServicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>
              </div>

              {/* Mobile Services List */}
              <div
                className={`
                  overflow-hidden

                  transition-all
                  duration-300

                  ${
                    isMobileServicesOpen
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }
                `}
              >
                <div className="ml-3 mt-1 pl-3 border-l border-gray-200">
                  {services.map((service) => {
                    const Icon = service.icon;

                    return (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={closeMenu}
                        className="
                          group

                          flex
                          items-center
                          gap-3

                          px-3
                          py-3

                          text-sm
                          text-gray-600

                          rounded-lg

                          cursor-pointer

                          hover:text-red-800
                          hover:bg-gray-50

                          transition
                        "
                      >
                        {/* Icon */}
                        <span
                          className="
                            w-7
                            h-7

                            flex
                            items-center
                            justify-center

                            rounded-md

                            bg-gray-100
                            text-gray-500

                            group-hover:bg-red-800
                            group-hover:text-white

                            transition-all
                            duration-300
                          "
                        >
                          <Icon size={14} />
                        </span>

                        <span>{service.name}</span>

                        <FiArrowRight
                          size={13}
                          className="
                            ml-auto
                            text-gray-300
                            group-hover:text-red-800
                            group-hover:translate-x-1
                            transition-all
                          "
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </li>

            {/* MY WORK */}
            <li>
              <Link
                href="/work"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-between

                  px-4
                  py-3.5

                  rounded-xl

                  text-[15px]
                  font-medium

                  cursor-pointer

                  hover:bg-gray-50
                  hover:text-red-800

                  transition
                "
              >
                My Work

                <FiArrowRight
                  size={16}
                  className="text-gray-300"
                />
              </Link>
            </li>

            {/* CONTACT */}
            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-between

                  px-4
                  py-3.5

                  rounded-xl

                  text-[15px]
                  font-medium

                  cursor-pointer

                  hover:bg-gray-50
                  hover:text-red-800

                  transition
                "
              >
                Contact

                <FiArrowRight
                  size={16}
                  className="text-gray-300"
                />
              </Link>
            </li>
          </ul>

          {/* ========================================
              MOBILE CTA
          ========================================= */}
          <div className="mt-8 px-3">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                flex
                items-center
                justify-between

                w-full

                px-5
                py-4

                bg-black
                text-white

                rounded-2xl

                text-sm
                font-medium

                cursor-pointer

                hover:bg-red-800

                transition-all
                duration-300
              "
            >
              <span>Let's Work Together</span>

              <FiArrowRight size={17} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;