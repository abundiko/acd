'use client'

import { useCookies } from "@/hooks/useCookies";
import useRunOnce from "@/hooks/useRunOnce";
import {  setCookie } from "@/utils/functions/cookies";

export default function CheckVisits() {
  const {getCookie} = useCookies()
  useRunOnce(()=>{
    const visited = getCookie('__visited');
    if(!visited) setCookie('__visited', 'true', 23);
  })
return <></>;
}