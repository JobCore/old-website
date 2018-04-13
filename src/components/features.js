import React from 'react';
import uuid from 'uuid/v4';

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
        <h3 className="title">{data.title}</h3>
        <p className="message">{data.message}</p>
        <a
          href="#"
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
      <img
        src="https://image.flaticon.com/icons/png/512/185/185488.png"
        alt="#"
      />
      <img
        src="https://image.flaticon.com/icons/png/512/185/185488.png"
        alt="#"
      />
      <img
        src="https://image.flaticon.com/icons/png/512/185/185488.png"
        alt="#"
      />
      <img
        src="https://image.flaticon.com/icons/png/512/185/185488.png"
        alt="#"
      />
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
