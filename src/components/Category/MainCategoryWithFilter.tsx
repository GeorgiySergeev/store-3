'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/store';
import { useDispatch } from 'react-redux';
import { store } from '@/redux/store';

interface CategoryProps {
  categoryId: string;
  title: string;
  products: any[];
  filters?: any[];
}

const MainCategoryWithFilter = ({ categoryId, title, products, filters = [] }: CategoryProps) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilters, setActiveFilters] = useState({});
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  console.log('REDUX', store);

  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  // useEffect(() => {
  //   // Apply filters to products
  //   let result = [...products];

  //   // Filter logic here based on activeFilters
  //   Object.entries(activeFilters).forEach(([key, value]) => {
  //     if (value) {
  //       result = result.filter((product) => product[key] === value);
  //     }
  //   });

  //   setFilteredProducts(result);
  // }, [activeFilters, products]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Button
          variant="outline"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="flex items-center gap-2">
          <Filter size={18} />
          Фільтри
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar with filters */}
        {isFilterOpen && (
          <div className="bg-white p-4 rounded-lg shadow md:block">
            <h2 className="font-semibold mb-4">Фільтри</h2>

            {filters.map((filter, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-sm font-medium mb-2">{filter.name}</h3>
                <div className="space-y-2">
                  {filter.options.map((option, idx) => (
                    <div key={idx} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`${filter.id}-${idx}`}
                        checked={activeFilters[filter.id] === option.value}
                        onChange={() => handleFilterChange(filter.id, option.value)}
                        className="mr-2"
                      />
                      <label htmlFor={`${filter.id}-${idx}`} className="text-sm">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveFilters({})}
              className="w-full mt-4">
              Скинути фільтри
            </Button>
          </div>
        )}

        {/* Products grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
            isFilterOpen ? 'md:col-span-3' : 'md:col-span-4'
          }`}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <Link href={`/product/${product.id}`}>
                  <div className="p-4">
                    <div className="relative h-48 mb-4">
                      <Image
                        src={product.image || '/images/placeholder.png'}
                        alt={product.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-blue-600 font-bold">{product.price} грн</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-gray-500">Товари не знайдено</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCategoryWithFilter;
