import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Logo from '../img/logo.png';
import jsonData from '../content/footer.json';
import generalJsonData from '../content/general.json';
import navJsonData from '../content/navigation.json';

const language = 'en';

const { instagramUrl, facebookUrl, linkedInUrl, twitterUrl } = generalJsonData;
const { home, features, price, partners, company } = navJsonData[language];

const Footer = ({ siteTitle }) => (
  <footer id="footer">
    <div className="container">
      <div id="message">
        <nav>
          <ul>
            <li>
              <Link to="/">{home}</Link>
            </li>
            <li>
              <Link to="/#features">{features}</Link>
            </li>
            <li>
              <Link to="/#price">{price}</Link>
            </li>
            <li>
              <Link to="/#partners">{partners}</Link>
            </li>
            <li>
              <Link to="/roadmap">{company}</Link>
            </li>
          </ul>
        </nav>
        <div id="icons">
          <a href={`/${instagramUrl}`}>
            <i className="fa fa-instagram fa-2x" />
          </a>
          <a href={`/${facebookUrl}`}>
            <i className="fa fa-facebook fa-2x" />
          </a>
          <a href={`/${linkedInUrl}`}>
            <i className="fa fa-linkedin-square fa-2x" />
          </a>
          <a href={`/${twitterUrl}`}>
            <i className="fa fa-twitter-square fa-2x" />
          </a>
        </div>
        <p>{jsonData[language].message}</p>
      </div>

      <img id="logo" src={Logo} alt={`${siteTitle} logo`} />
    </div>
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
};

export default Footer;
