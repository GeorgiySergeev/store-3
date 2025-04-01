'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/pagination';
import 'swiper/css';

import Image from 'next/image';
import Link from 'next/link';

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel">
      <SwiperSlide>
        <div className="relative swiper__slide-wrapper ">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover  bg-left bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero/hero-ai.png')" }}>
            {/* <div className="absolute inset-0  bg-muted-foreground opacity-50 z-10"></div> */}
            <div className="absolute inset-0 muted-background opacity-50 z-10"></div>
          </div>

          {/* Overlay with Gradient */}

          {/* Slide Content */}
          <div className="relative flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row z-20">
            <div className="ml-auto p-40 sm:p-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue-dark">
                  2025
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                  модельний
                  <br />
                  ряд
                </span>
              </div>

              <h1 className="block uppercase font-semibold text-heading-2 md:text-heading-1 text-white mb-3">
                Гірські велосипеди
              </h1>

              <h3 className="text-heading-4">Швидко.Екологічно.Економічно.</h3>

              <Link
                href={`/shop`}
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10">
                <button>До магазину</button>
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative swiper__slide-wrapper ">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero/hero-3.jpg')" }}>
            {/* <div className="absolute inset-0  bg-muted-foreground opacity-50 z-10"></div> */}
            <div className="absolute inset-0 muted-background opacity-70 z-10"></div>
          </div>

          {/* Overlay with Gradient */}

          {/* Slide Content */}
          <div className="relative flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row z-20">
            <div className="ml-auto p-40 sm:p-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue-dark">
                  2025
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                  модельний
                  <br />
                  ряд
                </span>
              </div>

              <h1 className="block uppercase font-semibold text-heading-2 md:text-heading-1 text-white mb-3">
                Міські велосипеди
              </h1>

              <h3 className="text-heading-4">Комфорт та стиль в одному ровері.</h3>

              <Link
                href={`/shop`}
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10">
                До магазину
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative swiper__slide-wrapper ">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-include bg-no-repeat bg-left "
            style={{ backgroundImage: "url('/images/hero/hero-4.jpg')" }}>
            {/* <div className="absolute inset-0  bg-muted-foreground opacity-50 z-10"></div> */}
            <div className="absolute inset-0 muted-background opacity-70 z-10"></div>
          </div>

          {/* Overlay with Gradient */}

          {/* Slide Content */}
          <div className="relative flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row z-20">
            <div className="ml-auto p-40 sm:p-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue-dark">
                  2025
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                  модельний
                  <br />
                  ряд
                </span>
              </div>

              <h1 className="block uppercase font-semibold text-heading-2 md:text-heading-1 text-white mb-3">
                Електро велосипеди
              </h1>

              <h3 className="text-heading-4">Технологічні. Сучасні. Економічні.</h3>

              <Link
                href={`/shop`}
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10">
                До магазину
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative swiper__slide-wrapper ">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover  bg-no-repeat bg-center  "
            style={{ backgroundImage: "url('/images/hero/hero-5.jpg')" }}>
            {/* <div className="absolute inset-0  bg-muted-foreground opacity-50 z-10"></div> */}
            <div className="absolute inset-0 muted-background opacity-70 z-10"></div>
          </div>

          {/* Overlay with Gradient */}

          {/* Slide Content */}
          <div className="relative flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row z-20">
            <div className="ml-auto p-40 sm:p-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue-dark">
                  2025
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                  модельний
                  <br />
                  ряд
                </span>
              </div>

              <h1 className="block uppercase font-semibold text-heading-2 md:text-heading-1 text-white mb-3">
                Дитячі велосипеди
              </h1>

              <h3 className="text-heading-4">Веселі покатушки - яскраві спогади!</h3>

              <Link
                href={`/shop`}
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10">
                До магазину
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
