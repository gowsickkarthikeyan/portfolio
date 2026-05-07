import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-12">
        {/* Text - always left aligned */}
        <div className="flex-1">
          <p className="text-indigo-400 font-medium mb-2 tracking-widest text-sm uppercase">Welcome to my portfolio</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
            Gowsick <span className="gradient-text">Karthikeyan</span>
          </h1>
          <h2 className="text-lg md:text-xl text-slate-400 font-medium mb-6">
            Data Science Graduate &nbsp;|&nbsp; Full Stack &amp; AI Developer
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-xl mb-4">
            M.Sc. Data Science graduate passionate about building AI-powered and data-driven applications that solve real-world problems through clean design and efficient development.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
            <FaMapMarkerAlt className="text-indigo-400" />
            <span>Tiruchirappalli, India</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:gowsickkarthikeyan@gmail.com"
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 glow"
            >
              <FaEnvelope /> Hire Me
            </a>
            <a
              href="#"
              className="flex items-center gap-2 border border-indigo-500/50 hover:border-indigo-400 text-slate-300 hover:text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="flex gap-5 mt-8">
            <a href="https://github.com/gowsickkarthikeyan" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 text-2xl transition-colors duration-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/gowsickkarthikeyan" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-indigo-400 text-2xl transition-colors duration-200">
              <FaLinkedin />
            </a>
            <a href="mailto:gowsickkarthikeyan@gmail.com" className="text-slate-500 hover:text-indigo-400 text-2xl transition-colors duration-200">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Photo - right side */}
        <div className="flex-shrink-0 relative">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 glow">
            <img
              src="https://i.postimg.cc/50s1LY08/Gowsick-pic.jpg"
              alt="Gowsick Karthikeyan"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Open to Work
          </div>
        </div>
      </div>
    </section>
  );
}
