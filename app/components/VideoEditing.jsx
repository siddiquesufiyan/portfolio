
"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FiCheck,
  FiPlay,
  FiFilm,
  FiScissors,
  FiMusic,
  FiType,
  FiZap,
  FiLayers,
  FiClock,
  FiArrowUpRight,
  FiVideo,
  FiMonitor,
  FiSmartphone,
} from "react-icons/fi";

function VideoEditing() {
  const [activeService, setActiveService] = useState("basic");

  const editingProcess = [
    {
      number: "01",
      title: "Send Your Footage",
      description:
        "Send me your raw videos, images, audio, script or any other material required for the project.",
    },
    {
      number: "02",
      title: "Understand Your Style",
      description:
        "I understand your requirements, platform, audience and preferred editing style before starting.",
    },
    {
      number: "03",
      title: "Video Editing",
      description:
        "I edit your footage with cuts, transitions, music, text, effects and other elements according to your requirement.",
    },
    {
      number: "04",
      title: "Creative Enhancement",
      description:
        "I improve pacing, visual flow, audio and overall presentation to make the video more engaging.",
    },
    {
      number: "05",
      title: "Review & Revision",
      description:
        "You review the edited video and I make the required changes based on your feedback.",
    },
    {
      number: "06",
      title: "Final Delivery",
      description:
        "The final video is exported in a suitable format and resolution for your required platform.",
    },
  ];

  const basicFeatures = [
    "Professional video cutting",
    "Transitions & smooth edits",
    "Background music",
    "Text & captions",
    "Basic effects",
    "Color adjustment",
    "Social media ready export",
  ];

  const aiFeatures = [
    "AI-assisted video creation",
    "AI visuals & scenes",
    "AI voice / narration support",
    "Script-based video creation",
    "Captions & text animation",
    "Creative transitions & effects",
    "Social media optimized output",
    "Custom AI video concepts",
  ];

  const editingServices = [
    {
      icon: FiFilm,
      title: "Reels Editing",
      description:
        "Short-form videos designed for Instagram Reels, YouTube Shorts and other social platforms.",
    },
    {
      icon: FiVideo,
      title: "YouTube Videos",
      description:
        "Professional editing for YouTube videos, tutorials, vlogs and informational content.",
    },
    {
      icon: FiScissors,
      title: "Short Video Editing",
      description:
        "Clean and engaging edits for promotional videos, personal content and social media.",
    },
    {
      icon: FiZap,
      title: "AI Video",
      description:
        "AI-assisted videos using generated visuals, narration, scenes and creative concepts.",
    },
    {
      icon: FiMusic,
      title: "Music & Audio",
      description:
        "Background music, audio cleanup, sound effects and better audio synchronization.",
    },
    {
      icon: FiType,
      title: "Text & Captions",
      description:
        "Captions, subtitles, animated text and attention-grabbing typography.",
    },
    {
      icon: FiLayers,
      title: "Transitions & Effects",
      description:
        "Smooth transitions, motion effects and visual enhancements according to the content.",
    },
    {
      icon: FiMonitor,
      title: "Business Videos",
      description:
        "Professional videos for businesses, services, products, presentations and promotions.",
    },
  ];

  const platforms = [
    "Instagram Reels",
    "YouTube",
    "YouTube Shorts",
    "Facebook",
    "Business Promotions",
    "Product Videos",
    "Personal Videos",
    "Advertisements",
  ];

  return (
    <>
      {/* =====================================================
          SECTION 1 — HERO + PRICING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-red-50 dark:bg-red-950/20 text-red-600 text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Video Editing Services
            </span>

            <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
              Turn Your Raw Footage Into
              <span className="text-red-600"> Engaging Videos</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              I provide affordable video editing services for reels, YouTube
              videos, promotional content, business videos and personal
              projects.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              From simple video editing to AI-powered video creation, I can
              create content according to your style, platform and
              requirements.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200">

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Reels & Shorts
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                YouTube Videos
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Business Videos
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                AI Video Creation
              </div>

            </div>
          </div>


          {/* PRICING CARD */}
          <div className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden">

            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-red-600/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative z-10">

              {/* SERVICE SWITCH */}
              <div className="flex gap-2 p-1 rounded-xl bg-white/5">

                <button
                  onClick={() => setActiveService("basic")}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs sm:text-sm transition ${
                    activeService === "basic"
                      ? "bg-white text-gray-950"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  Basic Editing
                </button>

                <button
                  onClick={() => setActiveService("ai")}
                  className={`flex-1 rounded-lg px-3 py-2 text-xs sm:text-sm transition ${
                    activeService === "ai"
                      ? "bg-red-600 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  AI Video
                </button>

              </div>


              {/* BASIC */}
              {activeService === "basic" ? (
                <div className="mt-7">

                  <p className="text-sm text-gray-400">
                    Basic Video Editing
                  </p>

                  <div className="mt-2 flex items-end gap-2">

                    <span className="text-4xl sm:text-5xl font-semibold text-white">
                      ₹400
                    </span>

                    <span className="mb-1 text-gray-400 text-sm">
                      / video
                    </span>

                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    Basic editing can go up to ₹1,000 depending on the project.
                  </p>

                  <div className="mt-5 h-px bg-gray-800" />

                  <h2 className="mt-6 text-xl font-semibold text-white">
                    What's Included?
                  </h2>

                  <ul className="mt-5 space-y-3 text-sm text-gray-300">

                    {basicFeatures.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <span className="text-red-500 mt-0.5">
                          <FiCheck />
                        </span>

                        {item}
                      </li>
                    ))}

                  </ul>

                </div>
              ) : (

                /* AI */
                <div className="mt-7">

                  <p className="text-sm text-gray-400">
                    AI Video Creation
                  </p>

                  <div className="mt-2 flex items-end gap-2">

                    <span className="text-4xl sm:text-5xl font-semibold text-red-500">
                      ₹600
                    </span>

                    <span className="mb-1 text-gray-400 text-sm">
                      / video
                    </span>

                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    AI video projects can range up to ₹2,000 per video.
                  </p>

                  <div className="mt-5 h-px bg-gray-800" />

                  <h2 className="mt-6 text-xl font-semibold text-white">
                    What's Included?
                  </h2>

                  <ul className="mt-5 space-y-3 text-sm text-gray-300">

                    {aiFeatures.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3"
                      >
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
                    Pricing Note:
                  </span>{" "}
                  Final pricing depends on video duration, editing complexity,
                  footage, effects, revisions and the overall requirement.

                </p>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2 — VIDEO EDITOR PREVIEW
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* CONTENT */}
            <div>

              <span className="text-red-600 text-sm font-medium">
                Professional Video Editing
              </span>

              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
                From Raw Clips to a Finished Video
              </h2>

              <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
                Good editing is more than just cutting clips. I focus on
                pacing, storytelling, visuals, audio and presentation so your
                video feels polished and engaging.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Clean cuts & professional pacing",
                  "Music & sound effects",
                  "Captions & animated text",
                  "Transitions & visual effects",
                  "Color & visual enhancement",
                  "Platform-ready export",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-red-600">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}

              </div>

            </div>


            {/* VIDEO EDITOR UI */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden shadow-sm">

              {/* TOP BAR */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-800">

                <div className="flex items-center gap-2">

                  <span className="w-2.5 h-2.5 rounded-full bg-red-500" />

                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                    Video Project
                  </span>

                </div>

                <span className="text-xs text-gray-400">
                  00:24
                </span>

              </div>


              {/* PREVIEW */}
              <div className="relative h-[210px] sm:h-[260px] bg-gray-950 flex items-center justify-center overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-gray-950 to-black" />

                <div className="relative z-10 w-16 h-16 rounded-full border border-white/20 bg-white/10 backdrop-blur flex items-center justify-center text-white">
                  <FiPlay className="ml-1 text-xl" />
                </div>

                {/* FLOATING LABEL */}
                <div className="absolute top-4 left-4 rounded-lg bg-white/10 backdrop-blur px-3 py-2 text-xs text-white">
                  Editing Preview
                </div>

                <div className="absolute bottom-4 right-4 rounded-lg bg-red-600 px-3 py-2 text-xs text-white">
                  1080p
                </div>

              </div>


              {/* TIMELINE */}
              <div className="p-4">

                <div className="flex justify-between text-[10px] text-gray-400 mb-2">
                  <span>00:00</span>
                  <span>00:08</span>
                  <span>00:16</span>
                  <span>00:24</span>
                </div>

                <div className="relative h-3 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">

                  <div className="absolute left-0 top-0 h-full w-[38%] bg-red-600 rounded-full" />

                  <div className="absolute left-[42%] top-0 h-full w-[22%] bg-red-400 rounded-full" />

                  <div className="absolute left-[68%] top-0 h-full w-[29%] bg-gray-400 rounded-full" />

                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">

                  <div className="h-8 rounded-md bg-gray-100 dark:bg-gray-800" />

                  <div className="h-8 rounded-md bg-red-50 dark:bg-red-950/30" />

                  <div className="h-8 rounded-md bg-gray-100 dark:bg-gray-800" />

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
              My Video Editing Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              From Footage to Final Video
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              I follow a simple process to turn your raw content into a
              polished video ready for your audience.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            {editingProcess.map((step) => (

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
          SECTION 4 — BASIC VS AI
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-red-600 text-sm font-medium">
              Choose Your Video Service
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Basic Editing or AI Video?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Choose traditional video editing when you already have footage,
              or choose AI video creation when you want a video created using
              AI-assisted visuals and content.
            </p>

          </div>


          <div className="mt-10 grid md:grid-cols-2 gap-5">

            {/* BASIC */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 bg-white dark:bg-gray-900">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-red-600 font-medium">
                    Service 01
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    Basic Editing
                  </h3>

                </div>

                <span className="text-3xl font-semibold text-red-600">
                  ₹400
                </span>

              </div>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-6">
                Best when you already have your footage and need professional
                editing, cuts, music, captions, transitions and effects.
              </p>

              <div className="mt-6 space-y-3">

                {basicFeatures.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-red-600">
                      ✓
                    </span>

                    {item}
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-xl bg-red-50 dark:bg-red-950/20 p-4">

                <p className="text-xs text-red-700 dark:text-red-300 leading-5">
                  Basic video editing starts from ₹400 and can go up to
                  ₹1,000 depending on the project.
                </p>

              </div>

            </div>


            {/* AI */}
            <div className="relative rounded-2xl bg-gray-950 p-6 sm:p-8 overflow-hidden">

              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-red-600/20 blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-red-400 font-medium">
                      Service 02
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      AI Video Creation
                    </h3>

                  </div>

                  <span className="text-3xl font-semibold text-red-500">
                    ₹600
                  </span>

                </div>

                <p className="mt-4 text-sm text-gray-400 leading-6">
                  Ideal when you want a creative video generated using
                  AI-assisted visuals, narration, scenes, scripts or concepts.
                </p>

                <div className="mt-6 space-y-3">

                  {aiFeatures.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="text-red-500">
                        ✓
                      </span>

                      {item}
                    </div>
                  ))}

                </div>

                <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">

                  <p className="text-xs text-gray-400 leading-5">
                    AI video projects start from ₹600 and can go up to ₹2,000
                    per video depending on the concept and complexity.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 5 — WHAT I CAN EDIT
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl">

            <span className="text-red-600 text-sm font-medium">
              What I Edit
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Video Editing for Different Content
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              From short social media videos to business content, I can edit
              different types of videos according to your requirement.
            </p>

          </div>


          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {editingServices.map((service, index) => {

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
          SECTION 6 — WHY WORK WITH ME
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT */}
          <div>

            <span className="text-red-600 text-sm font-medium">
              Why Work With Me?
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Professional Video Editing
              <span className="text-red-600">
                {" "}Without Expensive Agency Pricing
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I work as a freelancer, which means you communicate directly
              with the person working on your video instead of going through
              a large agency.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              My goal is to provide practical, attractive and affordable
              video editing for creators, businesses and individuals.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">

              {[
                "Affordable freelancer pricing",
                "Custom editing style",
                "Direct communication",
                "Revision support",
                "Social media ready videos",
                "Basic & AI video options",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5 bg-white dark:bg-gray-900"
                >

                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center text-xs">
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
              Platforms & Use Cases
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
              Create Videos for Any Platform
            </h3>

            <p className="mt-3 text-sm text-gray-400 leading-6">
              Whether you need content for social media, YouTube, advertising
              or business promotion, I can edit the video according to the
              platform.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">

              {platforms.map((platform) => (

                <div
                  key={platform}
                  className="rounded-xl border border-gray-800 p-4"
                >

                  <span className="text-red-500 text-sm">
                    ✓
                  </span>

                  <p className="mt-2 text-sm text-gray-300">
                    {platform}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 7 — FINAL VIDEO SHOWCASE
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-14 sm:pb-20 pt-12">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl bg-gray-950">

            <div className="grid lg:grid-cols-2 items-center">

              {/* CONTENT */}
              <div className="p-7 sm:p-9 lg:p-12">

                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs sm:text-sm">
                  <FiPlay />
                  Video Creation
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Have Footage?
                  <span className="text-red-500">
                    {" "}Let's Turn It Into a Video.
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  Send your raw footage or tell me your video idea. I can
                  create a professionally edited video or an AI-assisted video
                  according to your requirements.
                </p>

                <div className="mt-6 space-y-3">

                  {[
                    "Basic Video Editing — ₹400 to ₹1,000",
                    "AI Video Creation — ₹600 to ₹2,000",
                    "Reels & Shorts",
                    "YouTube & Business Videos",
                    "Custom editing according to requirement",
                  ].map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >

                      <span className="text-red-500">
                        ✓
                      </span>

                      {item}

                    </div>

                  ))}

                </div>

                <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-medium text-white hover:bg-red-700 transition">

                  Get Started

                  <FiArrowUpRight />

                </button>

              </div>


              {/* IMAGE / VIDEO VISUAL */}
              <div className="relative h-[300px] sm:h-[380px] lg:h-full min-h-[460px]">

                <Image
                  src="/video-editing.webp"
                  alt="Video Editing Services"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gray-950/30" />


                {/* FLOATING EDITING CARD */}
                <div className="absolute bottom-6 left-5 right-5 sm:left-8 sm:right-8 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-xs text-gray-500">
                        Video Editing
                      </p>

                      <p className="mt-1 text-xl font-semibold text-gray-900">
                        Editing in Progress →
                      </p>

                    </div>

                    <div className="text-red-600 text-2xl">
                      <FiPlay />
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

export default VideoEditing;

