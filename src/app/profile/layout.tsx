import { Metadata } from 'next';
import React from 'react';

import { TitleBlock } from '~components';
import { Container } from '~ui';

import { SignOutButton } from './_components';

export const metadata: Metadata = {
  title: 'Профиль | Лось-Лосось',
};

interface ProfileLayoutProps {
  children: React.ReactNode
}

const ProfileLayout: React.FC<ProfileLayoutProps> = ({ children }) => (
  <main>
    <Container width="medium">
      <TitleBlock
        backTo="/"
        title="Профиль"
        rightSide={<SignOutButton />}
      />
      {children}
    </Container>
  </main>
);

export default ProfileLayout;
