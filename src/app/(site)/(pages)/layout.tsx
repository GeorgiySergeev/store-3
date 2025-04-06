'use client';
import Breadcrumb from '@/components/Common/Breadcrumb';

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb />
      {children}
    </>
  );
}
