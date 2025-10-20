import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ProjectsPage } from './components/ProjectsPage';
import { TeachingPage } from './components/TeachingPage';
import { SkillsPage } from './components/SkillsPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    document.body.style.fontFamily = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={handlePageChange} />;
      case 'about':
        return <AboutPage onPageChange={handlePageChange}/>;
      case 'projects':
        return <ProjectsPage onPageChange={handlePageChange}/>;
      case 'teaching':
        return <TeachingPage />;
      case 'skills':
        return <SkillsPage onPageChange={handlePageChange} />;

      default:
        return <HomePage onPageChange={handlePageChange} />;
    }
  };

  return (
    <div className="bg-purple-900 text-gray-900 overflow-x-hidden">
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      {renderCurrentPage()}
      <Footer/>
      
      <style >{`
        /* Typography System - Modern & Professional */
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Sora', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        
        h1 {
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
        }
        
        h2 {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 700;
        }
        
        h3 {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 600;
        }
        
        h4 {
          font-size: clamp(1.25rem, 2vw, 1.75rem);
          font-weight: 600;
        }
        
        p, body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          font-weight: 400;
          line-height: 1.7;
          letter-spacing: -0.01em;
        }
        
        button, label, input, select, textarea {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .font-heading {
          font-family: 'Sora', sans-serif;
        }
        
        .font-body {
          font-family: 'Inter', sans-serif;
        }
        
        /* Smooth transitions */
        * {
          transition: color 0.2s ease, background-color 0.2s ease;
        }
        
        /* Professional gradient backgrounds */
        .gradient-primary {
          background: linear-gradient(135deg, #0A0E27 0%, #1E293B 50%, #334155 100%);
        }
        
        .gradient-accent {
          background: linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%);
        }
        
        .gradient-gold {
          background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
        }
        
        /* Text gradients */
        .text-gradient {
          background: linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-gradient-gold {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #F97316 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-gradient-blue {
          background: linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #2563EB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .glass-dark {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        /* Hover effects */
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .hover-glow {
          transition: all 0.3s ease;
        }
        
        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(167, 139, 250, 0.4);
        }
        
        .hover-scale {
          transition: transform 0.3s ease;
        }
        
        .hover-scale:hover {
          transform: scale(1.05);
        }
        
        /* Parallax */
        .parallax {
          transform: translateZ(0);
          will-change: transform;
        }
        
        /* Shimmer effect */
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        /* Pulse glow */
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(167, 139, 250, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(167, 139, 250, 0.6);
          }
        }
        
        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        /* Gradient animation */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 8s ease infinite;
        }
        
        /* Text gradient */
        .text-gradient {
          background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .text-gradient-gold {
          background: linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* Glassmorphism */
        .glass {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Skill bar animation */
        .skill-bar {
          animation: fillBar 1.5s ease-out;
        }
        
        @keyframes fillBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
