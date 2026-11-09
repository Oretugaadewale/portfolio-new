import { SocialMedia as links } from "../data/socials";

export default function Sidebar(): JSX.Element {
  return (
    <aside className="hidden lg:block bg-seasalt p-3 rounded z-10 shadow-lg absolute left-0 top-1/2 translate-x-1/2">
      <ul className="grid gap-5">
        {links.map(({ label, link, icon }) => (
          <li key={label}>
            <a href={link} target="_blank" rel="noopener noreferrer" aria-label={label}>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
