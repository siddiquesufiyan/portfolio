

import FacebookAds from "@/app/components/FacebookAds";
import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import ServiceCTA from "@/app/components/ServiceCTA";
export default function FacebookPage() {
  return (
    <>
    <div className="mt-14 md:mt-16">
   <FacebookAds/>
   <Testimonials/>
<Faq/>
<ServiceCTA/>
   </div>
  

    </>
  );
}
