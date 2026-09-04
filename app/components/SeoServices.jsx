
function SeoServices() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

        {/* Left Content */}
        <div>
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs sm:text-sm font-medium">
            SEO Services
          </span>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            Get Your Website Found on Google
            <span className="text-red-600"> & Grow Organically</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-7">
            I provide result-focused SEO services to improve your website's
            Google visibility, increase organic traffic and help your business
            reach potential customers searching for your services.
          </p>

          <p className="mt-3 text-sm sm:text-base text-gray-600 leading-7">
            My SEO strategy focuses on building your website's search presence
            with proper keyword research, on-page SEO, technical improvements,
            content optimization and continuous performance tracking.
          </p>

          {/* Features */}
          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
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

        {/* Right Pricing Card */}
        <div className="relative rounded-2xl bg-gray-950 p-7 sm:p-9 overflow-hidden">

          {/* Decoration */}
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
              first-page Google rankings within the first 3 months, depending
              on competition, keywords and website condition.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default SeoServices;
