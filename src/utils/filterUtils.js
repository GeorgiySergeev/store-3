import { useMemo } from 'react';
import categories from '../constants/categories';

/**
 * Фильтрует товары по выбранным категориям
 * @param {Array} products - массив товаров
 * @param {Array} selectedCategories - массив ID выбранных категорий
 * @returns {Array} отфильтрованные товары
 */
export const filterByCategory = (products, selectedCategories) => {
  if (!selectedCategories || selectedCategories.length === 0) {
    return products;
  }

  // Получаем все подкатегории выбранных категорий
  const allCategories = [...selectedCategories];

  // Добавляем дочерние категории, если выбрана родительская
  selectedCategories.forEach((catId) => {
    const category = categories.find((cat) => cat._id === catId);
    if (category && category.children) {
      // Проверяем структуру children - может быть вложенный массив
      const childrenArray = Array.isArray(category.children[0])
        ? category.children[0]
        : category.children;

      childrenArray.forEach((child) => {
        allCategories.push(child._id);
      });
    }
  });

  // Фильтруем товары по всем категориям (включая подкатегории)
  return products.filter(
    (product) =>
      allCategories.includes(product.category_id) || allCategories.includes(product.subcategory_id),
  );
};

/**
 * Фильтрует товары по ценовому диапазону
 * @param {Array} products - массив товаров
 * @param {Object} priceRange - объект с min и max ценой
 * @returns {Array} отфильтрованные товары
 */
export const filterByPrice = (products, priceRange) => {
  if (!priceRange || (!priceRange.min && !priceRange.max)) {
    return products;
  }

  const { min, max } = priceRange;

  return products.filter((product) => {
    const price = parseFloat(product.price);
    if (min && max) {
      return price >= min && price <= max;
    } else if (min) {
      return price >= min;
    } else if (max) {
      return price <= max;
    }
    return true;
  });
};

/**
 * React Hook для комбинированной фильтрации товаров
 * @param {Array} products - массив товаров
 * @param {Object} filters - объект с различными фильтрами
 * @returns {Array} отфильтрованные товары
 */
export const useFilteredProducts = (products, filters) => {
  return useMemo(() => {
    if (!products || products.length === 0) {
      return [];
    }

    let filteredProducts = [...products];

    // Применяем фильтр по категориям
    if (filters.categories && filters.categories.length > 0) {
      filteredProducts = filterByCategory(filteredProducts, filters.categories);
    }

    // Применяем фильтр по цене
    if (filters.priceRange) {
      filteredProducts = filterByPrice(filteredProducts, filters.priceRange);
    }

    // Сортировка результатов
    if (filters.sortBy) {
      filteredProducts = sortProducts(filteredProducts, filters.sortBy);
    }

    return filteredProducts;
  }, [products, filters]);
};

/**
 * Сортирует товары по заданному критерию
 * @param {Array} products - массив товаров
 * @param {String} sortBy - критерий сортировки
 * @returns {Array} отсортированные товары
 */
const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'price-asc':
      return sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    case 'price-desc':
      return sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    case 'name-asc':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    case 'newest':
      return sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    default:
      return sortedProducts;
  }
};
