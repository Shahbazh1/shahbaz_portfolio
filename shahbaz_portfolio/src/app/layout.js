import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Muhammad Shahbaz Fareed Hashmi | MERN Stack & React Developer",
    template: "%s | Muhammad Shahbaz Fareed Hashmi",
  },
  description:
    "Portfolio of Muhammad Shahbaz Fareed Hashmi, an experienced MERN Stack and React Developer specializing in building high-performance web applications.",
  keywords: [
    "Muhammad Shahbaz Fareed Hashmi",
    "MERN Stack Developer",
    "React Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Web Development",
    "Portfolio",
    "JavaScript",
    "Node.js",
  ],
  authors: [{ name: "Muhammad Shahbaz Fareed Hashmi" }],
  creator: "Muhammad Shahbaz Fareed Hashmi",
  metadataBase: new URL("https://shahbaz-portfolio.vercel.app"), // Placeholder URL, update with actual
  openGraph: {
    title: "Muhammad Shahbaz Fareed Hashmi | MERN Stack & React Developer",
    description:
      "Explore the portfolio of Muhammad Shahbaz Fareed Hashmi, featuring top-notch MERN stack and React projects.",
    url: "https://shahbaz-portfolio.vercel.app",
    siteName: "Muhammad Shahbaz Fareed Hashmi Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shahbaz Fareed Hashmi | MERN Stack & React Developer",
    description:
      "Expert MERN Stack and React Developer. Check out my latest projects and skills.",
    creator: "@shahbaz_hashmi", // Placeholder, update if known
  },
  verification: {
    google: "3MS14Iq8CuBjNjjL-JrHaj2bBITKX_mLTentfmoH88I",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
