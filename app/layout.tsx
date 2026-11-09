import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://adewale-oretuga.netlify.app"),
  title: {
    default: "Adewale Oretuga | Frontend Engineer (React, Next.js, TypeScript)",
    template: "%s | Adewale Oretuga, Frontend Engineer",
  },
  description:
    "Frontend engineer in Lagos with nearly 5 years building production React, Next.js and TypeScript apps for fintech, logistics and travel businesses. Open to remote roles.",
  keywords: [
    "frontend engineer",
    "frontend developer",
    "react developer",
    "next.js developer",
    "typescript",
    "tailwind css",
    "supabase",
    "remote frontend developer Nigeria",
    "Lagos",
  ],
  openGraph: {
    title: "Adewale Oretuga | Frontend Engineer",
    description:
      "Production React, Next.js and TypeScript apps for fintech, logistics and travel businesses.",
    url: "/",
    siteName: "Adewale Oretuga",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-night flex flex-col min-h-screen`}>
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
