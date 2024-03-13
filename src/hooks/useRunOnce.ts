import { useRef, useLayoutEffect } from "react";

const useRunOnce = (hook: () => unknown) => {
  const hasRun = useRef(false);
  const value = useRef<unknown>();

  useLayoutEffect(() => {
    if (!hasRun.current) {
      value.current = hook();
      hasRun.current = true;
    }
  }, []);

  return value.current;
};

export default useRunOnce;
