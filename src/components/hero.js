import React from 'react';
import uuid from 'uuid/v4';
import { Player } from 'video-react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

const Hero = ({ t }) => (
  <header id="hero">
    <div className="container">
      <div className="cta">
        <div className="cta--message">
          <h1 className="title">
            {t('headerTitle', { returnObjects: true }).map(text => (
              <span key={uuid()}>{text}</span>
            ))}
          </h1>
        </div>
        <div className="cta--sign-up">
          <button className="sign-up-btn">{t('signUpText')}</button>
          <h5 className="subtitle">{t('headerSubtitle')}</h5>
        </div>
      </div>
      <div className="explanation">
        <div className="message">
          <p>{t('headerSmallText')}</p>
        </div>

        {/*
        Component source:
        https://video-react.js.org/components/player/
        <Player
          playsInline
          poster="https://i.redditmedia.com/kXhbzIEZIfa6cFVFMLeJYEbr2pdDR13Zx9MOb2f9Bhc.jpg?w=320&s=a2bb79971aa62d5f876d8e6b4746f24f"
          src="https://i.redditmedia.com/kXhbzIEZIfa6cFVFMLeJYEbr2pdDR13Zx9MOb2f9Bhc.jpg?w=320&s=a2bb79971aa62d5f876d8e6b4746f24f"
        />
        */}
      </div>
    </div>
  </header>
);

Hero.propTypes = {
  t: PropTypes.func,
};

export default translate('hero')(Hero);
