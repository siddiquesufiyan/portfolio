import {
  FaGlobe,
  FaSearch,
  FaFacebookF,
  FaWhatsapp,
  FaVideo,
  FaRobot,
  FaPalette,
  FaIdCard,
  FaHeart,
  FaBookOpen,
} from "react-icons/fa";

const services = [
  {
    icon: <FaGlobe />,
    title: "GNB / GBP Creation",
    price: "₹1,000",
    description: "Google Business Profile creation and setup for your business.",
  },
  {
    icon: <FaSearch />,
    title: "GNB / GBP SEO",
    price: "₹2,000 / month",
    description: "Monthly optimization to improve your Google Business visibility.",
  },
  {
    icon: <FaGlobe />,
    title: "Website Design",
    price: "₹5,000+",
    description: "Professional responsive website. Price depends on the number of pages and requirements.",
  },
  {
    icon: <FaGlobe />,
    title: "E-Commerce Website",
    price: "₹10,000 – ₹25,000",
    description: "Complete e-commerce website with features based on your business requirements.",
  },
  {
    icon: <FaSearch />,
    title: "SEO",
    price: "₹3,000+ / month",
    description: "Monthly SEO based on your website's current status, competition and requirements.",
  },
  {
    icon: <FaFacebookF />,
    title: "Facebook Ads",
    price: "₹3,000+ / month",
    description: "Facebook & Instagram advertising management. Ad budget is separate.",
  },
  {
    icon: <FaFacebookF />,
    title: "Lead Generation Ads",
    price: "₹4,000+ / month",
    description: "Sales and lead-focused advertising campaigns. Ad budget is separate.",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp Marketing",
    price: "₹1,000",
    description: "WhatsApp marketing setup and management. Customer's campaign/message budget is separate.",
  },
  {
    icon: <FaVideo />,
    title: "Video Editing",
    price: "₹400+ / video",
    description: "Professional video editing for reels, social media and business content.",
  },
  {
    icon: <FaRobot />,
    title: "AI Video Creation",
    price: "₹600+ / video",
    description: "AI-powered videos for marketing, promotions and social media.",
  },
  {
    icon: <FaPalette />,
    title: "Logo Design",
    price: "₹300 – ₹800",
    description: "Professional logo design based on your brand and requirements.",
  },
  {
    icon: <FaIdCard />,
    title: "Visiting Card",
    price: "₹300 – ₹800",
    description: "Creative and professional visiting card design.",
  },
  {
    icon: <FaHeart />,
    title: "Wedding Card",
    price: "₹300 – ₹800",
    description: "Elegant wedding invitation card design.",
  },
  {
    icon: <FaPalette />,
    title: "Flyer Design",
    price: "₹300 – ₹800",
    description: "Creative promotional flyer design for your business or event.",
  },
  {
    icon: <FaBookOpen />,
    title: "Business Catalogue",
    price: "₹300 – ₹800",
    description: "Professional catalogue design to showcase your products and services.",
  },
];

function ServicesPricing() {
  return (
    <section className="w-full px-6 md:px-10 lg:px-[8%] py-14">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-red-600 text-sm font-medium mb-2">
          Services & Pricing
        </p>

        <h2 className="text-2xl md:text-4xl font-semibold text-gray-900">
          Professional Services at{" "}
          <span className="text-red-600">Flexible Prices</span>
        </h2>

        <p className="mt-3 text-sm md:text-base text-gray-500 leading-6">
          Choose the services you need. Final pricing may vary depending on
          your project requirements and scope.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="group rounded-2xl border border-gray-200 bg-white p-5 hover:border-red-200 hover:shadow-[0_8px_25px_rgba(0,0,0,0.06)] transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-lg group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {service.title}
            </h3>

            {/* Price */}
            <p className="mt-2 text-xl font-bold text-red-600">
              {service.price}
            </p>

            {/* Description */}
            <p className="mt-3 text-sm text-gray-500 leading-6">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="mt-8 text-center">
        <p className="text-xs md:text-sm text-gray-500">
          <span className="font-medium text-gray-700">
            Note:
          </span>{" "}
          Advertising budget, hosting, domain, paid tools and other third-party
          charges are separate where applicable.
        </p>
      </div>
    </section>
  );
}

export default ServicesPricing;