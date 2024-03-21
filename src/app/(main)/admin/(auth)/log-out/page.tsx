"use client";

import { deleteCookie } from "@/utils/functions/cookies";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Page() {
  const router = useRouter();
  useLayoutEffect(() => {
    deleteCookie("email");
    deleteCookie("token");
    router.back();
    if (window) window.location.href = "/";
  });

  return (
    <div className="flex flex-col gap-2 justify-start items-start">
      <h1 className="r-text-xl r-font-bold">Signing Out!</h1>
      <p className="r-text-sm opacity-70">please wait</p>
    </div>
  );
}
