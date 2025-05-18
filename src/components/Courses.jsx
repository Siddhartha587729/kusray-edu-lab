import { useState } from 'react';
import Card from './Card';
import Button from './Button';

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'web', name: 'Web Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'marketing', name: 'Digital Marketing' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build complete web applications.',
      duration: '16 weeks',
      mode: 'Hybrid',
      highlights: ['Real-world projects', 'Industry mentorship', 'Job placement assistance'],
      certified: true,
      category: 'web',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      description: 'Learn Python, SQL, statistical analysis, machine learning, and data visualization.',
      duration: '12 weeks',
      mode: 'Online',
      highlights: ['Live coding sessions', 'Kaggle competitions', 'Industry datasets'],
      certified: true,
      category: 'data',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      description: 'Master design thinking, user research, wireframing, prototyping, and usability testing.',
      duration: '10 weeks',
      mode: 'Hybrid',
      highlights: ['Design portfolio', 'Client projects', 'Adobe Creative Suite'],
      certified: true,
      category: 'design',
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0',
    },
    {
      id: 4,
      title: 'Digital Marketing Mastery',
      description: 'Learn SEO, SEM, content marketing, social media, email campaigns, and analytics.',
      duration: '8 weeks',
      mode: 'Online',
      highlights: ['Google certification prep', 'Campaign planning', 'Marketing plan'],
      certified: true,
      category: 'marketing',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48',
    },
    {
      id: 5,
      title: 'React Native Mobile Development',
      description: 'Build cross-platform mobile apps for iOS and Android using React Native.',
      duration: '10 weeks',
      mode: 'Online',
      highlights: ['App store publishing', 'Firebase integration', 'Native modules'],
      certified: true,
      category: 'web',
      image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6',
    },
    {
      id: 6,
      title: 'Advanced Data Engineering',
      description: 'Master big data technologies, ETL pipelines, cloud infrastructure, and data warehousing.',
      duration: '14 weeks',
      mode: 'Hybrid',
      highlights: ['AWS/Azure cloud', 'Spark & Hadoop', 'Real-time data processing'],
      certified: true,
      category: 'data',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    },
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <section id="courses" className="bg-[#F5F7FA] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">Course Offerings</h2>
          <p className="text-lg text-[#2C3E50] max-w-2xl mx-auto mb-8">
            Specialized training programs with details on duration, mode (online/offline/hybrid), curriculum highlights, and certification.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
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
          {filteredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden flex flex-col h-full">
              <div className="h-48 overflow-hidden -mx-6 -mt-6 mb-4">
                <img 
                  src={`${course.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60`} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                {course.certified && (
                  <div className="absolute top-4 right-4 bg-[#689F38] text-white text-xs font-bold px-2 py-1 rounded">
                    CERTIFIED
                  </div>
                )}
              </div>
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#005B96] mb-2">{course.title}</h3>
                <p className="text-[#2C3E50] mb-4 flex-grow">{course.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-[#F5F7FA] text-[#2C3E50] px-3 py-1 rounded-full">
                    {course.duration}
                  </span>
                  <span className="text-xs bg-[#F5F7FA] text-[#2C3E50] px-3 py-1 rounded-full">
                    {course.mode}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[#2C3E50] mb-2">Curriculum Highlights:</p>
                  <ul className="space-y-1">
                    {course.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-[#0072BC] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#2C3E50]">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-[#CFD8DC]">
                <Button variant="primary" className="w-full">
                  View Course Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 