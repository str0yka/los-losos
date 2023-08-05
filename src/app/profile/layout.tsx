import { Metadata } from 'next';
import React from 'react';

import Container from '@/components/common/Container/Container';
import TitleBlock from '@/components/TitleBlock/TitleBlock';

export const metadata: Metadata = {
  title: 'Профиль | Лось-Лосось',
};

interface ProfileLayoutProps {
  children: React.ReactNode
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => (
  <Container width="medium">
    <TitleBlock
      backTo="/"
      title="Профиль"
    />
    {children}
  </Container>
  );

export default ProfileLayout;
