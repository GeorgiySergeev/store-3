import React from 'react';
import Image from 'next/image';

const featureData = [
  {
    img: '/images/icons/icon-01.svg',
    title: 'Доставка',
    description: 'Усі перевізники України',
  },
  {
    img: '/images/icons/icon-02.svg',
    title: 'Гарантійне обслюговування',
    description: 'Cancellation after 1 day',
  },
  {
    img: '/images/icons/icon-03.svg',
    title: 'Безопасні платежі',
    description: 'Оплачуйте онлайн',
  },
  {
    img: '/images/icons/icon-04.svg',
    title: 'Кансультації',
    description: 'Допоможемо підібрвти',
  },
];

const HeroFeature = () => {
  return (
    <div className="container w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center justify-between gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
