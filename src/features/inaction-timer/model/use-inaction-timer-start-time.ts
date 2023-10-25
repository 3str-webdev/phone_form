import { DependencyList, useCallback, useEffect, useState } from "react";

export function useInactionTimerStartTime(
  initialTime: number,
  observeValues: DependencyList = []
) {
  const [startedAt, setStartedAt] = useState<number>(initialTime);

  const setStartTime = useCallback((newTimerValue: number) => {
    setStartedAt(newTimerValue);
  }, []);

  const refreshStartTime = useCallback(() => {
    setStartedAt(Date.now());
  }, []);

  // Добавляю отслеживание изменений переданных значений для обновления таймера
  useEffect(() => {
    refreshStartTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshStartTime, ...observeValues]);

  return {
    startedAt,
    setStartTime,
    refreshStartTime,
  };
}
