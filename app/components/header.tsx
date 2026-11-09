"use client";
import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";

const links: { label: string; href: string }[] = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "projects", href: "/projects" },
  { label: "contact", href: "/#contacts" },
];

export default function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <header className="bg-seasalt px-4 sm:px-8 lg:px-16 py-3 z-50 shadow-lg relative">
      <nav className="h-12 flex justify-between items-center">
        <Link
          href="/"
          className="text-lg font-semibold sm:font-bold text-violet-blue uppercase hover:scale-105"
        >
          Adewale Oretuga
        </Link>
        <ul className="hidden sm:flex justify-center items-center sm:gap-6 lg:gap-12">
          {links.map(({ label, href }, index) => (
            <li
              key={label}
              className={
                index === links.length - 1
                  ? "bg-violet-blue text-white px-3 py-2 rounded hover:scale-105"
                  : "hover:text-violet-blue hover:scale-105"
              }
            >
              <Link href={href} className="font-semibold uppercase">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setOpen(!isOpen)}
          className="sm:hidden text-violet-blue"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
        {isOpen && (
          <ul className="sm:hidden bg-seasalt w-screen h-fit py-7 shadow-lg absolute top-16 right-0 flex flex-col justify-center items-center gap-5">
            {links.map(({ label, href }) => (
              <li key={label} onClick={() => setOpen(false)}>
                <Link href={href} className="font-semibold uppercase hover:text-violet-blue">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
