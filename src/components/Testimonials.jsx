import { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Aisha Kapoor',
      role: 'Web Development Student',
      college: 'Digital Tech University',
      quote: "Edulabs transformed my career trajectory. The hands-on experience with real projects helped me secure a job offer before I even graduated. The mentorship was invaluable.",
      outcome: 'Full Stack Developer @ TechSolutions',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    {
      id: 2,
      name: 'Jason Wong',
      role: 'Data Science Graduate',
      college: 'Analytics Institute',
      quote: "The project-based approach at Edulabs gave me practical experience that theoretical learning couldn't. Working with real-world datasets and industry mentors accelerated my learning tremendously.",
      outcome: 'Data Analyst @ FinSight',
      image: 'https://randomuser.me/api/portraits/men/54.jpg',
    },
    {
      id: 3,
      name: 'Elena Martinez',
      role: 'UX Design Student',
      college: 'Creative Arts College',
      quote: "As someone transitioning from a non-tech background, Edulabs provided the perfect balance of structured learning and creative freedom. The micro-cohort format meant personalized attention.",
      outcome: 'UX Designer @ DesignHub',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
    },
    {
      id: 4,
      name: 'Thomas Lee',
      role: 'Mobile Development Student',
      college: 'Tech Academy',
      quote: "The industry connections through Edulabs were game-changing. I got to build apps for actual businesses, which not only taught me technical skills but also professional communication.",
      outcome: 'Mobile Developer @ AppWorks',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
    {
      id: 5,
      name: 'Zoe Thompson',
      role: 'Digital Marketing Graduate',
      college: 'Business Institute',
      quote: "Edulabs didn't just teach marketing - they connected us with real businesses to run campaigns. The competitive leaderboard kept me motivated, and the skills I gained were immediately applicable.",
      outcome: 'Marketing Specialist @ GrowthLabs',
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="bg-[#FFFFFF] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">Student Testimonials</h2>
          <p className="text-lg text-[#2C3E50] max-w-2xl mx-auto">
            Quotes and success stories from students who have completed our courses, highlighting their achievements and career progression.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#F5F7FA] rounded-lg p-6 md:p-10 shadow-lg">
            <div className="absolute top-6 left-6 md:top-10 md:left-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#0072BC] opacity-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
            
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <div className="relative">
                  <img 
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-4 border-[#FFFFFF] shadow-md"
                  />
                  <div className="absolute bottom-0 right-0 bg-[#689F38] text-white text-xs rounded-full px-3 py-1 shadow">
                    {testimonials[activeIndex].outcome.split('@')[0]}
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-10">
                <blockquote className="text-lg md:text-xl italic text-[#2C3E50] mb-6">
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                
                <div className="flex flex-col">
                  <div className="font-bold text-[#005B96] text-lg">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-[#0072BC]">
                    {testimonials[activeIndex].role}
                  </div>
                  <div className="text-[#B0BEC5] text-sm">
                    {testimonials[activeIndex].college}
                  </div>
                  <div className="font-medium text-[#689F38] mt-1">
                    {testimonials[activeIndex].outcome}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 md:mt-10 gap-4">
              <button 
                onClick={prevTestimonial} 
                className="p-2 rounded-full bg-[#FFFFFF] text-[#2C3E50] hover:bg-[#0072BC] hover:text-white transition-colors shadow"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      activeIndex === index ? 'bg-[#0072BC]' : 'bg-[#CFD8DC]'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial} 
                className="p-2 rounded-full bg-[#FFFFFF] text-[#2C3E50] hover:bg-[#0072BC] hover:text-white transition-colors shadow"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-[#2C3E50] mb-8">Trusted by Leading Institutions</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FFFFFF] rounded-full shadow-md flex items-center justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5" />
                </svg>
              </div>
              <p className="mt-2 font-medium text-[#2C3E50]">Tech University</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FFFFFF] rounded-full shadow-md flex items-center justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="mt-2 font-medium text-[#2C3E50]">Innovation Institute</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FFFFFF] rounded-full shadow-md flex items-center justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <p className="mt-2 font-medium text-[#2C3E50]">Data College</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FFFFFF] rounded-full shadow-md flex items-center justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <p className="mt-2 font-medium text-[#2C3E50]">Design Academy</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#FFFFFF] rounded-full shadow-md flex items-center justify-center p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-[#0072BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="mt-2 font-medium text-[#2C3E50]">Digital Academy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 