import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const convertDataToHtml = dataArr => {
  let html = [];
  dataArr.forEach(data => {
    if (!data.imageUrl) return;
    html.push(
      <img
        key={uuid()}
        src={data.imageUrl}
        alt={`${data.brandName || ''} logo`}
        className="company"
      />
    );
  });
  html = html.length > 0 ? html : 'Nothing to show yet';
  return html;
};

const Partners = ({ t }) => (
  <section id="partners">
    <div className="container">
      <h2 className="section-title">{t('sectionTitle')}</h2>
      <div className="showcase">
        <div className="main-brands">
          {convertDataToHtml(t('mainPartners', { returnObjects: true }))}
        </div>
        <div className="other-brands">
          {convertDataToHtml(t('others', { returnObjects: true }))}
        </div>
      </div>
    </div>
  </section>
);

Partners.propTypes = {
  t: PropTypes.func,
};

export default translate('partners')(Partners);
