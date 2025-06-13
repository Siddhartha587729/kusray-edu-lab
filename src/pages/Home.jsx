import { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProjectShowcase from '../components/ProjectShowcase';
import Courses from '../components/Courses';
import Partnerships from '../components/Partnerships';
import Contact from '../components/Contact';

export default function Home() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const projectsRef = useRef(null);
  const coursesRef = useRef(null);
  const partnershipsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    window.sectionRefs = {
      hero: heroRef,
      features: featuresRef,
      projects: projectsRef,
      courses: coursesRef,
      partnerships: partnershipsRef,
      contact: contactRef
    };
  }, []);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentProgress = window.scrollY;
      const scrollPercentage = (currentProgress / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#F5F7FA] min-h-screen">
      <div 
        className="fixed top-0 left-0 h-1 bg-[#42B4E6] z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>
      
      <div ref={heroRef} id="hero">
        <Hero />
      </div>
      
      <div ref={featuresRef} id="features">
        <Features />
      </div>
      
      {/* <div ref={projectsRef} id="projects">
        <ProjectShowcase />
      </div> */}
      
      <div ref={coursesRef} id="courses">
        <Courses />
      </div>
      
      <div ref={partnershipsRef} id="partnerships">
        <Partnerships />
      </div>
      
      <div ref={contactRef} id="contact">
        <Contact />
      </div>
      
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#0072BC] text-white shadow-lg transition-opacity duration-300 hover:bg-[#005B96] ${
          scrollProgress > 20 ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
} 