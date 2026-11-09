import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { profile } from "./profile";

interface SocialMediaAccount {
  label: string;
  link: string;
  icon: ReactNode;
}

const iconClass = "w-6 h-6 sm:w-8 sm:h-8 hover:scale-105";

export const SocialMedia: SocialMediaAccount[] = [
  { label: "LinkedIn", link: profile.linkedin, icon: <FaLinkedin className={iconClass} /> },
  { label: "GitHub", link: profile.github, icon: <FaGithub className={iconClass} /> },
  { label: "X (Twitter)", link: profile.x, icon: <FaTwitter className={iconClass} /> },
];
