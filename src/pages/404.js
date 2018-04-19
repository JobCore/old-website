import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const NotFoundPage = ({ t }) => (
  <div>
    <h1>{t('notFound')}</h1>
    <p>{t('message')}</p>
  </div>
);

NotFoundPage.propTypes = {
  t: PropTypes.func,
};

export default translate('not-found-page')(NotFoundPage);
