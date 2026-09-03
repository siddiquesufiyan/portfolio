"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

function Work() {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? workData : workData.slice(0, 4);

  return (
    <div id="work" className="w-full px-[12%] py-8 scroll-mt-20">

      {/* Section Heading */}
      <h4 className="text-center mb-2 text-lg">
        My Experience
      </h4>

      <h2 className="text-center text-5xl font-semibold">
        My Work
      </h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-10 text-gray-600">
        Explore some of my recent projects, including websites, digital
        marketing campaigns, and creative work designed to help businesses
        grow online.
      </p>

      {/* Work Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="
              group
              relative
              h-[280px]
              rounded-xl
              overflow-hidden
              bg-cover
              bg-center
              shadow-[0_2px_10px_rgba(0,0,0,0.08)]
              hover:-translate-y-1
              hover:shadow-[0_5px_18px_rgba(0,0,0,0.12)]
              transition-all
              duration-300
            "
            style={{
              backgroundImage: `url(${project.bgImage})`,
            }}
          >

            {/* Hover Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/0
                group-hover:bg-black/30
                transition-all
                duration-300
              "
            />

            {/* White Content Box */}
            <div
              className="
                absolute
                bottom-4
                left-4
                right-4
                bg-white
                rounded-lg
                px-4
                py-3
                shadow-md
                flex
                items-center
                justify-between
                gap-3
              "
            >

              {/* Project Information */}
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {project.description}
                </p>
              </div>

              {/* Send Icon */}
              <div
                className="
                  w-9
                  h-9
                  shrink-0
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-red-50
                  text-red-600
                  hover:bg-lime-500
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                <Image
                  src={assets.send_icon}
                  alt="View project"
                  className="w-4"
                />
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {workData.length > 4 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              px-6
              py-2.5
              rounded-full
              border
              border-gray-300
              text-gray-800
              font-medium
              hover:bg-red-600
              hover:text-white
              hover:border-black
              transition-all
              duration-300
            "
          >
            {showMore ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

    </div>
  );
}

export default Work;