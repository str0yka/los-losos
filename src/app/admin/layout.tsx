import React from 'react';

import AdminHeader from '@/app/admin/_components/AdminHeader/AdminHeader';
import Container from '@/components/common/Container/Container';

interface AdminLayoutProps {
  children: React.ReactNode
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => (
  <>
    <AdminHeader />
    <Container width="medium">
      {children}
    </Container>
  </>
);

export default AdminLayout;
