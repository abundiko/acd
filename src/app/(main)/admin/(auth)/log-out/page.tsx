'use client'

import { deleteCookie } from "@/utils/functions/cookies";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Page() {
  const router = useRouter()
  useLayoutEffect(()=>{
    deleteCookie('email')
    deleteCookie('token')
    router.replace('/')
  })

return <></>;
}