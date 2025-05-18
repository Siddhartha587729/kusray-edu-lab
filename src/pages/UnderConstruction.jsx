import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">
      <div className="text-center max-w-lg">
        <div className="w-32 h-32 mx-auto mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0072BC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-6">Page Under Construction</h1>
        <p className="text-[#2C3E50] mb-8">
          We're working hard to bring you this content. Please check back soon!
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Back to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
} 