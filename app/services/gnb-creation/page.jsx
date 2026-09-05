
import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import GNBServices from "@/app/components/GnbServices";
export default function GnbPage() {
  return (
    <>
    <div className="mt-14 md:mt-16">
<GNBServices/>
   <Testimonials/>
<Faq/>
   </div>
  

    </>
  );
}


