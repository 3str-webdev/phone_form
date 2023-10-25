import { useCallback, useState } from "react";

export function useInactionTimerStartTime(initialTime: number) {
  const [startedAt, setStartedAt] = useState<number>(initialTime);

  const setStartTime = useCallback((newTimerValue: number) => {
    setStartedAt(newTimerValue);
  }, []);

  const refreshStartTime = useCallback(() => {
    setStartedAt(Date.now());
  }, []);

  return {
    startedAt,
    setStartTime,
    refreshStartTime,
  };
}
