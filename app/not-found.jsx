"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative mt-14 flex min-h-screen items-center justify-center overflow-hidden bg-white px-5 text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.04] blur-3xl dark:bg-red-600/[0.08]" />

      <div className="relative mx-auto w-full max-w-3xl text-center">
        {/* 404 */}
        <p className="mt-8 text-[100px] font-black leading-none tracking-[-0.08em] sm:text-[150px]">
          4<span className="text-red-600">0</span>4
        </p>

        {/* Heading */}
        <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-black/55 dark:text-white/55 sm:text-base">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved. Please check the URL or return to the homepage.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:w-auto"
          >
            <Home size={17} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 px-6 py-3.5 text-sm font-semibold text-black transition hover:border-red-600 hover:text-red-600 dark:border-white/10 dark:text-white dark:hover:border-red-600 dark:hover:text-red-500 sm:w-auto"
          >
            <ArrowLeft size={17} />
            Go Back
          </button>

        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-black/10 pt-6 dark:border-white/10">
          <p className="text-xs text-black/35 dark:text-white/35">
            Sufiyan Web Marketing
          </p>
        </div>

      </div>
    </main>
  );
}