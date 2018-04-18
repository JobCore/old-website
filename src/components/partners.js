import React from 'react';
import uuid from 'uuid/v4';
import jsonData from '../content/partners.json';

const { mainPartners = [], others = [] } = jsonData;

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

const Patners = () => (
  <section id="partners">
    <div className="container">
      <h2 className="section-title">Partners</h2>
      <div className="showcase">
        <div className="main-brands">{convertDataToHtml(mainPartners)}</div>
        <div className="other-brands">{convertDataToHtml(others)}</div>
      </div>
    </div>
  </section>
);

export default Patners;
