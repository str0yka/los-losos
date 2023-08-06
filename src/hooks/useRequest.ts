import { useEffect, useState } from 'react';

interface RequestOptions {
  dependencies: any[],
  verification: boolean
}

export const useRequest = <T>(
  request: () => any,
  options: RequestOptions = {
    dependencies: [],
    verification: true,
  },
): [null | T, boolean, string] => {
  const [data, setData] = useState<null | T>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    setLoading(true);
    if (options.verification) {
      request()
        .then((response: T) => setData(response))
        .catch((responseError: any) => setError(responseError))
        .finally(() => setLoading(false));
    }
  }, options.dependencies);

  return [data, loading, error];
};
