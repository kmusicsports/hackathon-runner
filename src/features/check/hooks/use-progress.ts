import { useState } from "react";

export const useProgress = () => {
  const [progress, setProgress] = useState(1);
  const incrementProgress = () => setProgress((progress) => progress + 9);
  const decrementProgress = () => setProgress((progress) => progress - 9);

  return [progress, { setProgress, incrementProgress, decrementProgress }] as const;
};
