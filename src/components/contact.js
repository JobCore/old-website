import React from 'react';

const Contact = () => (
  <section id="contact">
    <div>
      <h2>Contact</h2>
      <form>
        <div className="column column--left">
          <div className="inputs">
            <div className="input-group">
              <label htmlFor="name">
                Full Name
                <input type="text" name="name" id="name" />
              </label>
            </div>
            <div className="input-group">
              <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" />
              </label>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            molestias ratione, ipsum dolores vel quisquam ducimus! Culpa, totam
            cumque illo repudiandae nobis quos, eum accusantium corporis
            reprehenderit quae, aliquid dignissimos?
          </p>
        </div>
        <div className="column column--right">
          <div className="input-group observation">
            <label htmlFor="observation">
              Observation
              <textarea name="observation" id="observation" />
            </label>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;
