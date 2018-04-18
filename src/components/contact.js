import React from 'react';
import jsonData from '../content/contact.json';

const language = 'en';

const {
  sectionTitle,
  nameLabel,
  emailLabel,
  message,
  observationsLabel,
} = jsonData[language];

const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2>{sectionTitle}</h2>
      <form>
        <div className="column column--left">
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="name" className="form-check-label">
                {nameLabel}
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
                {emailLabel}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </label>
            </div>
          </div>
          <p>{message}</p>
        </div>
        <div className="column column--right">
          <div className="input-group observation">
            <label htmlFor="observation" className="form-check-label">
              {observationsLabel}
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

export default Contact;
