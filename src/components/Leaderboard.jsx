import { Link } from 'react-router-dom';

export default function Leaderboard() {
  const topStudents = [
    {
      id: 1,
      name: 'Aarav Patel',
      college: 'Tech University',
      xp: 9850,
      badge: 'Code Ninja',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Sophia Chen',
      college: 'Digital Institute',
      xp: 9420,
      badge: 'Data Master',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      id: 3,
      name: 'Jamal Williams',
      college: 'Innovation College',
      xp: 9180,
      badge: 'UX Wizard',
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    },
    {
      id: 4,
      name: 'Lucia Garcia',
      college: 'Design Academy',
      xp: 8975,
      badge: 'Frontend Guru',
      avatar: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
    {
      id: 5,
      name: 'Ryan Kim',
      college: 'Code Institute',
      xp: 8830,
      badge: 'Backend Expert',
      avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    }
  ];

  return (
    <section id="leaderboard" className="bg-[#F5F7FA] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E50] mb-4">Student Leaderboard</h2>
          <p className="text-lg text-[#2C3E50] max-w-2xl mx-auto">
            Showing top performers with XP points and badges. Let competition drive engagement and be the next #1 at your college.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-[#FFFFFF] rounded-lg shadow-lg overflow-hidden">
          <div className="bg-[#0072BC] text-white p-4">
            <div className="grid grid-cols-12 items-center font-medium">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-6 md:col-span-5">Student</div>
              <div className="hidden md:block md:col-span-3">College</div>
              <div className="col-span-3 text-center">XP</div>
              <div className="hidden md:block md:col-span-1"></div>
            </div>
          </div>
          
          {topStudents.map((student, index) => (
            <div 
              key={student.id} 
              className={`p-4 ${index % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F7FA]'} hover:bg-[#E3F2FD] transition-colors`}
            >
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-1 text-center font-bold text-[#0072BC]">{index + 1}</div>
                
                <div className="col-span-6 md:col-span-5">
                  <div className="flex items-center">
                    <img 
                      src={student.avatar}
                      alt={student.name}
                      className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-[#0072BC]"
                    />
                    <div>
                      <p className="font-bold text-[#2C3E50]">{student.name}</p>
                      <p className="text-sm text-[#B0BEC5] md:hidden">{student.college}</p>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block md:col-span-3 text-[#2C3E50]">
                  {student.college}
                </div>
                
                <div className="col-span-3 text-center">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-[#2C3E50]">{student.xp.toLocaleString()}</span>
                    <span className="text-xs text-[#B0BEC5]">points</span>
                  </div>
                </div>
                
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#689F38] text-white">
                    {student.badge}
                  </span>
                </div>
              </div>
              
              <div className="md:hidden mt-2 flex justify-end">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#689F38] text-white">
                  {student.badge}
                </span>
              </div>
            </div>
          ))}
          
          <div className="p-4 text-center border-t border-[#CFD8DC]">
            <Link to="/under-construction" className="text-[#0072BC] hover:text-[#005B96] font-medium">
              View Full Leaderboard
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link
            to="/under-construction"
            className="inline-flex items-center text-[#0072BC] hover:text-[#005B96] font-medium"
          >
            <span>Join the competition and earn your place on the leaderboard</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 