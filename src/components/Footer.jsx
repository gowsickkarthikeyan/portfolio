import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/gowsickkarthikeyan" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 text-xl transition-colors duration-200">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gowsickkarthikeyan" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 text-xl transition-colors duration-200">
          <FaLinkedin />
        </a>
        <a href="mailto:gowsickkarthikeyan@gmail.com" className="text-slate-500 hover:text-indigo-400 text-xl transition-colors duration-200">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-slate-600 text-sm flex items-center justify-center gap-1">
        Built with <FaHeart className="text-indigo-500 text-xs" /> by{" "}
        <span className="gradient-text font-medium">Gowsick Karthikeyan</span>
      </p>
    </footer>
  );
}
