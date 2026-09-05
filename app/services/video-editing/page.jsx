import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import VideoEditing from "@/app/components/VideoEditing";
export default function VideoPage() {
  return (
    <>
    <div className="mt-14 md:mt-16">
         <VideoEditing/>
   <Testimonials/>

<Faq/>
   </div>
  

    </>
  );
}

