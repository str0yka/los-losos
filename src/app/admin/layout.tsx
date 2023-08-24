import React from 'react';

import { Container } from '~ui';

import { AdminHeader } from './_sections';

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = async ({ children }) => (
  <main>
    <AdminHeader />
    <Container width="medium">
      {children}
    </Container>
  </main>
);

export default AdminLayout;
