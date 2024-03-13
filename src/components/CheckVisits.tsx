'use client'

import useRunOnce from "@/hooks/useRunOnce";
import { getCookie, setCookie } from "@/utils/functions/cookies";

export default function CheckVisits() {
  useRunOnce(()=>{
    const visited = getCookie('__visited');
    if(!visited) setCookie('__visited', 'true', 23);
  })
return <></>;
}