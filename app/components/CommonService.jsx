function CommonService({ service }) {
  return (
    <section className="w-full px-4 sm:px-6 md:px-8 lg:px-[8%] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">

        <div>
          <span className="inline-flex px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs sm:text-sm font-medium">
            {service.badge}
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            {service.title}

            <span className="text-red-600">
              {" "}
              {service.highlight}
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-7">
            {service.description}
          </p>
        </div>

        {/* Pricing / CTA Card */}
        <div className="rounded-2xl bg-gray-950 p-7 sm:p-9">
          <p className="text-sm text-gray-400">
            Plans Starting From
          </p>

          <div className="mt-2 flex items-end gap-2">
            <span className="text-4xl sm:text-5xl font-semibold text-white">
              {service.price}
            </span>

            <span className="mb-1 text-gray-400 text-sm">
              {service.priceUnit}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CommonService;