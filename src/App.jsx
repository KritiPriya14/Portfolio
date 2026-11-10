import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CyberCursor from './components/CyberCursor';
import HeroSection from './components/HeroSection';
import StatsRibbon from './components/StatsRibbon';
import AboutInteractive from './components/AboutInteractive';
import SkillsGalaxy from './components/SkillsGalaxy';
import FeaturedProjects from './components/FeaturedProjects';
import ExperienceTimeline from './components/ExperienceTimeline';
import LeetCodeSection from './components/LeetCodeSection';
import CertificationsAchievements from './components/CertificationsAchievements';
import ContactSection from './components/ContactSection';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';
import { soundFx } from './utils/soundEffects';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const handleToggleSound = () => {
    const newState = soundFx.toggleSound();
    setSoundEnabled(newState);
  };

  return (
    <div className="relative min-h-screen bg-[#05070e] text-slate-100 selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">
      {/* Custom Cyber Interactive Cursor */}
      <CyberCursor />

      {/* Floating Glass Navbar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with 3D Canvas */}
        <HeroSection onOpenResume={() => setResumeOpen(true)} />

        {/* Highlight Stats Bar */}
        <StatsRibbon />

        {/* Dual Mode About & CLI Terminal */}
        <AboutInteractive />

        {/* Interactive Skills Bento Galaxy */}
        <SkillsGalaxy />

        {/* Featured Projects Showcase (AUREL 3D, Algo 3D, DevNexus) */}
        <FeaturedProjects />

        {/* Work Experience & Education Timeline */}
        <ExperienceTimeline />

        {/* LeetCode & Competitive Programming Section (350+ Solved) */}
        <LeetCodeSection />

        {/* Certifications & Achievements */}
        <CertificationsAchievements />

        {/* Interactive Contact & Hire Me Terminal */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Featured Resume Viewer & Downloader Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

