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
// 6. В папке store или slices сделать папку actions
// 7. Папку slices переименовать в reducers
// 11. Сделать кастомные запросы fetch
// 15. Нужны правила на z-index (css variables)
// 17. Сделать UI-kit (input, button, arrowbutton || button with svg, icon)
// 19. Вместо <span class="visually-hidden"></... сделать отдельный компонент
// 25. Связать CountButton с состояние loading/all
// 26. У промокод должно быть больше опций (когда истекает + мин. сумма применения и тд)
// + они должны привязваться к корзине
// 27. Создать сущность orders и привязать её к пользователю
// 28. У order должно быть состояние (заказ принят, готовится, в пути, доставлен)
// 29. lazy load для category
// 30. intersection observer для category
// 33. Reselect

// 20. Сделать хук useAppDispatch
// 32. Переписать UI-компоненты на s[variant], s[size] вместо s.outlined: variant === 'outlined"

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
