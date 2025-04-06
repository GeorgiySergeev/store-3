import React from 'react';
import { useFilter, FilterProvider } from '../../app/context/FilterContext';

function Filter() {
  const { resetFilters } = useFilter();
  return (
    <div>
      {' '}
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
          {/* <CategoryDropdown /> */}

          {/* <!-- gender box --> */}
          {/* <SubcategoriesDropdoun /> */}
          {/* <ThirdLevelCategoriesDropdown categories={defaultCategories} /> */}

          {/* <!-- size box --> */}

          {/* // <!-- size box --> */}
          {/* <SizeDropdown /> */}

          {/* // <!-- color box --> */}
          {/* <ColorsDropdwon /> */}

          {/* // <!-- price range box --> */}
          {/* <PriceDropdown /> */}
        </div>
      </form>
    </div>
  );
}

export default Filter;
