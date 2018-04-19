import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Hero from '../components/hero';
import Features from '../components/features';
import BonusFeatures from '../components/bonus-features';
import Prices from '../components/prices';
import Partners from '../components/partners';

const IndexPage = ({ t }) => (
  <div>
    <Helmet title={t('title')} />
    <Hero />
    <Features />
    <BonusFeatures />
    <Prices />
    <Partners />
  </div>
);

IndexPage.propTypes = {
  t: PropTypes.func,
};

export default translate('index-page')(IndexPage);
