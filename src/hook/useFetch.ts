import { useEffect, useState } from 'react';

type FetchResponse = {
  data: any;
  isLoading: boolean;
  hasError: boolean;
};

export const useFetch = (url: string): FetchResponse => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      setIsLoading(true);
      setData(null);
      setHasError(false);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    doFetch();
  }, [url]);

  return {
    data,
    isLoading,
    hasError
  };
};
