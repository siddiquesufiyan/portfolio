
"use client";

import React from "react";
import Link from "next/link";

function ThankYou() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-5 py-2">

      <div className="w-full max-w-3xl">

        {/* Main Card */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.06)] overflow-hidden">

          {/* Top Section */}
          <div className="px-6 sm:px-10 md:px-14 pt-12 pb-10 text-center">

            {/* Success Icon */}
            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-50 border border-green-100 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <p className="text-sm font-medium text-green-600 mb-2">
              ENQUIRY RECEIVED
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Thank You for Reaching Out!
            </h1>

            <p className="mt-5 text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Your project enquiry has been successfully submitted.
              I’ve received your details and will get in touch with you
              shortly to discuss your requirements.
            </p>

          </div>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

       

          {/* Bottom CTA */}
          <div className="bg-gray-50 border-t border-gray-100 px-6 sm:px-10 md:px-14 py-8">

            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

              <div className="text-center sm:text-left">
                <p className="font-medium text-gray-900">
                  Want to explore more?
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Check out my services and previous work.
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-purple-700 transition duration-300 shadow-sm"
              >
                Back to Home

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>

            </div>
          </div>

        </div>

        {/* Small Footer Text */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Thank you for considering my services. I look forward to working with you.
        </p>

      </div>
    </div>
  );
}

export default ThankYou;



