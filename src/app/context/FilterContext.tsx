'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the context type
interface FilterContextType {
  isFiltered: boolean;
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  resetFilters: () => void;
}

// Create the context with default values
const FilterContext = createContext<FilterContextType>({
  isFiltered: false,
  selectedCategories: [],
  setSelectedCategories: () => {},
  resetFilters: () => {},
});

// Custom hook to use the filter context
export const useFilter = () => useContext(FilterContext);

// Provider component
export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Update isFiltered state when any filter changes
  useEffect(() => {
    if (selectedCategories.length > 0) {
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
  }, [selectedCategories]);

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategories([]);
    setIsFiltered(false);
  };

  return (
    <FilterContext.Provider
      value={{
        isFiltered,
        selectedCategories,
        setSelectedCategories,
        resetFilters,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
