
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FiMapPin,
  FiPhone,
  FiSearch,
  FiStar,
  FiCheck,
  FiArrowUpRight,
  FiGlobe,
  FiCamera,
  FiMessageCircle,
  FiTrendingUp,
  FiEdit3,
  FiBarChart2,
} from "react-icons/fi";

function GNBServices() {
  const [activeService, setActiveService] = useState("creation");

  const gnbProcess = [
    {
      number: "01",
      title: "Business Information",
      description:
        "I collect your business name, category, address, contact details, services and other required information.",
    },
    {
      number: "02",
      title: "Profile Creation",
      description:
        "I create and configure your Google Business Profile with accurate business information.",
    },
    {
      number: "03",
      title: "Verification Support",
      description:
        "I guide you through the available Google verification process and help resolve common profile issues.",
    },
    {
      number: "04",
      title: "Profile Optimization",
      description:
        "I optimize your business category, description, services, contact information and profile details.",
    },
    {
      number: "05",
      title: "Local SEO",
      description:
        "For the monthly SEO service, I optimize your profile around relevant local searches and business keywords.",
    },
    {
      number: "06",
      title: "Monitoring & Improvement",
      description:
        "I monitor your profile and continuously work on improvements to increase local visibility.",
    },
  ];

  const creationFeatures = [
    "Google Business Profile creation",
    "Business information setup",
    "Category selection",
    "Business description",
    "Contact & website setup",
    "Profile optimization",
  ];

  const seoFeatures = [
    "Google Business Profile SEO",
    "Local keyword optimization",
    "Category & service optimization",
    "Profile content improvement",
    "Google Posts strategy",
    "Performance monitoring",
    "Local visibility improvement",
    "Continuous monthly optimization",
  ];

  const profileServices = [
    {
      icon: FiMapPin,
      title: "Business Location",
      description:
        "Set up accurate business location and service-area information.",
    },
    {
      icon: FiSearch,
      title: "Local Keywords",
      description:
        "Optimize your profile around relevant local search terms.",
    },
    {
      icon: FiStar,
      title: "Reviews",
      description:
        "Improve your review strategy and make your profile more trustworthy.",
    },
    {
      icon: FiCamera,
      title: "Photos & Media",
      description:
        "Keep your profile visually complete with relevant business photos.",
    },
    {
      icon: FiEdit3,
      title: "Business Content",
      description:
        "Improve descriptions, services, posts and other profile content.",
    },
    {
      icon: FiTrendingUp,
      title: "Local Visibility",
      description:
        "Work on improving your presence in relevant Google local searches.",
    },
    {
      icon: FiMessageCircle,
      title: "Customer Actions",
      description:
        "Optimize your profile to encourage calls, messages and enquiries.",
    },
    {
      icon: FiBarChart2,
      title: "Performance",
      description:
        "Monitor profile performance and identify areas for improvement.",
    },
  ];

  const businesses = [
    "New Shops",
    "Restaurants",
    "Salons",
    "Clinics",
    "Travel Agencies",
    "Local Services",
    "Agencies",
    "Professionals",
  ];

  return (
    <>
      {/* =====================================================
          SECTION 1 — HERO + PRICING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-red-50 dark:bg-red-950/20 text-red-600 text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Google Business Profile Services
            </span>

            <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
              Get Your Business
              <span className="text-red-600"> Found on Google</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              I create and optimize Google Business Profiles for new and
              existing businesses so customers can find your business on
              Google Search and Google Maps.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              Whether you are opening a new shop, starting a company or
              already have a business profile, I can help you create,
              optimize and improve your Google presence.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                GNB / GBP Creation
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Google Maps Presence
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Local SEO
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Ranking-Focused Optimization
              </div>
            </div>
          </div>

          {/* PRICING */}
          <div className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden">

            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-red-600/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative z-10">

              <div className="flex gap-2 p-1 rounded-xl bg-white/5">
                <button
                  onClick={() => setActiveService("creation")}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs sm:text-sm transition ${
                    activeService === "creation"
                      ? "bg-white text-gray-950"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Profile Creation
                </button>

                <button
                  onClick={() => setActiveService("seo")}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs sm:text-sm transition ${
                    activeService === "seo"
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Profile SEO
                </button>
              </div>

              {activeService === "creation" ? (
                <div className="mt-7">

                  <p className="text-sm text-gray-400">
                    Google Business Profile Creation
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl sm:text-5xl font-semibold text-white">
                      ₹1,000
                    </span>

                    <span className="mb-1 text-gray-400 text-sm">
                      one-time
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Perfect for new shops, companies and local businesses.
                  </p>

                  <div className="mt-5 h-px bg-gray-800" />

                  <h2 className="mt-6 text-xl font-semibold text-white">
                    What's Included?
                  </h2>

                  <ul className="mt-5 space-y-3 text-sm text-gray-300">
                    {creationFeatures.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-red-500 mt-0.5">
                          <FiCheck />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              ) : (
                <div className="mt-7">

                  <p className="text-sm text-gray-400">
                    Google Business Profile SEO
                  </p>

                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-4xl sm:text-5xl font-semibold text-red-500">
                      ₹2,500
                    </span>

                    <span className="mb-1 text-gray-400 text-sm">
                      / month
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Monthly local SEO & profile optimization.
                  </p>

                  <div className="mt-5 h-px bg-gray-800" />

                  <h2 className="mt-6 text-xl font-semibold text-white">
                    What's Included?
                  </h2>

                  <ul className="mt-5 space-y-3 text-sm text-gray-300">
                    {seoFeatures.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="text-red-500 mt-0.5">
                          <FiCheck />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              )}

              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <p className="text-xs text-gray-400 leading-5">
                  <span className="text-red-400 font-medium">
                    Important:
                  </span>{" "}
                  SEO focuses on improving your local visibility and ranking
                  potential. Actual Google rankings depend on competition,
                  location, relevance and Google's systems.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION 2 — GOOGLE PROFILE PREVIEW
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* CONTENT */}
            <div>
              <span className="text-red-600 text-sm font-medium">
                Google Business Profile
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                Your Business Should Be Easy to Find
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
                When customers search for a business like yours, a properly
                created and optimized Google Business Profile can help them
                discover your business and take action.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Appear on Google Search",
                  "Show your business on Google Maps",
                  "Display phone, website and location",
                  "Show services and business information",
                  "Make it easier for customers to contact you",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-red-600">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>


            {/* GOOGLE STYLE CARD */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">

              {/* SEARCH BAR */}
              <div className="p-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 rounded-full border border-gray-200 dark:border-gray-700 px-4 py-3">
                  <FiSearch className="text-gray-500" />

                  <span className="text-sm text-gray-500">
                    best business near me
                  </span>
                </div>
              </div>

              {/* PROFILE */}
              <div className="p-5 sm:p-6">

                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-red-600 text-2xl">
                    <FiGlobe />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Your Business Name
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-sm">
                      <span className="text-gray-700 dark:text-gray-300">
                        4.8
                      </span>

                      <div className="flex text-red-500">
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                        <FiStar />
                      </div>
                    </div>

                    <p className="mt-1 text-xs text-gray-500">
                      Local Business · Your City
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-sm text-gray-600 dark:text-gray-300">

                  <div className="flex gap-3">
                    <FiMapPin className="mt-0.5 text-red-600" />
                    <span>Your Business Address</span>
                  </div>

                  <div className="flex gap-3">
                    <FiPhone className="mt-0.5 text-red-600" />
                    <span>+91 XXXXX XXXXX</span>
                  </div>

                  <div className="flex gap-3">
                    <FiGlobe className="mt-0.5 text-red-600" />
                    <span>www.yourwebsite.com</span>
                  </div>

                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <button className="rounded-lg border border-gray-200 dark:border-gray-700 py-2 text-xs text-gray-700 dark:text-gray-300">
                    Call
                  </button>

                  <button className="rounded-lg border border-gray-200 dark:border-gray-700 py-2 text-xs text-gray-700 dark:text-gray-300">
                    Website
                  </button>

                  <button className="rounded-lg bg-red-600 py-2 text-xs text-white">
                    Directions
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION 3 — PROCESS
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-10 sm:mb-12">

            <span className="text-red-600 text-sm font-medium">
              My GNB Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              From Business Details to Local Visibility
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              I handle the important parts of your Google Business Profile,
              from initial setup to ongoing local SEO.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {gnbProcess.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-900"
              >

                <div className="flex items-center justify-between">

                  <span className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-red-600/30 transition">
                    {step.number}
                  </span>

                  <span className="text-red-600">
                    →
                  </span>

                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 4 — CREATION VS SEO
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-red-600 text-sm font-medium">
              Choose Your Service
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Create Your Profile or Grow Its Visibility?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              If you don't have a Google Business Profile, start with
              creation. Already have one? Monthly SEO can help improve and
              maintain your local visibility.
            </p>

          </div>


          <div className="mt-10 grid md:grid-cols-2 gap-5">

            {/* CREATION */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 bg-white dark:bg-gray-900">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-red-600 font-medium">
                    Service 01
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    GNB Creation
                  </h3>
                </div>

                <span className="text-3xl font-semibold text-red-600">
                  ₹1K
                </span>

              </div>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-6">
                Best for new businesses, shops and professionals who need
                their Google Business Profile created and properly configured.
              </p>

              <div className="mt-6 space-y-3">
                {creationFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-red-600">✓</span>
                    {item}
                  </div>
                ))}
              </div>

            </div>


            {/* SEO */}
            <div className="relative rounded-2xl bg-gray-950 p-6 sm:p-8 overflow-hidden">

              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-red-600/20 blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-red-400 font-medium">
                      Service 02
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      GNB SEO
                    </h3>
                  </div>

                  <span className="text-3xl font-semibold text-red-500">
                    ₹2.5K
                  </span>

                </div>

                <p className="mt-4 text-sm text-gray-400 leading-6">
                  Monthly optimization for businesses that want to improve
                  their local Google visibility and ranking potential.
                </p>

                <div className="mt-6 space-y-3">
                  {seoFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="text-red-500">✓</span>
                      {item}
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 5 — WHAT I OPTIMIZE
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl">

            <span className="text-red-600 text-sm font-medium">
              What I Optimize
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              More Than Just Creating a Profile
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              A Google Business Profile needs accurate information and
              continuous optimization to build a stronger local presence.
            </p>

          </div>


          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {profileServices.map((service, index) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-900 bg-white dark:bg-gray-900"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-red-600 font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Icon className="text-xl text-gray-500 group-hover:text-red-600 transition" />

                  </div>

                  <h3 className="mt-5 text-base font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                  <div className="mt-5 text-red-600 group-hover:translate-x-1 transition-transform">
                    →
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 6 — WHY GNB MATTERS
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT */}
          <div>

            <span className="text-red-600 text-sm font-medium">
              Why Google Business Profile?
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              If Customers Search on Google,
              <span className="text-red-600">
                {" "}Your Business Should Be There
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              For local businesses, Google Business Profile is an important
              part of their online presence. It helps customers discover
              business information when searching on Google.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">

              {[
                "Google Search visibility",
                "Google Maps presence",
                "Customer calls",
                "Website visits",
                "Directions",
                "Business enquiries",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5 bg-white dark:bg-gray-900"
                >
                  <span className="w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center text-xs">
                    ✓
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>


          {/* RIGHT */}
          <div className="rounded-2xl bg-gray-950 p-6 sm:p-8">

            <p className="text-sm text-red-500 font-medium">
              Who Needs It?
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
              Perfect for Local Businesses
            </h3>

            <p className="mt-3 text-sm text-gray-400 leading-6">
              Whether you are opening a new business or already operating
              locally, a properly managed Google Business Profile can support
              your online presence.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">

              {businesses.map((business) => (
                <div
                  key={business}
                  className="rounded-xl border border-gray-800 p-4"
                >

                  <span className="text-red-500 text-sm">
                    ✓
                  </span>

                  <p className="mt-2 text-sm text-gray-300">
                    {business}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 7 — FINAL SHOWCASE / CTA
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-14 sm:pb-20 pt-12">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl bg-gray-950">

            <div className="grid lg:grid-cols-2 items-center">

              {/* CONTENT */}
              <div className="p-7 sm:p-9 lg:p-12">

                <span className="inline-flex px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs sm:text-sm">
                  Local Business Growth
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Opening a New Business?
                  <span className="text-red-500">
                    {" "}Get Your Google Profile Ready.
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  Don't wait until customers start searching for your
                  business. Get your Google Business Profile created and
                  start building your local presence.
                </p>

                <div className="mt-6 space-y-3">

                  {[
                    "GNB / GBP Creation — ₹1,000",
                    "GNB SEO — ₹2,500/month",
                    "Affordable freelancer pricing",
                    "Direct communication",
                    "Creation + ongoing optimization",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="text-red-500">✓</span>
                      {item}
                    </div>
                  ))}

                </div>

                <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white hover:bg-red-700 transition">
                  Get Started
                  <FiArrowUpRight />
                </button>

              </div>


              {/* GOOGLE IMAGE */}
              <div className="relative h-[300px] sm:h-[380px] lg:h-full min-h-[460px]">

                <Image
                  src="/google-business-profile.webp"
                  alt="Google Business Profile"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gray-950/25" />

                {/* FLOATING PROFILE CARD */}
                <div className="absolute bottom-6 left-5 right-5 sm:left-8 sm:right-8 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Google Business Profile
                      </p>

                      <p className="mt-1 text-xl font-semibold text-gray-900">
                        Ready to Grow ↗
                      </p>
                    </div>

                    <div className="text-red-600 text-2xl">
                      <FiTrendingUp />
                    </div>

                  </div>

                  <div className="mt-4 flex gap-1">
                    <div className="h-2 flex-1 rounded-full bg-red-600" />
                    <div className="h-2 flex-1 rounded-full bg-red-500" />
                    <div className="h-2 flex-1 rounded-full bg-red-400" />
                    <div className="h-2 flex-1 rounded-full bg-gray-200" />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default GNBServices;

