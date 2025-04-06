'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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

export const BreadcrumbProvider = ({ children }: { children: React.ReactNode }) => {
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: 'Головна', path: '/' },
  ]);
  const pathname = usePathname();
  const router = useRouter();

  // Отслеживаем изменения пути
  useEffect(() => {
    // Проверяем, есть ли текущий путь в хлебных крошках
    const pathExists = breadcrumbs.some((crumb) => crumb.path === pathname);

    // Если пути нет и это не главная страница, добавляем временную метку
    if (!pathExists && pathname !== '/') {
      // Извлекаем последний сегмент пути для временной метки
      const segments = pathname.split('/').filter(Boolean);
      const tempLabel = segments[segments.length - 1] || 'Страница';

      // Добавляем временную хлебную крошку
      setBreadcrumbs((prev) => {
        // Проверяем, нужно ли сохранить предыдущие крошки
        // Если новый путь является подпутем предыдущего, сохраняем иерархию
        const isSubPath = prev.some(
          (crumb) => pathname.startsWith(crumb.path) && crumb.path !== '/',
        );

        if (isSubPath) {
          return [...prev, { label: tempLabel, path: pathname }];
        } else {
          // Если это новый путь, начинаем с главной
          return [
            { label: 'Головна', path: '/' },
            { label: tempLabel, path: pathname },
          ];
        }
      });
    }

    // Сохраняем в localStorage
    if (breadcrumbs.length > 1) {
      localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs));
    }
  }, [pathname, breadcrumbs]);

  // Восстанавливаем хлебные крошки из localStorage при загрузке
  useEffect(() => {
    const savedBreadcrumbs = localStorage.getItem('breadcrumbs');
    if (savedBreadcrumbs) {
      try {
        const parsed = JSON.parse(savedBreadcrumbs);
        // Проверяем, соответствует ли текущий путь сохраненным хлебным крошкам
        const currentPathInBreadcrumbs = parsed.some(
          (item: BreadcrumbItem) => item.path === pathname,
        );

        if (currentPathInBreadcrumbs) {
          setBreadcrumbs(parsed);
        }
      } catch (error) {
        console.error('Error parsing breadcrumbs from localStorage', error);
        localStorage.removeItem('breadcrumbs');
      }
    }
  }, []);

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
      setBreadcrumbs((prev) => {
        // Проверяем, является ли текущий путь подпутем последней крошки
        const lastCrumb = prev[prev.length - 1];
        if (lastCrumb && pathname.startsWith(lastCrumb.path) && lastCrumb.path !== '/') {
          return [...prev, { label: title, path: pathname }];
        }

        // Если это новый независимый путь, начинаем с главной
        if (prev.length === 1 || !pathname.startsWith(prev[1].path)) {
          return [
            { label: 'Головна', path: '/' },
            { label: title, path: pathname },
          ];
        }

        // Иначе добавляем к существующим
        return [...prev, { label: title, path: pathname }];
      });
    }
  };

  // Функция для сброса хлебных крошек
  const resetBreadcrumbs = () => {
    setBreadcrumbs([{ label: 'Головна', path: '/' }]);
    localStorage.removeItem('breadcrumbs');
  };

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
