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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider userManager={userManager}  onSigninCallback={onSigninCallback}>
      <QueryClientProvider client={queryClient}>
        <AuthWrapper>
          <App />
        </AuthWrapper>
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
);
