import {
 Dispatch, SetStateAction, useEffect, useState,
} from 'react';

interface RequestOptions<T, K> {
  request: () => Promise<T>
  dependencies?: any[];
  verification?: boolean;
  defaultValue: K
}

export const useRequest = <T, K>(
  {
    request,
    dependencies = [],
    verification = true,
    defaultValue,
  }: RequestOptions<T, K>,
): [T | K, boolean, string, Dispatch<SetStateAction<T | K>>] => {
  const [data, setData] = useState<T | K>(defaultValue);
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
