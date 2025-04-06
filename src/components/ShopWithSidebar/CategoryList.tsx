'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { getParentCategories } from '@/constants/categories';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setSelectedCategory } from '@/redux/features/categoryId-slice'; // Создайте этот slice

const CategoryItem = ({ item }) => {
  return (
    <li className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="">
        <Image
          src={item.img || 'images/categories/mountain-bicycle.png'}
          alt="category image"
          width={400}
          height={0}
          className="w-full h-50 object-contain"
        />
        <h3 className=" top-0 right-0 bg-indigo-500 text-black font-bold px-2 py-1 m-2 rounded-md">
          {item.__text}
        </h3>
        <p className=" bottom-0 right-0 bg-gray-800 marker:text-black px-2 py-1 m-2 rounded-md text-xs text-muted-foreground">
          43
        </p>
      </div>
    </li>
  );
};

const CategoryList = () => {
  const [categories, setCategories] = useState(getParentCategories());
  const router = useRouter();
  const dispatch = useDispatch();

  const handleCategoryClick = (category: { _id: string; __path: string }) => {
    // Сохраняем ID в Redux
    dispatch(setSelectedCategory(category._id));
    // Переходим на страницу категории, передавая только название в URL
    router.push(`/category/${category.__path}`);
  };

  return (
    <>
      <div className="container">
        <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 pb-13">
          {categories.map((category, index) => (
            <div key={index} onClick={() => handleCategoryClick(category)}>
              <CategoryItem item={category} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
