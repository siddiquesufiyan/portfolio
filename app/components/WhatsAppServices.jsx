"use client";
import Image from "next/image";
import {
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
  FaUsers,
  FaBullhorn,
  FaRobot,
  FaDatabase,
  FaChartLine,
  FaPaperPlane,
  FaShieldAlt,
  FaComments,
  FaTags,
  FaUserFriends,
  FaMagic,
} from "react-icons/fa";

function WhatsAppServices() {
  const whatsappSteps = [
    {
      number: "01",
      title: "Customer Data",
      description:
        "You provide your customer or lead database for the agreed WhatsApp marketing campaign.",
    },
    {
      number: "02",
      title: "Audience Segmentation",
      description:
        "I organize your contacts into relevant groups based on customers, leads, interests or campaign requirements.",
    },
    {
      number: "03",
      title: "Campaign Strategy",
      description:
        "I create a WhatsApp campaign strategy around your offers, products, services and business goals.",
    },
    {
      number: "04",
      title: "Message Creation",
      description:
        "I create clear and engaging promotional messages designed to encourage customers to enquire or take action.",
    },
    {
      number: "05",
      title: "AI Sency Setup",
      description:
        "Your campaign is managed using the AI Sency platform for efficient WhatsApp marketing and customer outreach.",
    },
    {
      number: "06",
      title: "Bulk Campaign",
      description:
        "Campaign messages are sent to the targeted customer database efficiently according to the planned campaign.",
    },
    {
      number: "07",
      title: "Lead Tracking",
      description:
        "I monitor campaign responses and enquiries to help identify potential leads and improve future campaigns.",
    },
  ];

  const benefits = [
    "Affordable WhatsApp marketing",
    "Bulk customer outreach",
    "Lead generation opportunities",
    "Promotional offer campaigns",
    "Audience segmentation",
    "Personalized messaging",
    "Easy customer follow-ups",
    "Secure customer data handling",
  ];

  const offers = [
    "Bulk WhatsApp Messaging",
    "WhatsApp Promotional Campaigns",
    "Offer & Discount Campaigns",
    "Lead Generation Campaigns",
    "Customer Database Management",
    "Audience Segmentation",
    "Follow-up Campaigns",
    "Campaign Performance Tracking",
  ];

  const aiSencyFeatures = [
    {
      icon: FaPaperPlane,
      title: "Bulk Messaging",
      description:
        "Reach your targeted customer database efficiently with planned WhatsApp campaigns.",
    },
    {
      icon: FaBullhorn,
      title: "Lead Generation",
      description:
        "Promote your offers and services to generate enquiries from potential customers.",
    },
    {
      icon: FaUsers,
      title: "Audience Management",
      description:
        "Organize customers and leads into relevant groups for more focused campaigns.",
    },
    {
      icon: FaRobot,
      title: "AI-Powered Platform",
      description:
        "Use AI Sency as the marketing platform to manage and streamline WhatsApp outreach.",
    },
  ];

  return (
    <>
      {/* =====================================================
          SECTION 1 — WHATSAPP INTRO + PRICING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400 text-xs sm:text-sm font-medium">
              <FaWhatsapp />
              WhatsApp Marketing
            </span>

            <h2 className="mt-4 text-2xl dark:text-white sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Reach More Customers
              <span className="text-green-600">
                {" "}
                & Generate More Leads
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base dark:text-gray-200 text-gray-600 leading-7">
              I provide result-focused WhatsApp marketing services to help
              businesses reach their customers directly, promote offers and
              generate potential leads through targeted WhatsApp campaigns.
            </p>

            <p className="mt-3 text-sm sm:text-base dark:text-gray-200 text-gray-600 leading-7">
              Using the AI Sency platform, I manage customer outreach,
              promotional campaigns, bulk messaging and lead-focused WhatsApp
              marketing according to your business requirements.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Bulk WhatsApp Messaging
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Lead Generation
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Promotional Campaigns
              </div>

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                Customer Follow-ups
              </div>
            </div>

            {/* Small trust points */}
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 px-3 py-2 text-xs text-gray-600 dark:text-gray-300">
                <FaShieldAlt className="text-green-600" />
                Confidential Data
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-800 px-3 py-2 text-xs text-gray-600 dark:text-gray-300">
                <FaRobot className="text-green-600" />
                AI Sency Platform
              </span>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden">

            {/* Green Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-green-500/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-20 w-52 h-52 rounded-full bg-green-400/10 blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm text-gray-400">
                WhatsApp Marketing Starting From
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl sm:text-5xl font-semibold text-white">
                  ₹1,000
                </span>

                <span className="mb-1 text-gray-400 text-sm">
                  / campaign
                </span>
              </div>

              <div className="mt-5 h-px bg-gray-800" />

              <h3 className="mt-6 text-xl font-semibold text-white">
                Why Choose My WhatsApp Marketing?
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-6">
                I help businesses use WhatsApp as a direct customer
                communication channel for promotions, offers, customer
                outreach and lead generation.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Targeted customer outreach
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Bulk campaign management
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Promotional offer campaigns
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Lead-focused messaging
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  AI Sency platform
                </li>

                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500" />
                  Confidential customer data handling
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-green-500/20 bg-green-500/5 p-4">
                <p className="text-xs text-gray-400 leading-5">
                  <span className="text-green-400 font-medium">
                    Important:
                  </span>{" "}
                  ₹1,000 is my service fee. WhatsApp, API, platform,
                  messaging or other third-party charges, if applicable, are
                  paid separately by the customer.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SECTION 2 — HOW I DO WHATSAPP MARKETING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="max-w-2xl mb-10 sm:mb-12">

            <span className="text-green-600 text-sm font-medium">
              My WhatsApp Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              How I Do WhatsApp Marketing
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              From customer data and campaign planning to bulk messaging and
              lead tracking, I follow a structured process to make your
              WhatsApp marketing more organized and effective.
            </p>

          </div>


          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {whatsappSteps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 dark:hover:border-green-500/30 ${
                  index === 6 ? "lg:col-span-2" : ""
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-green-600/30 transition">
                    {step.number}
                  </span>

                  <span className="text-green-600 text-lg transition-transform duration-300 group-hover:translate-x-1">
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
          SECTION 3 — BENEFITS + WHAT I OFFER
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Why WhatsApp Marketing */}
          <div>

            <span className="text-green-600 text-sm font-medium">
              Why WhatsApp Marketing?
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Connect Directly With Your
              <span className="text-green-600">
                {" "}
                Customers
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              WhatsApp marketing gives businesses a direct way to communicate
              with existing customers and potential leads. I help you use
              targeted campaigns to promote your products, services, offers
              and important business updates.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Instead of relying only on traditional advertising, your
              business can communicate directly with an audience that you
              already have through an organized WhatsApp marketing strategy.
            </p>


            {/* Benefits */}
            <div className="mt-7 grid sm:grid-cols-2 gap-3">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="group flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5 transition-all duration-300 hover:border-green-200 dark:hover:border-green-500/30 hover:-translate-y-0.5"
                >

                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 flex items-center justify-center text-xs">
                    ✓
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>
          </div>


          {/* What I Offer */}
          <div className="rounded-2xl bg-gray-950 p-6 sm:p-8 relative overflow-hidden">

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm text-green-500 font-medium">
                What I Offer
              </p>

              <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                Complete WhatsApp Marketing
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-6">
                From bulk messaging and promotional campaigns to lead
                generation and follow-ups, I provide the essential WhatsApp
                marketing services your business needs.
              </p>


              <div className="mt-7 grid sm:grid-cols-2 gap-x-6">

                {offers.map((offer, index) => (
                  <div
                    key={offer}
                    className="flex items-center gap-3 py-3 border-b border-gray-800"
                  >

                    <span className="text-xs text-green-500 font-medium">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm text-gray-300">
                      {offer}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4 — AI SENCY PLATFORM
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-12 sm:pb-16">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl bg-gray-950">

            {/* Green Glow */}
            <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-green-500/10 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-2 items-center">

              {/* Content */}
              <div className="p-7 sm:p-9 lg:p-12">

                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-green-400 text-xs sm:text-sm">
                  <FaRobot />
                  AI Sency Platform
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Power Your WhatsApp Marketing
                  <span className="text-green-500">
                    {" "}
                    With AI Sency
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  I use the AI Sency platform to manage WhatsApp marketing
                  campaigns, customer outreach and lead-focused communication
                  more efficiently.
                </p>

                <p className="mt-3 text-sm sm:text-base text-gray-400 leading-7">
                  Whether you want to promote a special offer, reach existing
                  customers or generate new enquiries, your campaign can be
                  planned around your business goals and customer database.
                </p>


                {/* Feature List */}
                <div className="mt-7 grid sm:grid-cols-2 gap-4">

                  {aiSencyFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="rounded-xl border border-gray-800 bg-white/[0.03] p-4 transition-all duration-300 hover:border-green-500/30 hover:bg-green-500/[0.03]"
                      >

                        <div className="w-9 h-9 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center">
                          <Icon />
                        </div>

                        <h3 className="mt-3 text-sm font-semibold text-white">
                          {feature.title}
                        </h3>

                        <p className="mt-1.5 text-xs leading-5 text-gray-500">
                          {feature.description}
                        </p>

                      </div>
                    );
                  })}

                </div>

              </div>


              {/* Image / Visual */}
            <div className="relative h-[340px] sm:h-[400px] lg:h-full min-h-[560px]">
  <Image
    src="/whatsapp-marketing.webp"
    alt="WhatsApp Marketing Campaign"
    fill
    priority
    className="object-cover"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />

                <div className="absolute inset-0 bg-gray-950/45" />


                {/* Floating Campaign Card */}
                <div className="absolute top-8 left-5 right-5 sm:left-8 sm:right-8 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl">

                  <div className="flex items-center gap-3">

                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-lg">
                      <FaWhatsapp />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        WhatsApp Campaign
                      </p>

                      <p className="text-sm font-semibold text-gray-900">
                        Campaign Active
                      </p>
                    </div>

                    <span className="ml-auto w-2.5 h-2.5 rounded-full bg-green-500" />

                  </div>

                </div>


                {/* Floating Message Card */}
                <div className="absolute bottom-7 left-5 right-5 sm:left-8 sm:right-8 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl">

                  <div className="flex items-start gap-3">

                    <div className="w-9 h-9 flex-shrink-0 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                      <FaPaperPlane />
                    </div>

                    <div className="min-w-0">

                      <p className="text-xs text-gray-500">
                        Promotional Message
                      </p>

                      <p className="mt-1 text-sm font-medium text-gray-900">
                        Special offer available for you!
                      </p>

                      <div className="mt-3 h-2 rounded-full bg-gray-200 overflow-hidden">
                        <div className="h-full w-[78%] bg-green-500 rounded-full" />
                      </div>

                      <p className="mt-2 text-[10px] text-gray-500">
                        Campaign progress
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 5 — DATA PRIVACY
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-14 sm:pb-20">

        <div className="max-w-6xl mx-auto">

          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sm:p-8 lg:p-10">

            <div className="grid lg:grid-cols-[auto_1fr] gap-6 items-start">

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-500/10 text-green-600 flex items-center justify-center text-xl">
                <FaShieldAlt />
              </div>


              {/* Content */}
              <div>

                <span className="text-green-600 text-sm font-medium">
                  Data Privacy & Security
                </span>

                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
                  Your Customer Data Stays Confidential
                </h2>

                <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300 max-w-3xl">
                  Your customer contact database is provided specifically for
                  the agreed WhatsApp marketing campaign. I understand that
                  customer data is valuable and handle campaign information
                  responsibly and confidentially.
                </p>


                <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                  <div className="rounded-xl bg-gray-50 dark:bg-gray-950 p-4">
                    <FaDatabase className="text-green-600 text-lg" />

                    <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">
                      Confidential
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                      Customer data is treated as confidential campaign
                      information.
                    </p>
                  </div>


                  <div className="rounded-xl bg-gray-50 dark:bg-gray-950 p-4">
                    <FaShieldAlt className="text-green-600 text-lg" />

                    <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">
                      Responsible Handling
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                      Data is handled responsibly for the agreed marketing
                      purpose.
                    </p>
                  </div>


                  <div className="rounded-xl bg-gray-50 dark:bg-gray-950 p-4">
                    <FaUserFriends className="text-green-600 text-lg" />

                    <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">
                      Customer Database
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                      Your provided contacts are used for the agreed campaign.
                    </p>
                  </div>


                  <div className="rounded-xl bg-gray-50 dark:bg-gray-950 p-4">
                    <FaLockIcon />

                    <h3 className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">
                      Privacy Focused
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                      Your campaign information is handled with privacy in
                      mind.
                    </p>
                  </div>

                </div>


                {/* Important Note */}
                <div className="mt-7 rounded-xl border border-green-200 dark:border-green-500/20 bg-green-50 dark:bg-green-500/5 p-4">

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-6">
                    <span className="font-semibold text-green-700 dark:text-green-400">
                      Campaign Responsibility:
                    </span>{" "}
                    WhatsApp campaigns should be sent only to contacts where
                    appropriate permission or a valid business communication
                    basis exists. The customer is responsible for providing
                    lawful and appropriate customer data for marketing.
                  </p>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


    </>
  );
}


/*
  Small reusable icon component
  so the privacy card doesn't need another
  external icon import.
*/
function FaLockIcon() {
  return (
    <div className="text-green-600">
      <FaShieldAlt />
    </div>
  );
}

export default WhatsAppServices;