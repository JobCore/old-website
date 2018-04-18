import React from 'react';
import uuid from 'uuid/v4';
import jsonData from '../content/bonus-features.json';

const language = 'en';
const featuresData = jsonData[language].features;

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

const BonusFeatures = () => (
  <section id="bonus">
    <div className="container">
      <div className="messages">
        <h2 className="section-title">Bonus Features</h2>
        {convertDataToHtml(featuresData)}
      </div>
    </div>
  </section>
);

export default BonusFeatures;
