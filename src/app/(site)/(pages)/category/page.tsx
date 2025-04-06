import React from 'react';
import ShopWithSidebar from '@/components/ShopWithSidebar';

import { Metadata } from 'next';
import CategoryList from '@/components/ShopWithSidebar/CategoryList';
export const metadata: Metadata = {
  title: 'Shop Page | NextCommerce Nextjs E-commerce template',
  description: 'This is Shop Page for NextCommerce Template',
  // other metadata
};

const ShopWithSidebarPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default ShopWithSidebarPage;
