import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '../components/Button';

export default function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-6">
            Join Our Team
          </h1>
          <p className="text-lg text-[#2C3E50] mb-12">
            We're always looking for passionate individuals who want to make a difference in education technology.
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#0072BC] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2 className="text-2xl font-bold text-[#2C3E50] mb-4">
                No Open Positions Right Now
              </h2>
              <p className="text-[#2C3E50] mb-8">
                We don't have any open positions at the moment, but we're always interested in connecting with talented individuals who share our vision for transforming education through technology.
              </p>
              <p className="text-[#2C3E50] mb-8">
                Feel free to send your resume to <a href="mailto:careers@kusray.com" className="text-[#0072BC] hover:text-[#005B96]">careers@kusray.com</a> and we'll keep it on file for future opportunities.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
            <a href="mailto:careers@kusray.com">
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 