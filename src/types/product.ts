export type Product = {
  id: number;
  name: string;
  price: string;
  sale_price?: string;
  categories?: [];
  slug?: string;
  defaultImage?: string;
  describtion?: string;
  status?: string;
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
