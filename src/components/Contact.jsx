/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section scroll-m-[var(--space-l)]">
      <div className="container">
        <p className="contact-me">
          I'm available for work and open to exciting opportunities.
        </p>

        <Link to="mailto:samueladu.dev@gmail.com" className="btn">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default Contact;
