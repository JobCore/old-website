import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from '../img/logo.png';

const Footer = ({ siteTitle }) => (
  <footer id="footer">
    <div className="container">
      <div id="message">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#features">Features</Link>
            </li>
            <li>
              <Link to="/#price">Price</Link>
            </li>
            <li>
              <Link to="/#partners">Partners</Link>
            </li>
            <li>
              <Link to="/roadmap">The Company</Link>
            </li>
          </ul>
        </nav>
        <div id="icons">
          <a href="#instagram">
            <i className="fa fa-instagram fa-2x" />
          </a>
          <a href="#facebook">
            <i className="fa fa-facebook fa-2x" />
          </a>
          <a href="#linkedin">
            <i className="fa fa-linkedin-square fa-2x" />
          </a>
          <a href="#twitter">
            <i className="fa fa-twitter-square fa-2x" />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          voluptatum incidunt maxime dicta!
        </p>
      </div>

      <img id="logo" src={Logo} alt={`${siteTitle} logo`} />
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
