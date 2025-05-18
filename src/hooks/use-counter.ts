import { useCallback, useState } from "react";

export const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrementCount = useCallback(() => {
    setCount((prev) => Math.max(0, prev - 1));
  }, []);

  return [
    count,
    {
      setCount,
      incrementCount,
      decrementCount,
    },
  ] as const;
};
