import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const Prices = ({ t }) => (
  <section id="prices">
    <div className="container">
      <div className="messages">
        <h2 className="section-title">{t('sectionTitle')}</h2>
        <div className="message">
          <h6>{t('sectionSubtitle')}</h6>
          <p className="italized">{t('subtitleSmallText')}</p>
        </div>
        <div className="cta">
          <button className="btn">{t('buttonText')}</button>
          <p className="italized">{t('buttonSmallText')}</p>
        </div>
      </div>
    </div>
  </section>
);

Prices.propTypes = {
  t: PropTypes.func,
};

export default translate('prices')(Prices);
