"use client";
import { useSelector } from "react-redux";

export default function SocialLinks() {
  const socialLinks = useSelector((state) => state.user.socialLinks);
  return (
    <div className="flex gap-4 justify-center align-center">
      {socialLinks.slice(0, 3).map((socialLink) => (
        <a
          key={socialLink.name}
          href={socialLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition-colors"
        >
          {<socialLink.component size={24} />}
        </a>
      ))}
    </div>
  );
}
