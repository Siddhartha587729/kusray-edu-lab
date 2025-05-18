import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

export default function Hero() {
  const location = useLocation();

  const handleScrollToFeatures = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const featuresRef = window.sectionRefs['features'];
      if (featuresRef && featuresRef.current) {
        featuresRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <section id="hero" className="bg-slate-200 py-20 min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E50] mb-6">
              Train. Build. <span className="text-[#0072BC]">Get Hired.</span> Repeat.
            </h1>
            <p className="text-lg md:text-xl text-[#2C3E50] mb-8 max-w-lg mx-auto md:mx-0">
              We partner with colleges to deliver job-ready training with real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/under-construction">
                <Button variant="primary" size="lg">
                  Join as College Partner
                </Button>
              </Link>
              <Link to="/#features">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleScrollToFeatures}
                >
                  View Student Programs
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main image */}
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVkdWNhdGlvbiUyMHRlY2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Students collaborating" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-[#0072BC] text-white p-3 rounded-lg shadow-lg">
                <div className="text-xs uppercase font-bold">Success Rate</div>
                <div className="text-2xl font-bold">94%</div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-[#FFFFFF] p-3 rounded-lg shadow-lg">
                <div className="text-xs uppercase font-bold text-[#005B96]">Industry Partners</div>
                <div className="text-2xl font-bold text-[#0072BC]">50+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave SVG separator */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
} 