import '@/styles/global.scss';

import { Metadata } from 'next';
import React from 'react';

import Header from '@/app/_components/Header/Header';
import AuthProvider from '@/components/AuthProvider/AuthProvider';
import StoreProvider from '@/components/StoreProvider/StoreProvider';
import { MuseoSans } from '@/fonts';

export const metadata: Metadata = {
  title: 'Лось-Лосось',
  description: 'Караоке-гастропаб',
};

interface RootLayoutInterface {
  children: React.ReactNode;
}

// TODO:
// 4. Кастомная страница авторизации
// 5. Для изображений использовать <Image></Image>
// 17. Сделать UI-kit (input, button, arrowbutton || button with svg, icon)
// 25. Связать CountButton с состояние loading/all
// 26. У промокод должно быть больше опций (когда истекает + мин. сумма применения и тд)
// + они должны привязваться к корзине
// 27. Создать сущность orders и привязать её к пользователю
// 28. У order должно быть состояние (заказ принят, готовится, в пути, доставлен)
// 29. lazy load для category
// 30. intersection observer для category
// 33. Reselect
// 34. (group) route для order cart confirm
// 35. Структура компонентов

// 11. Сделать кастомные запросы fetch
const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => (
  <html lang="ru" className={MuseoSans.className}>
    <body>
      <AuthProvider>
        <StoreProvider>
          <Header />
          <main className="main">{children}</main>
        </StoreProvider>
      </AuthProvider>
    </body>
  </html>
);

export default RootLayout;
