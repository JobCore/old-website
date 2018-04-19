import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const convertDataToHtml = dataArr => {
  let html = [];
  dataArr.forEach(data => {
    if (!data.name || !data.imageUrl) return;
    html.push(
      <figure className="member" key={uuid()}>
        <img
          className="member__img"
          src={data.imageUrl}
          alt={`${data.name}'s portrait`}
        />
        <figcaption className="member__caption">
          <p className="name">{data.name}</p>
          <p className="subtitle">{data.subtitle}</p>
        </figcaption>
      </figure>
    );
  });
  html = html.length > 0 ? html : 'Nothing to show yet';
  return html;
};

const Team = ({ t }) => (
  <section id="team">
    <div className="container">
      <div className="inner-wrapper">
        <h2 className="section-title">{t('sectionTitle')}</h2>
        <div className="members">
          {convertDataToHtml(t('members', { returnObjects: true }))}
        </div>
      </div>
    </div>
  </section>
);

Team.propTypes = {
  t: PropTypes.func,
};

export default translate('team')(Team);
