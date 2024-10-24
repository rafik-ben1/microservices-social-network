import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "react-oidc-context";
import {
  onSigninCallback,
  userManager,
} from "./features/auth/OidcConfiguration.ts";
import AuthWrapper from "./features/auth/AuthWrapper.tsx";
import TanstackQueryProvider from "./lib/TanstackQueryProvider.tsx";
import {Toaster} from "./components/ui/toaster.tsx"

  
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster/>
    <AuthProvider userManager={userManager}  onSigninCallback={onSigninCallback}>
      <TanstackQueryProvider>
        <AuthWrapper>
          <App />
        </AuthWrapper>
      </TanstackQueryProvider>
    </AuthProvider>
  </StrictMode>,
);
