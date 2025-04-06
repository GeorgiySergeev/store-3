'use client';

import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store';
import { BreadcrumbProvider } from './context/BreadcrumbContext';
import PreLoader from '@/components/Common/PreLoader';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <BreadcrumbProvider>{children}</BreadcrumbProvider>
          </PersistGate>
        </Provider>
      )}
    </>
  );
}
