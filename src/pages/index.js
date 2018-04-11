import React from 'react';
import Hero from '../components/hero';
import Features from '../components/features';
import BonusFeatures from '../components/bonus-features';
import Prices from '../components/prices';
import Partners from '../components/partners';

const IndexPage = () => (
  <div>
    <Hero />
    <Features />
    <BonusFeatures />
    <Prices />
    <Partners />
  </div>
);

export default IndexPage;
