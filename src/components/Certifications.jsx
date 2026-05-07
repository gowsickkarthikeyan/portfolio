import { FaCertificate } from "react-icons/fa";

const certs = [
  { title: "AI for India 2.0", issuer: "GUVI / IIT Madras", color: "from-indigo-500 to-purple-500" },
  { title: "Data Science and Artificial Intelligence", issuer: "Professional Certification", color: "from-purple-500 to-pink-500" },
  { title: "Python Programming", issuer: "Professional Certification", color: "from-cyan-500 to-indigo-500" },
  { title: "Web Designing and Development", issuer: "Professional Certification", color: "from-emerald-500 to-cyan-500" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Credentials</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          My <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map(({ title, issuer, color }) => (
            <div key={title} className="card-box rounded-2xl p-6 text-center hover:glow transition-all duration-300 group">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <FaCertificate className="text-white text-2xl" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{title}</h3>
              <p className="text-slate-500 text-xs">{issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
