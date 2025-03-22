import React from 'react';
import Image from 'next/image';

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="container w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div
          className="relative z-1 overflow-hidden rounded-lg  py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5 bg-blue-light-2"
          style={{
            backgroundImage: 'url(/images/promo/promo-1.png)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
          }}>
          <div className=" w-full ">
            <span className="block font-medium text-xl text-dark mb-3">Міські велосипеди</span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              Знижки до 20%
            </h2>

            <p className="max-w-180">
              {' '}
              Міський велосипед – вибір на користь практичності. На ньому зручно щодня їздити
              міськими дорогами – на роботу, за покупками, в якості тренування чи прогулянки.{' '}
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-blue py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5">
              Детальніше
            </a>
          </div>
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div
            style={{
              backgroundImage: 'url(/images/promo/promo-2.png)',
              backgroundSize: 'cover ',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
            }}
            className="relative z-1 overflow-hidden rounded-lg bg-[#DBF4F3] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <div className="text-left">
              <span className="block text-lg text-white mb-1.5">Ліхтар передній</span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-white mb-2.5">Fenix</h2>

              <p className="font-semibold text-custom-1 text-teal">Знижка 20%</p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-teal py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-teal-dark mt-9">
                Купити
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div
            style={{
              backgroundImage: 'url(/images/promo/promo-3.png)',
              backgroundSize: 'cover ',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
            }}
            className="relative z-1 overflow-hidden rounded-lg bg-[#FFECE1] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <div className="text-right">
              <span className="block text-lg text-white  mb-1.5">Велокомп&apos;ютер</span>

              <h2 className="font-bold text-xl lg:text-heading-4 text-dark mb-2.5">
                Up to <span className="text-orange">40%</span> off
              </h2>

              <p className="text-orange">Велокомп&apos;ютер бездротовий bkv-3500 21 функция</p>

              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-orange py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-orange-dark mt-7.5">
                Купити
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
