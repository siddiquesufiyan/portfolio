"use client";

import { useEffect, useState } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const defaultReviews = [
  {
    name: "Rahul Sharma",
    role: "Business Owner",
    review:
      "Great experience working together. The website was clean, professional and exactly what I needed.",
    rating: 5,
  },
  {
    name: "Aman Verma",
    role: "Startup Founder",
    review:
      "Very professional work and quick communication. I am really happy with the final result.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Marketing Manager",
    review:
      "Excellent digital marketing and website support. Everything was handled professionally.",
    rating: 5,
  },
];

function Testimonials({ reviews = defaultReviews }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const review = reviews[current];

  return (
    <section className="w-full py-10 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      
      {/* Heading */}
      <div className="text-center mb-7 sm:mb-8 max-w-2xl mx-auto">
        <p className="text-red-600 text-xs sm:text-sm font-medium mb-2">
          Client Reviews
        </p>

        <h2 className="text-2xl sm:text-3xl dark:text-white md:text-4xl font-semibold text-gray-900">
          What My Clients Say
        </h2>

        <p className="text-gray-500 text-xs dark:text-gray-200 sm:text-sm md:text-base mt-2 sm:mt-3 px-2">
          Feedback from clients and businesses I have worked with.
        </p>
      </div>

      {/* Review Container */}
      <div className="w-full max-w-2xl mx-auto">
        <div
          className="
            relative
            w-full
            border border-gray-200
            rounded-xl sm:rounded-2xl
            p-5 sm:p-6 md:p-8
            bg-white
            shadow-sm
          "
        >
          {/* Stars */}
          <div className="flex justify-center gap-1 text-yellow-400 mb-4 sm:mb-5">
            {[...Array(review.rating)].map((_, index) => (
              <FaStar
                key={index}
                size={13}
                className="sm:w-[15px] sm:h-[15px]"
              />
            ))}
          </div>

          {/* Review */}
          <p
            className="
              text-center
              text-gray-600
              leading-6 sm:leading-7
              text-xs sm:text-sm md:text-base
              px-8 sm:px-10 md:px-12
              min-h-[96px]
              flex items-center justify-center
            "
          >
            “{review.review}”
          </p>

          {/* Client */}
          <div className="text-center mt-5 sm:mt-6">
            <h4 className="font-semibold text-sm sm:text-base text-gray-900">
              {review.name}
            </h4>

            <p className="text-[11px] sm:text-xs text-gray-500 mt-1">
              {review.role}
            </p>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous review"
            className="
              absolute
              left-2 sm:left-3
              top-1/2
              -translate-y-1/2
              w-8 h-8 sm:w-9 sm:h-9
              rounded-full
              border border-gray-200
              bg-white
              flex items-center justify-center
              text-gray-600
              hover:bg-red-600
              hover:text-white
              hover:border-red-600
              transition-all duration-300
            "
          >
            <FaChevronLeft size={10} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next review"
            className="
              absolute
              right-2 sm:right-3
              top-1/2
              -translate-y-1/2
              w-8 h-8 sm:w-9 sm:h-9
              rounded-full
              border border-gray-200
              bg-white
              flex items-center justify-center
              text-gray-600
              hover:bg-red-600
              hover:text-white
              hover:border-red-600
              transition-all duration-300
            "
          >
            <FaChevronRight size={10} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-4 sm:mt-5">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to review ${index + 1}`}
              className={`
                h-1.5 sm:h-2
                rounded-full
                transition-all duration-300
                ${
                  current === index
                    ? "w-5 sm:w-6 bg-red-600"
                    : "w-1.5 sm:w-2 bg-gray-300"
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;