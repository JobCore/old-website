import React from 'react';

const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2>Contact</h2>
      <form>
        <div className="column column--left">
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="name" className="form-check-label">
                Full Name
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
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
              </label>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            molestias ratione, ipsum dolores vel quisquam ducimus! Culpa, totam
            cumque illo repudiandae nobis quos, eum accusantium corporis
            reprehenderit quae.
          </p>
        </div>
        <div className="column column--right">
          <div className="input-group observation">
            <label htmlFor="observation" className="form-check-label">
              Observation
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
