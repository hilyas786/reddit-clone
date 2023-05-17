import React from 'react';
import Navbar from '../Navbar/index';
import { WithChildren } from '@/types/common';

interface LayoutProps extends WithChildren {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
