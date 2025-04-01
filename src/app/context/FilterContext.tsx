'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context type
interface FilterContextType {
  isFiltered: boolean;
  selectedCategories: string[];
  selectedSubcategories: string[]; // Add this
  selectedThirdLevelCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  setSelectedSubcategories: (subcategories: string[]) => void; // Add this
  setSelectedThirdLevelCategories: (categories: string[]) => void;
  resetFilters: () => void;
}

// Create the context with default values
const FilterContext = createContext<FilterContextType>({
  isFiltered: false,
  selectedCategories: [],
  selectedSubcategories: [],
  selectedThirdLevelCategories: [], // Add this missing property
  setSelectedCategories: () => {},
  setSelectedSubcategories: () => {},
  setSelectedThirdLevelCategories: () => {}, // Add this missing property
  resetFilters: () => {},
});

// Custom hook to use the filter context
export const useFilter = () => useContext(FilterContext);

// Provider component
// Добавьте в интерфейс FilterContextType:
interface FilterContextType {
  isFiltered: boolean;
  selectedCategories: string[];
  selectedSubcategories: string[]; // Add this
  selectedThirdLevelCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  setSelectedSubcategories: (subcategories: string[]) => void; // Add this
  setSelectedThirdLevelCategories: (categories: string[]) => void;
  resetFilters: () => void;
}

// В FilterProvider добавьте:
export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]); // Add this
  const [selectedThirdLevelCategories, setSelectedThirdLevelCategories] = useState<string[]>([]);

  useEffect(() => {
    setIsFiltered(
      selectedCategories.length > 0 ||
        selectedSubcategories.length > 0 ||
        selectedThirdLevelCategories.length > 0,
    );
  }, [selectedCategories, selectedSubcategories, selectedThirdLevelCategories]);

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedSubcategories([]);
    setSelectedThirdLevelCategories([]);
    setIsFiltered(false);
  };

  return (
    <FilterContext.Provider
      value={{
        isFiltered,
        selectedCategories,
        selectedSubcategories, // Add this
        setSelectedCategories,
        setSelectedSubcategories, // Add this
        selectedThirdLevelCategories,
        setSelectedThirdLevelCategories,
        resetFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
