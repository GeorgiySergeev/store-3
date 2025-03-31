'use client';

import { useState, useEffect } from 'react';
import { getParentCategories } from '../../constants/categories';
import { useFilter } from '../../app/context/FilterContext';
import defaultCategories from '../../constants/categories';
import { ChevronUp } from 'lucide-react';

const CategoryItem = ({ category, onSelect, isSelected }) => {
  const handleSelect = () => {
    onSelect(category._id, !isSelected);
  };

  return (
    <button
      className={`${
        isSelected && 'text-blue'
      } group flex items-center justify-between ease-out duration-200 hover:text-blue `}
      onClick={handleSelect}>
      <div className="flex items-center gap-2">
        <div
          className={`cursor-pointer flex items-center justify-center rounded w-4 h-4 border ${
            isSelected ? 'border-blue bg-blue' : 'bg-white border-gray-3'
          }`}>
          <svg
            className={isSelected ? 'block' : 'hidden'}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>{category.__text}</span>
      </div>

      <span
        className={`${
          isSelected ? 'text-white bg-blue' : 'bg-gray-2'
        } inline-flex rounded-[30px] text-custom-xs px-2 ease-out duration-200 group-hover:text-white group-hover:bg-blue`}>
        {category.products}
      </span>
    </button>
  );
};

const CategoryDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const { selectedCategories, setSelectedCategories } = useFilter();
  const [categories] = useState(defaultCategories);

  // Handle category selection
  const handleCategorySelect = (categoryId, isSelected) => {
    let updatedCategories;

    if (isSelected) {
      updatedCategories = [...selectedCategories, categoryId];
    } else {
      updatedCategories = selectedCategories.filter((id) => id !== categoryId);
    }

    setSelectedCategories(updatedCategories);
  };

  return (
    <div className="bg-white shadow-1 rounded-lg">
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className={`cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5 ${
          toggleDropdown && 'shadow-filter'
        }`}>
        <p className="text-dark">Категорії</p>
        <button
          aria-label="button for category dropdown"
          className={`text-dark ease-out duration-200 ${toggleDropdown && 'rotate-180'}`}>
          <ChevronUp />
        </button>
      </div>

      {/* dropdown menu */}
      <div className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${toggleDropdown ? 'flex' : 'hidden'}`}>
        {categories.map((category, key) => (
          <CategoryItem
            key={key}
            category={category}
            onSelect={handleCategorySelect}
            isSelected={selectedCategories.includes(category._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryDropdown;
