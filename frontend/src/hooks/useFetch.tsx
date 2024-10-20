import { BASE_API_URL } from "@/common/constants";
import { useAuth } from "react-oidc-context";

export type HttpMethods = "GET" | "POST" | "PATCH" | "DELETE" | "PUT"; 
interface FetchOptions {
  url: string;
  method?:  HttpMethods
  type?: "application/json" | "multipart/form-data";
  body?: any;
}

export function useFetchFunction<T>({
  url,
  method = "GET",
  type = "application/json",
  body,
}: FetchOptions) {
  const token = useAuth().user?.access_token;
  return async () => {
    const res = await fetch(BASE_API_URL + url, {
      method,
       body : body!== null ? JSON.stringify(body) : body,
      headers: {
        "Content-Type": type,
        Authorization: "Bearer " + token,
      },
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    return res.json() as T;
  };
}
