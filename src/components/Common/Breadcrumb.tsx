'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useBreadcrumb } from '@/app/context/BreadcrumbContext';
import { usePathname } from 'next/navigation';

const Breadcrumb = ({ title }: { title?: string }) => {
  const { breadcrumbs, updateBreadcrumb, resetBreadcrumbs } = useBreadcrumb();
  const pathname = usePathname();

  // Если передан title, обновляем текущую хлебную крошку
  useEffect(() => {
    if (title) {
      updateBreadcrumb(title);
    }
  }, [title, updateBreadcrumb]);

  // Проверяем, соответствует ли текущий путь последней хлебной крошке
  useEffect(() => {
    const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
    if (lastCrumb && lastCrumb.path !== pathname && pathname !== '/') {
      // Если мы на странице 404, сбрасываем хлебные крошки при возврате
      if (pathname === '/404') {
        resetBreadcrumbs();
      }
    }
  }, [pathname, breadcrumbs, resetBreadcrumbs]);

  return (
    <div className="overflow-hidden shadow-breadcrumb pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px]">
      <div className="border-t border-gray-3">
        <div className="container w-full mx-auto px-4 sm:px-8 xl:px-0 py-5 xl:py-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-semibold text-dark text-xl sm:text-2xl xl:text-custom-2">
              {title || breadcrumbs[breadcrumbs.length - 1]?.label || 'Головна'}
            </h1>

            <ul className="flex items-center gap-2">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  <li
                    className={`text-custom-sm ${
                      index === breadcrumbs.length - 1 ? 'text-blue' : 'hover:text-blue'
                    }`}>
                    {index === breadcrumbs.length - 1 ? (
                      crumb.label
                    ) : (
                      <Link href={crumb.path}>{crumb.label}</Link>
                    )}
                  </li>
                  {index < breadcrumbs.length - 1 && <li className="text-custom-sm">/</li>}
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
