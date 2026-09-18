
"use client";

import React from "react";
import Link from "next/link";
import {
  FileText,
  CreditCard,
  Globe,
  Search,
  Megaphone,
  MessageCircle,
  Palette,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Mail,
} from "lucide-react";
import ThemeProvider from "../components/ThemeProvider";

const terms = [
  {
    number: "01",
    icon: FileText,
    title: "Services",
    description:
      "Sufiyan Web Marketing provides digital services for businesses, individuals and organisations. Services may include:",
    points: [
      "Website design & development",
      "Search Engine Optimization (SEO)",
      "Facebook & Instagram Ads",
      "Google Ads and digital advertising",
      "WhatsApp Marketing",
      "Google Business Profile / GMB creation & optimization",
      "Social media management",
      "Graphic design, banners and promotional creatives",
      "Video editing and marketing content",
      "Landing pages and other digital marketing services",
    ],
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Payment Terms",
    description:
      "Sufiyan Web Marketing generally does not require an upfront advance payment to begin discussing or starting initial work.",
    points: [
      "Initial work or project progress may begin before payment, depending on the project.",
      "Payment is requested according to the agreed project stage or milestone.",
      "For larger or long-term projects, a milestone-based payment schedule may be agreed.",
      "The final amount and payment schedule will be communicated before or during the project.",
      "Third-party costs such as hosting, domain, paid tools, advertising budget or platform charges may be separate.",
    ],
    extra:
      "The payment arrangement may vary depending on the service, project size, duration and requirements.",
  },
  {
    number: "03",
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Website projects are developed according to the requirements discussed with the client.",
    points: [
      "Design and development will follow the agreed project scope.",
      "The client is responsible for providing required content, images, logos and business information.",
      "Additional features or major changes outside the agreed scope may require additional charges.",
      "Delivery timelines depend on project requirements and timely availability of client content.",
      "Domain and hosting ownership will remain subject to the arrangement agreed with the client.",
    ],
  },
  {
    number: "04",
    icon: Search,
    title: "SEO Services",
    description:
      "SEO services are performed to improve website visibility and search engine presence.",
    points: [
      "SEO results depend on competition, website condition, search engine algorithms and other external factors.",
      "Specific rankings or traffic levels cannot be guaranteed.",
      "SEO work may include on-page, technical, local and off-page activities depending on the package.",
      "Clients are responsible for providing accurate business information where required.",
    ],
  },
  {
    number: "05",
    icon: Megaphone,
    title: "Advertising Services",
    description:
      "Facebook, Instagram, Google and other advertising services are managed according to the agreed campaign requirements.",
    points: [
      "Advertising platform budgets are separate from service charges unless specifically agreed.",
      "Ad performance can vary depending on audience, budget, competition, offer and platform changes.",
      "No specific number of leads, sales or conversions can be guaranteed.",
      "Clients are responsible for providing accurate offers, business information and required access.",
    ],
  },
  {
    number: "06",
    icon: MessageCircle,
    title: "WhatsApp & GMB Services",
    description:
      "WhatsApp Marketing and Google Business Profile services may involve third-party platforms and their respective policies.",
    points: [
      "Required business information must be accurate and authorised by the client.",
      "Platform approvals and verification are controlled by the respective platforms.",
      "Sufiyan Web Marketing is not responsible for restrictions or suspensions imposed directly by third-party platforms.",
      "Any paid platform, messaging or verification charges are separate where applicable.",
    ],
  },
  {
    number: "07",
    icon: Palette,
    title: "Creative & Content Services",
    description:
      "Graphic design, social media creatives, video editing and other creative services are produced according to the agreed requirements.",
    points: [
      "The client should provide clear requirements and reference material where necessary.",
      "Revisions are subject to the scope agreed for the particular project.",
      "Major changes after approval may be treated as additional work.",
      "Client-provided logos, images and content must be owned or legally authorised for use.",
    ],
  },
  {
    number: "08",
    icon: ShieldCheck,
    title: "Client Responsibilities",
    description:
      "Successful project delivery requires timely cooperation and accurate information from the client.",
    points: [
      "Provide required content, credentials and business information on time.",
      "Ensure that submitted information is accurate and lawful.",
      "Review and approve work within a reasonable timeframe.",
      "Maintain ownership or permission for content supplied to Sufiyan Web Marketing.",
    ],
  },
];

function TermsContent() {
  return (
    <main className="min-h-screen lg:px-20 bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">

      {/* HERO */}
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">

          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-black/60 transition hover:text-red-600 dark:text-white/60 dark:hover:text-red-500"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="max-w-4xl">

            <div className="mb-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-red-600">
              <FileText size={18} />
              Legal Information
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Terms &
              <span className="text-red-600"> Conditions.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 sm:text-lg dark:text-white/60">
              These terms explain the general conditions for using the
              services provided by Sufiyan Web Marketing.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-6">

              <div className="flex items-center gap-2 text-black/60 dark:text-white/60">
                <ShieldCheck size={16} className="text-red-600" />
                Clear & transparent service terms
              </div>

              <span className="hidden text-black/20 sm:block dark:text-white/20">
                /
              </span>

              <div className="text-black/40 dark:text-white/40">
                Last updated: September 2026
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Introduction
              </span>

              <h2 className="mt-4 max-w-md text-3xl font-bold tracking-tight sm:text-4xl">
                Simple terms for better business.
              </h2>
            </div>

            <div className="max-w-3xl">
              <p className="text-base leading-8 text-black/65 sm:text-lg dark:text-white/65">
                By requesting or using services from Sufiyan Web Marketing,
                you acknowledge that you have read and understood these terms
                and agree to work according to the scope, pricing and
                requirements discussed for your project.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PAYMENT HIGHLIGHT */}
      <section className="border-y border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-18 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
                <CreditCard size={22} />
              </div>

              <span className="mt-6 block text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                Payment Policy
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Work first.
                <br />
                Pay as agreed.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-black/65 sm:text-lg dark:text-white/65">
                Sufiyan Web Marketing generally follows a client-friendly
                payment approach. An upfront advance is not normally required
                for initial work. Depending on the service, work may begin
                first and payment can be requested after the agreed stage or
                milestone.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">

                {[
                  "No regular upfront advance for initial work",
                  "Payment based on agreed project stage",
                  "Milestone payments for larger projects",
                  "Third-party costs may be separate",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-t border-black/10 pt-4 dark:border-white/10"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-red-600"
                    />

                    <span className="text-sm leading-6 text-black/70 dark:text-white/70">
                      {item}
                    </span>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TERMS */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              Service Terms
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Services & working conditions
            </h2>
          </div>

          <div className="grid gap-x-14 gap-y-16 lg:grid-cols-2">

            {terms.map((term) => {
              const Icon = term.icon;

              return (
                <article
                  key={term.number}
                  className="relative border-t border-black/10 pt-7 dark:border-white/10"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                      <Icon size={20} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-red-600">
                      {term.number}
                    </span>

                  </div>

                  <h3 className="mt-7 text-2xl font-bold tracking-tight">
                    {term.title}
                  </h3>

                  <p className="mt-4 leading-7 text-black/60 dark:text-white/60">
                    {term.description}
                  </p>

                  <ul className="mt-6 space-y-3">

                    {term.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-black/70 dark:text-white/70"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-red-600"
                        />

                        <span>{point}</span>
                      </li>
                    ))}

                  </ul>

                  {term.extra && (
                    <p className="mt-6 border-l-2 border-red-600 pl-4 text-sm leading-6 text-black/50 dark:text-white/50">
                      {term.extra}
                    </p>
                  )}

                </article>
              );
            })}

          </div>
        </div>
      </section>

      {/* GENERAL CONDITIONS */}
      <section className="border-y border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
                General Conditions
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                A clear working relationship.
              </h2>
            </div>

            <div className="space-y-7">

              <div>
                <h3 className="font-bold">Project Scope</h3>
                <p className="mt-2 text-sm leading-7 text-black/60 dark:text-white/60">
                  Every project is based on the requirements discussed with
                  the client. Work outside the agreed scope may be charged
                  separately.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Timelines</h3>
                <p className="mt-2 text-sm leading-7 text-black/60 dark:text-white/60">
                  Project timelines depend on the scope of work, client
                  feedback, approvals and availability of required materials.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Third-Party Platforms</h3>
                <p className="mt-2 text-sm leading-7 text-black/60 dark:text-white/60">
                  Domain providers, hosting companies, advertising platforms,
                  Google, Meta, WhatsApp and other third-party services have
                  their own terms and policies.
                </p>
              </div>

              <div>
                <h3 className="font-bold">Changes to Terms</h3>
                <p className="mt-2 text-sm leading-7 text-black/60 dark:text-white/60">
                  These terms may be updated from time to time to reflect
                  changes in services, processes or business practices.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section>
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
            <Mail size={21} />
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Have a question?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/60 dark:text-white/60">
            If you have any questions about these Terms & Conditions,
            services, pricing or payment arrangements, feel free to contact
            Sufiyan Web Marketing.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <Mail size={17} />
            Contact Me
          </Link>

        </div>
      </section>

    </main>
  );
}

export default function Page() {
  return (
    <ThemeProvider>
      <TermsContent />
    </ThemeProvider>
  );
}

