"use client";

import { useState } from "react";
import useRunOnce from "./useRunOnce";

export default function useFetchApi<T, K = undefined >(
  url: string,
  onComplete?: (data: T | null) => void,
  headers?: { [key: string]: string },
  initialFetch = true,
) {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(initialFetch);
  const [data, setData] = useState<T | null>(null);
  const [mainData, setMainData] = useState<K | null>(null);

  useRunOnce(async () => {
    if(initialFetch)
    fetchAgain();
  });

  async function fetchAgain(endpoint?:string) {
    setError(null);
    try {
      setLoading(true);
      const req = await fetch(endpoint??url, { headers });
      const json = await req.json();
      // console.log(json);
      if (onComplete) onComplete(json);
      setData(json);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }

  return { data,mainData, setMainData, error, loading, fetchAgain };
}
