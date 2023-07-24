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
// 11. Сделать кастомные запросы fetch
// 15. Нужны правила на z-index
// 16. ? Для текста сделать компонент Typography
// 17. Сделать UI-kit (input, button, arrowbutton || button with svg, icon)
// 19. Вместо <span class="visually-hidden"></... сделать отдельный компонент
// 20. Сделать хук useAppDispatch
// 22. В компоненте Button вместо variant="outlined-secondary" сделать
// variant="disabled" или просто добавить свойсто disabled
// 23. В компоненте CountButton разобраться с классами
// 24. В ProgressLine не должно быть max-width
// 25. Связать CountButton с состояние loading/all

const RootLayout: React.FC<RootLayoutInterface> = ({ children }) => (
  <html lang="ru" className={MuseoSans.className}>
    <body>
      <StoreProvider>
        <AuthProvider>
          <Header />
          <div className="main">{children}</div>
        </AuthProvider>
      </StoreProvider>
    </body>
  </html>
);

export default RootLayout;
