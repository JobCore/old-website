import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Roadmap from '../components/roadmap';
import Team from '../components/team';
import Contact from '../components/contact';

const RoadmapPage = ({ t }) => (
  <div>
    <Helmet title={t('title')} />
    <Roadmap />
    <Team />
    <Contact />
  </div>
);

RoadmapPage.propTypes = {
  t: PropTypes.func,
};

export default translate('roadmap-page')(RoadmapPage);
