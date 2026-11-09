import Link from "next/link";
import SkillTag from "../components/skillTag";
import Underline from "../components/underline";
import { education, experience, profile, skillGroups, summary } from "../data/profile";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 mb-8">
      <h3 className="text-2xl text-center font-bold">{children}</h3>
      <Underline />
    </div>
  );
}

export default function About() {
  return (
    <section className="bg-anti-flash-white h-fit py-12 sm:py-14">
      <header className="flex flex-col items-center gap-3 sm:gap-5 mb-10 sm:mb-14 px-5">
        <h2 className="text-2xl sm:text-4xl font-bold uppercase">about</h2>
        <Underline />
        <p className="text-lg sm:text-xl font-medium text-center">
          {profile.title} | {profile.stack}
        </p>
      </header>

      <div className="bg-seasalt px-5 py-10 flex flex-col items-center gap-16">
        <div className="w-full sm:w-2/3 max-w-3xl">
          <SectionTitle>About Me</SectionTitle>
          <article className="text-night sm:text-lg leading-7 grid gap-4 mb-8">
            {summary.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </article>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/projects"
              className="text-center px-8 py-3 bg-violet-blue rounded uppercase font-bold text-white hover:scale-105"
            >
              see my projects
            </Link>
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center px-8 py-3 border border-violet-blue rounded uppercase font-bold text-violet-blue hover:scale-105"
              >
                download my cv
              </a>
            )}
          </div>
        </div>

        <div className="w-full sm:w-2/3 max-w-3xl">
          <SectionTitle>Experience</SectionTitle>
          <ol className="border-l-2 border-violet-blue/30 grid gap-10">
            {experience.map((role) => (
              <li key={`${role.company}-${role.dates}`} className="relative pl-6">
                <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-violet-blue" />
                <h4 className="text-lg font-bold">
                  {role.title} <span className="text-violet-blue">| {role.company}</span>
                </h4>
                <p className="text-sm text-dim-gray mb-3">
                  {role.type} | {role.dates}
                </p>
                <ul className="list-disc pl-5 grid gap-2 leading-6">
                  {role.points.map((point) => (
                    <li key={point.slice(0, 24)}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="w-full sm:w-2/3 max-w-3xl">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid gap-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h4 className="font-semibold mb-3 text-center">{group.label}</h4>
                <ul className="flex justify-center items-center flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <SkillTag title={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full sm:w-2/3 max-w-3xl">
          <SectionTitle>Education</SectionTitle>
          <ul className="grid gap-4">
            {education.map((item) => (
              <li key={item.title} className="text-center">
                <p className="font-bold">{item.title}</p>
                <p className="text-dim-gray text-sm">
                  {item.school} | {item.dates}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
