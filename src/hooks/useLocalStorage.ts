import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useLocalStorage = <T>(key: string, defaultValue?: T): [T, Dispatch<SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const currentvalue = localStorage.getItem(key);
      return currentvalue ? JSON.parse(currentvalue) : defaultValue;
    } catch (e) {
      console.log(e);
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
};

export default useLocalStorage;
