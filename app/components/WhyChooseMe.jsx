import {
  FaCheckCircle,
  FaClock,
  FaHeadset,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaUserTie,
  FaGlobe,
  FaBullhorn,
  FaSearch,
  FaLaptopCode,
  FaPalette,
  FaVideo,
} from "react-icons/fa";

function WhyChooseMe() {
  const benefits = [
    {
      icon: FaMoneyBillWave,
      title: "Lower Cost, Professional Quality",
      description:
        "Avoid the high overhead of agencies and companies. I provide professional digital services at flexible freelancer pricing without compromising on the quality of work.",
    },
    {
      icon: FaUserTie,
      title: "Directly Work With Me",
      description:
        "No unnecessary middlemen or account managers. You communicate directly with the person handling your project, making communication faster and more transparent.",
    },
    {
      icon: FaHeadset,
      title: "24/7 Customer Support",
      description:
        "Have a question, update or urgent requirement? I provide direct support and stay available to help you with your digital requirements.",
    },
    {
      icon: FaClock,
      title: "Flexible & Business Focused",
      description:
        "I understand that every business is different. Services, timelines and pricing can be customized according to your actual requirements and budget.",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Delhi NCR Support",
      description:
        "If your business is located in Delhi NCR and your project requires an in-person discussion or visit, I can personally visit based on the requirement.",
    },
    {
      icon: FaGlobe,
      title: "One Freelancer, Multiple Solutions",
      description:
        "Instead of managing different people for different tasks, you can get your website, SEO, marketing, design, content and other digital work handled in one place.",
    },
  ];

  const services = [
    { icon: FaLaptopCode, name: "Website Design" },
    { icon: FaSearch, name: "SEO" },
    { icon: FaBullhorn, name: "Facebook Ads" },
    { icon: FaGlobe, name: "WhatsApp Marketing" },
    { icon: FaMapMarkerAlt, name: "GNB / GBP" },
    { icon: FaPalette, name: "Graphic Design" },
    { icon: FaVideo, name: "Video Editing" },
    { icon: FaPalette, name: "Logo & Branding" },
  ];

  return (
    <section className="w-full py-14 md:py-20 px-6 md:px-10">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <span className="text-red-600 text-sm font-medium">
          Why Choose Me
        </span>

        <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-gray-900">
          Professional Work Without the Agency Cost
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-500 leading-7">
          Get the experience and quality of professional digital services,
          while enjoying the flexibility, direct communication and pricing
          advantages of working with a freelancer.
        </p>
      </div>

      {/* Main Benefits */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;

          return (
            <div
              key={index}
              className="group border border-gray-200 rounded-2xl p-5 md:p-6 bg-white hover:border-red-200 hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                
                <div className="shrink-0 w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  <Icon size={17} />
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold text-gray-800">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    {benefit.description}
                  </p>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Services */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Almost Everything Your Business Needs Online
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            From building your online presence to marketing and creative work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-white text-gray-700 text-sm hover:border-red-200 hover:text-red-600 transition-all duration-300"
              >
                <Icon className="text-red-600 text-sm" />
                {service.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* Payment Process */}
      <div className="max-w-3xl mx-auto mt-12">
        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 md:p-8 text-center">
          
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
            Simple & Transparent Payment
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            No complicated payment structure. Keep your project simple and
            transparent.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            
            <div className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                50%
              </span>

              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">
                  Before Starting
                </p>

                <p className="text-xs text-gray-500">
                  Project confirmation
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-8 h-px bg-gray-300" />

            <div className="flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                50%
              </span>

              <div className="text-left">
                <p className="text-sm font-semibold text-gray-800">
                  After Completion
                </p>

                <p className="text-xs text-gray-500">
                  Final project delivery
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheckCircle className="text-red-600" />
            4+ Years Experience
          </span>

          <span className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheckCircle className="text-red-600" />
            Experience With Companies & Agencies
          </span>

          <span className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheckCircle className="text-red-600" />
            Multiple Industry Experience
          </span>
        </div>
      </div>

    </section>
  );
}

export default WhyChooseMe;