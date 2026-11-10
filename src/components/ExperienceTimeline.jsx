import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function ExperienceTimeline() {
  const [activeSection, setActiveSection] = useState('both'); // 'both' | 'experience' | 'education'

  return (
    <section id="experience" className="relative py-24 border-t border-white/[0.08] bg-[#05070e]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>TRACK RECORD & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Experience & <span className="cyber-gradient-text">Academic Foundations</span>
          </h2>
          <p className="text-slate-400 text-base">
            Hands-on full-stack development within professional agile environments, supported by strong computer science fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Work Experience Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">Work Experience</h3>
                <span className="text-xs font-mono text-slate-400">Industry Internships & Roles</span>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="relative group"
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#05070e] border-2 border-cyan-400 group-hover:scale-125 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mx-auto mt-0.5"></div>
                  </div>

                  <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium">
                        {exp.type}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.title}
                    </h4>
                    <div className="text-sm font-semibold text-indigo-300 mb-4 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs text-slate-400 font-normal">{exp.location}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="space-y-2 mb-5">
                      {exp.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                      {exp.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">Education History</h3>
                <span className="text-xs font-mono text-slate-400">Universities & High School</span>
              </div>
            </div>

            <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-6">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="relative group"
                >
                  {/* Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#05070e] border-2 border-purple-400 group-hover:scale-125 transition-transform duration-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mx-auto mt-0.5"></div>
                  </div>

                  <div className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                        {edu.score}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <h4 className="text-base sm:text-lg font-display font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <div className="text-xs font-semibold text-slate-300 mb-3">
                      {edu.institution}
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-400">
                      {edu.highlights.map((h, i) => (
                        <p key={i} className="leading-relaxed">• {h}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

