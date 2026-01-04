// app/components/Header.tsx
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full pt-2 fixed top-0 left-0 z-50 flex items-center justify-between px-4 sm:px-6  
      ">
      
      {/* Left logo */}
      <div className="text-2xl font-semibold tracking-tight px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm">
        <Link href="/" className="text-black">S</Link>
        <span className="text-orange-500">.</span>
      </div>

      {/* Right social icons */}
      <div className="flex items-center gap-3 sm:gap-4 text-black text-xl px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm">
        <a
          href="https://github.com/Shahbazh1"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <FaGithub />
        </a>
        <span className="text-orange-500">/</span>
        <a
          href="https://www.linkedin.com/in/shahbaz-hashmi-561b932aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition"
        >
          <FaLinkedin />
        </a>
        <span className="text-orange-500">/</span>
        <a
          href="mailto:shahbazhashmi235@gmail.com"
          className="hover:opacity-70 transition"
        >
          <FaEnvelope />
        </a>
      </div>
    </header>
  );
}
