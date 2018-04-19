import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { translate } from 'react-i18next';

const convertDataToHtml = dataArr => {
  let html = [];
  dataArr.forEach(data => {
    if (!data.message) return;
    html.push(
      <div className="message" key={uuid()}>
        <h3 className="bonus-title">{data.title}</h3>
        <p className="bonus-text">{data.message}</p>
      </div>
    );
  });
  html = html.length > 0 ? html : 'Nothing to show yet';
  return html;
};

const BonusFeatures = ({ t }) => (
  <section id="bonus">
    <div className="container">
      <div className="messages">
        <h2 className="section-title">{t('sectionTitle')}</h2>
        {convertDataToHtml(t('features', { returnObjects: true }))}
      </div>
    </div>
  </section>
);

BonusFeatures.propTypes = {
  t: PropTypes.func,
};

export default translate('bonus-features')(BonusFeatures);
