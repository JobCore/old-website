import React from 'react';
import { Player } from 'video-react';

const Hero = () => (
  <header id="hero">
    <div className="container">
      <div className="cta">
        <div className="cta--message">
          <h2 className="title">
            <span>Get work fast,</span>
            <span>get paid</span>
            <span>the same day</span>
          </h2>
          <p className="subtitle">
            The first distributed talent pool <br />
            for the hospitality industry.
          </p>
        </div>
        <div className="cta--signup">
          <button className="signup-btn">Sign Up for free</button>
        </div>
      </div>
      <div className="explanation">
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
            inventore aut molestias rerum?
          </p>
        </div>

        {/*
        Source:
        https://video-react.js.org/components/player/
        */}
        <Player
          playsInline
          poster="https://i.ytimg.com/an_webp/9ANyNtg2tRY/mqdefault_6s.webp?du=3000&sqp=CLj-vdYF&rs=AOn4CLC_wwr_BBF8_QKUeI1QMFUh6rxzVQ"
          src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </div>
    </div>
  </header>
);

export default Hero;
