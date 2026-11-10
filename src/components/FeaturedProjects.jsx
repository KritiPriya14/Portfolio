import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Sparkles, 
  Box, 
  Layers, 
  Cpu, 
  CheckCircle,
  X,
  Eye,
  ShoppingBag,
  CreditCard,
  Globe,
  Lock,
  Maximize2
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

const featureIcons = [Box, Sparkles, ShoppingBag, CreditCard];

export default function FeaturedProjects() {
  const aurel = projectsData[0];
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="projects" className="relative py-28 bg-[#05070e] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-400 text-xs font-mono font-medium mb-3">
              <Box className="w-3.5 h-3.5" />
              <span>FLAGSHIP PRODUCTION SYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Featured <span className="cyber-gradient-text">Engineering Project</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 text-sm max-w-md">
            Production-grade luxury fashion storefront with immersive 3D spatial computing and real-time state architecture.
          </p>
        </div>

        {/* Flagship Project Case Study Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl glass-panel border border-purple-500/30 overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.18)] mb-14"
        >
          {/* Top Browser Window Header */}
          <div className="bg-[#0b1022] px-4 sm:px-6 py-3.5 border-b border-white/10 flex items-center justify-between gap-4">
            {/* Window Dots */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            </div>

            {/* Simulated Safe URL Bar */}
            <div className="flex-1 max-w-lg mx-auto flex items-center justify-center gap-2 px-4 py-1 rounded-xl bg-black/40 border border-white/10 text-xs font-mono text-slate-400 truncate">
              <Lock className="w-3 h-3 text-emerald-400 flex-shrink-0" />
              <span className="text-emerald-400 font-semibold flex-shrink-0">https://</span>
              <span className="text-slate-200 truncate">ecommerce-mauve-chi-68.vercel.app</span>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold hidden sm:inline">
                LIVE ON VERCEL
              </span>
            </div>
          </div>

          {/* Full Uncropped Visual Stage */}
          <div className="relative w-full bg-[#03050c] overflow-hidden group/stage border-b border-white/10">
            {/* Uncropped 100% visible image */}
            <img
              src={aurel.previewImage}
              alt="AUREL 3D Fashion E-Commerce Full Storefront"
              className="w-full h-auto block object-contain transition-transform duration-500 ease-out"
            />

            {/* Hover overlay with Quick Action Button */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/stage:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <a
                href={aurel.demoUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playChime()}
                onMouseEnter={() => soundFx.playHover()}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm flex items-center gap-2.5 shadow-2xl hover:scale-105 transition-all"
              >
                <span>Launch Live Storefront</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Technical Blueprint & Details Section */}
          <div className="p-6 sm:p-10 bg-[#070b1c]/90">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Project Overview & Core Highlights */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold">
                    {aurel.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-400">{aurel.year}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-xs font-mono text-cyan-400">Lead Frontend & 3D Web Creative</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-3">
                  {aurel.title}
                </h3>
                <p className="text-sm font-medium text-indigo-400 mb-4">
                  {aurel.subtitle}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {aurel.description}
                </p>

                {/* Key Bullet Points from Resume */}
                <div className="space-y-3 mb-6">
                  {aurel.bulletPoints.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Stack, Metrics, & Direct Launch */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0b1026] border border-white/10 flex flex-col justify-between h-full space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                    Technologies & Libraries
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {aurel.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                    Verified Performance
                  </span>
                  <div className="grid grid-cols-3 gap-3">
                    {aurel.metrics.map((m, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                        <span className="text-xs sm:text-sm font-mono font-bold text-cyan-300 block">{m.value}</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <a
                    href={aurel.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.playChime()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all"
                  >
                    <span>Visit Live Storefront</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* Feature Breakdown Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aurel.features.map((feat, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => soundFx.playHover()}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-display font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-300/80 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>ARCHITECTURE</span>
                  <span className="text-indigo-400">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
