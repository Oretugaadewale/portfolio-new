import { FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile";

export default function WhatsApp(): JSX.Element {
  return (
    <div className="flex items-center gap-1 hover:underline">
      <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
      <a
        href={profile.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm sm:text-base"
      >
        WhatsApp {profile.phoneDisplay}
      </a>
    </div>
  );
}
