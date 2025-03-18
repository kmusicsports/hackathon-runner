import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount((count) => count + 1);
  const decrementCount = () => setCount((count) => count - 1);

  return [count, { setCount, incrementCount, decrementCount }] as const;
};
