import { useRef, useEffect } from "react";

const useRunOnce = (hook: () => unknown) => {
  const hasRun = useRef(false);
  const value = useRef<unknown>();

  useEffect(() => {
    if (!hasRun.current) {
      value.current = hook();
      hasRun.current = true;
    }
  }, []);

  return value.current;
};

export default useRunOnce;
