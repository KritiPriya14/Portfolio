import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-5xl h-[92vh] rounded-3xl glass-panel border border-cyan-500/40 bg-[#070b1a] overflow-hidden shadow-2xl flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#0a0f26]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-display font-bold text-white flex items-center gap-2">
                  <span>Kriti Priya — Official Resume</span>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[10px] font-mono">
                    2026 Verified
                  </span>
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Sandip University • Computer Science & Engineering
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {/* Direct Download Button */}
              <a
                href="/Kriti_Priya_Resume.pdf"
                download="Kriti_Priya_Resume.pdf"
                onClick={() => soundFx.playChime()}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">PDF</span>
              </a>

              {/* Open in new tab */}
              <a
                href="/Kriti_Priya_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white"
                title="Open PDF in new tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              {/* Close Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className="p-2 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-white/20"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Highlight Ticker */}
          <div className="bg-[#0b1129] px-6 py-2.5 border-b border-white/5 flex items-center gap-4 text-xs font-mono text-slate-300 overflow-x-auto">
            <span className="flex items-center gap-1 text-cyan-400 whitespace-nowrap">
              <CheckCircle2 className="w-3.5 h-3.5" /> 350+ LeetCode Solved
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-purple-400 whitespace-nowrap">
              <CheckCircle2 className="w-3.5 h-3.5" /> Full Stack Intern @ Codec Technologies
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-amber-400 whitespace-nowrap">
              <CheckCircle2 className="w-3.5 h-3.5" /> JEE Mains Qualified
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-emerald-400 whitespace-nowrap">
              <CheckCircle2 className="w-3.5 h-3.5" /> EF SET C1 Advanced English
            </span>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 bg-[#121626] relative">
            <iframe
              src="/Kriti_Priya_Resume.pdf#toolbar=0&navpanes=0"
              title="Kriti Priya Resume Preview"
              className="w-full h-full border-0"
            />
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-white/10 bg-[#0a0f26] flex items-center justify-between text-xs text-slate-400">
            <span className="font-mono">Direct Contact: kritipriyas2004@gmail.com</span>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="px-4 py-1.5 rounded-lg glass-panel hover:text-white"
            >
              Close Viewer
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

