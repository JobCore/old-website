import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Navigation = ({ siteTitle }) => (
  <nav>
    <div className="logo">
      <Link to="/">{siteTitle} Logo</Link>
    </div>
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
        <Link to="/roadmap" className="btn">
          The Company
        </Link>
      </li>
      <li>
        <Link to="#" className="btn">
          Login
        </Link>
      </li>
    </ul>
  </nav>
);

Navigation.propTypes = {
  siteTitle: PropTypes.string,
};

export default Navigation;
