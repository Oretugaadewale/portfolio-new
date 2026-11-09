import Link from "next/link";
import Sidebar from "../components/sidebar";
import { profile } from "../data/profile";

export default function Hero(): JSX.Element {
  return (
    <section className="bg-hero-pattern min-h-[calc(100vh-4.5rem)] px-4 py-16 flex flex-col items-center justify-center">
      <Sidebar />
      <article className="text-center grid gap-6 sm:gap-8 max-w-3xl">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-violet-blue">
          {profile.title} | {profile.stack}
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          Hey, I&apos;m {profile.name}.
        </h1>
        <h2 className="text-lg sm:text-2xl font-medium text-night/80 leading-relaxed">
          I build fast, reliable web apps that real businesses run on: fintech
          dashboards, logistics platforms and customer-facing websites, from
          Figma to production.
        </h2>
        <p className="text-sm sm:text-base text-dim-gray">{profile.location}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/projects"
            className="px-8 sm:px-10 py-3 bg-violet-blue rounded uppercase font-bold text-white hover:scale-105"
          >
            see my work
          </Link>
          <Link
            href="/about"
            className="px-8 sm:px-10 py-3 border border-violet-blue rounded uppercase font-bold text-violet-blue hover:scale-105"
          >
            experience
          </Link>
          <Link
            href="/#contacts"
            className="px-8 sm:px-10 py-3 border border-violet-blue rounded uppercase font-bold text-violet-blue hover:scale-105"
          >
            contact me
          </Link>
        </div>
      </article>
    </section>
  );
}
