import '~styles/global.scss';
import '~styles/zero.scss';

import { Metadata } from 'next';
import React from 'react';

import { Footer, Header, MobileMenu } from '~components';
import { museoSans } from '~fonts';
import { AuthProvider, StoreProvider } from '~providers';

export const metadata: Metadata = {
  title: 'Лось-Лосось',
  description: 'Караоке-гастропаб',
};

// TODO:
// 4. Кастомная страница авторизации
// 5. Для изображений использовать <Image></Image>
// 33. Reselect
// 36. Обработать случай, когда промокод не верный
// 44. main у page.tsx

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html
    lang="ru"
    className={museoSans.className}
  >
    <AuthProvider>
      <StoreProvider>
        <body>
          <Header />
          <MobileMenu />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </AuthProvider>
  </html>
);

export default RootLayout;
