import Image from "next/image";
import {
  FiArrowUpRight,
  FiCheck,
  FiLayers,
  FiPenTool,
  FiCreditCard,
  FiFileText,
  FiImage,
  FiMonitor,
  FiAward,
  FiBriefcase,
} from "react-icons/fi";

function GraphicDesign() {
  const designProcess = [
    {
      number: "01",
      title: "Requirement Understanding",
      description:
        "I first understand your business, purpose, target audience and exactly what type of design you need.",
    },
    {
      number: "02",
      title: "Design Concept",
      description:
        "I create a design direction based on your brand, preferred style, colors and the purpose of the design.",
    },
    {
      number: "03",
      title: "Creative Design",
      description:
        "I professionally design your logo, card, flyer, brochure, presentation or any other required creative.",
    },
    {
      number: "04",
      title: "Revision",
      description:
        "Your feedback matters. I make required changes so the final design matches your expectations.",
    },
    {
      number: "05",
      title: "Finalization",
      description:
        "After approval, I prepare the final design properly according to the required size and format.",
    },
    {
      number: "06",
      title: "File Delivery",
      description:
        "You receive the final design in suitable formats for printing, sharing, social media or business use.",
    },
  ];

  const benefits = [
    "Affordable freelancer pricing",
    "Custom designs for your requirement",
    "Professional & clean layouts",
    "Fast communication",
    "Revision support",
    "Print & digital ready designs",
  ];

  const services = [
    {
      icon: FiPenTool,
      title: "Logo Design",
      description:
        "Professional and memorable logos for businesses, brands and personal projects.",
    },
    {
      icon: FiCreditCard,
      title: "Visiting Card",
      description:
        "Clean and professional visiting card designs suitable for business networking.",
    },
    {
      icon: FiFileText,
      title: "Wedding Cards",
      description:
        "Elegant wedding invitations and event cards designed according to your occasion.",
    },
    {
      icon: FiImage,
      title: "Flyer Design",
      description:
        "Promotional flyers for businesses, offers, events, products and services.",
    },
    {
      icon: FiLayers,
      title: "Brochure Design",
      description:
        "Professional brochures to present your company, products or services.",
    },
    {
      icon: FiBriefcase,
      title: "Business Profile",
      description:
        "Professional company profiles that clearly present your business and services.",
    },
    {
      icon: FiMonitor,
      title: "Business Presentation",
      description:
        "Professional presentation designs for companies, meetings, proposals and pitches.",
    },
    {
      icon: FiAward,
      title: "Certificate Design",
      description:
        "Custom certificates for businesses, schools, events, courses and organizations.",
    },
  ];

  const extraServices = [
    "Social Media Posts",
    "Banners",
    "Business Cards",
    "Invitation Cards",
    "Product Creatives",
    "Event Posters",
    "Mockup Design",
    "Catalogue Design",
  ];

  return (
    <>
      {/* =====================================================
          SECTION 1 — HERO + PRICING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-red-50 dark:bg-red-950/20 text-red-600 text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Graphic Design Services
            </span>

            <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white leading-tight">
              Creative Designs That Make Your
              <span className="text-red-600"> Business Stand Out</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              I create professional and affordable graphic designs for
              businesses, professionals, employees, events and personal
              requirements.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              Whether you need a logo, visiting card, wedding invitation,
              flyer, brochure, business profile, presentation or certificate,
              you can get it designed according to your requirements.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Logo & Brand Design
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Cards & Invitations
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Flyers & Brochures
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Business Designs
              </div>
            </div>
          </div>

          {/* PRICING CARD */}
          <div className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden">

            {/* RED DECORATION */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-red-600/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm text-gray-400">
                Graphic Design Starting From
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl sm:text-5xl font-semibold text-white">
                  ₹300
                </span>

                <span className="mb-1 text-gray-400 text-sm">
                  / design
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Affordable designs for your business or personal needs
              </p>

              <div className="mt-5 h-px bg-gray-800" />

              <h2 className="mt-6 text-xl font-semibold text-white">
                Custom Graphic Design
              </h2>

              <p className="mt-2 text-sm text-gray-400 leading-6">
                Final pricing depends on the type, size, complexity and
                requirements of your design.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-300">
                {[
                  "Custom design according to your requirement",
                  "Professional & clean layout",
                  "Revision support",
                  "Print & digital ready files",
                  "High-quality final output",
                  "Direct freelancer communication",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">
                      <FiCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-red-500/20 bg-red-500/5 p-4">
                <p className="text-xs text-gray-400 leading-5">
                  <span className="text-red-400 font-medium">
                    Pricing Note:
                  </span>{" "}
                  ₹300 is the starting price. The final cost depends on what
                  you want designed and the complexity of the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION 2 — DESIGN PROCESS
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="text-red-600 text-sm font-medium">
              My Graphic Design Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              From Your Idea to Final Design
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              I keep the design process simple and transparent. You tell me
              what you need, I understand your requirements and create a
              design that fits your purpose.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {designProcess.map((step) => (
              <div
                key={step.number}
                className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-900"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-red-600/30 transition">
                    {step.number}
                  </span>

                  <span className="text-red-600 text-lg">
                    →
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 3 — WHAT CAN I DESIGN
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">
            <span className="text-red-600 text-sm font-medium">
              What I Design
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Graphic Design Services for Every Requirement
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              From a simple visiting card to a complete business presentation,
              I can create designs according to your requirement.
            </p>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-900 bg-white dark:bg-gray-900"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-red-600 font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <Icon className="text-xl text-gray-500 group-hover:text-red-600 transition" />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                  <div className="mt-5 text-red-600 group-hover:translate-x-1 transition-transform">
                    →
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4 — WHY CHOOSE ME
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT */}
          <div>

            <span className="text-red-600 text-sm font-medium">
              Why Work With Me?
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Professional Graphic Design
              <span className="text-red-600">
                {" "}Without Expensive Agency Pricing
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I work as a freelancer, so you get direct communication with
              the person actually creating your design.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Whether you are a business owner, company, employee, student,
              professional or simply need a design for personal use, you can
              contact me for affordable graphic design services.
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5 bg-white dark:bg-gray-900"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/40 text-red-600 flex items-center justify-center text-xs">
                    ✓
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

          </div>


          {/* RIGHT */}
          <div className="rounded-2xl bg-gray-950 p-6 sm:p-8">

            <p className="text-sm text-red-500 font-medium">
              Design For Everyone
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
              Have a Requirement?
            </h3>

            <p className="mt-3 text-sm text-gray-400 leading-6">
              You don't need to be a big company to get professional graphic
              design. If you have a requirement, I can help you turn your
              idea into a professional design.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                "Businesses",
                "Startups",
                "Employees",
                "Professionals",
                "Students",
                "Events",
                "Personal Projects",
                "Organizations",
              ].map((type) => (
                <div
                  key={type}
                  className="rounded-xl border border-gray-800 p-4"
                >
                  <span className="text-red-500 text-sm">
                    ✓
                  </span>

                  <p className="mt-2 text-sm text-gray-300">
                    {type}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 5 — EXTRA SERVICES
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl">
            <span className="text-red-600 text-sm font-medium">
              More Design Services
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Need Something Else?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              These are some additional designs I can create. If you have a
              different requirement, simply contact me and tell me what you
              need.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {extraServices.map((service, index) => (
              <div
                key={service}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-red-300 dark:hover:border-red-900"
              >
                <span className="text-xs text-red-600 font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  {service}
                </h3>

                <div className="mt-5 text-red-600 group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 6 — DESIGN SHOWCASE
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-14 sm:pb-20">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl bg-gray-950">

            <div className="grid lg:grid-cols-2 items-center">

              {/* CONTENT */}
              <div className="p-7 sm:p-9 lg:p-12">

                <span className="inline-flex px-3 py-1.5 rounded-full bg-red-500/10 text-red-400 text-xs sm:text-sm">
                  Creative Design
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Your Requirement.
                  <span className="text-red-500">
                    {" "}My Design.
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  I create practical and professional designs that can be used
                  for your business, printing, social media, presentations,
                  events and everyday requirements.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Logo & brand identity",
                    "Visiting & business cards",
                    "Flyers & brochures",
                    "Business profiles & presentations",
                    "Invitation & certificate designs",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="text-red-500">
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

              </div>


              {/* IMAGE */}
              <div className="relative h-[300px] sm:h-[380px] lg:h-full min-h-[460px]">

                <Image
                  src="/graphic-design.webp"
                  alt="Graphic Design Services"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gray-950/30" />

                {/* DESIGN CARD */}
                <div className="absolute bottom-6 left-5 right-5 sm:left-8 sm:right-8 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Graphic Design
                      </p>

                      <p className="mt-1 text-xl font-semibold text-gray-900">
                        Creative & Professional →
                      </p>
                    </div>

                    <div className="text-red-600 text-2xl">
                      <FiArrowUpRight />
                    </div>

                  </div>

                  <div className="mt-4 flex gap-1">
                    <div className="h-2 flex-1 rounded-full bg-red-600" />
                    <div className="h-2 flex-1 rounded-full bg-red-500" />
                    <div className="h-2 flex-1 rounded-full bg-red-400" />
                    <div className="h-2 flex-1 rounded-full bg-gray-200" />
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default GraphicDesign;