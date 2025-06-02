import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div className="about-container">
      <h3>About</h3>

      <div className="section">
        <h4>Our Story</h4>
        <h3>About our Store</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, harum.
          Consequuntur molestiae, expedita accusantium odit libero dolores aspernatur,
          est nemo illum fugiat, id vel quam aut voluptates magni nostrum repellendus.
        </p>
      </div>

      <div className="section">
        <h3>Our Vision</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur, suscipit omnis. Exercitationem, nemo ex quae aspernatur
          laborum quaerat neque sapiente.
        </p>

        <h3>Our Mission</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur, suscipit omnis. Exercitationem, nemo ex quae aspernatur
          laborum quaerat neque sapiente.
        </p>

        <h3>Our Goal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Pariatur, suscipit omnis. Exercitationem, nemo ex quae aspernatur
          laborum quaerat neque sapiente.
        </p>
      </div>

      <div className="section">
        <h2>Team Members</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Repellendus iure dolorum incidunt placeat facilis quidem!
        </p>
      </div>

      <div className="section">
        <h3>What our clients say?</h3>

        <div className="testimonial">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates assumenda adipisci voluptatum cum iusto. Ipsam nemo fuga doloremque veritatis tempora."
          </p>
          <h4>Nancy <p>Director at XDesign</p></h4>
        </div>

        <div className="testimonial">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates assumenda adipisci voluptatum cum iusto. Ipsam nemo fuga doloremque veritatis tempora."
          </p>
          <h4>Samuel <p>Director at XDesign</p></h4>
        </div>

        <div className="testimonial">
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates assumenda adipisci voluptatum cum iusto. Ipsam nemo fuga doloremque veritatis tempora."
          </p>
          <h4>Daniel <p>Director at XDesign</p></h4>
        </div>
      </div>
    </div>
  );
};

export default About;
