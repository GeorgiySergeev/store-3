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
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero/hero-1.jpg')" }}>
            {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10"></div> */}
          </div>

          {/* Overlay with Gradient */}

          {/* Slide Content */}
          <div className="relative flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
            <div className="ml-auto p-40 sm:p-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                  30%
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                  Sale
                  <br />
                  Off
                </span>
              </div>

              <h1 className="font-semibold text-dark text-4xl sm:text-3xl mb-3 uppercase">
                Гірські велосипеди
              </h1>

              <p>Швидко.Екологічно.Економічно.</p>

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
        <div className="relative">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero/hero-3.jpg')" }}></div>
          <div className="absolute inset-0  bg-muted-foreground opacity-50 z-10"></div>
          {/* Overlay with Gradient */}

          {/* Slide Content */}
          <div className="relative flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
            <div className="ml-auto p-40 sm:p-15 lg:py-26  sm:pl-7.5 lg:pl-12.5">
              <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
                <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                  30%
                </span>
                <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                  Sale
                  <br />
                  Off
                </span>
              </div>

              <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
                <a href="#">ВЕЛОСИПЕДИ</a>
              </h1>

              <p>Швидко.Екологічно.Економічно.</p>

              <a
                href="/shop"
                className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-blue mt-10">
                Детальніше
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
