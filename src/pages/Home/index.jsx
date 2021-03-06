import React from 'react';

import useTitle from 'hooks/useTitle';
import Hero from 'components/Hero';
import AboutUs from 'components/AboutUs';
import Service from 'components/Service';
import Price from 'components/Price';
import Testimonial from 'components/Testimonial';
import BarberTeam from 'components/BarberTeam';
import Contact from 'components/Contact';
import Spacer from 'components/Spacer';

import SlideIn from 'components/SlideIn';

const Home = () => {
  useTitle('Barber Shop');

  return (
    <>
      <Hero />
      <AboutUs />

      <Service delay={300} />

      <Price />

      <SlideIn x={-500}>
        <Testimonial />
      </SlideIn>

      <BarberTeam delay={250} />

      <Contact />

      <Spacer />
    </>
  );
};

export default Home;
