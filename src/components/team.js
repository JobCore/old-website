import React from 'react';
import uuid from 'uuid/v4';
import jsonData from '../content/team.json';

const language = 'en';

const { sectionTitle, members } = jsonData[language];

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

const Team = () => (
  <section id="team">
    <div className="container">
      <div className="inner-wrapper">
        <h2 className="section-title">{sectionTitle}</h2>
        <div className="members">{convertDataToHtml(members)}</div>
      </div>
    </div>
  </section>
);

export default Team;
