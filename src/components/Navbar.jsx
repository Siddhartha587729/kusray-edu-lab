import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/#features' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Mentors', href: '/#mentors' },
    { name: 'Partnerships', href: '/#partnerships' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleLinkClick = (e, href) => {
    // If it's a hash link and we're on the homepage
    if (href.includes('#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.split('#')[1];
      const sectionRef = window.sectionRefs[id];
      
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex gap-2 text-slate-700 text-2xl font-bold">
          <img src="/logo.svg" alt="" className='h-8 w-8'/>
          <span>Kus<span className="text-[#42B4E6]">ray</span></span>
          <span>Edu<span className="text-[#42B4E6]">Lab</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className="text-slate-700 hover:text-[#0072BC] transition-colors"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link to="/under-construction">
            <Button variant="primary" size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 mt-2 py-3">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="text-slate-700 hover:text-[#0072BC] transition-colors py-1"
                onClick={(e) => {
                  handleLinkClick(e, link.href);
                  setIsMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/under-construction">
                <Button variant="primary" size="sm" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 