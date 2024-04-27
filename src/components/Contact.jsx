/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-text">
          I'm open to new opportunities and I'd like to work with you.
        </p>

        <Link to="mailto:thesamueladu@gmail.com" className="btn btn--primary">
          contact me
        </Link>
      </div>
    </section>
  );
}

export default Contact;
