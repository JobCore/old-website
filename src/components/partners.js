import React from 'react';
import uuid from 'uuid/v4';

// Top 5
const mainBrandsData = [
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
];

// 6 partners max for optimum visuals
const otherBrandsData = [
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
  {
    brandName: 'Company',
    imageUrl:
      'http://mericlereadytogo.com/Sunflower5-16/wp-content/uploads/2016/04/TailoredBrands.png',
  },
];

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
        <div className="main-brands">{convertDataToHtml(mainBrandsData)}</div>
        <div className="other-brands">{convertDataToHtml(otherBrandsData)}</div>
      </div>
    </div>
  </section>
);

export default Patners;
