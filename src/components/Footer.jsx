import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  
  const footerLinks = [
    {
      title: 'Courses',
      links: [
        { name: 'Web Development', href: '/#courses', isInternal: true },
        { name: 'Data Science', href: '/#courses', isInternal: true },
        { name: 'UI/UX Design', href: '/#courses', isInternal: true },
        { name: 'Digital Marketing', href: '/#courses', isInternal: true },
        { name: 'Mobile Development', href: '/#courses', isInternal: true },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/under-construction' },
        { name: 'Our Team', href: '/under-construction' },
        { name: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'Email: reachus@kusray.com', href: 'mailto:reachus@kusray.com' },
        { name: 'Phone: +91 8249482933', href: 'tel:+918249482933' },
        { name: 'Near Akshardham Metro Station', href: '/#contact', isInternal: true },
        { name: 'C 267, Ground Floor, Pandav Nagar', href: '/#contact', isInternal: true },
        { name: 'New Delhi 110092', href: '/#contact', isInternal: true },
      ],
    },
  ];
  
  const handleInternalLinkClick = (e, href) => {
    if (href.includes('#') && location.pathname === '/') {
      e.preventDefault();
      const id = href.split('#')[1];
      const sectionRef = window.sectionRefs[id];
      
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <footer className="bg-[#2C3E50] text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4">
              <a href="https://kusray.in" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold mb-4 block">
                Kus<span className="text-[#42B4E6]">ray</span>
              </a>
              <p className="text-[#B0BEC5] mb-4 w-full lg:w-[70%]">
                Empowering students through industry-aligned tech education and real-world projects.
              </p>
              <div className="flex space-x-4 mb-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#42B4E6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#42B4E6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#42B4E6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.782-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#42B4E6] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-bold mb-4 text-white">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        {link.isInternal ? (
                          <Link 
                            to={link.href} 
                            className="text-[#B0BEC5] hover:text-[#42B4E6] transition-colors"
                            onClick={(e) => handleInternalLinkClick(e, link.href)}
                          >
                            {link.name}
                          </Link>
                        ) : link.href.startsWith('mailto:') || link.href.startsWith('tel:') ? (
                          <a 
                            href={link.href} 
                            className="text-[#B0BEC5] hover:text-[#42B4E6] transition-colors"
                          >
                            {link.name}
                          </a>
                        ) : (
                          <Link 
                            to={link.href} 
                            className="text-[#B0BEC5] hover:text-[#42B4E6] transition-colors"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-4 border-t border-[#3D5366]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#B0BEC5] text-sm mb-2 md:mb-0">
            &copy; {currentYear} Kusray. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/under-construction" className="text-[#B0BEC5] hover:text-white text-sm">
              Privacy Policy
            </Link>
            <span className="text-[#3D5366]">|</span>
            <Link to="/under-construction" className="text-[#B0BEC5] hover:text-white text-sm">
              Terms of Service
            </Link>
            <span className="text-[#3D5366]">|</span>
            <Link to="/under-construction" className="text-[#B0BEC5] hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 