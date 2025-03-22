export type Product = {
  id: number;
  name: string;
  price: string;
  categories?: [];
  sale_price?: number;
  slug?: string;
  defaultImage?: string;
  describtion?: string;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
  images?: [
    {
      id: number;
      src: string;
      alt: string;
    },
  ];
};
