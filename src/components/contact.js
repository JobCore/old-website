import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const Contact = ({ t }) => (
  <section id="contact">
    <div className="container">
      <h2>{t('sectionTitle')}</h2>
      <form>
        <div className="column column--left">
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="name" className="form-check-label">
                {t('nameLabel')}
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="email" className="form-check-label">
                {t('emailLabel')}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </label>
            </div>
          </div>
          <p>{t('message')}</p>
        </div>
        <div className="column column--right">
          <div className="input-group observation">
            <label htmlFor="observation" className="form-check-label">
              {t('observationsLabel')}
              <textarea
                name="observation"
                id="observation"
                className="form-control"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  </section>
);

Contact.propTypes = {
  t: PropTypes.func,
};

export default translate('contact')(Contact);
