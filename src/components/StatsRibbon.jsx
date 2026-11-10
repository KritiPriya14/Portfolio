import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, GraduationCap, Award, Briefcase } from 'lucide-react';
import { keyStats } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

const icons = [Code2, Trophy, GraduationCap, Award, Briefcase];

export default function StatsRibbon() {
  return (
    <section id="stats" className="relative py-12 border-y border-white/[0.08] bg-[#080c1a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {keyStats.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => soundFx.playHover()}
                className={`relative p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between group overflow-hidden ${
                  item.highlight ? 'border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.12)]' : ''
                }`}
              >
                {/* Glow pill */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${item.highlight ? 'bg-cyan-500/10 text-cyan-400' : 'bg-indigo-500/10 text-indigo-400'} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-300">
                    {item.label}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-1">
                    {item.sub}
                  </div>
                </div>

                {/* Ambient edge highlight */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/[0.04] to-transparent rounded-bl-3xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

