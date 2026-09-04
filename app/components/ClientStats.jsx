"use client";

import { useEffect, useState } from "react";

function Counter({ end, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function ClientStats({
  clients = 50,
  projects = 80,
  experience = 4,
  services = 11,
}) {
  const stats = [
    {
      number: clients,
      suffix: "+",
      title: "Happy Clients",
      description: "Businesses & individuals",
    },
    {
      number: projects,
      suffix: "+",
      title: "Projects Completed",
      description: "Web & digital projects",
    },
    {
      number: experience,
      suffix: "+",
      title: "Years Experience",
      description: "Digital & web services",
    },
    {
      number: services,
      suffix: "+",
      title: "Services",
      description: "Digital solutions",
    },
  ];

  return (
    <section className="w-full py-8 sm:py-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="group text-center rounded-xl sm:rounded-2xl border border-gray-200 bg-white px-2 py-5 sm:px-4 sm:py-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)]"
          >
            {/* Number */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-red-600">
              <Counter end={item.number} suffix={item.suffix} />
            </h3>

            {/* Title */}
            <h4 className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base font-semibold text-gray-800 leading-tight">
              {item.title}
            </h4>

            {/* Description */}
            <p className="mt-1 text-[10px] sm:text-xs md:text-sm text-gray-500 leading-4 sm:leading-5">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientStats;