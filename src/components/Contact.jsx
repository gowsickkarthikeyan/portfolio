import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:gowsickkarthikeyan@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">Get in touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          Contact <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              I'm currently open to new opportunities. Whether you have a project in mind, a job offer, or just want to say hi — my inbox is always open!
            </p>
            <div className="space-y-5">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "gowsickkarthikeyan@gmail.com", href: "mailto:gowsickkarthikeyan@gmail.com" },
                { icon: <FaLinkedin />, label: "LinkedIn", value: "linkedin.com/in/gowsickkarthikeyan", href: "https://www.linkedin.com/in/gowsickkarthikeyan" },
                { icon: <FaGithub />, label: "GitHub", value: "github.com/gowsickkarthikeyan", href: "https://github.com/gowsickkarthikeyan" },
                { icon: <FaMapMarkerAlt />, label: "Location", value: "Tiruchirappalli, India", href: null },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a href={href} target="_blank" rel="noreferrer" className="text-slate-300 text-sm hover:text-indigo-400 transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name", type: "text", placeholder: "Your Name" },
              { name: "email", type: "email", placeholder: "Your Email" },
            ].map(({ name, type, placeholder }) => (
              <input
                key={name}
                type={type}
                name={name}
                placeholder={placeholder}
                value={form[name]}
                onChange={handleChange}
                required
                className="w-full bg-slate-800/50 border border-slate-700 focus:border-indigo-500 text-slate-300 placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200"
              />
            ))}
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-slate-800/50 border border-slate-700 focus:border-indigo-500 text-slate-300 placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white py-3 rounded-xl font-medium text-sm transition-all duration-300 glow"
            >
              <FaPaperPlane />
              {sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
