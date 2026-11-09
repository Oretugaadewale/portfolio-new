import type { Metadata } from "next";
import Projects from "../sections/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production web apps by Adewale Oretuga for fintech, logistics, travel and SaaS businesses.",
};

export default function ProjectsPage() {
  return <Projects />;
}
