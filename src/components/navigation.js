import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { translate } from 'react-i18next';
import Logo from '../img/logo.png';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { siteTitle, location, t } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img id="logo" src={Logo} alt={`${siteTitle} logo`} />
          </a>
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li
                className={
                  location.hash === '' ? 'nav-item active' : 'nav-item'
                }>
                <Link to="/" className="nav-link">
                  {t('home')}
                </Link>
              </li>
              <li
                className={
                  location.hash === '#features' ? 'nav-item active' : 'nav-item'
                }>
                <Link to="/#features" className="nav-link">
                  {t('features')}
                </Link>
              </li>
              <li
                className={
                  location.hash === '#prices' ? 'nav-item active' : 'nav-item'
                }>
                <Link to="/#prices" className="nav-link">
                  {t('price')}
                </Link>
              </li>
              <li
                className={
                  location.hash === '#partners' ? 'nav-item active' : 'nav-item'
                }>
                <Link to="/#partners" className="nav-link">
                  {t('partners')}
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle btn"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  {t('company')}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to="/roadmap#roadmap" className="dropdown-item">
                    {t('roadmap')}
                  </Link>
                  <Link to="/roadmap#team" className="dropdown-item">
                    {t('team')}
                  </Link>
                  <Link to="/roadmap#contact" className="dropdown-item">
                    {t('contact')}
                  </Link>
                  <div className="dropdown-divider" />
                  <Link to="/#" className="dropdown-item">
                    {t('whitePaper')}
                    <i className="fa fa-download" />
                  </Link>
                </div>
              </li>
              <li
                className={
                  location.hash === '#' ? 'nav-item active' : 'nav-item'
                }>
                <Link to="#" className="btn nav-link">
                  {t('login')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  t: PropTypes.func,
  siteTitle: PropTypes.string,
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.any,
  }),
};

export default translate('navigation')(Navigation);
