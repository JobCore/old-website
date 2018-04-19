import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { I18nextProvider } from 'react-i18next';

// TODO: USE THIS FOR OFFLINE DEVELOPMENT
// eslint-disable-next-line no-unused-vars
import $ from 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap/scss/bootstrap.scss';
import i18n from '../components/i18n';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import '../scss/main.scss';

const Layout = ({ children, data, location }) => (
  <I18nextProvider i18n={i18n}>
    <div id="layout">
      <Helmet title={data.site.siteMetadata.title}>
        {/* TODO: UNCOMMENT BEFORE BUILD */}
        {/* <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
          integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ"
          crossOrigin="anonymous"
        />
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
          integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm"
          crossOrigin="anonymous"
        /> */}
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Serif|Roboto:300:400"
          rel="stylesheet"
        />
      </Helmet>

      <Navigation
        siteTitle={data.site.siteMetadata.title}
        location={location}
      />
      <main>{children()}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  </I18nextProvider>
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
