import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const Roadmap = ({ t }) => (
  <section id="roadmap">
    <div className="container">
      <h2 className="section-title">{t('sectionTitle')}</h2>
      <h5 className="section-subtitle">{t('sectionSubtitle')}</h5>

      <figure>
        <img className="figure-img" src="" alt={t('sectionTitle')} />
        <figcaption className="legend">
          <div className="legend-item right-dot">
            <p>{t('purpleDot')}.</p>
            <span className="dot purple" />
          </div>
          <div className="legend-item left-dot">
            <span className="dot blue" />
            <p>{t('blueDot')}</p>
          </div>
          <div className="legend-item right-dot">
            <p>{t('greenDot')}</p>
            <span className="dot green" />
          </div>
          <div className="legend-item left-dot">
            <span className="dot pink" />
            <p>{t('pinkDot')}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
);

Roadmap.propTypes = {
  t: PropTypes.func,
};

export default translate('roadmap')(Roadmap);
