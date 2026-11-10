import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal as TerminalIcon, 
  User, 
  Sparkles, 
  BookOpen, 
  GraduationCap, 
  Code, 
  Zap, 
  CheckCircle2, 
  Send,
  CornerDownLeft,
  Trash2,
  Maximize2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo, experienceData, leetcodeStats } from '../data/portfolioData';
import { soundFx } from '../utils/soundEffects';

export default function AboutInteractive() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'system', text: "Welcome to Kriti Priya's Interactive Shell v2.4 (x86_64-pc-linux-gnu)" },
    { type: 'system', text: "Type 'help' or click any command pill below to inspect verified profile data." },
  ]);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const executeCommand = (cmdStr) => {
    soundFx.playKey();
    const cleanCmd = cmdStr.trim().toLowerCase();
    
    const newHistory = [...terminalHistory, { type: 'input', text: `kriti@portfolio:~$ ${cmdStr}` }];

    switch (cleanCmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  about       - Detailed biography & academic background
  skills      - Core technical competencies & frameworks
  experience  - Industry experience at Codec Technologies
  projects    - Flagship AUREL 3D luxury storefront
  leetcode    - 350+ DSA problem breakdown
  contact     - Direct email, phone, and profile links
  sudo hire   - Launch the fast-track hiring protocol 🎉
  clear       - Clear the terminal display`
        });
        break;

      case 'about':
        newHistory.push({
          type: 'output',
          text: `KRITI PRIYA — Computer Science & Engineering Undergraduate
Institution: Sandip University, Sijoul (2023-2027)
Academic Standing: CGPA 7.3 (till 6th sem.) | Roll No: 230205131009
Specialization: 3D Web Creative (Three.js/R3F), Full-Stack MERN, and Algorithmic Problem Solving (350+ LeetCode problems).
Honors: Qualified competitive JEE Mains national engineering examination.`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL ARSENAL:
• Frontend & 3D: React.js, Three.js, React Three Fiber, Drei, Framer Motion, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3
• Backend & Systems: Node.js, Express.js, MongoDB, RESTful APIs, Postman
• Programming & DSA: C++, Java, Data Structures, OOP, Operating Systems, DBMS
• Soft Skills: Problem Solving, Adaptability, Communication (EF SET C1 Advanced)`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `CODEC TECHNOLOGIES PVT. LTD. (Oct 2026)
Role: Full Stack Development Intern
• Learned full-stack development using HTML, CSS, JavaScript, React.js, Node.js, and Express.js.
• Studied RESTful API development, MongoDB, authentication, and front-end/back-end integration.
• Explored Git/GitHub, application deployment, CI/CD, performance optimization, and testing.`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `FLAGSHIP PRODUCTION PROJECT:
AUREL – Premium Fashion E-Commerce Website (2026)
• Responsive luxury fashion storefront with immersive 3D visuals and shopping flows.
• Built using React, Vite, Tailwind CSS, React Router, Three.js, React Three Fiber, Drei, and Framer Motion.
• Full shopping cart state management using Context API & useReducer, wishlist, and simulated checkout flow.
• Live Storefront URL: https://ecommerce-mauve-chi-68.vercel.app/`
        });
        break;

      case 'leetcode':
        newHistory.push({
          type: 'output',
          text: `LEETCODE METRICS (@KritiPriya_coder):
• Total Problems Solved: 350+
• Easy: 155 | Medium: 165 | Hard: 30
• Top Domains: Trees, Graphs, Dynamic Programming, Arrays, Two Pointers
• URL: https://leetcode.com/u/KritiPriya_coder/`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `DIRECT CONTACT:
• Email:    kritipriyas2004@gmail.com
• Phone:    +91-8538908849
• LinkedIn: https://www.linkedin.com/in/kritipriya14/
• GitHub:   https://github.com/KritiPriya14
• LeetCode: https://leetcode.com/u/KritiPriya_coder/
• Location: India (Open to Relocation & Remote Roles)`
        });
        break;

      case 'sudo hire':
      case 'hire':
      case 'sudo hire-kriti':
        soundFx.playChime();
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 }
        });
        newHistory.push({
          type: 'success',
          text: `🌟 EXCELLENT CHOICE!
Hiring protocol activated. Access granted to high-impact engineering talent.
Direct Email: kritipriyas2004@gmail.com
Phone:        +91-8538908849
LinkedIn:     https://www.linkedin.com/in/kritipriya14/`
        });
        break;

      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;

      case '':
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `bash: ${cmdStr}: command not found. Type 'help' for available commands.`
        });
        break;
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (terminalInput.trim()) {
      executeCommand(terminalInput);
    }
  };

  return (
    <section id="about" className="relative py-28 bg-[#05070e] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-indigo-500/30 text-indigo-400 text-xs font-mono font-medium mb-3">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span>DEVELOPER PROFILE & INTERACTIVE SHELL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              Bridging <span className="cyber-gradient-text">Algorithmic Logic</span> & 3D Art
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>CLI ACTIVE • TYPE COMMANDS BELOW</span>
          </div>
        </div>

        {/* Top Split: Visual Persona Card (Left) + Interactive CLI Terminal (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12" id="terminal">
          
          {/* Visual Persona Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-3xl glass-panel p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden group shadow-xl"
          >
            <div className="relative z-10">
              {/* Avatar Badge / Tech Monogram */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-cyan-400 p-[2px] mb-6 shadow-xl shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0a0f24] rounded-[14px] flex items-center justify-center relative overflow-hidden">
                  <span className="font-display font-black text-3xl cyber-gradient-text">
                    KP
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent pointer-events-none" />
                </div>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3">
                Undergraduate Engineer
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-1.5">
                {personalInfo.name}
              </h3>
              <p className="text-sm text-indigo-400 font-mono mb-4">
                Sandip University • B.Tech CSE (2023-2027)
              </p>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
            </div>

            {/* Verified Pill Highlights */}
            <div className="relative z-10 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors block"
              >
                <span className="text-slate-400 block text-[11px] mb-0.5">LeetCode Handle</span>
                <span className="font-mono text-amber-300 font-bold">@KritiPriya_coder</span>
              </a>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors block"
              >
                <span className="text-slate-400 block text-[11px] mb-0.5">GitHub Profile</span>
                <span className="font-mono text-cyan-300 font-bold">@KritiPriya14</span>
              </a>
            </div>

            {/* Ambient Glow */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Interactive Developer CLI Terminal (Always Visible & Playable!) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 rounded-3xl glass-panel border border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col justify-between"
          >
            {/* Terminal Window Header */}
            <div className="bg-[#0b1022] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                <span className="ml-3 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>kriti@portfolio:~ (bash)</span>
                </span>
              </div>

              <button
                onClick={() => {
                  soundFx.playClick();
                  setTerminalHistory([]);
                }}
                className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
                title="Clear screen"
              >
                <Trash2 className="w-3 h-3" />
                <span>clear</span>
              </button>
            </div>

            {/* Terminal Screen Body */}
            <div className="p-5 font-mono text-xs sm:text-sm bg-[#05070e]/95 min-h-[300px] max-h-[360px] overflow-y-auto space-y-2.5">
              {terminalHistory.map((item, index) => {
                if (item.type === 'input') {
                  return (
                    <div key={index} className="text-cyan-400 font-bold flex items-center gap-2">
                      <span>{item.text}</span>
                    </div>
                  );
                }
                if (item.type === 'success') {
                  return (
                    <div key={index} className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 whitespace-pre-line leading-relaxed">
                      {item.text}
                    </div>
                  );
                }
                if (item.type === 'error') {
                  return (
                    <div key={index} className="text-rose-400 whitespace-pre-line">
                      {item.text}
                    </div>
                  );
                }
                return (
                  <div key={index} className="text-slate-300 whitespace-pre-line leading-relaxed">
                    {item.text}
                  </div>
                );
              })}
              <div ref={terminalEndRef} />
            </div>

            {/* Quick Action Suggestion Buttons */}
            <div className="bg-[#090e1f] px-5 py-2.5 border-t border-white/5 flex items-center gap-2 overflow-x-auto text-xs font-mono">
              <span className="text-slate-500 text-[11px] whitespace-nowrap">Click to run:</span>
              {['about', 'skills', 'experience', 'projects', 'leetcode', 'sudo hire', 'contact'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeCommand(cmd)}
                  className="px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-cyan-500/20 hover:text-cyan-300 text-slate-300 border border-white/5 transition-all whitespace-nowrap"
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Interactive Input Form */}
            <form onSubmit={handleFormSubmit} className="bg-[#070b18] px-5 py-3.5 border-t border-white/10 flex items-center gap-3">
              <span className="text-cyan-400 font-mono text-sm font-bold flex-shrink-0">
                kriti@portfolio:~$
              </span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="Type command (e.g. 'skills', 'sudo hire')..."
                className="w-full bg-transparent text-white font-mono text-sm focus:outline-none placeholder:text-slate-600"
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors"
                title="Execute"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Bottom Bento Row: 4 Engineering Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1: Algorithmic Core */}
          <div className="p-7 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-5">
                <Code className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-bold text-white mb-2">
                Algorithmic & Math Rigor
              </h4>
              <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
                Qualified competitive <strong className="text-white">JEE Mains</strong> and solved over <strong className="text-cyan-400">350+ coding challenges</strong> on LeetCode across trees, DP, and graphs in C++ and Java.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>DATA STRUCTURES</span>
              <span className="text-cyan-400">350+ Solved</span>
            </div>
          </div>

          {/* Pillar 2: 3D Web Creative */}
          <div className="p-7 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-5">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-bold text-white mb-2">
                3D Web Creative
              </h4>
              <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
                Architecting sensory digital spaces using Three.js, React Three Fiber, and Framer Motion. Engineered the 3D storefront for <strong className="text-white">AUREL</strong> at 60 FPS.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>WEBGL / R3F</span>
              <span className="text-purple-400">AUREL 3D</span>
            </div>
          </div>

          {/* Pillar 3: Full Stack Systems */}
          <div className="p-7 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-bold text-white mb-2">
                Full-Stack Architecture
              </h4>
              <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
                Trained in full-stack engineering during internship at <strong className="text-white">Codec Technologies</strong>. Hands-on with React.js, Node.js, Express.js, MongoDB, RESTful APIs, and CI/CD.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>MERN STACK</span>
              <span className="text-emerald-400">Codec Tech</span>
            </div>
          </div>

          {/* Pillar 4: Soft Skills */}
          <div className="p-7 rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-display font-bold text-white mb-2">
                Global Communication
              </h4>
              <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed">
                EF SET certified at <strong className="text-white">C1 Advanced</strong> level (Reading 71 C2 Proficient). Highly adaptable, proactive team player with clear technical communication.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>COMMUNICATION</span>
              <span className="text-indigo-400">C1 Advanced</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
