import { useEffect, useState } from 'react';
import { hasAuthParams, useAuth } from 'react-oidc-context';


function AuthWrapper({ children }: React.PropsWithChildren) {
  const auth = useAuth();
  const [hasTriedSignin, setHasTriedSignin] = useState(false);


  useEffect(() => {
    if (!(hasAuthParams() || auth.isAuthenticated || auth.activeNavigator || auth.isLoading || hasTriedSignin)) {
      void auth.signinRedirect();
      setHasTriedSignin(true);
    }
  }, [auth, hasTriedSignin]);

  return (
    <>
      {auth.isLoading ? (
        <>
          <h1>Loading...</h1>
        </>
      ) : auth.isAuthenticated ? (
        children
      ) : (
          <h1>Unable to sign in</h1>
      )}
    </>
  );
};

export default AuthWrapper;

