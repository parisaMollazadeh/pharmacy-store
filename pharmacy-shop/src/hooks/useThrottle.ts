import { useRef, useCallback } from 'react';

type VoidFunction<T extends unknown[] = unknown[]> = (...args: T) => void;


function useThrottle<T extends VoidFunction>(callback: T, delay: number): T {
  const lastCallRef = useRef<number>(0);
  const savedCallback = useRef<T>(callback);


  savedCallback.current = callback;

  const throttledFunction = useCallback(
    (...args: Parameters<T>): void => {
      const now = Date.now();

      if (now - lastCallRef.current >= delay) {
        lastCallRef.current = now;
        savedCallback.current(...args);
      }
    },
    [delay]
  );

  return throttledFunction as T;
}

export default useThrottle;
