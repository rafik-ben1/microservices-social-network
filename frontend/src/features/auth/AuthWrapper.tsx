import { ReactNode } from 'react';
import { useAuth } from 'react-oidc-context';

interface AuthWrapperProps {
  children: ReactNode;
}

function AuthWrapper({ children }: AuthWrapperProps) {
  const auth = useAuth();

  if (auth.isLoading) {
    return <div>Loading authentication...</div>; 
  }

  if (!auth.isAuthenticated) {
    auth.signinRedirect(); 
    return <div>Redirecting to login...</div>;
  }

  return <>{children}</>;
}

export default AuthWrapper;

