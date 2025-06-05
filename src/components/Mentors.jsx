import Card from './Card';
import Button from './Button';

export default function Mentors() {
  const mentors = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      title: 'Data Science Lead',
      company: 'TechVision AI',
      expertise: ['Machine Learning', 'Python', 'Data Visualization'],
      bio: 'Former Google researcher with 10+ years experience in ML and AI applications.',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      title: 'Senior Frontend Engineer',
      company: 'StreamScape',
      expertise: ['React', 'TypeScript', 'UI Architecture'],
      bio: 'Building scalable interfaces at StreamScape after 5 years at Facebook.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 3,
      name: 'Priya Patel',
      title: 'Full Stack Developer',
      company: 'FinTech Solutions',
      expertise: ['Node.js', 'MongoDB', 'AWS'],
      bio: 'Passionate about scalable architectures and mentoring junior developers.',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 4,
      name: 'James Wilson',
      title: 'UX Design Director',
      company: 'CreativeCore',
      expertise: ['User Research', 'Figma', 'Design Systems'],
      bio: 'Award-winning designer with focus on accessible and inclusive digital experiences.',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 5,
      name: 'Olivia Tang',
      title: 'Mobile Development Lead',
      company: 'AppSphere',
      expertise: ['React Native', 'iOS', 'Android'],
      bio: 'Built apps with millions of downloads, specializes in cross-platform development.',
      image: 'https://randomuser.me/api/portraits/women/54.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 6,
      name: 'Robert Johnson',
      title: 'DevOps Engineer',
      company: 'CloudScale',
      expertise: ['Docker', 'Kubernetes', 'CI/CD'],
      bio: 'Infrastructure expert with a focus on automation and scalable deployment pipelines.',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 7,
      name: 'Emma Davis',
      title: 'Digital Marketing Strategist',
      company: 'GrowthFocus',
      expertise: ['SEO', 'Content Marketing', 'Analytics'],
      bio: 'Helping businesses increase online visibility through data-driven marketing strategies.',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      linkedin: 'https://linkedin.com',
    },
    {
      id: 8,
      name: 'David Kim',
      title: 'Blockchain Developer',
      company: 'ChainInnovate',
      expertise: ['Solidity', 'Web3', 'Smart Contracts'],
      bio: 'Building the future of decentralized applications and digital assets.',
      image: 'https://randomuser.me/api/portraits/men/34.jpg',
      linkedin: 'https://linkedin.com',
    },
  ];

  return (
    <section id="mentors" className="bg-[#FFFFFF] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">Mentor & Industry Panel</h2>
          <p className="text-lg text-[#2C3E50] max-w-2xl mx-auto">
            Highlighting our experts from top startups and MNCs who bring real-world experience and industry insights to your education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="flex flex-col h-full">
              <div className="flex flex-col items-center text-center mb-4">
                <img 
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#F5F7FA]"
                />
                <h3 className="text-xl font-bold text-[#005B96]">{mentor.name}</h3>
                <p className="text-[#0072BC] font-medium">{mentor.title}</p>
                <p className="text-[#B0BEC5] text-sm">{mentor.company}</p>
              </div>
              
              <div className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {mentor.expertise.map((skill, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-[#F5F7FA] text-[#2C3E50] px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <p className="text-[#2C3E50] text-sm">{mentor.bio}</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-[#CFD8DC]">
                <a 
                  href={mentor.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-[#0072BC] hover:text-[#005B96] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 