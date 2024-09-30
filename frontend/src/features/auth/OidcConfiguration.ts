import { UserManager, WebStorageStateStore } from "oidc-client-ts"

export const userManager = new UserManager({
    client_id : "myClient",
    authority : "http://localhost:8080/realms/test1",
    redirect_uri: "http://localhost:5173/",
    post_logout_redirect_uri: "http://localhost:5173/",
    userStore: new WebStorageStateStore({ store: window.localStorage }),
    response_type:"code",
    
})

export const onSigninCallback = () => {
    window.history.replaceState({}, document.title, window.location.pathname);
  };
