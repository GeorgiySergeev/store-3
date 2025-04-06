'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

type BreadcrumbItem = {
  label: string;
  path: string;
};

type BreadcrumbContextType = {
  breadcrumbs: BreadcrumbItem[];
  setBreadcrumbs: React.Dispatch<React.SetStateAction<BreadcrumbItem[]>>;
  updateBreadcrumb: (title: string) => void;
  resetBreadcrumbs: () => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

// The issue is likely here - make sure the provider returns the children
export const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: 'Головна', path: '/' },
  ]);
  const pathname = usePathname();

  // Обновляем хлебные крошки при изменении пути
  useEffect(() => {
    // Сохраняем в localStorage для восстановления после перезагрузки
    if (breadcrumbs.length > 1) {
      localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
    }
  }, [breadcrumbs]);

  // Восстанавливаем хлебные крошки из localStorage при загрузке
  useEffect(() => {
    const savedBreadcrumbs = localStorage.getItem('breadcrumbs');
    if (savedBreadcrumbs) {
      const parsed = JSON.parse(savedBreadcrumbs);
      // Проверяем, соответствует ли текущий путь сохраненным хлебным крошкам
      const currentPathInBreadcrumbs = parsed.some(
        (item: BreadcrumbItem) => item.path === pathname,
      );
      if (currentPathInBreadcrumbs) {
        setBreadcrumbs(parsed);
      }
    }
  }, [pathname]);

  // Функция для обновления текущей хлебной крошки
  const updateBreadcrumb = (title: string) => {
    // Проверяем, есть ли уже такой путь в хлебных крошках
    const existingIndex = breadcrumbs.findIndex((item) => item.path === pathname);

    if (existingIndex !== -1) {
      // Если путь уже есть, обновляем только его метку
      const updatedBreadcrumbs = [...breadcrumbs];
      updatedBreadcrumbs[existingIndex] = { ...updatedBreadcrumbs[existingIndex], label: title };
      setBreadcrumbs(updatedBreadcrumbs);
    } else {
      // Если пути нет, добавляем новую хлебную крошку
      setBreadcrumbs((prev) => [...prev, { label: title, path: pathname }]);
    }
  };

  const resetBreadcrumbs = () => {
    setBreadcrumbs([{ label: 'Головна', path: '/' }]);
    localStorage.removeItem('breadcrumbs');
  };

  // Make sure to return the provider with children
  return (
    <BreadcrumbContext.Provider
      value={{ breadcrumbs, setBreadcrumbs, updateBreadcrumb, resetBreadcrumbs }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (context === undefined) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};
