"use client"
import React from "react"
import { serviceData } from "@/assets/assets";
function Services() {
  return (
    <div id="services" className='w-full px-[12%] py-8 scroll-mt-20 '>
      <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
      <h2 className='text-center text-5xl'>My Services</h2>
      <p className="text-center max-w-2xl  mx-auto mt-5 mb-8">With 4 years of experience, I provide digital marketing and web services for businesses, companies, startups, and individual clients. I help build a strong online presence through website design, SEO, social media, paid ads, and video editing.
</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
  {serviceData.map((service, index) => {
    const Icon = service.icon;

    return (
      <div
        key={index}
        className="
          bg-white
          border border-gray-100
          rounded-2xl
          p-6
          shadow-[0_2px_10px_rgba(0,0,0,0.06)]
          hover:shadow-[0_5px_18px_rgba(0,0,0,0.09)]
          hover:-translate-y-1
          transition-all duration-300
        "
      >
        <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-red-50 text-red-600 mb-5">
          <Icon className="text-2xl" />
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-6">
          {service.description}
        </p>

        <a
          href={service.link || "#"}
          className="inline-block mt-4 text-sm font-medium text-red-600 hover:text-red-700"
        >
          Learn More →
        </a>
      </div>
    );
  })}
</div>
</div>
  )
}

export default Services
