"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Why should I hire a freelancer instead of a company?",
    answer:
      "Working directly with a freelancer can reduce agency overhead and give you more flexible pricing. I provide professional digital services at freelancer-friendly rates while maintaining a personal approach and direct communication throughout the project.",
  },
  {
    question: "What digital services do you provide?",
    answer:
      "I provide website design and development, SEO, Google Business Profile (GNB) creation and optimization, Facebook & Instagram Ads, social media management, graphic design, logo design, visiting card design, video editing, WhatsApp marketing and other digital marketing services.",
  },
  {
    question: "Can you handle multiple services for my business?",
    answer:
      "Yes. You can work with me for multiple digital requirements instead of hiring different people for every task. From your website and SEO to social media, advertising, graphics and video content, I can manage different parts of your online presence.",
  },
  {
    question: "How much can I save by working with you?",
    answer:
      "Freelancer pricing is generally much more flexible than agency or company pricing because there are fewer overhead costs. Depending on the service and project requirements, I can often offer significantly lower pricing while delivering professional work.",
  },
  {
    question: "What type of businesses have you worked with?",
    answer:
      "I have worked with different types of businesses, including travel companies, B2B and B2C businesses, digital marketing companies, manufacturers, gyms and fitness brands, local shops, electronics businesses and other small and growing businesses.",
  },
  {
    question: "Do you work with small businesses and startups?",
    answer:
      "Absolutely. I work with startups, local businesses, small businesses, established companies and individual business owners. I can recommend services according to your actual requirements and budget instead of offering unnecessary packages.",
  },
  {
    question: "Do you provide customized pricing?",
    answer:
      "Yes. Every project is different, so I prefer understanding your requirements first and then providing a suitable quotation. You only pay for the services your business actually needs.",
  },
  {
    question: "How much experience do you have?",
    answer:
      "I have more than 4 years of experience working in digital marketing, website design and other digital services, with experience across different industries and business types.",
  },
];

function Faq() {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="w-full py-12 px-6 md:px-10">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-red-600 text-sm font-medium">
          Frequently Asked Questions
        </span>

        <h2 className="mt-2 dark:text-white text-3xl md:text-4xl font-semibold text-gray-900">
          Why Work With Me?
        </h2>

        <p className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-200 leading-6">
          Everything you need to know about my services, experience,
          pricing and the way I work.
        </p>
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;

          return (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-red-200 shadow-sm"
                  : "border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="font-medium dark:text-gray-200 text-gray-800 text-sm md:text-base">
                  {faq.question}
                </span>

                <span
                  className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {isOpen ? (
                    <FaMinus size={10} className="cursor-pointer"/>
                  ) : (
                    <FaPlus size={10} className="cursor-pointer"/>
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm dark:text-gray-200 text-gray-500 leading-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Faq;