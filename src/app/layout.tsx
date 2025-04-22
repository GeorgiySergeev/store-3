// layout top lavel
import './css/euclid-circular-a-font.css';
import './css/style.css';

import { Metadata } from 'next';
import { APP_NAME, APP_DESCRIPTION } from '@/constants';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  // other metadata
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk" suppressHydrationWarning={true}>
      <body data-new-gr-c-s-check-loaded="" data-gr-ext-installed="">
        {children}
      </body>
    </html>
  );
}
