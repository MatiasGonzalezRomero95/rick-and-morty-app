import { useState, useEffect } from 'react';

const useDelay = (value, delayTime) => {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDelayedValue(value);
      }, delayTime);

      // cleanup
      return () => clearTimeout(handler)
    },
    [value, delayTime]
  );

  return delayedValue;
};

export default useDelay;
