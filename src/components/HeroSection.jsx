import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  Terminal as TerminalIcon, 
  Download, 
  Code2, 
  Github, 
  Linkedin, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import Hero3D from './Hero3D';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function HeroSection({ onOpenResume }) {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = personalInfo.taglines[currentTaglineIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTaglineIndex((prev) => (prev + 1) % personalInfo.taglines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTaglineIndex]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid bg-radial-vignette">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black tracking-tight leading-[1.08] mb-4 text-white">
              Hi, I'm <span className="cyber-gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Animated Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-medium text-slate-300">
                &gt; {displayedText}
                <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle"></span>
              </span>
            </div>

            {/* Narrative Bio */}
            <p className="text-base sm:text-lg text-slate-300/90 font-normal leading-relaxed max-w-2xl mb-8">
              B.Tech in Computer Science & Engineering at <span className="text-white font-semibold">Sandip University</span> (CGPA 7.3). 
              Passionate engineer combining <span className="text-cyan-400 font-medium">350+ solved LeetCode challenges</span> with 
              creative <span className="text-purple-400 font-medium">Three.js, React Three Fiber, and Full-Stack development</span>. 
              Creator of <span className="text-white font-medium underline underline-offset-4 decoration-purple-500">AUREL 3D</span> and former intern at <span className="text-indigo-400 font-medium">Codec Technologies</span>.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-500 via-purple-600 to-cyan-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>View AUREL 3D Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResume();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-panel border border-white/10 hover:border-cyan-400/50 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Resume / CV</span>
              </button>

              <a
                href="#terminal"
                onClick={() => soundFx.playClick()}
                onMouseEnter={() => soundFx.playHover()}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-mono text-xs text-slate-300 glass-panel border border-white/10 hover:border-indigo-400/50 hover:text-indigo-300 transition-all flex items-center justify-center gap-2"
              >
                <TerminalIcon className="w-3.5 h-3.5 text-indigo-400" />
                <span>Launch CLI</span>
              </a>
            </div>

            {/* Social and Verification Pills */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 w-full">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Profiles:</span>
              
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel text-xs text-amber-400 hover:border-amber-400/50 transition-all"
                title="LeetCode Profile: KritiPriya_coder"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span className="font-mono">LeetCode (350+)</span>
              </a>

              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel text-xs text-slate-300 hover:text-white hover:border-white/40 transition-all"
                title="GitHub: KritiPriya14"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (@KritiPriya14)</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass-panel text-xs text-blue-400 hover:border-blue-400/50 transition-all"
                title="LinkedIn: kritipriya14"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Right 3D Interactive WebGL Stage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            <div className="relative w-full aspect-square max-w-[540px] rounded-3xl glass-panel p-2 border border-white/10 shadow-[0_0_50px_rgba(79,70,229,0.25)] overflow-hidden">
              {/* Scanline FX overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-cyan-500/[0.04] to-transparent animate-scanline z-20" />
              
              {/* Corner HUD decorations */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 font-mono text-[11px] text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span>CORE_ENGINE // THREE.JS_R162</span>
              </div>
              <div className="absolute top-4 right-4 z-20 font-mono text-[10px] text-slate-400">
                COORD: [X_45.2, Y_89.0]
              </div>

              {/* 3D Canvas */}
              <Hero3D />

              {/* Bottom HUD Floating badges */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none text-[11px] font-mono text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-white/10 text-indigo-300">
                  SHADERS: ACTIVE
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-white/10 text-emerald-300">
                  FPS: 60 [STABLE]
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <div className="w-full flex justify-center mt-12">
          <a
            href="#stats"
            onClick={() => soundFx.playClick()}
            className="flex flex-col items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest">Scroll Down</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
