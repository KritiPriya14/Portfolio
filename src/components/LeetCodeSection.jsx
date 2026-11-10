import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Zap, Flame, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { leetcodeStats } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function LeetCodeSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const total = leetcodeStats.totalSolved;
  const easyPct = Math.round((leetcodeStats.easy / total) * 100);
  const medPct = Math.round((leetcodeStats.medium / total) * 100);
  const hardPct = Math.round((leetcodeStats.hard / total) * 100);

  return (
    <section id="leetcode" className="relative py-24 bg-[#05070e] border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-amber-500/30 text-amber-400 text-xs font-mono font-medium mb-3">
            <Flame className="w-3.5 h-3.5" />
            <span>ALGORITHMIC EXCELLENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            350+ Problems <span className="cyber-gradient-text">Conquered on LeetCode</span>
          </h2>
          <p className="text-slate-400 text-base">
            Consistent algorithmic discipline on LeetCode (<span className="text-amber-400 font-mono">@{leetcodeStats.username}</span>), honing optimal Big O time and space complexities.
          </p>
        </div>

        {/* LeetCode Analytics Dashboard Card */}
        <div className="rounded-3xl glass-panel border border-amber-500/30 overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.12)] p-6 sm:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Big Solved Counter & Radial Distribution */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#090d21] border border-white/10 text-center relative">
              <div className="relative mb-6">
                {/* Outer Glow Ring */}
                <div className="w-44 h-44 rounded-full border-4 border-amber-500/20 flex items-center justify-center relative">
                  <div className="w-36 h-36 rounded-full border-4 border-cyan-500/30 flex items-center justify-center">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tight">
                        350+
                      </span>
                      <span className="text-[11px] font-mono uppercase text-slate-400 mt-1">
                        Solved Total
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 p-2 rounded-full bg-amber-500/20 text-amber-400">
                  <Flame className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              <div className="w-full">
                <span className="text-xs font-mono text-slate-400 block mb-2">LeetCode Handle</span>
                <a
                  href={`https://leetcode.com/u/${leetcodeStats.username}/`}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 font-mono text-xs font-bold transition-all"
                >
                  <Code2 className="w-4 h-4" />
                  <span>@{leetcodeStats.username}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Tier Breakdown (Easy, Medium, Hard) & Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              
              {/* Difficulties */}
              <div className="space-y-4">
                {/* Easy */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-emerald-400 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
                      Easy ({leetcodeStats.easy} solved)
                    </span>
                    <span className="text-slate-400">{easyPct}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/[0.05] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${easyPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="h-full bg-emerald-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-amber-400 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span>
                      Medium ({leetcodeStats.medium} solved)
                    </span>
                    <span className="text-slate-400">{medPct}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/[0.05] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${medPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.15 }}
                      className="h-full bg-amber-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="text-rose-400 font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-400 inline-block"></span>
                      Hard ({leetcodeStats.hard} solved)
                    </span>
                    <span className="text-slate-400">{hardPct}%</span>
                  </div>
                  <div className="w-full h-2.5 rounded-full bg-white/[0.05] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${hardPct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-full bg-rose-400 rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Topic Badges Breakdown */}
              <div>
                <span className="text-xs font-mono uppercase text-slate-400 block mb-3">
                  Core Problem Domains Solved
                </span>
                <div className="flex flex-wrap gap-2">
                  {leetcodeStats.topTopics.map((topic) => (
                    <div
                      key={topic.name}
                      onMouseEnter={() => soundFx.playHover()}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 flex items-center gap-2 text-xs transition-colors"
                    >
                      <span className="text-slate-300 font-medium">{topic.name}</span>
                      <span className="font-mono text-cyan-400 font-bold text-[11px] bg-cyan-500/10 px-1.5 py-0.5 rounded">
                        {topic.count}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

