"use client";

export function setCookie(name: string, value: string, hoursToExpire: number) {
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + hoursToExpire * 60 * 60 * 1000
  );

  const cookieValue =
    encodeURIComponent(name) +
    "=" +
    encodeURIComponent(value) +
    "; expires=" +
    expirationDate.toUTCString() +
    "; path=/";

  document.cookie = cookieValue;
}

export function getCookie(name: string) {
  if (!document) return;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name + "=") === 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }

  return null;
}

export function deleteCookie(name: string) {
  // Set the cookie to expire in the past
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
