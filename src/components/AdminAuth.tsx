"use client";
import { getCookie } from "@/utils/functions/cookies";
import { useRouter } from "next/navigation";

export default function AdminAuth() {
  const rounter = useRouter();
  const email = getCookie("email");
  const token = getCookie("token");
  if (!email || !token) rounter.push("/admin/login");
  return (
    <>
      <input type="hidden" name="admin_email" hidden value={email!} />
      <input type="hidden" name="token" hidden value={token!} />
    </>
  );
}
