'use client';
import React, { useState, useEffect } from 'react';
import { useFilteredProducts } from '../../utils/filterUtils';
import { createClient } from '../../utils/supabase/client';
// import { cookies } from 'next/headers';
import getAllProducts from '../../api/getAllProducts';
import categoriesHandler from '../../helpers/categoriesHandler';
// import supabase from '../../api/supabaseClient';

import Breadcrumb from '../Common/Breadcrumb';
import CustomSelect from './CustomSelect';
import CategoryDropdown from './CategoryDropdown';
import GenderDropdown from './SubcategoriesDropdown';
import SizeDropdown from './SizeDropdown';
import ColorsDropdwon from './ColorsDropdwon';
import PriceDropdown from './PriceDropdown';
// import shopData from '../Shop/shopData';
import SingleGridItem from '../Shop/SingleGridItem';
import SingleListItem from '../Shop/SingleListItem';

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { data } from 'autoprefixer';

import {
  getAllCategoryIds,
  getChildrenCategories,
  isParentCategory,
} from '../../constants/categories';

import { useFilter, FilterProvider } from '../../app/context/FilterContext';
import SubcategoriesDropdoun from './SubcategoriesDropdown';

// Wrap the main component with the context provider
// Добавьте импорт нового компонента
import ThirdLevelCategoriesDropdown from './ThirdLevelCategoriesDropdown';
import defaultCategories from '../../constants/categories';

// В компоненте ShopWithSidebar обновите:
const ShopWithSidebar = () => {
  // const cookieStore = cookies();
  const supabase = createClient();
  const [productStyle, setProductStyle] = useState('grid');
  const [productSidebar, setProductSidebar] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [products, setProducts] = useState([]); // Fixed state initialization
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fixed state initialization
  // const [selectedCategories, setSelectedCategories] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [showingItems, setShowingItems] = useState('12');
  const { resetFilters, selectedCategories, selectedSubcategories, selectedThirdLevelCategories } =
    useFilter();

  const [childrenCategories, setChildrenCategories] = useState(selectedCategories); // State for children categories
  const [parentCategoryId, setParentCategoryId] = useState(null); // State for parent category ID
  const [categoryIds, setCategoryIds] = useState([]); // State for category IDs
  const [subCategories, setSubcategories] = useState([]);
  // const [filter, setFilter] = useState(false);

  // const { isFiltered, resetFilters } = useFilter();

  // ? FILTER
  // const [filters, setFilters] = useState({
  //   categories: [],
  //   priceRange: { min: null, max: null },
  //   sortBy: 'newest',
  // });

  // const filteredProducts = useFilteredProducts(products, filters);
  // Handler for filter changes
  // const handleFilterChange = (filterType, value) => {
  //   setFilters((prev) => ({
  //     ...prev,
  //     [filterType]: value,
  //   }));
  // };
  // Получаем общее количество товаров

  useEffect(() => {
    console.log(selectedSubcategories);
    const fetchProducts = async () => {
      try {
        // Импортируем функцию для получения всех вложенных категорий
        const { getAllDescendantCategoryIds } = require('../../constants/categories');

        // Создаем базовый запрос для count с теми же фильтрами
        let countQuery = supabase.from('items').select('*', { count: 'exact', head: true });

        // Базовый запрос для данных
        let dataQuery = supabase.from('items').select('*');

        // Собираем условия фильтрации
        const filters = [];

        // Условия для категорий - получаем все вложенные категории
        if (selectedCategories.length > 0) {
          // Получаем все ID категорий, включая вложенные подкатегории всех уровней
          const allCategoryIds = [];

          // Для каждой выбранной категории получаем все её дочерние категории
          for (const categoryId of selectedCategories) {
            const descendantIds = getAllDescendantCategoryIds(categoryId);
            allCategoryIds.push(...descendantIds);
          }

          // Удаляем дубликаты
          const uniqueCategoryIds = Array.from(new Set(allCategoryIds));

          if (uniqueCategoryIds.length > 0) {
            // Товары в выбранных категориях ИЛИ их дочерних подкатегориях
            filters.push(`categoryId.in.(${uniqueCategoryIds.join(',')})`);
          }
        }

        // Условия для подкатегорий
        if (selectedSubcategories.length > 0) {
          // Товары напрямую в выбранных подкатегориях
          filters.push(`categoryId.in.(${selectedSubcategories.join(',')})`);
        }

        // Применяем фильтры только если есть условия
        if (filters.length > 0) {
          const orString = filters.join(',');
          countQuery = countQuery.or(orString);
          dataQuery = dataQuery.or(orString);
        }

        // Отдельное условие для категорий третьего уровня
        if (selectedThirdLevelCategories.length > 0) {
          console.log('Using third level categories for filtering:', selectedThirdLevelCategories);

          // Применяем фильтр для категорий третьего уровня отдельно
          countQuery = countQuery.or(`categoryId.in.(${selectedThirdLevelCategories.join(',')})`);
          dataQuery = dataQuery.or(`categoryId.in.(${selectedThirdLevelCategories.join(',')})`);

          // Для отладки выведем сформированный запрос
          console.log(
            'Third level filter query:',
            `categoryId.in.(${selectedThirdLevelCategories.join(',')})`,
          );
        }

        // Выполняем запросы
        const { count, error: countError } = await countQuery;
        if (countError) throw countError;
        setTotalProducts(count || 0);

        // Пагинация
        const { data: items, error } = await dataQuery.range(
          (currentPage - 1) * 12,
          currentPage * 12 - 1,
        );

        if (error) throw error;
        setProducts(items || []);
      } catch (error) {
        console.error('Error fetching products:', error.message);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [
    supabase,
    currentPage,
    selectedCategories,
    selectedSubcategories,
    selectedThirdLevelCategories,
  ]); // Removed childrenCategories and subCategories from dependencies

  // const handledCategories = categoriesHandler(categories);
  // console.log('Categories after handling:', handledCategories);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const options = [
    { label: 'За ціною меньш', value: 'price-asc' },
    { label: 'За ціною більш', value: 'price-desc' },
    { label: 'За назвою А-Я', value: 'name-asc' },
    { label: 'За назвою Я-А', value: 'name-desc' },
    { label: 'За новістю', value: 'newest' },
  ];

  useEffect(() => {
    window.addEventListener('scroll', handleStickyMenu);

    // closing sidebar while clicking outside
    function handleClickOutside(event) {
      if (!event.target.closest('.sidebar-content')) {
        setProductSidebar(false);
      }
    }

    if (productSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  // const clearFilter = () => {
  //   resetFilters();
  //   return false;
  // };

  return (
    <>
      <Breadcrumb title={'Всі товари'} pages={['магазин']} />
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-28 bg-[#f3f4f6]">
        <div className="container w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-8 justify-between">
            {/* <!-- Sidebar Start --> */}
            <div
              className={`sidebar-content fixed xl:z-1 z-9999 left-0 top-0 xl:translate-x-0 xl:static max-w-[310px] xl:max-w-[370px] w-full ease-out duration-200 ${
                productSidebar
                  ? 'translate-x-0 bg-white p-5 h-screen overflow-y-auto'
                  : '-translate-x-full'
              }`}>
              <button
                onClick={() => setProductSidebar(!productSidebar)}
                aria-label="button for product sidebar toggle"
                className={`xl:hidden absolute -right-12.5 sm:-right-8 flex items-center justify-center w-8 h-8 rounded-md bg-white shadow-1 ${
                  stickyMenu ? 'lg:top-20 sm:top-34.5 top-35' : 'lg:top-24 sm:top-39 top-37'
                }`}>
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0068 3.44714C10.3121 3.72703 10.3328 4.20146 10.0529 4.5068L5.70494 9.25H20C20.4142 9.25 20.75 9.58579 20.75 10C20.75 10.4142 20.4142 10.75 20 10.75H4.00002C3.70259 10.75 3.43327 10.5742 3.3135 10.302C3.19374 10.0298 3.24617 9.71246 3.44715 9.49321L8.94715 3.49321C9.22704 3.18787 9.70147 3.16724 10.0068 3.44714Z"
                    fill=""
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.6865 13.698C20.5668 13.4258 20.2974 13.25 20 13.25L4.00001 13.25C3.5858 13.25 3.25001 13.5858 3.25001 14C3.25001 14.4142 3.5858 14.75 4.00001 14.75L18.2951 14.75L13.9472 19.4932C13.6673 19.7985 13.6879 20.273 13.9932 20.5529C14.2986 20.8328 14.773 20.8121 15.0529 20.5068L20.5529 14.5068C20.7539 14.2876 20.8063 13.9703 20.6865 13.698Z"
                    fill=""
                  />
                </svg>
              </button>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-6">
                  {/* <!-- filter box --> */}
                  <div className="bg-white shadow-1 rounded-lg py-4 px-5">
                    <div className="flex items-center justify-between">
                      <p>Сортувати:</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          resetFilters();
                        }}
                        className="text-blue">
                        Очистити{' '}
                      </button>
                    </div>
                  </div>

                  {/* <!-- category box --> */}
                  <CategoryDropdown />

                  {/* <!-- gender box --> */}
                  <SubcategoriesDropdoun />
                  <ThirdLevelCategoriesDropdown categories={defaultCategories} />

                  {/* <!-- size box --> */}

                  {/* // <!-- size box --> */}
                  <SizeDropdown />

                  {/* // <!-- color box --> */}
                  <ColorsDropdwon />

                  {/* // <!-- price range box --> */}
                  <PriceDropdown />
                </div>
              </form>
            </div>
            {/* // <!-- Sidebar End --> */}

            {/* // <!-- Content Start --> */}
            <div className=" w-full">
              <div className="rounded-lg bg-white shadow-1 pl-3 pr-2.5 py-2.5 mb-6">
                <div className="flex items-center justify-between">
                  {/* <!-- top bar left --> */}
                  <div className="flex flex-wrap items-center gap-4">
                    <CustomSelect options={options} />

                    <p>
                      Всього товарів:{' '}
                      <span className="text-dark">
                        <span>{totalProducts}</span>
                      </span>{' '}
                    </p>
                  </div>

                  {/* <!-- top bar right --> */}
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => setProductStyle('grid')}
                      aria-label="button for product grid tab"
                      className={`${
                        productStyle === 'grid'
                          ? 'bg-blue border-blue text-white'
                          : 'text-dark bg-gray-1 border-gray-3'
                      } flex items-center justify-center w-10.5 h-9 rounded-[5px] border ease-out duration-200 hover:bg-blue hover:border-blue hover:text-white`}>
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.836 1.3125C4.16215 1.31248 3.60022 1.31246 3.15414 1.37244C2.6833 1.43574 2.2582 1.57499 1.91659 1.91659C1.57499 2.2582 1.43574 2.6833 1.37244 3.15414C1.31246 3.60022 1.31248 4.16213 1.3125 4.83598V4.914C1.31248 5.58785 1.31246 6.14978 1.37244 6.59586C1.43574 7.06671 1.57499 7.49181 1.91659 7.83341C2.2582 8.17501 2.6833 8.31427 3.15414 8.37757C3.60022 8.43754 4.16213 8.43752 4.83598 8.4375H4.914C5.58785 8.43752 6.14978 8.43754 6.59586 8.37757C7.06671 8.31427 7.49181 8.17501 7.83341 7.83341C8.17501 7.49181 8.31427 7.06671 8.37757 6.59586C8.43754 6.14978 8.43752 5.58787 8.4375 4.91402V4.83601C8.43752 4.16216 8.43754 3.60022 8.37757 3.15414C8.31427 2.6833 8.17501 2.2582 7.83341 1.91659C7.49181 1.57499 7.06671 1.43574 6.59586 1.37244C6.14978 1.31246 5.58787 1.31248 4.91402 1.3125H4.836ZM2.71209 2.71209C2.80983 2.61435 2.95795 2.53394 3.30405 2.4874C3.66632 2.4387 4.15199 2.4375 4.875 2.4375C5.59801 2.4375 6.08368 2.4387 6.44596 2.4874C6.79205 2.53394 6.94018 2.61435 7.03791 2.71209C7.13565 2.80983 7.21607 2.95795 7.2626 3.30405C7.31131 3.66632 7.3125 4.15199 7.3125 4.875C7.3125 5.59801 7.31131 6.08368 7.2626 6.44596C7.21607 6.79205 7.13565 6.94018 7.03791 7.03791C6.94018 7.13565 6.79205 7.21607 6.44596 7.2626C6.08368 7.31131 5.59801 7.3125 4.875 7.3125C4.15199 7.3125 3.66632 7.31131 3.30405 7.2626C2.95795 7.21607 2.80983 7.13565 2.71209 7.03791C2.61435 6.94018 2.53394 6.79205 2.4874 6.44596C2.4387 6.08368 2.4375 5.59801 2.4375 4.875C2.4375 4.15199 2.4387 3.66632 2.4874 3.30405C2.53394 2.95795 2.61435 2.80983 2.71209 2.71209Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.086 9.5625C12.4121 9.56248 11.8502 9.56246 11.4041 9.62244C10.9333 9.68574 10.5082 9.82499 10.1666 10.1666C9.82499 10.5082 9.68574 10.9333 9.62244 11.4041C9.56246 11.8502 9.56248 12.4121 9.5625 13.086V13.164C9.56248 13.8379 9.56246 14.3998 9.62244 14.8459C9.68574 15.3167 9.82499 15.7418 10.1666 16.0834C10.5082 16.425 10.9333 16.5643 11.4041 16.6276C11.8502 16.6875 12.4121 16.6875 13.0859 16.6875H13.164C13.8378 16.6875 14.3998 16.6875 14.8459 16.6276C15.3167 16.5643 15.7418 16.425 16.0834 16.0834C16.425 15.7418 16.5643 15.3167 16.6276 14.8459C16.6875 14.3998 16.6875 13.8379 16.6875 13.1641V13.086C16.6875 12.4122 16.6875 11.8502 16.6276 11.4041C16.5643 10.9333 16.425 10.5082 16.0834 10.1666C15.7418 9.82499 15.3167 9.68574 14.8459 9.62244C14.3998 9.56246 13.8379 9.56248 13.164 9.5625H13.086ZM10.9621 10.9621C11.0598 10.8644 11.208 10.7839 11.554 10.7374C11.9163 10.6887 12.402 10.6875 13.125 10.6875C13.848 10.6875 14.3337 10.6887 14.696 10.7374C15.0421 10.7839 15.1902 10.8644 15.2879 10.9621C15.3857 11.0598 15.4661 11.208 15.5126 11.554C15.5613 11.9163 15.5625 12.402 15.5625 13.125C15.5625 13.848 15.5613 14.3337 15.5126 14.696C15.4661 15.0421 15.3857 15.1902 15.2879 15.2879C15.1902 15.3857 15.0421 15.4661 14.696 15.5126C14.3337 15.5613 13.848 15.5625 13.125 15.5625C12.402 15.5625 11.9163 15.5613 11.554 15.5126C11.208 15.4661 11.0598 15.3857 10.9621 15.2879C10.8644 15.1902 10.7839 15.0421 10.7374 14.696C10.6887 14.3337 10.6875 13.848 10.6875 13.125C10.6875 12.402 10.6887 11.9163 10.7374 11.554C10.7839 11.208 10.8644 11.0598 10.9621 10.9621Z"
                          fill=""
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.836 9.5625H4.914C5.58786 9.56248 6.14978 9.56246 6.59586 9.62244C7.06671 9.68574 7.49181 9.82499 7.83341 10.1666C8.17501 10.5082 8.31427 10.9333 8.37757 11.4041C8.43754 11.8502 8.43752 12.4121 8.4375 13.086V13.164C8.43752 13.8378 8.43754 14.3998 8.37757 14.8459C8.31427 15.3167 8.17501 15.7418 7.83341 16.0834C7.49181 16.425 7.06671 16.5643 6.59586 16.6276C6.14979 16.6875 5.58789 16.6875 4.91405 16.6875H4.83601C4.16217 16.6875 3.60022 16.6875 3.15414 16.6276C2.6833 16.5643 2.2582 16.425 1.91659 16.0834C1.57499 15.3292 1.02314 14.9041 0.959838 14.4333C0.899864 13.9872 0.899882 13.4253 0.899903 12.7514C0.899882 11.9996 0.899864 11.4376 0.959838 10.9915C1.02314 10.5207 1.16239 10.0956 1.504 9.754C1.8456 9.41239 2.2707 9.27314 2.74155 9.20984C3.18763 9.14986 3.74955 9.14988 4.4234 9.1499ZM2.89145 10.3248C2.54535 10.3713 2.39723 10.4518 2.29949 10.5495C2.20175 10.6472 2.12134 10.7954 2.07481 11.1414C2.0261 11.5037 2.0249 11.9894 2.0249 12.7124C2.0249 13.4354 2.0261 13.9211 2.07481 14.2834C2.12134 14.6295 2.20175 14.7776 2.29949 14.8753C2.39723 14.9731 2.54535 15.0535 2.89145 15.1C3.25373 15.1487 3.7394 15.1499 4.4624 15.1499C5.18541 15.1499 14.6711 15.1487 15.0334 15.1C15.3795 15.0535 15.5276 14.9731 15.6253 14.8753C15.7231 14.7776 15.8035 14.6295 15.85 14.2834C15.8987 13.9211 15.8999 13.4354 15.8999 12.7124C15.8999 11.9894 15.8987 11.5037 15.85 11.1414C15.8035 10.7954 15.7231 10.6472 15.6253 10.5495C15.5276 10.4518 15.3795 10.3713 15.0334 10.3248C14.6711 10.2761 5.18541 10.2749 4.4624 10.2749C3.7394 10.2749 3.25373 10.2761 2.89145 10.3248Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Products Grid Tab Content Start -->  */}
              <div
                className={`${
                  productStyle === 'grid'
                    ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7.5 gap-y-9'
                    : 'flex flex-col gap-7.5'
                }`}>
                {products.map((item, key) =>
                  productStyle === 'grid' ? (
                    <SingleGridItem item={item} key={key} />
                  ) : (
                    <SingleListItem item={item} key={key} />
                  ),
                )}
              </div>
              {/* <!-- Products Grid Tab Content End --> */}

              {/* <!-- Products Pagination Start --> */}
              <Pagination className={'container mt-12'}>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      aria-disabled={currentPage === 1}
                    />
                  </PaginationItem>
                  {(() => {
                    const totalPages = Math.ceil(totalProducts / 12);
                    const maxVisiblePages = 5;
                    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
                    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

                    if (endPage - startPage + 1 < maxVisiblePages) {
                      startPage = Math.max(1, endPage - maxVisiblePages + 1);
                    }

                    return (
                      <>
                        {startPage > 1 && (
                          <PaginationItem>
                            <PaginationLink onClick={() => setCurrentPage(1)}>1</PaginationLink>
                          </PaginationItem>
                        )}
                        {startPage > 2 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
                          <PaginationItem key={startPage + i}>
                            <PaginationLink
                              className={'cursor-pointer'}
                              onClick={() => setCurrentPage(startPage + i)}
                              isActive={currentPage === startPage + i}>
                              {startPage + i}
                            </PaginationLink>
                          </PaginationItem>
                        ))}
                        {endPage < totalPages - 1 && (
                          <PaginationItem>
                            <PaginationEllipsis />
                          </PaginationItem>
                        )}
                        {endPage < totalPages && (
                          <PaginationItem>
                            <PaginationLink onClick={() => setCurrentPage(totalPages)}>
                              {totalPages}
                            </PaginationLink>
                          </PaginationItem>
                        )}
                      </>
                    );
                  })()}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(Math.ceil(totalProducts / 12), prev + 1))
                      }
                      aria-disabled={currentPage === Math.ceil(totalProducts / 12)}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

              {/* <!-- Products Pagination End --> */}
            </div>
            {/* // <!-- Content End --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopWithSidebar;
