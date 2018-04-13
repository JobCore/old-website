import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

// TODO: USE THIS FOR OFFLINE DEVELOPMENT
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap/scss/bootstrap.scss';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

import '../scss/main.scss';

const Layout = ({ children, data, location }) => (
  <div id="layout">
    <Helmet title={data.site.siteMetadata.title}>
      {/* TODO: UNCOMMENT BEFORE BUILD */}
      {/* <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/popper.min.js"
        integrity="sha256-FCiJD1Xk+2itXYf5YdFQrPURijNogcXySEApUqeRwHc="
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossOrigin="anonymous"
      />
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.bundle.min.js"
        integrity="sha384-lZmvU/TzxoIQIOD9yQDEpvxp6wEU32Fy0ckUgOH4EIlMOCdR823rg4+3gWRwnX1M"
        crossOrigin="anonymous"
      /> */}
    </Helmet>

    <Navigation siteTitle={data.site.siteMetadata.title} location={location} />
    <main>{children()}</main>
    <Footer siteTitle={data.site.siteMetadata.title} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }),
  location: PropTypes.shape({
    hash: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.any,
  }),
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
