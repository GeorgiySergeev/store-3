import { useEffect } from 'react';
// Update this import
import { useBreadcrumb } from '@/app/context/BreadcrumbContext';

export const useBreadcrumbUpdate = (title: string) => {
  const { updateBreadcrumb } = useBreadcrumb();

  useEffect(() => {
    updateBreadcrumb(title);
  }, [title, updateBreadcrumb]);
};
