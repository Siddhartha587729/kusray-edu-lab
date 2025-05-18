import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-[#0072BC] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Page Not Found</h2>
        <p className="text-[#2C3E50] mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
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