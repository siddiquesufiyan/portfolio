function SeoServices() {
  const seoSteps = [
    {
      number: "01",
      title: "SEO Audit",
      description:
        "I analyze your website, current rankings, technical issues, content and overall SEO health.",
    },
    {
      number: "02",
      title: "Keyword Research",
      description:
        "I find relevant keywords with good search potential based on your business, audience and competition.",
    },
    {
      number: "03",
      title: "On-Page Optimization",
      description:
        "I optimize titles, meta descriptions, headings, URLs, content and internal linking.",
    },
    {
      number: "04",
      title: "Technical Fixes",
      description:
        "I work on technical SEO issues such as website structure, speed, indexing, mobile usability and crawlability.",
    },
    {
      number: "05",
      title: "Content Strategy",
      description:
        "I create a content-focused SEO strategy designed around your target keywords and customer search intent.",
    },
    {
      number: "06",
      title: "Authority Building",
      description:
        "I focus on improving your website authority through quality backlinks, business profiles and relevant online presence.",
    },
    {
      number: "07",
      title: "Monthly Monitoring",
      description:
        "I continuously track rankings, traffic, keywords and SEO performance to improve the strategy over time.",
    },
  ];

  const benefits = [
    "Affordable SEO packages",
    "Personalized SEO strategy",
    "Transparent monthly reporting",
    "Keyword-focused optimization",
    "Technical SEO improvements",
    "Regular performance monitoring",
  ];

  const offers = [
    "SEO Audit & Website Analysis",
    "Keyword Research & Mapping",
    "On-Page SEO Optimization",
    "Technical SEO",
    "Content Optimization",
    "Local SEO",
    "Competitor Analysis",
    "Monthly SEO Reports",
  ];

  return (
    <>
      {/* =====================================================
          SECTION 1 — SEO INTRO + PRICING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-3 py-1.5 mt-4 md:mt-2 rounded-full bg-red-50 text-red-600 text-xs sm:text-sm font-medium">
              SEO Services
            </span>

            <h2 className="mt-4 text-2xl dark:text-white sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Get Your Website Found on Google
              <span className="text-red-600"> & Grow Organically</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base dark:text-gray-200 text-gray-600 leading-7">
              I provide result-focused SEO services to improve your website's
              Google visibility, increase organic traffic and help your business
              reach potential customers searching for your services.
            </p>

            <p className="mt-3 text-sm sm:text-base dark:text-gray-200 text-gray-600 leading-7">
              My SEO strategy focuses on keyword research, on-page SEO,
              technical improvements, content optimization and continuous
              performance tracking.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700 dark:text-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Keyword Research
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                On-Page SEO
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Technical SEO
              </div>

              <div className="flex items-center gap-2">
                <span className="text-red-600">✓</span>
                Monthly SEO Monitoring
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden">

            <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-red-600/15 blur-3xl" />

            <div className="relative z-10">

              <p className="text-sm text-gray-400">
                SEO Plans Starting From
              </p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl sm:text-5xl font-semibold text-white">
                  ₹3,000
                </span>

                <span className="mb-1 text-gray-400 text-sm">
                  / month
                </span>
              </div>

              <div className="mt-5 h-px bg-gray-800" />

              <h3 className="mt-6 text-xl font-semibold text-white">
                Why Choose My SEO Service?
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-6">
                Every website needs a different SEO strategy. I analyze your
                website, competition and target keywords before creating a
                customized SEO plan.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-gray-300">
                <li>✓ Customized SEO strategy</li>
                <li>✓ Targeted keyword optimization</li>
                <li>✓ Website SEO improvements</li>
                <li>✓ Competitor analysis</li>
                <li>✓ Monthly progress monitoring</li>
                <li>✓ Focused strategy for first-page rankings</li>
              </ul>

              <p className="mt-6 text-xs text-gray-500 leading-5">
                The goal is to build strong search visibility and work towards
                first-page Google rankings depending on competition, keywords
                and website condition.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2 — HOW I DO SEO
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16 bg-gray-50 dark:bg-gray-950/50">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="max-w-2xl mb-10 sm:mb-12">
            <span className="text-red-600 text-sm font-medium">
              My SEO Process
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
              How I Do SEO for Your Website
            </h2>

            <p className="mt-3 text-sm sm:text-base leading-7 text-gray-600 dark:text-gray-300">
              SEO is not just about adding keywords. I follow a structured
              process to understand your website, fix important issues and
              continuously improve its search visibility.
            </p>
          </div>


          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {seoSteps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 ${
                  index === 6 ? "lg:col-span-2" : ""
                }`}
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
          SECTION 3 — BENEFITS + WHAT I OFFER
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-12 sm:py-16">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Why Choose Me */}
          <div>

            <span className="text-red-600 text-sm font-medium">
              Why Work With Me?
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white leading-tight">
              Professional SEO Without
              <span className="text-red-600"> Expensive Agency Prices</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              I keep my SEO services affordable so small businesses,
              startups and individuals can invest in professional SEO without
              paying the high prices usually charged by large agencies.
            </p>

            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
              My focus is on providing quality work, clear communication and a
              strategy that is specifically created around your business goals.
            </p>


            {/* Benefits */}
            <div className="mt-7 grid sm:grid-cols-2 gap-3">

              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-3.5"
                >
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs">
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
          <div className="rounded-2xl bg-gray-950 p-6 sm:p-8">

            <p className="text-sm text-red-500 font-medium">
              What I Offer
            </p>

            <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
              Complete SEO Services
            </h3>

            <p className="mt-3 text-sm text-gray-400 leading-6">
              From technical improvements to content and keyword optimization,
              I provide the essential SEO services your website needs.
            </p>


            <div className="mt-7 grid sm:grid-cols-2 gap-x-6">

              {offers.map((offer, index) => (
                <div
                  key={offer}
                  className="flex items-center gap-3 py-3 border-b border-gray-800"
                >
                  <span className="text-xs text-red-500 font-medium">
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
      </section>


      {/* =====================================================
          SECTION 4 — SEO REPORTING
      ====================================================== */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] pb-14 sm:pb-20">

        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden rounded-2xl bg-gray-950">

            <div className="grid lg:grid-cols-2 items-center">

              {/* Content */}
              <div className="p-7 sm:p-9 lg:p-12">

                <span className="inline-flex px-3 py-1.5 rounded-full bg-white/10 text-red-400 text-xs sm:text-sm">
                  Monthly SEO Reports
                </span>

                <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
                  Know Exactly How Your SEO
                  <span className="text-red-500"> Is Performing</span>
                </h2>

                <p className="mt-4 text-sm sm:text-base text-gray-400 leading-7">
                  You will receive regular SEO performance updates so you can
                  clearly understand what is improving, what needs attention
                  and how your website is progressing.
                </p>


                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-red-500">✓</span>
                    Keyword ranking progress
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-red-500">✓</span>
                    Organic traffic analysis
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-red-500">✓</span>
                    Search visibility tracking
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-red-500">✓</span>
                    SEO work completed
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-red-500">✓</span>
                    Next-month SEO recommendations
                  </div>

                </div>

              </div>


              {/* Image */}
              <div className="relative h-[280px] sm:h-[350px] lg:h-full min-h-[420px]">

                <img
                  src="/seo-image.webp"
                  alt="SEO Analytics Report"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gray-950/35" />

                {/* Fake report card */}
                <div className="absolute bottom-6 left-5 right-5 sm:left-8 sm:right-8 rounded-xl bg-white/95 backdrop-blur p-4 shadow-xl">

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">
                        Organic Traffic
                      </p>

                      <p className="text-xl font-semibold text-gray-900">
                        +42.8%
                      </p>
                    </div>

                    <div className="text-red-600 text-2xl">
                      ↗
                    </div>
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-gray-200 overflow-hidden">
                    <div className="h-full w-[72%] bg-red-600 rounded-full" />
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

export default SeoServices;