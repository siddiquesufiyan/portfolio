
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import WorkProcess from "../components/WorkProcess";
import Services from "../components/Services";
import Pricing from "../components/Pricing"
import ServicesHero from "../components/ServicesHero";
export default function ServicesPage() {
  return (
    <>
    <div className="mt-14 md:mt-16">
    <ServicesHero/>
    </div>
   <Services/>
   <Pricing/>
    <WorkProcess/>
    <Testimonials/>
    <Faq/>
    </>
  );
}

