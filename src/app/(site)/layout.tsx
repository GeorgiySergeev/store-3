'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { ModalProvider } from '../context/QuickViewModalContext';
import { CartModalProvider } from '../context/CartSidebarModalContext';
import { ReduxProvider } from '@/redux/provider';
import QuickViewModal from '@/components/Common/QuickViewModal';
import CartSidebarModal from '@/components/Common/CartSidebarModal';
import { PreviewSliderProvider } from '../context/PreviewSliderContext';
import { FilterProvider } from '../context/FilterContext';
import PreviewSliderModal from '@/components/Common/PreviewSlider';

import ScrollToTop from '@/components/Common/ScrollToTop';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <CartModalProvider>
        <ModalProvider>
          <FilterProvider>
            <PreviewSliderProvider>
              <Header />
              {children}
              <Footer />

              <QuickViewModal />
              <CartSidebarModal />
              <PreviewSliderModal />
              <ScrollToTop />
            </PreviewSliderProvider>
          </FilterProvider>
        </ModalProvider>
      </CartModalProvider>
    </ReduxProvider>
  );
}
