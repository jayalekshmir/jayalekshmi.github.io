import { FaLinkedin, FaGitlab } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-4">
      <a
        href="https://linkedin.com/in/jayalekshmi_r"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={28} />
      </a>
      
      <a
        href="https://gitlab.com/jayalekshmi_r"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGitlab size={28} />
      </a>
    </div>
  );
}
