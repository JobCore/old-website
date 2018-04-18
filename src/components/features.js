import React from 'react';
import uuid from 'uuid/v4';
import Bartender from '../img/bartender_icon.png';
import Waitress from '../img/waitress_icon.png';
import Clean from '../img/clean_icon.png';
import Chef from '../img/chef_icon.png';
import jsonData from '../content/features.json';

const language = 'en';
const {
  companyData = [],
  talentData = [],
  sectionTitle,
  talent,
  company,
  showMore,
} = jsonData[language];

const convertDataToHtml = dataArr => {
  let html = [];
  dataArr.forEach(data => {
    if (!data.message) return;
    html.push(
      <div className="feature" key={uuid()}>
        <h4 className="title">{data.title}</h4>
        <p className="message">{data.message}</p>
        <a
          href="#"
          className="italized"
          data-toggle="tooltip"
          title={data.tooltip}>
          {showMore}
        </a>
      </div>
    );
  });
  html = html.length > 0 ? html : 'Nothing to show yet';
  return html;
};

const Features = () => (
  <section id="features">
    <h2 className="section-title">{sectionTitle}</h2>
    <div className="center-images">
      <img className="bartender" src={Bartender} alt="Bartender icon" />
      <img className="waitress" src={Waitress} alt="Waitress icon" />
      <img className="clean" src={Clean} alt="Clean icon" />
      <img className="chef" src={Chef} alt="Chef icon" />
    </div>
    <div id="company">
      <h3 className="subsection-title">{company}</h3>
      {convertDataToHtml(companyData)}
    </div>
    <div id="talent">
      <h3 className="subsection-title">{talent}</h3>
      {convertDataToHtml(talentData)}
    </div>
  </section>
);

export default Features;
