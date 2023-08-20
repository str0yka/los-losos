import '~styles/global.scss';
import '~styles/zero.scss';

import { Metadata } from 'next';
import React from 'react';

import {
  AuthProvider,
  Footer,
  Header,
  StoreProvider,
} from '~components';
import { museoSans } from '~fonts';

export const metadata: Metadata = {
  title: 'Лось-Лосось',
  description: 'Караоке-гастропаб',
};

// TODO:
// 4. Кастомная страница авторизации
// 5. Для изображений использовать <Image></Image>
// 17. Сделать UI-kit (input, button, arrowbutton || button with svg, icon)
// 26. У промокод должно быть больше опций (когда истекает + мин. сумма применения и тд)
// + они должны привязваться к корзине
// 27. Создать сущность orders и привязать её к пользователю
// 28. У order должно быть состояние (заказ принят, готовится, в пути, доставлен)
// 29. lazy load для category
// 30. intersection observer для category
// 33. Reselect
// 35. Структура компонентов
// 36. Обработать случай, когда промокод не верный
// 39. AdminProvider
// 40. page.tsx компоненты переименовать в ...Page
// 44. main у page.tsx

interface RootLayoutInterface {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => (
  <html
    lang="ru"
    className={museoSans.className}
  >
    <AuthProvider>
      <StoreProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </StoreProvider>
    </AuthProvider>
  </html>
);

export default RootLayout;
