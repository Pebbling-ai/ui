import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';

export default function AuthCallback() {
  const navigate = useNavigate();
  const { handleRedirectCallback } = useClerk();

  useEffect(() => {
    // Handle the OAuth callback
    const handleCallback = async () => {
      try {
        // This handles the Clerk redirect and any errors
        await handleRedirectCallback({});
        // If successful, redirect to the Hibiscus page
        navigate('/hibiscus');
      } catch (error) {
        console.error('Error during auth callback:', error);
        navigate('/');
      }
    };

    handleCallback();
  }, [navigate, handleRedirectCallback]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Authenticating...</h2>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
      </div>
    </div>
  );
}
