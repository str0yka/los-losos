import localFont from 'next/font/local';

export const museoSans = localFont({
  src: [
    {
      path: './src/MuseoSansCyrl-100.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './src/MuseoSansCyrl-300.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './src/MuseoSansCyrl-500.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './src/MuseoSansCyrl-700.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './src/MuseoSansCyrl-900.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
});
