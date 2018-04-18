import React from 'react';
import jsonData from '../content/prices.json';

const language = 'en';
const {
  sectionTitle,
  sectionSubtitle,
  subtitleSmallText,
  buttonText,
  buttonSmallText,
} = jsonData[language];

const Prices = () => (
  <section id="prices">
    <div className="container">
      <div className="messages">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="message">
          <h6>{sectionSubtitle}</h6>
          <p className="italized">{subtitleSmallText}</p>
        </div>
        <div className="cta">
          <button className="btn">{buttonText}</button>
          <p className="italized">{buttonSmallText}</p>
        </div>
      </div>
    </div>
  </section>
);

export default Prices;
