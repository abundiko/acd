import { deleteCookie, getCookie, setCookie } from "@/utils/functions/cookies";

export function useCookies() {
  return {
    getCookie,
    setCookie,
    deleteCookie
  };
}
