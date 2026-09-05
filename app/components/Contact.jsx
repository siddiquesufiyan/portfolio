
"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Contact() {
  const router = useRouter();
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "d808f368-c911-4ba7-a177-42ef6968f20b"
    );

    // Web3Forms email subject
    formData.append(
      "subject",
      "New Contact Form Enquiry"
    );

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();

    if (data.success) {
      // Redirect to Thank You page
      router.push("/thank-you");
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div
    
      className="w-full px-[12%] py-8 scroll-mt-20 dark:bg-none  bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      {/* Heading */}
      <h4 className="text-center mb-2 text-lg">
        Connect With Me
      </h4>

      <h2 className="text-center text-5xl dark:text-white">
        Contact Us
      </h2>

      {/* Description */}
      <p className="text-center dark:text-white max-w-2xl mx-auto mt-5 mb-10 text-gray-600">
        Have a project or business idea in mind? Feel free to get in touch
        with me. I provide digital marketing and web services including
        website design, SEO, social media management, Facebook Ads,
        WhatsApp marketing, and more. Let’s connect and discuss how I can
        help your business grow online.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={onSubmit}
        className="w-full max-w-2xl mx-auto mt-8 space-y-4 md:space-y-5 pb-20"
      >
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-1.5">
            Full Name *
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
            className="w-full dark:bg-transparent dark:border-gray-700 dark:text-white px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900 transition"
          />
        </div>

        {/* Email + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full dark:bg-transparent dark:border-gray-700 dark:text-white px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1.5">
              Phone / WhatsApp *
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="w-full dark:bg-transparent dark:border-gray-700 dark:text-white px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900 transition"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label className="block text-sm font-medium mb-1.5">
            Service Required *
          </label>

          <select
            name="service"
            required
            defaultValue=""
            className="w-full dark:bg-none dark:bg-black  dark:text-white px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900 transition bg-white"
          >
            <option value="" disabled className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              Select a service
            </option>

            <option value="Website Design" className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              Website Design
            </option>

            <option value="SEO" className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              SEO
            </option>

            <option value="Facebook Ads" className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              Facebook Ads
            </option>

            <option value="WhatsApp Marketing" className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              WhatsApp Marketing
            </option>

            <option value="Video Editing" className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              Video Editing
            </option>

            <option value="Google Business Profile" className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              Google Business Profile
            </option>

            <option value="Social Media Management" className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              Social Media Management
            </option>

            <option value="Other" className="dark:bg-transparent dark:border-gray-700 dark:text-white">
              Other
            </option>
          </select>
        </div>

        {/* Location + Company */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1.5 ">
              City / Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="e.g. Delhi, India"
              className="w-full px-4 py-2.5 dark:bg-transparent dark:border-gray-700 dark:text-white rounded-lg border border-gray-300 outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900 transition"
            />
          </div>

          {/* Company */}
          <div>
            <label className="block dark:text-white text-sm font-medium mb-1.5">
              Company / Business Name
            </label>

            <input
              type="text"
              name="company"
              placeholder="Your company name"
              className="w-full   dark:border-gray-700 dark:text-white px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900 transition"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block dark:text-white text-black text-sm font-medium mb-1.5">
            Tell Me About Your Project *
          </label>

          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project, requirements, goals or budget..."
            required
            className="dark:placeholder:text-gray-300 placeholder:text-gray-600 dark:border-gray-700 dark:text-white w-full px-4 py-2.5 rounded-lg border border-gray-300 outline-none focus:border-red-900 focus:ring-2 focus:ring-red-900 transition resize-none"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="text-center pt-1">
          <button
            type="submit"
            disabled={result === "Sending..."}
            className="px-8   dark:bg-red-900 dark:border-gray-700 dark:text-white py-2.5 rounded-full bg-black text-white cursor-pointer hover:bg-red-800 dark:hover:bg-gray-900 disabled:opacity-60 disabled:cursor-not-allowed transition duration-300 font-medium"
          >
            {result === "Sending..." ? "Sending..." : "Send Message"}
          </button>

          {/* Error Message */}
          {result && result !== "Sending..." && (
            <p className="mt-4 text-red-600 text-sm">
              {result}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;

