import React from 'react';
import Hero from './Hero';
import PopularCetegorySlider from './Categories';
import NewArrival from './NewArrivals';
import PromoBanner from './PromoBanner';
import BestSeller from './BestSeller';
import CounDown from './Countdown';
import Testimonials from './Testimonials';
const Home = () => {
  return (
    <>
      <Hero />
      <PopularCetegorySlider />
      <NewArrival />
      <PromoBanner />
      <BestSeller />
      {/* <CounDown /> */}
      <Testimonials />
    </>
  );
};

export default Home;
