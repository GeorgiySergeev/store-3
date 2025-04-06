import './css/euclid-circular-a-font.css';
import './css/style.css';

import { Metadata } from 'next';
import { APP_NAME } from '@/constants';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: APP_NAME,
  description: 'Велопланета - найкращий магазин велосипедів та вело товарів.',
  // other metadata
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body data-new-gr-c-s-check-loaded="" data-gr-ext-installed="">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
