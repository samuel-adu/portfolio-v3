/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-heading contact-section-heading">contact</h2>
        <p className="section-text">
          Feel free to leave me a message and I'll get back to you.
        </p>

        <Link to="mailto:thesamueladu@gmail.com" className="btn btn--primary">
          send message
        </Link>
      </div>
    </section>
  );
}

export default Contact;
