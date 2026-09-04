import Link from "next/link";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
  FaGlobe,
  FaBullhorn,
  FaSearch,
  FaPalette,
} from "react-icons/fa";

function ContactHero() {
  const services = [
    {
      icon: FaGlobe,
      title: "Website Design",
    },
    {
      icon: FaSearch,
      title: "SEO",
    },
    {
      icon: FaBullhorn,
      title: "Digital Marketing",
    },
    {
      icon: FaPalette,
      title: "Design & Content",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden pt-28 pb-14 md:pt-32 md:pb-16">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-red-50 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-12">

        {/* Label */}
        <div className="flex justify-center mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-100 bg-red-50 text-red-600 text-xs md:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Let's Work Together
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
            Let's Talk About Your{" "}
            <span className="text-red-600">
              Next Project
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-sm sm:text-base md:text-lg text-gray-600 leading-7 md:leading-8">
            I am a digital marketing freelancer and web designer with 4+ years
            of experience helping businesses, startups and professionals
            build their online presence through websites, SEO, advertising,
            social media and creative digital solutions.
          </p>

          <p className="max-w-xl mx-auto mt-3 text-sm text-gray-500 leading-6">
            Whether you need a website, SEO, Facebook Ads, Google Business
            Profile, social media management, graphic design, video editing or
            any other digital service, feel free to get in touch.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">
          
          <a
            href="tel:9769285713"
            className="group flex items-center gap-3 w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-200 bg-white hover:border-red-200 hover:shadow-sm transition-all duration-300"
          >
            <span className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <FaPhoneAlt size={13} />
            </span>

            <div className="text-left">
              <p className="text-[11px] text-gray-500">
                Call Me
              </p>

              <p className="text-sm font-medium text-gray-800">
                +91 97692 85713
              </p>
            </div>
          </a>

          <a
            href="mailto:sufiyan9769285713@gmail.com"
            className="group flex items-center gap-3 w-full sm:w-auto px-5 py-3 rounded-xl border border-gray-200 bg-white hover:border-red-200 hover:shadow-sm transition-all duration-300"
          >
            <span className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
              <FaEnvelope size={13} />
            </span>

            <div className="text-left">
              <p className="text-[11px] text-gray-500">
                Email Me
              </p>

              <p className="text-sm font-medium text-gray-800 break-all">
                sufiyan9769285713@gmail.com
              </p>
            </div>
          </a>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-7">
          <Link
            href="#contact-form"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-all duration-300 shadow-sm"
          >
            Send Your Enquiry
            <FaArrowRight
              size={11}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Services */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-center text-xs text-gray-500 mb-4">
            Services I can help you with
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 hover:border-red-200 transition-all duration-300"
                >
                  <Icon className="text-red-600 text-sm" />

                  <span className="text-xs md:text-sm text-gray-700 font-medium">
                    {service.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Points */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8">
          <span className="flex items-center gap-2 text-xs text-gray-500">
            <FaCheckCircle className="text-red-600" />
            4+ Years Experience
          </span>

          <span className="flex items-center gap-2 text-xs text-gray-500">
            <FaCheckCircle className="text-red-600" />
            Flexible Pricing
          </span>

          <span className="flex items-center gap-2 text-xs text-gray-500">
            <FaCheckCircle className="text-red-600" />
            Direct Communication
          </span>

          <span className="flex items-center gap-2 text-xs text-gray-500">
            <FaCheckCircle className="text-red-600" />
            Business-Focused Solutions
          </span>
        </div>

      </div>
    </section>
  );
}

export default ContactHero;