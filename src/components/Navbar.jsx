import { useState, useEffect } from "react";

const links = ["Home", "About", "Skills", "Projects", "Education", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md shadow-lg shadow-indigo-500/10" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="gradient-text font-bold text-xl cursor-pointer" onClick={() => scrollTo("home")}>
          GK.
        </span>
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l} onClick={() => scrollTo(l)} className="text-slate-400 hover:text-indigo-400 cursor-pointer text-sm font-medium transition-colors duration-200">
              {l}
            </li>
          ))}
        </ul>
        <button className="md:hidden text-slate-400" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#111827]/95 backdrop-blur-md px-6 pb-4">
          {links.map((l) => (
            <div key={l} onClick={() => scrollTo(l)} className="py-2 text-slate-400 hover:text-indigo-400 cursor-pointer text-sm font-medium border-b border-slate-800">
              {l}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
