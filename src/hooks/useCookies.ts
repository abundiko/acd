import * as cookie from "@/utils/functions/cookies";
import { useCallback } from "react";

export function useCookies() {
  const setCookie = useCallback(cookie.setCookie, []);
  const getCookie = useCallback(cookie.getCookie, []);
  const deleteCookie = useCallback(cookie.deleteCookie, []);

  return {
    getCookie,
    setCookie,
    deleteCookie
  };
}
