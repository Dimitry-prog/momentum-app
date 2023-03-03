import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay = 300) => {
  const [debounced, setDebounced] = useState<string>(value);

  useEffect(() => {
    const debounce = setTimeout(() => setDebounced(value), delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
