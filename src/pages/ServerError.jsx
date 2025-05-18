import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function ServerError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F7FA] px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-9xl font-bold text-[#E74C3C] mb-4">500</h1>
        <h2 className="text-3xl font-bold text-[#2C3E50] mb-6">Server Error</h2>
        <p className="text-[#2C3E50] mb-8">
          Oops! Something went wrong on our servers. We're working to fix the issue.
          Please try again later.
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