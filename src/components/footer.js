import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ siteTitle }) => (
  <section id="footer">
    <div id="message">
      <div id="icons">
        <i className="fa fa-instagram fa-2x" />
        <i className="fa fa-facebook fa-2x" />
        <i className="fa fa-linkedin-square fa-2x" />
        <i className="fa fa-twitter-square fa-2x" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quod
        nihil numquam, non iure assumenda magnam odio eveniet praesentium amet.
      </p>
    </div>

    <div id="logo">{siteTitle} Logo</div>
  </section>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
