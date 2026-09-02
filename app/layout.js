import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Sufiyan Web Marketing",
  description: "Sufiyan Web Marketing - Freelancer Portfolio",
  icons: {
    icon: "./sufiyan-web-marketing.ico",
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
      className={`${outfit.variable} ${ovo.variable}`}
    >
      <body className="min-h-screen flex flex-col font-outfit text-gray-800 antialiased">
        {children}
      </body>
    </html>
  );
}