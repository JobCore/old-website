import React from 'react';
import { Player } from 'video-react';

const Hero = () => (
  <header id="hero">
    <div className="container">
      <div className="cta">
        <div className="cta--message">
          <h1 className="title">
            <span>Get work fast,</span>
            <span>get paid</span>
            <span>the same day</span>
          </h1>
          <h5 className="subtitle">
            The first distributed talent pool <br />
            for the hospitality industry.
          </h5>
        </div>
        <div className="cta--sign-up">
          <button className="sign-up-btn">Sign Up for free</button>
        </div>
      </div>
      <div className="explanation">
        <div className="message">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            reiciendis voluptates enim nulla?
          </p>
        </div>

        {/*
        Component source:
        https://video-react.js.org/components/player/
        */}
        <Player
          playsInline
          poster="https://i.redditmedia.com/kXhbzIEZIfa6cFVFMLeJYEbr2pdDR13Zx9MOb2f9Bhc.jpg?w=320&s=a2bb79971aa62d5f876d8e6b4746f24f"
          src="#"
        />
      </div>
    </div>
  </header>
);

export default Hero;
