import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useProgressLine = (buttons: { path: string; name: string }[]) => {
  const pathname = usePathname();
  const [progressButtonsProps, setProgressButtonsProps] = useState<
  null | ProgressProps[]
  >(null);

  useEffect(() => {
    const pathnameIndex = buttons.findIndex(
      (button) => button.path === pathname,
    );

    setProgressButtonsProps(
      buttons.map(({ path, name }, index) => {
        if (pathnameIndex >= index) {
          return { path, name, currentOrPrevious: true };
        }
        return { path, name, currentOrPrevious: false };
      }),
    );
  }, [pathname]);

  return progressButtonsProps;
};
