import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, Github, Linkedin, Twitter, Globe, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500); // UI Demo
  };

  const socials = [
    //{ icon: <Github className="size-6" />, label: "GitHub", link: "https://github.com/danyalbut96-khan" },
    //{ icon: <Linkedin className="size-6" />, label: "LinkedIn", link: "https://www.linkedin.com/in/muhammad-majid-khan-a01a16365" },
    { icon: <Mail className="size-6" />, label: "Email", link: "mailto:danyalbut96@gmail.com" },
  ];

  return (
    <div className="py-20">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6"
        >
          <Phone className="size-3" /> Get In Touch
        </motion.div>
        <h2 className="text-5xl font-black mb-6">Let's <span className="text-primary italic">Build</span> Something Great.</h2>
        <p className="text-secondary text-lg">Whether it's a new SaaS platform or an AI collaboration, I'm ready for the challenge.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Side: Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div className="glass-premium p-10 rounded-[2.5rem] flex-grow">
            <h3 className="text-2xl font-black mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="size-16 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl shadow-primary/20 group-hover:scale-110 transition-transform">
                  <Mail className="size-8" />
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-1">Send an Email</div>
                  <div className="text-xl font-bold">danyalbut96@gmail.com</div>
                </div>
              </div>
              {/* Add more info blocks if needed */}
            </div>

            <div className="mt-20">
              <div className="text-xs font-black uppercase tracking-widest opacity-40 mb-6">Social Connect</div>
              <div className="flex flex-wrap gap-4">
                {socials.map((s, i) => (
                  <a key={i} href={s.link} className="size-14 glass-premium rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl hover:shadow-primary/40">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/*<div className="glass-premium p-8 rounded-[2.5rem] bg-indigo-500/10 border-indigo-500/20 text-center">
             <div className="text-sm font-black uppercase text-indigo-400 mb-2">Availability</div>
             <p className="font-bold">Next Slot: Q2 2024</p>
          </div>*/}
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="glass-premium p-12 rounded-[3.5rem] h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 bg-primary/10 blur-[100px] rounded-full"></div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="size-24 bg-green-500 rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl shadow-green-500/30">
                    <CheckCircle className="size-12" />
                  </div>
                  <h3 className="text-3xl font-black mb-4">Transmission Received!</h3>
                  <p className="text-secondary text-lg mb-10 max-w-sm">Your message has been encoded and dispatched. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="font-black text-primary uppercase tracking-widest text-xs hover:underline">New Transmission</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="relative z-10 space-y-8" exit={{ opacity: 0, y: 20 }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest opacity-60 ml-2">Your Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-8 py-5 rounded-3xl bg-background-dark/20 border border-white/5 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:opacity-30"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest opacity-60 ml-2">Email Address</label>
                      <input
                        required
                        type="email"
                        className="w-full px-8 py-5 rounded-3xl bg-background-dark/20 border border-white/5 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:opacity-30"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest opacity-60 ml-2">Project Message</label>
                    <textarea
                      required
                      rows="6"
                      className="w-full px-8 py-6 rounded-[2rem] bg-background-dark/20 border border-white/5 focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none placeholder:opacity-30"
                      placeholder="Tell me about your vision..."
                    />
                  </div>
                  <button
                    disabled={status === "submitting"}
                    className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white p-6 rounded-[2rem] font-black text-lg transition-all shadow-2xl shadow-indigo-500/30 flex items-center justify-center gap-3 group"
                  >
                    {status === "submitting" ? "Encoding Message..." : <>Launch Transmission <Send className="size-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
