

import WebsiteDesign from "@/app/components/WebsiteDesign";
import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import ServiceCTA from "@/app/components/ServiceCTA";
import WorkProcess from "@/app/components/WorkProcess";
export default function WebsitePage() {
  return (
    <>
    <div className="mt-14 md:mt-16">
     <WebsiteDesign/>
     <WorkProcess/>
   <Testimonials/>
<Faq/>
<ServiceCTA/>
   </div>
  

    </>
  );
}

