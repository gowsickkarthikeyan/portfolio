import { FaUserGraduate, FaCode, FaBrain } from "react-icons/fa";

const cards = [
  { icon: <FaUserGraduate />, title: "Education", desc: "M.Sc. Data Science from Bishop Heber College, Bharathidasan University" },
  { icon: <FaCode />, title: "Development", desc: "Full Stack developer with React.js, Python, .NET and REST APIs" },
  { icon: <FaBrain />, title: "AI & Data", desc: "Machine Learning, Predictive Modeling, Power BI & Data Analytics" },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Get to know me</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1">
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              I'm a <span className="text-indigo-400 font-medium">M.Sc. Data Science graduate</span> with a strong academic foundation and hands-on experience in data analysis, machine learning, and full-stack AI application development.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              Skilled in <span className="text-purple-400 font-medium">Python, SQL, Power BI, React.js</span>, and modern web technologies. I'm passionate about building AI-powered and data-driven applications that solve real-world problems through clean design and efficient development.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Quick learner with strong <span className="text-cyan-400 font-medium">analytical thinking, teamwork, and problem-solving</span> abilities. I speak English (Professional) and Tamil (Native).
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                ["Name", "Gowsick Karthikeyan"],
                ["Location", "Tiruchirappalli, India"],
                ["Email", "gowsickkarthikeyan@gmail.com"],
                ["Status", "Open to Work"],
              ].map(([label, value]) => (
                <div key={label}>
                  <span className="text-indigo-400 text-xs font-semibold uppercase tracking-wider">{label}</span>
                  <p className="text-slate-300 text-sm mt-0.5 break-all">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 grid gap-5 w-full">
            {cards.map(({ icon, title, desc }) => (
              <div key={title} className="card-box rounded-xl p-5 flex gap-4 items-start hover:glow transition-all duration-300">
                <div className="text-indigo-400 text-2xl mt-1">{icon}</div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
