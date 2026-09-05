"use client"

import Header from "./components/Header"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import WhyChooseMe from "./components/WhyChooseMe"
import Pricing from "./components/Pricing"
import Faq from "./components/Faq"
import WorkProcess from "./components/WorkProcess"
import Testimonials from "./components/Testimonials"
import ClientStats from "./components/ClientStats"
import ServiceCTA from "./components/ServiceCTA"

function Home() {
  return (
    <>
     
      <Header/>
        <ClientStats/>
      <About/>
     <Services/>
       <Pricing/>
   <WorkProcess/>
    <WhyChooseMe/>

    <Contact/>
    <Testimonials/>
    <Faq/>
  <ServiceCTA/>
    </>
  )
}

export default Home
