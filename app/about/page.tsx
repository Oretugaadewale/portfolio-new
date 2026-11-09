import type { Metadata } from "next";
import About from "../sections/about";

export const metadata: Metadata = {
  title: "About and Experience",
  description:
    "Experience, skills and education of Adewale Oretuga, frontend engineer (React, Next.js, TypeScript).",
};

export default function AboutPage() {
  return <About />;
}
