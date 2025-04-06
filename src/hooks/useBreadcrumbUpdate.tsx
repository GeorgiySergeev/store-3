import { useEffect } from 'react';
import { useBreadcrumb } from '@/contexts/BreadcrumbContext';

export const useBreadcrumbUpdate = (title: string) => {
  const { updateBreadcrumb } = useBreadcrumb();

  useEffect(() => {
    updateBreadcrumb(title);
  }, [title, updateBreadcrumb]);
};
