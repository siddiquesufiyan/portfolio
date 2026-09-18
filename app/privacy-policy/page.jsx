
"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Cookie,
  Users,
  FileCheck,
  Mail,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import ThemeProvider from "../components/ThemeProvider";

const privacySections = [
  {
    number: "01",
    icon: Database,
    title: "Information I Collect",
    description:
      "When you contact me through this website, email, phone, WhatsApp or enquiry forms, I may collect information such as:",
    points: [
      "Your name",
      "Business or company name",
      "Email address",
      "Phone number",
      "Website or social media details",
      "Project requirements and messages",
    ],
  },
  {
    number: "02",
    icon: FileCheck,
    title: "How I Use Your Information",
    description: "The information you provide may be used to:",
    points: [
      "Respond to your enquiries and messages",
      "Understand your project requirements",
      "Provide website and digital marketing services",
      "Send project-related communication",
      "Provide quotations and service information",
      "Improve my website and services",
    ],
    extra:
      "I do not use your personal information for purposes unrelated to the service or enquiry without a valid reason or your consent.",
  },
  {
    number: "03",
    icon: Cookie,
    title: "Cookies & Analytics",
    description:
      "This website may use cookies or analytics technologies to understand how visitors use the website and to improve its performance.",
    points: [
      "Website functionality",
      "Visitor analytics",
      "Security",
      "User experience",
    ],
    extra:
      "Cookies may help with website functionality, visitor analytics, security and user experience.",
  },
  {
    number: "04",
    icon: Users,
    title: "Third-Party Services",
    description:
      "Some services used on this website may be provided by third-party platforms, such as website hosting, analytics, advertising platforms, communication tools or embedded services.",
    points: [
      "Website hosting providers",
      "Analytics platforms",
      "Advertising platforms",
      "Communication tools",
      "Embedded website services",
    ],
    extra:
      "These third-party services may process information according to their own privacy policies and terms.",
  },
];

function PrivacyPolicyContent() {
  return (
    <main className="min-h-screen lg:px-20 bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* HERO */}
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-red-600 dark:text-white/60 dark:hover:text-red-500"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-red-600">
              <ShieldCheck size={18} />
              Privacy & Security
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Privacy
              <span className="text-red-600"> Policy.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg dark:text-white/60">
              Your privacy matters to me. This page explains how I collect,
              use and protect information when you contact or use my services.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">

              <div className="inline-flex items-center gap-2 text-black/60 dark:text-white/60">
                <LockKeyhole size={16} className="text-red-600" />
                Your information matters
              </div>

              <span className="hidden text-black/20 sm:block dark:text-white/20">
                /
              </span>

              <div className="text-black/40 dark:text-white/40">
                Last updated: September 2026
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Your Privacy
              </span>

              <h2 className="mt-4 max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
                Simple, transparent & responsible.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-8 text-black/65 sm:text-lg dark:text-white/65">
                Sufiyan Web Marketing respects your privacy and is committed
                to protecting the personal information you share through this
                website. I only collect information that is necessary to
                communicate with you and provide requested services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PRIVACY DETAILS */}
      <section className="border-y border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Privacy Details
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              How your information is handled
            </h2>
          </div>

          <div className="grid gap-x-14 gap-y-16 lg:grid-cols-2">

            {privacySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.number}
                  className="relative border-t border-black/10 pt-7 dark:border-white/10"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                      <Icon size={20} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-red-600">
                      {section.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-tight">
                    {section.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
                    {section.description}
                  </p>

                  <ul className="mt-6 space-y-3">

                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-black/70 dark:text-white/70"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-red-600"
                        />

                        <span>{point}</span>
                      </li>
                    ))}

                  </ul>

                  {section.extra && (
                    <p className="mt-6 border-l-2 border-red-600 pl-4 text-sm leading-6 text-black/50 dark:text-white/50">
                      {section.extra}
                    </p>
                  )}

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* DATA PROTECTION */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
                <ShieldCheck size={23} />
              </div>

              <span className="mt-7 block text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                05
              </span>

              <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                Data
                <br />
                Protection.
              </h2>

            </div>

            <div>

              <p className="max-w-3xl text-base leading-8 text-black/65 sm:text-lg dark:text-white/65">
                I take reasonable steps to protect the personal information
                shared with me from unauthorized access, misuse, alteration,
                disclosure or loss.
              </p>

              <div className="mt-9 grid gap-5 sm:grid-cols-2">

                {[
                  "Limited information collection",
                  "Responsible data handling",
                  "Reasonable security measures",
                  "Service-related communication",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-t border-black/10 pt-4 dark:border-white/10"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-red-600"
                    />

                    <span className="text-sm leading-6 text-black/70 dark:text-white/70">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

              <p className="mt-8 max-w-2xl text-sm leading-6 text-black/45 dark:text-white/45">
                While reasonable measures are taken to protect your
                information, no online transmission or storage system can be
                guaranteed to be completely secure.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-t border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
            <LockKeyhole size={21} />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Privacy Matters
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60">
            If you have questions about this Privacy Policy, the information
            you have shared, or how your information is handled, you can
            contact Sufiyan Web Marketing directly.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <Mail size={17} />
            Contact Me
          </Link>

        </div>
      </section>

    </main>
  );
}

export default function Page() {
  return (
    <ThemeProvider>
      <PrivacyPolicyContent />
    </ThemeProvider>
  );
}

