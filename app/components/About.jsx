"use client"

import { assets, infoList, toolsData } from "@/assets/assets"
import  Image from "next/image"

function About() {
  return (
    <div id="about" className='w-full px-[12%] py-8 scroll-mt-20 '>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About Me</h2>

      <div className="flex justify-between items-center w-full flex-col lg:flex-row gap-20 my-12 md:my-16">
        <div className="w-64 sm:w-90 rounded-3xl max-w-none">
            <Image src={assets.sufiyan_web_developer} alt="sufiyan as a freelancer" className="w-ful rounded-3xl"/>
        </div>
        <div className="flex-1">
   
<p className="mb-4 max-w-2xl">
  I am a professional freelancer with 4 years of experience in digital marketing and web services. I provide website design, SEO, social media management, WhatsApp marketing, Facebook Ads, video editing, and GNB creation. I help businesses, startups, B2B and B2C clients build a strong online presence, generate leads, and grow their business.
</p>

<ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl">
  {infoList.map(({ icon, title, description }, index) => (
  <li
  key={index}
  className="border-[0.5px] border-gray-400 rounded-xl p-2 cursor-pointer
  transition-all duration-300 hover:-translate-y-1 dark:hover:bg-black hover:bg-lightHover hover:shadow-black"
>
      <div className="text-2xl w-7 mt-1">
        {icon}
      </div>

      <h3 className="my-3 font-semibold dark:text-white  dark:hover:text-white text-gray-700 text-sm">
        {title}
      </h3>

      <p className="text-gray-600 text-xs leading-5 dark:text-white">
        {description}
      </p>
    </li>
  ))}
</ul>

<div className="w-full max-w-xl mx-auto text-center mt-4 px-4">
  <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
    Tools I Used
  </h4>

  <ul className="flex items-center justify-center gap-2.5 flex-wrap">
    {toolsData.map((tool, index) => {
      const Icon = tool.icon;

      return (
        <li
          key={index}
          title={tool.name}
          className="
            w-9 h-9
            cursor-pointer
            flex items-center justify-center
            rounded-lg
            bg-red-50
            text-red-600
            border border-red-100
            shadow-sm
            transition-all duration-200
            hover:-translate-y-1
            hover:bg-red-600
            hover:text-white
            hover:border-red-600
            hover:shadow-md
            dark:bg-red-950/30
            dark:text-red-400
            dark:border-red-900
            dark:hover:bg-red-600
            dark:hover:text-white
          "
        >
          <Icon className="text-[18px]" />
        </li>
      );
    })}
  </ul>
</div>
        </div>
      </div>
    </div>
  )
}

export default About
