import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuickActions from "@/components/layout/QucickActions";
import ReferralTracker from "@/components/referral/ReferralTracker";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "School Growth Academy | School Growth & Educational Consulting",
  description:
    "Develop practical school-growth expertise, build a professional consulting practice, and help private schools improve enrolment, revenue, operations, and long-term growth across Africa.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <body>
        <Suspense fallback={null}>
          <ReferralTracker />
        </Suspense>
        <Header />
        {children}
        <Footer />
        <QuickActions />
        <Analytics />
      </body>
    </html>
  );
}