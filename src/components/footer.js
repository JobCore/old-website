import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { translate } from 'react-i18next';
import Logo from '../img/logo.png';
import LanguageSwitcher from './languageSwitcher';

const Footer = ({ siteTitle, t }) => (
  <footer id="footer">
    <div className="container">
      <img id="logo" src={Logo} alt={`${siteTitle} logo`} />
      <div id="message">
        <nav>
          <ul>
            <li>
              <Link to="/">{t('home')}</Link>
            </li>
            <li>
              <Link to="/#features">{t('features')}</Link>
            </li>
            <li>
              <Link to="/#price">{t('price')}</Link>
            </li>
            <li>
              <Link to="/#partners">{t('company')}</Link>
            </li>
            <li>
              <Link to="/roadmap">{t('roadmap')}</Link>
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
        <p>{t('message')}</p>
      </div>
    </div>
    <LanguageSwitcher />
  </footer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
  t: PropTypes.func,
};

export default translate('footer')(Footer);
