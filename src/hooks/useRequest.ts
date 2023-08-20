import {
 Dispatch, SetStateAction, useEffect, useState,
} from 'react';

interface RequestOptions<T> {
  dependencies?: any[];
  verification?: boolean;
  defaultValue: T
}

export const useRequest = <T>(
  request: () => Promise<T>,
  {
    dependencies = [],
    verification = true,
    defaultValue,
  }: RequestOptions<T>,
): [null | T, boolean, string, Dispatch<SetStateAction<T | null>>] => {
  const [data, setData] = useState<null | T>(defaultValue);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    if (verification) {
      request()
        .then((response: T) => setData(response))
        .catch((responseError: any) => setError(responseError))
        .finally(() => setLoading(false));
    }
  }, dependencies);

  return [data, loading, error, setData];
};
