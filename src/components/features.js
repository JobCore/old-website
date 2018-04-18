import React from 'react';
import uuid from 'uuid/v4';
import Bartender from '../img/bartender_icon.png';
import Waitress from '../img/waitress_icon.png';
import Clean from '../img/clean_icon.png';
import Chef from '../img/chef_icon.png';

const companyData = [
  {
    title: 'Find Talent',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis itaque veritatis fugiat eligendi.',
  },
  {
    title: 'Schedule',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis itaque veritatis fugiat eligendi.',
  },
  {
    title: 'Employee Retention',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis itaque veritatis fugiat eligendi.',
  },
  {
    title: 'Rate',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis itaque veritatis fugiat eligendi.',
  },
];

const talentData = [
  {
    title: 'Setup your profile',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis itaque veritatis fugiat eligendi.',
  },
  {
    title: 'Get Hired',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis itaque veritatis fugiat eligendi.',
  },
  {
    title: 'Get paid on the same day',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis itaque veritatis fugiat eligendi.',
  },
  {
    title: 'Rate',
    message:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis itaque veritatis fugiat eligendi.',
  },
];

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
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, perferendis soluta. Quidem, culpa.">
          Read more
        </a>
      </div>
    );
  });
  html = html.length > 0 ? html : 'Nothing to show yet';
  return html;
};

const Features = () => (
  <section id="features">
    <h2 className="section-title">Features</h2>
    <div className="center-images">
      <img className="bartender" src={Bartender} alt="#" />
      <img className="waitress" src={Waitress} alt="#" />
      <img className="clean" src={Clean} alt="#" />
      <img className="chef" src={Chef} alt="#" />
    </div>
    <div id="company">
      <h3 className="subsection-title">Company</h3>
      {convertDataToHtml(companyData)}
    </div>
    <div id="talent">
      <h3 className="subsection-title">Talent</h3>
      {convertDataToHtml(talentData)}
    </div>
  </section>
);

export default Features;
