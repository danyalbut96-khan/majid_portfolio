import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Star, Users, Briefcase, Github,
  Calendar, Radio, Sparkles, BarChart3, X, ExternalLink, Award,
  Database, Layout, Terminal, Cpu, Code
} from "lucide-react";
import { Link } from "react-router-dom";

// Import Assets
//import cloudexifyLogo from "../assets/cloudexify-logo.png";
import certAiAgents from "../assets/cert-ai-agents.jpg";
import certN8N from "../assets/cert-n8n.jpg";

// Tech Icons
import php_logo_png from "../assets/php-logo.png";
import react_logo_jpg from "../assets/react-logo.jpg";
import node_js_logo_png from "../assets/node-js-logo.png";
import next_js_logo_png from "../assets/next-js-logo.png";
import python_logo_jpg from "../assets/python-logo.jpg";
import tailwind_css_logo_png from "../assets/tailwind-css-logo.png";
import js_logo_jpg from "../assets/js-logo.jpg";
import figma_jpg from "../assets/figma.jpg";
import cpp_jpg from "../assets/c++.jpg";
import java_jpg from "../assets/java.jpg";

const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["Full Stack Developer", "SaaS Builder", "Founder of Cloudexify", "Open Source Contributor"];
  const typingSpeed = isDeleting ? 50 : 100;

  const [selectedCert, setSelectedCert] = useState(null);

  const [stats, setStats] = useState({
    repos: 0,
    commits: 0,
    clients: "10+",
    experience: "2+",
    loading: true
  });

  useEffect(() => {
    const fetchStats = async () => {
      const username = "danyalbut96-khan";
      const token = import.meta.env.VITE_GITHUB_TOKEN;
      const headers = token ? { Authorization: `token ${token}` } : {};

      try {
        // Fetch Repos (Public)
        const repoRes = await fetch(`https://api.github.com/users/${username}`, { headers });
        const userData = await repoRes.json();

        // Fetch Commits via Contributions API (Public only)
        // If token is available, we could use GraphQL for private, but for now we'll use the most reliable public source
        const commitRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=2026`);
        const commitData = await commitRes.json();

        setStats(prev => ({
          ...prev,
          repos: userData.public_repos + (token ? (userData.total_private_repos || 0) : 0) || 20,
          commits: commitData?.total?.["2026"] || 229, // Fallback to 229 as mentioned by user
          loading: false
        }));
      } catch (error) {
        console.error("Error fetching GitHub stats:", error);
        setStats(prev => ({ ...prev, repos: 20, commits: 229, loading: false }));
      }
    };
    fetchStats();
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        if (displayText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  const certifications = [
    {
      id: 1,
      title: "AI Agents for Beginners",
      issuer: "Simplilearn",
      date: "12th March 2026",
      code: "9951537",
      image: certAiAgents,
      logo: "Simplilearn | SkillUp"
    },
    {
      id: 2,
      title: "n8n Course: No Code AI Agent Builder",
      issuer: "Simplilearn",
      date: "12th March 2026",
      code: "9952664",
      image: certN8N,
      logo: "Simplilearn | SkillUp"
    }
  ];

  return (
    <div className="relative pt-20 pb-32 flex flex-col items-center overflow-x-hidden">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl px-6">
        <div className="flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Open for collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight mb-8"
          >
            Hi, I'm <span className="text-gradient">Muhammad <span className="text-indigo-600 dark:text-primary">Majid</span> Khan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="h-12 md:h-16 flex items-center text-2xl md:text-4xl font-bold"
          >
            <span className="text-primary">{displayText}</span>
            <span className="w-1 h-8 md:h-12 bg-primary ml-1 animate-pulse"></span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg text-secondary leading-relaxed max-w-xl"
          >
            BSc Software Engineering @ COMSATS University · Building digital products from Karak, Pakistan
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-6 items-center"
          >
            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black text-lg shadow-2xl shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all flex items-center gap-3 group"
              >
                View My Work <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </a>
            <a href="https://wa.me/923411949277?text=Hi%20Majid%2C%20I%27m%20interested%20in%20hiring%20you!" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#25D366] text-white rounded-2xl font-black text-lg shadow-2xl shadow-green-500/40 hover:shadow-green-500/60 transition-all flex items-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.135 1.524 5.882L0 24l6.302-1.654A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.371l-.36-.214-3.732.979.997-3.645-.234-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
                Hire Me
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Circular Logo with Orbiting Tech Icons */}
        <div className="relative flex items-center justify-center py-20 lg:py-0 mt-32 lg:mt-0">
          <div className="relative scale-50 md:scale-75 lg:scale-100 lg:-translate-y-24">
            {/* Main Circular Logo with rotating multi-colored border */}
            <motion.a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative z-10 block size-72 md:size-[28rem] rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 animate-spin-slow overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.2)]"
            >
              <div className="w-full h-full rounded-full bg-background-dark p-2 overflow-hidden flex items-center justify-center">
                <img
                  src={cloudexifyLogo}
                  alt="CloudExify Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </motion.a>

            {/* Orbiting Tech Badges - Slower, more organic movement */}
            {[
              { name: "PHP", icon: php_logo_png, radius: 340, duration: 45, offset: 0, z: 20 },
              { name: "React", icon: react_logo_jpg, radius: 380, duration: 60, offset: 45, z: 5 },
              { name: "Node", icon: node_js_logo_png, radius: 300, duration: 40, offset: 90, z: 20 },
              { name: "Next.js", icon: next_js_logo_png, radius: 420, duration: 70, offset: 135, z: 5 },
              { name: "Python", icon: python_logo_jpg, radius: 280, duration: 50, offset: 180, z: 20 },
              { name: "Tailwind", icon: tailwind_css_logo_png, radius: 360, duration: 55, offset: 225, z: 5 },
              { name: "JS", icon: js_logo_jpg, radius: 400, duration: 65, offset: 270, z: 20 },
              { name: "Figma", icon: figma_jpg, radius: 440, duration: 80, offset: 315, z: 5 },
              { name: "C++", icon: cpp_jpg, radius: 320, duration: 48, offset: 160, z: 20 },
              { name: "Java", icon: java_jpg, radius: 370, duration: 62, offset: 300, z: 5 },
            ].map((tech, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: [tech.offset, tech.offset + 360],
                }}
                transition={{
                  duration: tech.duration,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  width: tech.radius * 2,
                  height: tech.radius * 2,
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginLeft: -tech.radius,
                  marginTop: -tech.radius,
                  zIndex: tech.z
                }}
                className="flex items-start justify-center pointer-events-none"
              >
                <motion.div
                  whileHover={{
                    scale: 1.5,
                    rotate: 0,
                    transition: { duration: 0.2 }
                  }}
                  animate={{
                    rotate: [-(tech.offset), -(tech.offset + 360)],
                    y: [0, 20, 0],
                    x: [0, 15, 0]
                  }}
                  transition={{
                    rotate: { duration: tech.duration, repeat: Infinity, ease: "linear" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    x: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                  }}
                  className="pointer-events-auto flex items-center gap-2 p-1 rounded-full glass-premium shadow-2xl border border-white/20 bg-white/5 backdrop-blur-xl group/badge"
                >
                  <div className="size-10 rounded-full overflow-hidden bg-white/10 p-1.5 shadow-inner border border-white/10">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="pr-4 text-[11px] font-black uppercase tracking-tighter text-secondary dark:text-white group-hover/badge:text-primary transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Project Section - Stitch */}
      <div className="w-full py-32 flex flex-col items-center bg-indigo-500/5 mt-20">
        <div className="max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 rounded-full mb-6"
            >
              <Sparkles className="size-4 text-indigo-500" />
              <span className="text-xs font-black uppercase tracking-widest text-indigo-500">Featured Current Project</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-slate-900 dark:text-white">
              Revolutionizing Social Media Management with <span className="text-indigo-600 dark:text-[#a855f7]">Stitch</span>.
            </h2>
            <p className="text-secondary dark:text-slate-400 text-lg leading-relaxed mb-10">
              I am currently lead engineer for **Stitch**, a high-end SaaS platform designed to streamline social media workflows.
              Implementing complex scheduling algorithms, real-time analytics, and seamless API integrations to empower creators worldwide.
            </p>
            <div className="text-2xl font-black mb-1">AI</div>
            <div className="text-[10px] uppercase font-bold opacity-40">Content Engine</div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative glow-purple-cyan"
      >
        <div className="stitch-card p-8 text-left text-white overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full w-fit mb-6">
            <span className="text-[10px] font-bold tracking-widest text-white/80">🟢 NOW LIVE — FREE TO TRY</span>
          </div>

          <h3 className="text-3xl font-black leading-tight mb-4">
            One app. Every platform. <br />
            <span className="text-[#a855f7]">Stitch</span> it all.
          </h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {["𝕏 X/Twitter", "📷 Instagram", "▶ YouTube", "♪ TikTok", "💼 LinkedIn", "📘 Facebook"].map((tag, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold">
                {tag}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { title: "Smart Scheduling", desc: "Auto-post at peak times", icon: <Calendar className="size-4 text-pink-500" /> },
              { title: "Live Streaming", desc: "Go live to multiple platforms", icon: <Radio className="size-4 text-blue-500" /> },
              { title: "AI Captions", desc: "Generate engaging copy", icon: <Sparkles className="size-4 text-yellow-500" /> },
              { title: "Deep Analytics", desc: "Know what's growing", icon: <BarChart3 className="size-4 text-cyan-500" /> },
            ].map((feature, i) => (
              <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-xl">
                <div className="mb-2">{feature.icon}</div>
                <div className="text-xs font-bold mb-1">{feature.title}</div>
                <div className="text-[10px] text-white/40">{feature.desc}</div>
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-gradient-to-r from-[#a855f7] to-[#ec4899] rounded-xl font-black text-xs uppercase tracking-widest shadow-lg shadow-purple-500/20 hover:scale-[1.02] transition-transform">
            Coming Soon ☁️  →
          </button>
        </div>
      </motion.div>


      {/* GitHub/Commits Section */}
      <div className="w-full py-32 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl px-6 github-section">
        {[
          { label: "Projects Built", value: stats.repos, icon: <Github className="text-indigo-500" /> },
          { label: "Commits in 2026", value: stats.commits, icon: <Briefcase className="text-green-500" /> },
          { label: "Clients Served", value: stats.clients, icon: <Users className="text-yellow-500" /> },
          { label: "Years Experience", value: stats.experience, icon: <Star className="text-primary" /> },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="glass-premium p-8 rounded-3xl text-center"
          >
            {stats.loading ? (
              <div className="animate-pulse flex flex-col items-center">
                <div className="h-10 w-20 bg-slate-200 dark:bg-slate-800 rounded-lg mb-4"></div>
                <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded"></div>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-secondary">{stat.label}</div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}
      <section className="w-full py-32 max-w-7xl px-6" id="certifications">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 dark:text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Award className="size-3" /> Professional Growth
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-4">📜 Certifications</h2>
          <p className="text-secondary">Verified credentials from recognized platforms</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="cert-card glass-premium p-8 rounded-[2.5rem] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="px-3 py-1 bg-orange-500 text-white text-[10px] font-black rounded-lg">
                    {cert.logo}
                  </span>
                  <span className="text-xs font-bold text-green-500 flex items-center gap-1">
                    ✅ VERIFIED
                  </span>
                </div>
                <h3 className="text-2xl font-black mb-2">{cert.title}</h3>
                <div className="text-sm font-bold opacity-60 mb-6">Issued by: {cert.issuer}</div>

                <div className="relative group cursor-pointer overflow-hidden rounded-2xl mb-8 border border-white/5" onClick={() => setSelectedCert(cert)}>
                  <img src={cert.image} alt={cert.title} className="w-full h-auto" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-black font-black text-xs rounded-xl flex items-center gap-2">
                      <ExternalLink className="size-4" /> View Full Certificate
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-bold opacity-40">
                <span>Code: {cert.code}</span>
                <span>{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] modal-backdrop flex items-center justify-center p-6"
            onClick={() => setSelectedCert(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:scale-110 transition-transform">
              <X className="size-10" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-[85vh] lightbox-img rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials Section */}
      <div className="w-full py-32 max-w-7xl px-6" id="testimonials">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4">What Clients Say</h2>
          <div className="w-24 h-2 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Great work on our business website — fast delivery and clean code.",
              author: "Ali Hassan",
              role: "Startup Founder",
              initials: "AH",
              color: "bg-blue-500"
            },
            {
              text: "Cloudexify built our salon site in record time. Very professional.",
              author: "Sarah K.",
              role: "Beauty Studio Owner",
              initials: "SK",
              color: "bg-pink-500"
            },
            {
              text: "Clean UI and responsive design. Highly recommend for web projects.",
              author: "Usman R.",
              role: "Digital Agency",
              initials: "UR",
              color: "bg-purple-500"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-premium p-8 rounded-[2rem] flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-lg italic leading-relaxed mb-8">"{testimonial.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className={`size-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{testimonial.author}</h4>
                  <p className="text-xs opacity-60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div >
  );
};

export default Home;
