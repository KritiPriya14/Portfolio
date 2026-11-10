import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, 
  Award, 
  ShieldAlert, 
  Cpu, 
  Sparkles, 
  CheckCircle, 
  ExternalLink,
  FileText,
  Key,
  X
} from 'lucide-react';
import { certificationsData, achievementsData } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

const certIcons = {
  ShieldAlert,
  Cpu,
  Award
};

export default function CertificationsAchievements() {
  const [activeCertModal, setActiveCertModal] = useState(null);

  return (
    <section id="credentials" className="relative py-28 bg-[#05070e] border-t border-white/[0.08]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-purple-500/30 text-purple-400 text-xs font-mono font-medium mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED CREDENTIALS & HONORS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mb-4">
            Validated by <span className="cyber-gradient-text">Global Institutions</span>
          </h2>
          <p className="text-slate-400 text-base">
            Official industry certifications with verifiable credential codes and national academic achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {certificationsData.map((cert, index) => {
            const Icon = certIcons[cert.icon] || Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => soundFx.playHover()}
                className="p-7 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold">{cert.year}</span>
                  </div>

                  <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono font-medium inline-block mb-3">
                    {cert.badge}
                  </span>

                  <h3 className="text-lg font-display font-bold text-white mb-1.5 group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-xs font-mono text-indigo-400 mb-3">
                    Issued by {cert.issuer} • {cert.date}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Tasks completed */}
                  <div className="space-y-1.5 pt-3 border-t border-white/5 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                      Practical Curriculum:
                    </span>
                    {cert.tasks.map((task, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verification codes if present */}
                  {cert.enrolmentCode && (
                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[10px] font-mono text-slate-400 mb-4 space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-400">
                        <Key className="w-3 h-3" />
                        <span>Enrolment ID:</span>
                      </div>
                      <span className="text-slate-300 block truncate">{cert.enrolmentCode}</span>
                    </div>
                  )}
                </div>

                {/* Card Actions (View PDF / Verify) */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveCertModal(cert);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Certificate</span>
                  </button>

                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-purple-400 hover:text-purple-300"
                    >
                      <span>Verify Online</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Verified
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Academic Achievements Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => soundFx.playHover()}
              className="p-7 rounded-3xl glass-panel border border-cyan-500/30 relative overflow-hidden group shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block">
                    {item.badge}
                  </span>
                  <h4 className="text-xl font-display font-bold text-white">
                    {item.title}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="text-xs font-mono text-slate-400 flex items-center justify-between pt-3 border-t border-white/5">
                <span>Timeline</span>
                <span className="text-cyan-300 font-semibold">{item.period}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {activeCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-4xl h-[90vh] rounded-3xl glass-panel border border-purple-500/40 bg-[#070b1a] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#0a0f26]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-display font-bold text-white">
                      {activeCertModal.title}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {activeCertModal.issuer} • {activeCertModal.date}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activeCertModal.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setActiveCertModal(null);
                    }}
                    className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* PDF Preview Frame */}
              <div className="flex-1 bg-[#121626]">
                <iframe
                  src={`${activeCertModal.pdfUrl}#toolbar=0&navpanes=0`}
                  title={activeCertModal.title}
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-white/10 bg-[#0a0f26] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Certificate of Completion</span>
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="px-4 py-1.5 rounded-lg glass-panel hover:text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
