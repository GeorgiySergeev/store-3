'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ShopDetails from '@/components/ShopDetails';
import getOneProduct from '../../../../../api/getOneProduct';

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]); // Ensure useParams is used to get the id
  console.log(id);
  const numericId = Number(id);

  useEffect(() => {
    // Fetch product data from API here
    const fetchProduct = async () => {
      const product = await getOneProduct(numericId);
      console.log(product);
      setItem(product);
    };

    fetchProduct();
  }, [numericId]);

  console.log(item);
  return <ShopDetails product={item} />;
};

export default ProductDetails; // Ensure the component is exported
