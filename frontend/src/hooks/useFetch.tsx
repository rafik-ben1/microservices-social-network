import { BASE_API_URL } from "@/common/constants";
import { useAuth } from "react-oidc-context";

export type HttpMethods = "GET" | "POST" | "PATCH" | "DELETE" | "PUT";
interface FetchOptions {
  url: string;
  method?: HttpMethods;
  isFormData : boolean
  body?: any;
}

export function useFetchFunction<T>() {
  const token = useAuth().user?.access_token;
  
  return async ({
    url,
    method = "GET",
    isFormData = false,
    body,
  }: FetchOptions) => {
    const headers: Record<string, string> = {
      Authorization: "Bearer " + token,
    };
    let requestBody;
    if (!isFormData) {
      headers["Content-Type"] = "application/json";
      requestBody = body ? JSON.stringify(body) : null;
    } else {
      requestBody = body;
    }
    const res = await fetch(BASE_API_URL + url, {
      method,
      body: requestBody ,
      headers
    });

    if (res.status === 204 || res.headers.get("Content-Length") === "0") {
      return null; 
    }

    try {
      const json = await res.json();
      if (!res.ok) {
        throw new Error( json.message || json.error || "An error occurred");
      }
      return json as T;
    } catch (err) {
      throw new Error(err.message);
    }
  };
}

