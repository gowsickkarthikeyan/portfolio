import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaDownload, FaGraduationCap, FaCertificate, FaExternalLinkAlt, FaUserGraduate, FaCode, FaBrain, FaPaperPlane, FaHeart, FaPhone } from "react-icons/fa";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Education", "Certifications", "Contact"];

const COLORS = {
  bg: "#0a0a0f",
  card: "#111827",
  border: "rgba(99,102,241,0.35)",
  indigo: "#6366f1",
  purple: "#8b5cf6",
  cyan: "#06b6d4",
  text: "#e2e8f0",
  muted: "#94a3b8",
  dim: "#475569",
};

const S = {
  section: { padding: "80px 0", backgroundColor: COLORS.bg },
  wrap: { maxWidth: 1200, margin: "0 auto", padding: "0 24px" },
  label: { color: COLORS.indigo, fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8, display: "block" },
  heading: { color: "#fff", fontSize: 36, fontWeight: 800, marginBottom: 48, lineHeight: 1.2 },
  card: { backgroundColor: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 24 },
  gradientText: { background: "linear-gradient(to right,#818cf8,#a78bfa,#67e8f9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" },
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id) => { document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return (
    <nav style={{ position: "fixed", top: 0, width: "100%", zIndex: 100, backgroundColor: scrolled ? "rgba(10,10,15,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none", transition: "all 0.3s" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span onClick={() => go("home")} style={{ ...S.gradientText, fontWeight: 800, fontSize: 22, cursor: "pointer" }}>GK.</span>
        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map(l => (
            <li key={l} onClick={() => go(l)} style={{ color: COLORS.muted, fontSize: 14, fontWeight: 500, cursor: "pointer" }}
              onMouseEnter={e => e.target.style.color = COLORS.indigo}
              onMouseLeave={e => e.target.style.color = COLORS.muted}>{l}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", backgroundColor: COLORS.bg, position: "relative", overflow: "hidden", padding: "80px 0" }}>
      <div style={{ position: "absolute", top: 80, left: 40, width: 300, height: 300, background: "rgba(99,102,241,0.15)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 80, right: 40, width: 400, height: 400, background: "rgba(139,92,246,0.1)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ ...S.wrap, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <span style={S.label}>Welcome to my portfolio</span>
          <h1 style={{ color: "#fff", fontSize: 52, fontWeight: 900, lineHeight: 1.15, marginBottom: 12 }}>
            Gowsick <span style={S.gradientText}>Karthikeyan</span>
          </h1>
          <h2 style={{ color: COLORS.muted, fontSize: 18, fontWeight: 500, marginBottom: 20 }}>Data Science Graduate &nbsp;|&nbsp; Aspiring Data Analyst</h2>
          <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.8, maxWidth: 520, marginBottom: 16 }}>
            M.Sc. Data Science graduate passionate about building AI-powered and data-driven applications that solve real-world problems through clean design and efficient development.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginBottom: 32 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.dim, fontSize: 14 }}>
              <FaMapMarkerAlt style={{ color: COLORS.indigo }} /><span>Chennai, India</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: COLORS.dim, fontSize: 14 }}>
              <FaPhone style={{ color: COLORS.indigo }} /><span>+91 82484 41798</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 32 }}>
            <a href="mailto:gowsickkarthikeyan@gmail.com" style={{ display: "flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", padding: "12px 24px", borderRadius: 50, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              <FaEnvelope /> Hire Me
            </a>
            <a href="/gowsick_resume.pdf" download="Gowsick_Karthikeyan_Resume.pdf" style={{ display: "flex", alignItems: "center", gap: 8, border: `1px solid ${COLORS.indigo}`, color: COLORS.muted, padding: "12px 24px", borderRadius: 50, fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
              <FaDownload /> Download CV
            </a>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {[{ href: "https://github.com/gowsickkarthikeyan", icon: <FaGithub /> }, { href: "https://www.linkedin.com/in/gowsickkarthikeyan", icon: <FaLinkedin /> }, { href: "mailto:gowsickkarthikeyan@gmail.com", icon: <FaEnvelope /> }].map(({ href, icon }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" style={{ color: COLORS.dim, fontSize: 22, textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.color = COLORS.indigo}
                onMouseLeave={e => e.currentTarget.style.color = COLORS.dim}>{icon}</a>
            ))}
          </div>
        </div>
        <div style={{ position: "relative", flexShrink: 0 }}>
          <div style={{ width: 260, height: 260, borderRadius: "50%", padding: 3, background: "linear-gradient(135deg,#6366f1,#8b5cf6,#06b6d4)", boxShadow: "0 0 40px rgba(99,102,241,0.4)" }}>
            <img src="https://i.postimg.cc/50s1LY08/Gowsick-pic.jpg" alt="Gowsick" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }} />
          </div>
          <span style={{ position: "absolute", bottom: -8, right: -8, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20 }}>Open to Work</span>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { icon: <FaUserGraduate />, title: "Education", desc: "M.Sc. Data Science from Bishop Heber College, Bharathidasan University" },
    { icon: <FaCode />, title: "Development", desc: "Full Stack developer with React.js, Python, .NET and REST APIs" },
    { icon: <FaBrain />, title: "AI & Data", desc: "Machine Learning, Predictive Modeling, Power BI & Data Analytics" },
  ];
  return (
    <section id="about" style={S.section}>
      <div style={S.wrap}>
        <span style={S.label}>Get to know me</span>
        <h2 style={S.heading}>About <span style={S.gradientText}>Me</span></h2>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>I'm a <span style={{ color: COLORS.indigo, fontWeight: 600 }}>M.Sc. Data Science graduate</span> with a strong academic foundation and hands-on experience in data analysis, machine learning, and full-stack AI application development.</p>
            <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>Skilled in <span style={{ color: COLORS.purple, fontWeight: 600 }}>Python, SQL, Power BI, React.js</span>, and modern web technologies. Passionate about building AI-powered applications that solve real-world problems.</p>
            <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.9, marginBottom: 32 }}>Quick learner with strong <span style={{ color: COLORS.cyan, fontWeight: 600 }}>analytical thinking, teamwork, and problem-solving</span> abilities.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[["Name", "Gowsick Karthikeyan"], ["Location", "Chennai, India"], ["Phone", "+91 82484 41798"], ["Email", "gowsickkarthikeyan@gmail.com"], ["Status", "Open to Work"]].map(([l, v]) => (
                <div key={l}><span style={{ color: COLORS.indigo, fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>{l}</span><p style={{ color: COLORS.text, fontSize: 13, marginTop: 4, wordBreak: "break-all" }}>{v}</p></div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 280, display: "flex", flexDirection: "column", gap: 16 }}>
            {cards.map(({ icon, title, desc }) => (
              <div key={title} style={{ ...S.card, display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ color: COLORS.indigo, fontSize: 22, marginTop: 2, flexShrink: 0 }}>{icon}</div>
                <div><h3 style={{ color: "#fff", fontWeight: 700, marginBottom: 6, fontSize: 15 }}>{title}</h3><p style={{ color: COLORS.muted, fontSize: 13, lineHeight: 1.7 }}>{desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    { category: "Programming Languages", color: "#6366f1", skills: ["Python", "JavaScript", ".NET (C#)"] },
    { category: "Data Science & Analytics", color: "#8b5cf6", skills: ["Machine Learning", "Statistical Analysis", "Predictive Modeling", "Data Wrangling", "Power BI", "MS Excel"] },
    { category: "Web Development", color: "#06b6d4", skills: ["React.js", "HTML5", "CSS3", "REST APIs"] },
    { category: "Database", color: "#10b981", skills: ["SQL", "MySQL", "Relational Database Design"] },
    { category: "Tools & Platforms", color: "#f59e0b", skills: ["VS Code", "Jupyter Notebook", "PyCharm", "Git & GitHub", "Arduino IDE"] },
    { category: "Soft Skills", color: "#f43f5e", skills: ["Problem Solving", "Team Collaboration", "Analytical Thinking", "Communication"] },
  ];
  return (
    <section id="skills" style={{ ...S.section, backgroundColor: "#0d0d14" }}>
      <div style={S.wrap}>
        <span style={S.label}>What I know</span>
        <h2 style={S.heading}>My <span style={S.gradientText}>Skills</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
          {groups.map(({ category, color, skills }) => (
            <div key={category} style={S.card}>
              <span style={{ display: "inline-block", backgroundColor: color, color: "#fff", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, marginBottom: 16 }}>{category}</span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {skills.map(s => (
                  <span key={s} style={{ backgroundColor: "#1e293b", color: COLORS.muted, fontSize: 12, padding: "6px 12px", borderRadius: 8, border: "1px solid #334155" }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { title: "AI-Powered Fitness Web Application", desc: "Designed and developed an AI-driven fitness web application supporting personalized user goals including weight loss, muscle gain, and endurance training. Integrated a conversational AI chatbot handling 50+ real-time queries. Built a progress tracking module managing 100+ user data points with interactive visualizations.", tags: ["React.js", "JavaScript", "AI API"], color: "#6366f1", icon: "🏋️", highlights: ["50+ real-time AI queries", "100+ user data points", "Responsive SPA"] },
    { title: "SmartGuard – Swimming Pool Monitoring", desc: "Developed a real-time swimming pool safety monitoring system using Arduino UNO. Implemented vibration sensor-based hazard detection with instant buzzer alerts. Conducted reliability testing and scenario simulations for accurate performance validation.", tags: ["Embedded C", "Arduino UNO", "IoT"], color: "#06b6d4", icon: "🏊", highlights: ["Real-time hazard detection", "Instant buzzer alerts", "Reliability tested"] },
  ];
  return (
    <section id="projects" style={S.section}>
      <div style={S.wrap}>
        <span style={S.label}>What I've built</span>
        <h2 style={S.heading}>Featured <span style={S.gradientText}>Projects</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 24 }}>
          {projects.map(({ title, desc, tags, color, icon, highlights }) => (
            <div key={title} style={{ ...S.card, padding: 0, overflow: "hidden" }}>
              <div style={{ background: `linear-gradient(135deg,${color},#8b5cf6)`, padding: "20px 24px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 32 }}>{icon}</span>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, lineHeight: 1.4 }}>{title}</h3>
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ color: COLORS.muted, fontSize: 13, lineHeight: 1.8, marginBottom: 16 }}>{desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                  {highlights.map(h => <span key={h} style={{ color: COLORS.cyan, backgroundColor: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)", fontSize: 11, padding: "4px 10px", borderRadius: 6 }}>✓ {h}</span>)}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                  {tags.map(t => <span key={t} style={{ color: "#a5b4fc", backgroundColor: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", fontSize: 11, padding: "4px 12px", borderRadius: 20 }}>{t}</span>)}
                </div>
                <div style={{ display: "flex", gap: 20 }}>
                  <a href="https://github.com/gowsickkarthikeyan" target="_blank" rel="noreferrer" style={{ color: COLORS.muted, fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}><FaGithub /> Code</a>
                  <a href="#" style={{ color: COLORS.muted, fontSize: 13, textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}><FaExternalLinkAlt /> Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  const edu = [
    { degree: "M.Sc. in Data Science", institution: "Bishop Heber College, Bharathidasan University", period: "2024 – 2026", cgpa: "7.4 / 10.0", color: "#6366f1" },
    { degree: "Bachelor of Computer Application", institution: "Bishop Heber College, Bharathidasan University", period: "2021 – 2024", cgpa: "7.0 / 10.0", color: "#8b5cf6" },
  ];
  return (
    <section id="education" style={{ ...S.section, backgroundColor: "#0d0d14" }}>
      <div style={S.wrap}>
        <span style={S.label}>Academic background</span>
        <h2 style={S.heading}>My <span style={S.gradientText}>Education</span></h2>
        <div style={{ position: "relative", maxWidth: 700, paddingLeft: 40 }}>
          <div style={{ position: "absolute", left: 12, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom,#6366f1,#8b5cf6,#06b6d4)" }} />
          {edu.map(({ degree, institution, period, cgpa, color }) => (
            <div key={degree} style={{ position: "relative", marginBottom: 32 }}>
              <div style={{ position: "absolute", left: -34, top: 20, width: 24, height: 24, borderRadius: "50%", backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FaGraduationCap style={{ color: "#fff", fontSize: 11 }} />
              </div>
              <div style={S.card}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17 }}>{degree}</h3>
                  <span style={{ color: color, fontSize: 13, fontWeight: 600, backgroundColor: `${color}20`, padding: "4px 12px", borderRadius: 20 }}>{period}</span>
                </div>
                <p style={{ color: COLORS.muted, fontSize: 13, marginBottom: 12 }}>{institution}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: COLORS.dim, fontSize: 11, textTransform: "uppercase", letterSpacing: 2 }}>CGPA</span>
                  <span style={{ color: color, fontWeight: 800, fontSize: 18 }}>{cgpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    { title: "AI for India 2.0", issuer: "GUVI / IIT Madras", color: "#6366f1" },
    { title: "Data Science and Artificial Intelligence", issuer: "Professional Certification", color: "#8b5cf6" },
    { title: "Python Programming", issuer: "Professional Certification", color: "#06b6d4" },
    { title: "Web Designing and Development", issuer: "Professional Certification", color: "#10b981" },
  ];
  return (
    <section id="certifications" style={S.section}>
      <div style={S.wrap}>
        <span style={S.label}>Credentials</span>
        <h2 style={S.heading}>My <span style={S.gradientText}>Certifications</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
          {certs.map(({ title, issuer, color }) => (
            <div key={title} style={{ ...S.card, textAlign: "center", padding: 28 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                <FaCertificate style={{ color: "#fff", fontSize: 22 }} />
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 14, lineHeight: 1.5, marginBottom: 8 }}>{title}</h3>
              <p style={{ color: COLORS.dim, fontSize: 12 }}>{issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    window.location.href = `mailto:gowsickkarthikeyan@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    setSent(true); setTimeout(() => setSent(false), 3000);
  };
  const inputStyle = { width: "100%", backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: 12, padding: "12px 16px", color: COLORS.text, fontSize: 14, outline: "none", boxSizing: "border-box" };
  return (
    <section id="contact" style={{ ...S.section, backgroundColor: "#0d0d14" }}>
      <div style={S.wrap}>
        <span style={S.label}>Get in touch</span>
        <h2 style={S.heading}>Contact <span style={S.gradientText}>Me</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, flexWrap: "wrap" }}>
          <div>
            <p style={{ color: COLORS.muted, fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>I'm currently open to new opportunities. Whether you have a project in mind, a job offer, or just want to say hi — my inbox is always open!</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { icon: <FaEnvelope />, label: "Email", value: "gowsickkarthikeyan@gmail.com", href: "mailto:gowsickkarthikeyan@gmail.com" },
                { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/gowsickkarthikeyan", href: "https://www.linkedin.com/in/gowsickkarthikeyan" },
                { icon: <FaGithub />, label: "GitHub", value: "github.com/gowsickkarthikeyan", href: "https://github.com/gowsickkarthikeyan" },
                { icon: <FaPhone />, label: "Phone", value: "+91 82484 41798", href: "tel:+918248441798" },
                { icon: <FaMapMarkerAlt />, label: "Location", value: "Chennai, India", href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: COLORS.indigo, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <p style={{ color: COLORS.dim, fontSize: 11, textTransform: "uppercase", letterSpacing: 2, marginBottom: 2 }}>{label}</p>
                    {href ? <a href={href} target="_blank" rel="noreferrer" style={{ color: COLORS.text, fontSize: 13, textDecoration: "none" }}>{value}</a> : <p style={{ color: COLORS.text, fontSize: 13 }}>{value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={onChange} required style={inputStyle} />
            <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={onChange} required style={inputStyle} />
            <textarea name="message" placeholder="Your Message" rows={5} value={form.message} onChange={onChange} required style={{ ...inputStyle, resize: "none" }} />
            <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", padding: "14px", borderRadius: 12, fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer" }}>
              <FaPaperPlane />{sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.bg, borderTop: `1px solid ${COLORS.border}`, padding: "32px 24px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 16 }}>
        {[{ href: "https://github.com/gowsickkarthikeyan", icon: <FaGithub /> }, { href: "https://www.linkedin.com/in/gowsickkarthikeyan", icon: <FaLinkedin /> }, { href: "mailto:gowsickkarthikeyan@gmail.com", icon: <FaEnvelope /> }].map(({ href, icon }) => (
          <a key={href} href={href} target="_blank" rel="noreferrer" style={{ color: COLORS.dim, fontSize: 20, textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.color = COLORS.indigo}
            onMouseLeave={e => e.currentTarget.style.color = COLORS.dim}>{icon}</a>
        ))}
      </div>
      <p style={{ color: COLORS.dim, fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
        Built with <FaHeart style={{ color: COLORS.indigo, fontSize: 11 }} /> by <span style={S.gradientText}>Gowsick Karthikeyan</span>
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: COLORS.bg, fontFamily: "'Inter',sans-serif", color: COLORS.text }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
