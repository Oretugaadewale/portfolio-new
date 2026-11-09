import Project from "../components/project";
import Underline from "../components/underline";
import { projects } from "../data/profile";

export default function Projects() {
  return (
    <section className="bg-anti-flash-white min-h-screen h-fit px-5 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-14">
      <header className="flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">projects</h2>
        <Underline />
        <p className="text-lg sm:text-xl font-medium text-center max-w-2xl">
          Production work for real businesses in fintech, logistics, travel and
          SaaS. Client code is private, so most projects link to the live product.
        </p>
      </header>
      <ul className="flex flex-col items-center">
        {projects.map((project) => (
          <li key={project.title}>
            <Project {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
