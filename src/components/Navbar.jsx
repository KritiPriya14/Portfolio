import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, FileText, Menu, X, Sparkles, Send } from 'lucide-react';
import { soundFx } from '../utils/soundEffects';

export default function Navbar({ onOpenResume, soundEnabled, onToggleSound }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'LeetCode', href: '#leetcode' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href) => {
    soundFx.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#05070e]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-indigo-950/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          onClick={() => soundFx.playClick()}
          className="group flex items-center gap-3 text-slate-100 font-display font-bold text-xl tracking-wider"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <div className="w-full h-full bg-[#05070e] rounded-[10px] flex items-center justify-center">
              <span className="font-mono text-base font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                KP
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg text-white group-hover:text-cyan-400 transition-colors">
              KRITI PRIYA
            </span>
            <span className="text-[10px] font-mono tracking-widest text-indigo-400 -mt-1 uppercase">
              Full Stack & 3D Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onMouseEnter={() => soundFx.playHover()}
              onClick={() => handleLinkClick(link.href)}
              className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions (Sound toggle, Resume, Hire CTA) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Audio FX Toggle */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 relative group"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </>
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
            )}
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenResume();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel text-xs font-semibold text-slate-200 hover:text-white hover:border-indigo-500/50 hover:bg-white/[0.08] transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
            <span>Resume</span>
          </button>

          {/* Direct CTA */}
          <a
            href="#contact"
            onClick={() => soundFx.playChime()}
            onMouseEnter={() => soundFx.playHover()}
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold rounded-xl group bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300"
          >
            <span className="flex items-center gap-2 px-4 py-2 transition-all ease-in duration-200 bg-[#05070e] rounded-[10px] group-hover:bg-opacity-0 text-white">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white animate-spin-slow" />
              <span>Let's Talk</span>
            </span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onToggleSound()}
            className="p-2 rounded-lg glass-panel text-slate-300"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>
          <button
            onClick={() => {
              soundFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 rounded-lg glass-panel text-slate-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 mt-3 bg-[#05070e]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg glass-panel flex items-center justify-center gap-2 text-sm font-medium text-slate-200"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              View Resume
            </button>
            <a
              href="#contact"
              onClick={() => {
                soundFx.playChime();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-center text-sm font-bold text-white shadow-lg shadow-indigo-500/25"
            >
              Contact Kriti
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

