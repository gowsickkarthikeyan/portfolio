import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered Fitness Web Application",
    description: "Designed and developed an AI-driven fitness web application supporting personalized user goals including weight loss, muscle gain, and endurance training. Integrated a conversational AI chatbot capable of handling 50+ real-time queries for personalized guidance. Built a progress tracking module managing 100+ user data points with interactive visualizations.",
    tags: ["React.js", "JavaScript", "AI API"],
    gradient: "from-indigo-500 to-purple-600",
    icon: "🏋️",
    highlights: ["50+ real-time AI queries", "100+ user data points", "Responsive SPA"],
  },
  {
    title: "SmartGuard – Swimming Pool Monitoring",
    description: "Developed a real-time swimming pool safety monitoring system using Arduino UNO. Implemented vibration sensor-based hazard detection with instant buzzer alerts. Conducted reliability testing and scenario simulations for accurate performance validation.",
    tags: ["Embedded C", "Arduino UNO", "IoT"],
    gradient: "from-cyan-500 to-indigo-600",
    icon: "🏊",
    highlights: ["Real-time hazard detection", "Instant buzzer alerts", "Reliability tested"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">What I've built</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ title, description, tags, gradient, icon, highlights }) => (
            <div key={title} className="card-box rounded-2xl overflow-hidden hover:glow transition-all duration-300">
              <div className={`bg-gradient-to-r ${gradient} p-6 flex items-center gap-3`}>
                <span className="text-4xl">{icon}</span>
                <h3 className="text-white font-bold text-lg leading-tight">{title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {highlights.map((h) => (
                    <span key={h} className="text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-2 py-1 rounded-md">
                      ✓ {h}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {tags.map((tag) => (
                    <span key={tag} className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="https://github.com/gowsickkarthikeyan" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm transition-colors duration-200">
                    <FaGithub /> Code
                  </a>
                  <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
