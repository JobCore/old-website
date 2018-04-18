import React from 'react';
import jsonData from '../content/roadmap.json';

const language = 'en';
const {
  sectionTitle,
  sectionSubtitle,
  purpleDot,
  greenDot,
  blueDot,
  pinkDot,
} = jsonData[language];

const Roadmap = () => (
  <section id="roadmap">
    <div className="container">
      <h2 className="section-title">{sectionTitle}</h2>
      <h5 className="section-subtitle">{sectionSubtitle}</h5>

      <figure>
        <img className="figure-img" src="" alt={sectionTitle} />
        <figcaption className="legend">
          <div className="legend-item right-dot">
            <p>{purpleDot}.</p>
            <span className="dot purple" />
          </div>
          <div className="legend-item left-dot">
            <span className="dot blue" />
            <p>{blueDot}</p>
          </div>
          <div className="legend-item right-dot">
            <p>{greenDot}</p>
            <span className="dot green" />
          </div>
          <div className="legend-item left-dot">
            <span className="dot pink" />
            <p>{pinkDot}</p>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Roadmap;
