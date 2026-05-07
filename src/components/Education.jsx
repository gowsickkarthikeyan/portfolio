import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "M.Sc. in Data Science",
    institution: "Bishop Heber College, Bharathidasan University",
    period: "2024 – 2026",
    cgpa: "7.4 / 10.0",
    color: "from-indigo-500 to-purple-500",
  },
  {
    degree: "Bachelor of Computer Application",
    institution: "Bishop Heber College, Bharathidasan University",
    period: "2021 – 2024",
    cgpa: "7.0 / 10.0",
    color: "from-purple-500 to-cyan-500",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Academic background</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          My <span className="gradient-text">Education</span>
        </h2>

        <div className="relative max-w-3xl">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500" />
          {education.map(({ degree, institution, period, cgpa, color }) => (
            <div key={degree} className="relative pl-16 mb-10 last:mb-0">
              <div className={`absolute left-3 top-4 w-6 h-6 rounded-full bg-gradient-to-r ${color} flex items-center justify-center`}>
                <FaGraduationCap className="text-white text-xs" />
              </div>
              <div className="card-box rounded-2xl p-6 hover:glow transition-all duration-300">
                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                  <h3 className="text-white font-bold text-lg">{degree}</h3>
                  <span className="text-indigo-400 text-sm font-medium bg-indigo-400/10 px-3 py-1 rounded-full whitespace-nowrap">{period}</span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{institution}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 uppercase tracking-wider">CGPA</span>
                  <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent font-bold text-lg`}>{cgpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
