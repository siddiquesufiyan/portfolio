
import Image from "next/image";

function FacebookAds() {
  const adSteps = [
    {
      number: "01",
      title: "Business & Audience Research",
      description:
        "I understand your business, offer, ideal customers and competitors before creating your advertising strategy.",
    },
    {
      number: "02",
      title: "Campaign Strategy",
      description:
        "I select the right campaign objective, audience, targeting and funnel based on whether your goal is leads or sales.",
    },
    {
      number: "03",
      title: "Ad Creative",
      description:
        "I prepare scroll-stopping ad creatives and messaging designed around your offer and target audience.",
    },
    {
      number: "04",
      title: "Campaign Setup",
      description:
        "I set up Meta campaigns, ad sets, targeting, placements, budgets and lead or conversion objectives.",
    },
    {
      number: "05",
      title: "Launch & Testing",
      description:
        "I launch campaigns and test different audiences, creatives and ad variations to identify what performs better.",
    },
    {
      number: "06",
      title: "Performance Optimization",
      description:
        "I continuously monitor campaign performance and optimize targeting, creatives, budgets and placements.",
    },
    {
      number: "07",
      title: "Reporting & Improvement",
      description:
        "I track results, identify winning campaigns and provide performance insights for the next optimization cycle.",
    },
  ];

  const benefits = [
    "Affordable freelancer pricing",
    "Customized ad strategy",
    "Creative + campaign management",
    "Lead generation campaigns",
    "Sales generation campaigns",
    "Continuous performance optimization",
  ];

  const offers = [
    "Facebook & Instagram Ads",
    "Lead Generation Campaigns",
    "Sales Generation Campaigns",
    "Audience Research",
    "Ad Creative & Copy",
    "Campaign Setup",
    "Retargeting Campaigns",
    "Performance Optimization",
  ];

  return (
    <>
      {/* =====================================================
          SECTION 1 — FACEBOOK ADS INTRO + PRICING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-blue-50 text-blue-600 text-xs sm:text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Facebook Ads Services
            </span>

            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Turn Facebook & Instagram Ads Into
              <span className="text-blue-600"> Real Business Leads</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              I help businesses generate targeted leads and sales through
              professionally managed Facebook and Instagram advertising
              campaigns designed around their business goals.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-7">
              As a freelancer, I personally manage your campaigns, from
              audience research and ad creatives to campaign optimization,
              performance tracking and continuous improvements.
            </p>

            {/* FEATURES */}
            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200">

              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Lead Generation
              </div>

              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Sales Campaigns
              </div>

              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Ad Creative & Copy
              </div>

              <div className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Performance Optimization
              </div>

            </div>
          </div>


          {/* PRICING CARD */}
          <div className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden">

            {/* Blue decoration */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="absolute -bottom-24 -left-24 w-56 h-56 rounded-full bg-red-600/10 blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm text-gray-400">
                Facebook Ads Management Starting From
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl sm:text-5xl font-semibold text-white">
                  ₹4,000
                </span>

                <span className="mb-1 text-gray-400 text-sm">
                  / month
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Lead Generation Campaign
              </p>

              <div className="mt-5 h-px bg-gray-800" />

              <h3 className="mt-6 text-xl font-semibold text-white">
                Sales Generation Campaign
              </h3>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-3xl sm:text-4xl font-semibold text-blue-500">
                  ₹5,000
                </span>

                <span className="mb-1 text-gray-400 text-sm">
                  / month
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Complete campaign management & optimization
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-300">

                <li>
                  <span className="text-blue-500">✓</span>{" "}
                  Campaign setup & management
                </li>

                <li>
                  <span className="text-blue-500">✓</span>{" "}
                  Ad creative & copy
                </li>

                <li>
                  <span className="text-blue-500">✓</span>{" "}
                  Audience targeting
                </li>

                <li>
                  <span className="text-blue-500">✓</span>{" "}
                  Campaign testing
                </li>

                <li>
                  <span className="text-blue-500">✓</span>{" "}
                  Performance optimization
                </li>

                <li>
                  <span className="text-blue-500">✓</span>{" "}
                  Regular performance monitoring
                </li>

              </ul>

              <div className="mt-6 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">

                <p className="text-xs text-gray-400 leading-5">
                  <span className="text-blue-400 font-medium">
                    Important:
                  </span>{" "}
                  My management fee is separate from your advertising budget.
                  The Facebook/Instagram ad spend is paid directly by the
                  client to Meta.
                </p>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2 — HOW I MANAGE FACEBOOK ADS
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl mb-10 sm:mb-12">

            <span className="text-blue-600 text-sm font-medium">
              My Facebook Ads Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              How I Manage Your Facebook Ads
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              Running ads is not just about pressing the publish button. I
              follow a complete process to understand your business, reach
              the right audience and continuously improve campaign
              performance.
            </p>

          </div>


          {/* STEPS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {adSteps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 ${
                  index === 6 ? "lg:col-span-2" : ""
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600/30 transition">
                    {step.number}
                  </span>

                  <span className="text-blue-600 text-lg">
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
          SECTION 3 — LEADS VS SALES
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-blue-600 text-sm font-medium">
              Choose Your Campaign
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Lead Generation or Sales?
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Different businesses need different advertising strategies.
              I create campaigns according to what you actually want from
              your ads.
            </p>

          </div>


          <div className="mt-10 grid md:grid-cols-2 gap-5">

            {/* LEADS */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm text-blue-600 font-medium">
                    Campaign 01
                  </p>

                  <h3 className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">
                    Lead Generation
                  </h3>
                </div>

                <span className="text-3xl font-semibold text-blue-600">
                  ₹4K
                </span>

              </div>

              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-6">
                Best for businesses that want potential customers to submit
                their details through Facebook or Instagram lead forms.
              </p>

              <div className="mt-6 space-y-3">

                {[
                  "Lead form campaign setup",
                  "Audience targeting",
                  "Ad creative",
                  "Lead-focused copy",
                  "Campaign testing",
                  "Performance optimization",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="text-blue-600">✓</span>
                    {item}
                  </div>
                ))}

              </div>

              <div className="mt-6 rounded-xl bg-blue-50 dark:bg-blue-950/20 p-4">

                <p className="text-xs text-blue-700 dark:text-blue-300 leading-5">
                  Ideal for travel agencies, gyms, service businesses,
                  interior designers, consultants and local businesses.
                </p>

              </div>

            </div>


            {/* SALES */}
            <div className="relative rounded-2xl bg-gray-950 p-6 sm:p-8 overflow-hidden">

              <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-blue-600/20 blur-3xl" />

              <div className="relative z-10">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-blue-400 font-medium">
                      Campaign 02
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-white">
                      Sales Generation
                    </h3>
                  </div>

                  <span className="text-3xl font-semibold text-blue-500">
                    ₹5K
                  </span>

                </div>

                <p className="mt-4 text-sm text-gray-400 leading-6">
                  Designed for businesses that want to promote products,
                  services or offers and drive customers towards enquiries,
                  purchases or conversions.
                </p>

                <div className="mt-6 space-y-3">

                  {[
                    "Sales campaign strategy",
                    "Audience research",
                    "Ad creative & messaging",
                    "Conversion-focused campaigns",
                    "A/B testing",
                    "Continuous optimization",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="text-blue-500">✓</span>
                      {item}
                    </div>
                  ))}

                </div>

                <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-4">

                  <p className="text-xs text-gray-400 leading-5">
                    Best suited for businesses with a clear product,
                    service, offer or conversion goal.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4 — WHY CHOOSE ME + EXPERIENCE
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* WHY ME */}
          <div>

            <span className="text-blue-600 text-sm font-medium">
              Why Work With Me?
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Professional Ads Management
              <span className="text-blue-600">
                {" "}Without Agency-Level Pricing
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I work as a freelancer, which means you get direct
              communication with the person actually managing your
              advertising campaigns.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              Instead of paying large agency fees, you get focused campaign
              management, optimization and performance marketing at an
              affordable monthly price.
            </p>


            <div className="mt-7 grid sm:grid-cols-2 gap-3">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5 bg-white dark:bg-gray-900"
                >

                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center text-xs">
                    ✓
                  </span>

                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* EXPERIENCE CARD */}
          <div className="rounded-2xl bg-gray-950 p-6 sm:p-8">

            <p className="text-sm text-blue-500 font-medium">
              My Experience
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
              Ads For Different Types of Businesses
            </h3>

            <p className="mt-3 text-sm text-gray-400 leading-6">
              I have experience working on advertising campaigns for
              different industries, helping businesses reach their target
              customers through Meta advertising.
            </p>


            <div className="mt-7 grid grid-cols-2 gap-3">

              {[
                "Travel Businesses",
                "Gyms & Fitness",
                "Digital Marketing",
                "Interior Designers",
                "Local Businesses",
                "Service Businesses",
                "Tourism Businesses",
                "Other Industries",
              ].map((industry) => (
                <div
                  key={industry}
                  className="rounded-xl border border-gray-800 p-4"
                >

                  <span className="text-blue-500 text-sm">
                    ✓
                  </span>

                  <p className="mt-2 text-sm text-gray-300">
                    {industry}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 5 — WHAT I OFFER
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto">

          <div className="max-w-2xl">

            <span className="text-blue-600 text-sm font-medium">
              What I Offer
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              Complete Facebook Ads Management
            </h2>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              From planning and creative development to campaign management
              and optimization, I handle the important parts of your Meta
              advertising campaign.
            </p>

          </div>


          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {offers.map((offer, index) => (
              <div
                key={offer}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 dark:hover:border-blue-900"
              >

                <span className="text-xs text-blue-600 font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
                  {offer}
                </h3>

                <div className="mt-5 text-blue-600 group-hover:translate-x-1 transition-transform">
                  →
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 6 — CAMPAIGN PERFORMANCE / REPORTING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-14 sm:pb-20">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl bg-gray-950">

            <div className="grid lg:grid-cols-2 items-center">

              {/* CONTENT */}
              <div className="p-7 sm:p-9 lg:p-12">

                <span className="inline-flex px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm">
                  Campaign Performance
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Don't Just Run Ads.
                  <span className="text-blue-500">
                    {" "}Optimize Them.
                  </span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  I monitor your campaigns to understand which audiences,
                  creatives and ads are producing better results. Based on
                  performance, I make regular improvements instead of
                  simply letting the campaign run.
                </p>


                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500">✓</span>
                    Cost per lead monitoring
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500">✓</span>
                    Campaign performance tracking
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500">✓</span>
                    Audience performance analysis
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500">✓</span>
                    Creative performance testing
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-blue-500">✓</span>
                    Budget & placement optimization
                  </div>

                </div>

              </div>


              {/* IMAGE */}
              <div className="relative h-[300px] sm:h-[380px] lg:h-full min-h-[460px]">

                <Image
                  src="/facebook-ads.webp"
                  alt="Facebook Ads Campaign Performance"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gray-950/30" />


                {/* PERFORMANCE CARD */}
                <div className="absolute bottom-6 left-5 right-5 sm:left-8 sm:right-8 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-gray-500">
                        Campaign Performance
                      </p>

                      <p className="mt-1 text-xl font-semibold text-gray-900">
                        Optimizing →
                      </p>
                    </div>

                    <div className="text-blue-600 text-2xl">
                      ↗
                    </div>

                  </div>

                  <div className="mt-4 flex gap-1">

                    <div className="h-2 flex-1 rounded-full bg-blue-600" />
                    <div className="h-2 flex-1 rounded-full bg-blue-500" />
                    <div className="h-2 flex-1 rounded-full bg-blue-400" />
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

export default FacebookAds;

