import { useCallback, useState } from "react";

const PROGRESS_STEP = 9;

export const useProgress = () => {
  const [progress, setProgress] = useState(1);

  const incrementProgress = useCallback(() => {
    setProgress((prev) => Math.min(100, prev + PROGRESS_STEP));
  }, []);

  const decrementProgress = useCallback(() => {
    setProgress((prev) => Math.max(1, prev - PROGRESS_STEP));
  }, []);

  return [
    progress,
    {
      setProgress,
      incrementProgress,
      decrementProgress,
    },
  ] as const;
};
