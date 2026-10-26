import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TestingWorkflow from './components/TestingWorkflow';
import Education from './components/Education';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TestCaseModal from './components/TestCaseModal';
import Toast from './components/Toast';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalProject, setModalProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  // Scrollspy to automatically highlight current section in Navbar
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'testing', 'education', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenTestCases = (project) => {
    setModalProject(project);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenTestCases={handleOpenTestCases} />
        <TestingWorkflow />
        <Education />
        <ResumeSection />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Test Case Inspection Modal */}
      <TestCaseModal
        isOpen={!!modalProject}
        onClose={handleCloseModal}
        project={modalProject}
      />

      {/* Toast Notice */}
      <Toast message={toastMessage} onClose={() => setToastMessage('')} />
    </div>
  );
}
