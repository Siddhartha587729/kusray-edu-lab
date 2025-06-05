import { Link } from 'react-router-dom';
import Button from './Button';
import Card from './Card';

export default function Partnerships() {
  const steps = [
    {
      number: 1,
      title: 'Connect',
      description: 'Schedule a consultation to discuss your college\'s needs.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: 'Customize',
      description: 'We tailor programs to match your curriculum and industry focus.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: 'Integrate',
      description: 'We implement our platform and connect students with mentors.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: 4,
      title: 'Grow',
      description: 'Measure outcomes and scale the program based on results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  return (
    <section id="partnerships" className="bg-[#FFFFFF] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">College Partnerships</h2>
          <p className="text-lg text-[#2C3E50] max-w-2xl mx-auto">
            Partner with Kusray to bring industry-ready tech education to your students and improve placement outcomes.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#005B96] mb-8 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#F5F7FA] flex items-center justify-center mb-4 relative">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0072BC] text-white flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#2C3E50] mb-2">{step.title}</h4>
                <p className="text-[#2C3E50]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/under-construction">
            <Button variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 