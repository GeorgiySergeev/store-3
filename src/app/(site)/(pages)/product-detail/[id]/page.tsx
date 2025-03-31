'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import ShopDetails from '@/components/ShopDetails';
import getOneProduct from '../../../../../api/getOneProduct';
import { createClient } from '../../../../../utils/supabase/client';

const ProductDetails = () => {
  const supabase = createClient();
  const { id } = useParams();
  const [item, setItem] = useState([]); // Ensure useParams is used to get the id
  console.log(id);
  // const numericId = Number(id);

  useEffect(() => {
    // Fetch product data from API here
    const fetchProduct = async () => {
      const product = await supabase.from('items').select('*').eq('id', id).single();
      setItem(product.data || []);
      console.log(product);
    };

    fetchProduct();
  }, [id, supabase]); // Ensure useParams is used to get the id

  console.log(item);
  return <ShopDetails product={item} />;
};

export default ProductDetails; // Ensure the component is exported
