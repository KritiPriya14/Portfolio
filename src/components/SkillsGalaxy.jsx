import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Atom, 
  Box, 
  Sparkles, 
  Palette, 
  FileCode, 
  Layout, 
  Terminal, 
  Coffee, 
  Cpu, 
  Server, 
  Layers, 
  Database, 
  Network, 
  GitBranch, 
  Code, 
  Component, 
  HardDrive,
  Filter
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

const iconMap = {
  Atom,
  Box,
  Sparkles,
  Palette,
  FileCode,
  Layout,
  Terminal,
  Coffee,
  Cpu,
  Server,
  Layers,
  Database,
  Network,
  GitBranch,
  Code,
  Component,
  HardDrive
};

export default function SkillsGalaxy() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData.skills
    : skillsData.skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 border-t border-white/[0.08] bg-[#05070e]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>ARSENAL & PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Mastered <span className="cyber-gradient-text">Technologies & Tooling</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            From modern responsive frontend frameworks and 3D WebGL graphics to server runtime architectures and core algorithmic data structures.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {skillsData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
                >
                  <div>
                    {/* Header: Icon + Level */}
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                        style={{ backgroundColor: `${skill.color}15`, color: skill.color }}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="font-mono text-xs font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                        {skill.level}%
                      </div>
                    </div>

                    {/* Skill Name & Description */}
                    <h3 className="text-base font-display font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Corner Accent Glow */}
                  <div 
                    className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: skill.color }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Academic Coursework & Areas of Interest Ribbon */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Component className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block">Specialized Academic Coursework</span>
              <span className="text-sm font-semibold text-white">Data Structures, Algorithms, OOP, Operating Systems, DBMS</span>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block" />

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">Focus Areas of Interest</span>
              <span className="text-sm font-semibold text-white">Data Structures & Algorithms, AI-Assisted Web Dev, 3D WebGL</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

