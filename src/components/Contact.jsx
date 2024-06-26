/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import '../styles/contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section scroll-m-[var(--space-l)]">
      <div className="container">
        <p className="contact-me">
          I'm available for work and open to new exciting opportunities.
        </p>

        <Link to="mailto:samueladu.dev@gmail.com" className="btn btn--primary">
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default Contact;
