import React from 'react';
import { ArrowUp, Github, Linkedin, Code2, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function Footer() {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#030409] border-t border-white/[0.08] pt-16 pb-12 overflow-hidden text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#05070e] rounded-[10px] flex items-center justify-center font-mono font-black text-cyan-400 text-sm">
                  KP
                </div>
              </div>
              <span className="font-display font-extrabold text-lg text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
              Computer Science & Engineering undergraduate at Sandip University (2023-2027). Creator of <a href="https://ecommerce-mauve-chi-68.vercel.app/" target="_blank" rel="noreferrer" className="text-purple-400 underline hover:text-purple-300">AUREL 3D</a>, full-stack engineer, and 350+ problem LeetCode solver.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Roles & Internships</span>
            </div>
          </div>

          {/* Navigation Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" onClick={() => soundFx.playClick()} className="hover:text-cyan-400 transition-colors">About & Bio</a></li>
              <li><a href="#skills" onClick={() => soundFx.playClick()} className="hover:text-cyan-400 transition-colors">Skill Arsenal</a></li>
              <li><a href="#projects" onClick={() => soundFx.playClick()} className="hover:text-cyan-400 transition-colors">AUREL 3D Storefront</a></li>
              <li><a href="#experience" onClick={() => soundFx.playClick()} className="hover:text-cyan-400 transition-colors">Experience & Education</a></li>
              <li><a href="#leetcode" onClick={() => soundFx.playClick()} className="hover:text-cyan-400 transition-colors">LeetCode (350+ Solved)</a></li>
              <li><a href="#credentials" onClick={() => soundFx.playClick()} className="hover:text-cyan-400 transition-colors">Verified Credentials</a></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase text-white font-bold tracking-wider mb-4">
                Official Profiles
              </h4>
              <div className="flex items-center gap-3 mb-4">
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3 rounded-xl glass-panel text-amber-400 hover:scale-110 hover:border-amber-400/50 transition-all"
                  title="LeetCode: @KritiPriya_coder"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3 rounded-xl glass-panel text-slate-300 hover:text-white hover:scale-110 hover:border-white/30 transition-all"
                  title="GitHub: @KritiPriya14"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-3 rounded-xl glass-panel text-blue-400 hover:scale-110 hover:border-blue-400/50 transition-all"
                  title="LinkedIn: kritipriya14"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <p className="text-xs font-mono text-slate-400">
                Email: {personalInfo.email}<br />
                Phone: {personalInfo.phone}
              </p>
            </div>

            {/* Back to top button */}
            <div className="mt-6">
              <button
                onClick={scrollToTop}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel hover:border-cyan-400/50 text-xs font-mono text-slate-300 hover:text-white transition-all group"
              >
                <span>BACK TO TOP</span>
                <ArrowUp className="w-3.5 h-3.5 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="font-mono">
            © {new Date().getFullYear()} Kriti Priya. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with Three.js, React & Framer Motion</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span className="text-emerald-400 font-mono">100% Genuine Profile</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
