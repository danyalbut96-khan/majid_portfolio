import React from "react";
import { Link } from "react-router-dom";
import { Terminal, Github, Linkedin, Twitter, Mail, Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-40 border-t border-slate-200 dark:border-primary/20 bg-background-light dark:bg-background-dark/80 backdrop-blur-xl pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <Cpu className="size-6" />
              </div>
              <h2 className="text-xl font-black tracking-tighter">MAJID<span className="text-primary italic">.KHAN</span></h2>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
              Creating high-end digital experiences for the next generation of SaaS founders and builders.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Navigation</h4>
            <ul className="space-y-4">
              {["Home", "About", "Skills", "Projects", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-8">Social Connect</h4>
            <ul className="space-y-4">
              {[
                { label: "Mail", icon: <Mail className="size-4" /> },
              ].map((s) => (
                <li key={s.label}>
                  <a href="#" className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-primary transition-colors">
                    {s.icon} {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-200 dark:border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-slate-500">
            © 2026 — This portfolio is created by <span className="text-slate-900 dark:text-white">Majid khan </span>
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
