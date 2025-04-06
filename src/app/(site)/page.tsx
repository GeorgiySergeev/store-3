import Home from '@/components/Home';
import { Metadata } from 'next';
import { APP_NAME } from '@/constants';

export const metadata: Metadata = {
  title: APP_NAME,
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
