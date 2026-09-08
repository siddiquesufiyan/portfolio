import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeProvider from "./components/ThemeProvider";

export const metadata = {
  metadataBase: new URL("https://sufiyanwebmarketing.in"),

  title: {
    default:
      "Sufiyan Web Marketing | Website, SEO & Digital Marketing Freelancer",
    template: "%s | Sufiyan Web Marketing",
  },

  description:
    "Sufiyan Web Marketing offers professional website development, SEO, Google Business Profile, Facebook Ads, digital marketing, graphic design and video editing services for businesses.",

  keywords: [
    "website developer",
    "website development services",
    "website designer",
    "website designer freelancer",
    "website developer freelancer",
    "SEO freelancer",
    "SEO services",
    "SEO expert",
    "digital marketing freelancer",
    "digital marketing services",
    "Facebook Ads freelancer",
    "Facebook Ads services",
    "Google Ads freelancer",
    "Google Business Profile services",
    "GMB services",
    "Google Business Profile expert",
    "social media marketing",
    "social media marketing freelancer",
    "graphic designer",
    "graphic design services",
    "video editing services",
    "video editor freelancer",
    "freelancer for business website",
    "freelance web developer",
    "Sufiyan Web Marketing",
  ],

  authors: [
    {
      name: "Sufiyan",
      url: "https://sufiyanwebmarketing.in",
    },
  ],

  creator: "Sufiyan Web Marketing",
  publisher: "Sufiyan Web Marketing",

  alternates: {
    canonical: "https://sufiyanwebmarketing.in/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sufiyanwebmarketing.in/",
    siteName: "Sufiyan Web Marketing",
    title:
      "Sufiyan Web Marketing | Website, SEO & Digital Marketing Freelancer",
    description:
      "Get professional website development, SEO, Facebook Ads, Google Business Profile, digital marketing, graphic design and video editing services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sufiyan Web Marketing - Digital Marketing Freelancer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sufiyan Web Marketing | Website, SEO & Digital Marketing Freelancer",
    description:
      "Website development, SEO, Facebook Ads, Google Business Profile, digital marketing, graphic design and video editing services.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/sufiyan-web-marketing.ico",
    shortcut: "/sufiyan-web-marketing.ico",
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-outfit text-gray-800 antialiased overflow-x-hidden dark:bg-darkTheme dark:text-white">
        <ThemeProvider>
          <Navbar />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}