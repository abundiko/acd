import { useEffect } from "react";

type ScreenReaderHotkeyOptions = {
  onStart: () => void;
  onStop: () => void;
};

export function useScreenReaderHotkeys({
  onStart,
  onStop,
}: ScreenReaderHotkeyOptions) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Example: Shift + Alt + S to start
      if (e.altKey && e.code === "KeyS") {
        e.preventDefault();
        onStart();
      }

      // Example: Shift + Alt + X to stop
      if (e.altKey && e.code === "KeyX") {
        e.preventDefault();
        onStop();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onStart, onStop]);

 
}
