import React from 'react';
import uuid from 'uuid/v4';
import { Player } from 'video-react';
import generalJsonData from '../content/general.json';
import jsonData from '../content/hero.json';

const language = 'en';

const Hero = () => (
  <header id="hero">
    <div className="container">
      <div className="cta">
        <div className="cta--message">
          <h1 className="title">
            {jsonData[language].headerTitle.map(text => (
              <span key={uuid()}>{text}</span>
            ))}
          </h1>
          <h5 className="subtitle">{jsonData[language].headerSubtitle}</h5>
        </div>
        <div className="cta--sign-up">
          <button className="sign-up-btn">
            {jsonData[language].signUpText}
          </button>
        </div>
      </div>
      <div className="explanation">
        <div className="message">
          <p>{jsonData[language].headerSmallText}</p>
        </div>

        {/*
        Component source:
        https://video-react.js.org/components/player/
        */}
        <Player
          playsInline
          poster={generalJsonData.headerVideoUrl}
          src={generalJsonData.headerVideoTitle}
        />
      </div>
    </div>
  </header>
);

export default Hero;
