import Image from "next/image";
import type { Project as ProjectData } from "../data/profile";

const primary =
  "px-6 sm:px-8 py-2 sm:py-3 rounded font-bold hover:scale-105 bg-violet-blue text-white";
const secondary =
  "px-6 sm:px-8 py-2 sm:py-3 rounded font-bold hover:scale-105 border border-violet-blue text-violet-blue";

function Placeholder({ title }: { title: string }) {
  return (
    <div className="aspect-[16/10] w-full rounded bg-gradient-to-br from-violet-blue to-night flex items-center justify-center p-6">
      <span className="text-white text-2xl sm:text-3xl font-extrabold text-center">{title}</span>
    </div>
  );
}

export default function Project({ title, tag, summary, stack, thumbnail, liveUrl, githubUrl }: ProjectData) {
  return (
    <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 mb-16 max-w-5xl">
      <div className="w-full h-fit border rounded shadow-lg overflow-hidden">
        {thumbnail ? (
          <Image
            width={1000}
            height={625}
            className="h-full w-full object-cover"
            src={thumbnail}
            alt={`Screenshot of ${title}`}
          />
        ) : (
          <Placeholder title={title} />
        )}
      </div>
      <div className="w-full h-fit">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-violet-blue mb-2">
          {tag}
        </p>
        <h4 className="text-xl sm:text-2xl font-bold mb-3">{title}</h4>
        <p className="text-night leading-7 mb-4">{summary}</p>
        <ul className="flex flex-wrap gap-2 mb-6">
          {stack.map((item) => (
            <li key={item} className="text-xs sm:text-sm px-2 py-1 rounded bg-anti-flash-white border">
              {item}
            </li>
          ))}
        </ul>
        {(liveUrl || githubUrl) && (
          <div className="flex items-center justify-center sm:justify-start gap-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={primary}>
                VIEW LIVE
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={secondary}>
                CODE
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
