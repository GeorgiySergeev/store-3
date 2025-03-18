import Home from '@/components/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ВЕЛОПЛАНЕТА | Продаж велосипедів та вело товарів',
  description: 'Велопланета - найкращий магазин велосипедів та вело товарів.',
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
