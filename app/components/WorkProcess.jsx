import {
  FaComments,
  FaClipboardList,
  FaLaptopCode,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const defaultSteps = [
  {
    icon: FaComments,
    number: "01",
    title: "Consultation",
    description:
      "We discuss your business, goals, requirements and the right digital solution for your project.",
  },
  {
    icon: FaClipboardList,
    number: "02",
    title: "Planning",
    description:
      "I create a clear strategy, project structure and plan based on your requirements.",
  },
  {
    icon: FaLaptopCode,
    number: "03",
    title: "Design & Development",
    description:
      "Your website, marketing campaign or digital solution is designed and developed professionally.",
  },
  {
    icon: FaRocket,
    number: "04",
    title: "Launch & Optimization",
    description:
      "After testing everything, the project is launched and optimized for better performance.",
  },
  {
    icon: FaHeadset,
    number: "05",
    title: "Support",
    description:
      "I provide ongoing support, updates and improvements whenever you need them.",
  },
];

function WorkProcess({
  title = "How I Work",
  subtitle = "A simple and transparent process from idea to execution.",
  steps = defaultSteps,
}) {
  return (
    <section className="w-full py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-red-600 text-sm font-medium mb-2">
          My Process
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          {title}
        </h2>

        <p className="text-gray-500 text-sm md:text-base mt-3 max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Desktop Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

        <div className="space-y-8 md:space-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative md:grid md:grid-cols-2 md:gap-12 md:min-h-[150px]"
              >
                {/* Left */}
                <div
                  className={`${
                    isLeft ? "md:text-right" : "md:col-start-2"
                  }`}
                >
                  <div
                    className={`border border-gray-200 rounded-2xl p-5 bg-white hover:border-red-200 hover:shadow-sm transition-all duration-300 ${
                      isLeft ? "" : "md:ml-0"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isLeft ? "md:justify-end" : ""
                      }`}
                    >
                      <span className="text-red-600 text-sm font-bold">
                        {step.number}
                      </span>

                      <Icon className="text-red-600 text-lg" />

                      <h3 className="font-semibold text-gray-800">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-500 leading-6">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-red-600 border-4 border-white shadow-sm items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;