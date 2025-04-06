'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store';
import { BreadcrumbProvider } from '@/contexts/BreadcrumbContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BreadcrumbProvider>{children}</BreadcrumbProvider>
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
