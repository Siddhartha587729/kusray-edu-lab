import { useState } from 'react';
import Card from './Card';

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ai', name: 'AI/ML' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration, inventory management and analytics dashboard.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      github: 'https://github.com/kusray/ecommerce-platform',
      company: 'TechRetail',
      rating: 4.9,
    },
    {
      id: 2,
      title: 'Sales Prediction Model',
      description: 'ML algorithm for predicting quarterly sales based on historical data and market trends.',
      category: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      github: 'https://github.com/kusray/sales-prediction',
      company: 'FinPredict',
      rating: 4.7,
    },
    {
      id: 3,
      title: 'Healthcare App',
      description: 'Mobile application for patient management, appointment scheduling, and health tracking.',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      github: 'https://github.com/kusray/healthcare-app',
      company: 'MediCare',
      rating: 4.8,
    },
    {
      id: 4,
      title: 'Sentiment Analysis Tool',
      description: 'AI-powered tool for analyzing customer feedback and social media sentiment.',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb',
      github: 'https://github.com/kusray/sentiment-analysis',
      company: 'SocialLens',
      rating: 4.6,
    },
    {
      id: 5,
      title: 'Travel Booking Platform',
      description: 'Web application for booking flights, hotels, and activities with recommendation engine.',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b',
      github: 'https://github.com/kusray/travel-booking',
      company: 'TravelEase',
      rating: 4.5,
    },
    {
      id: 6,
      title: 'Language Processing API',
      description: 'Natural language processing API for text summarization, translation, and analysis.',
      category: 'ai',
      image: 'https://images.unsplash.com/photo-1580894908361-967195033215',
      github: 'https://github.com/kusray/nlp-api',
      company: 'TextGenius',
      rating: 4.9,
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="bg-[#F5F7FA] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">Live Projects Showcase</h2>
          <p className="text-lg text-[#2C3E50] max-w-2xl mx-auto mb-8">
            Dynamic gallery of student projects with ratings and GitHub links, showcasing the real-world impact of our programs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category.id
                    ? 'bg-[#0072BC] text-white'
                    : 'bg-[#FFFFFF] text-[#2C3E50] hover:bg-[#CFD8DC]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden -mx-6 -mt-6 mb-4">
                <img 
                  src={`${project.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60`} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-[#005B96]">{project.title}</h3>
                <span className="flex items-center bg-[#F5F7FA] px-2 py-1 rounded text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FFC107]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1">{project.rating}</span>
                </span>
              </div>
              <p className="text-[#2C3E50] mb-4 flex-grow">{project.description}</p>
              <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#CFD8DC]">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0072BC] text-white font-bold">
                    {project.company.charAt(0)}
                  </div>
                  <span className="ml-2 text-sm text-[#2C3E50]">{project.company}</span>
                </div>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#0072BC] hover:text-[#005B96] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 