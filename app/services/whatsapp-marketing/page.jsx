import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import WhatsAppServices from "@/app/components/WhatsAppServices";
import ServiceCTA from "@/app/components/ServiceCTA";
export default function WhatshappPage() {
  return (
    <>
    <div className="mt-14 md:mt-16">
      <WhatsAppServices/>
   <Testimonials/>
<Faq/>
<ServiceCTA/>
   </div>
  

    </>
  );
}


