const skillGroups = [
  { category: "Programming Languages", color: "from-indigo-500 to-purple-500", skills: ["Python", "JavaScript", ".NET (C#)"] },
  { category: "Data Science & Analytics", color: "from-purple-500 to-pink-500", skills: ["Machine Learning", "Statistical Analysis", "Predictive Modeling", "Data Wrangling", "Power BI", "MS Excel"] },
  { category: "Web Development", color: "from-cyan-500 to-indigo-500", skills: ["React.js", "HTML5", "CSS3", "REST APIs"] },
  { category: "Database", color: "from-emerald-500 to-cyan-500", skills: ["SQL", "MySQL", "Relational Database Design"] },
  { category: "Tools & Platforms", color: "from-orange-500 to-yellow-500", skills: ["VS Code", "Jupyter Notebook", "PyCharm", "Git & GitHub", "Arduino IDE"] },
  { category: "Soft Skills", color: "from-rose-500 to-orange-500", skills: ["Problem Solving", "Team Collaboration", "Analytical Thinking", "Communication"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">What I know</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          My <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, color, skills }) => (
            <div key={category} className="card-box rounded-2xl p-6 hover:glow transition-all duration-300">
              <div className={`inline-block bg-gradient-to-r ${color} text-white text-xs font-semibold px-3 py-1 rounded-full mb-4`}>
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-slate-700 hover:border-indigo-500 hover:text-indigo-300 transition-all duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
