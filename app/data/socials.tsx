import { ReactNode } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface SocialMediaAccount {
  link: string;
  icon: ReactNode;
}

export const SocialMedia: SocialMediaAccount[] = [
  {
    link: "https://github.com/Oretugaadewale",
    icon: <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-105" />,
  },
  {
    link: "https://www.linkedin.com/in/adewale-oretuga-997421159/",
    icon: <FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-105" />,
  },
  {
    link: "https://twitter.com/AdewaleOretuga",
    icon: <FaTwitter className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-105" />,
  },
];
