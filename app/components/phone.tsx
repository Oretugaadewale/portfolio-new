import { FaPhoneSquare } from "react-icons/fa";
import { profile } from "../data/profile";

export default function Phone(): JSX.Element {
  return (
    <div className="flex items-center gap-1 hover:underline">
      <FaPhoneSquare className="w-4 h-4 sm:w-5 sm:h-5" />
      <a href={profile.phoneHref} className="text-sm sm:text-base">
        {profile.phoneDisplay}
      </a>
    </div>
  );
}
