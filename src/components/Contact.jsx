/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import '../styles/contact.css';

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section scroll-m-[var(--spacing-l)]"
    >
      <h2 className="section-heading">Contact Me</h2>
      <p className="contact-section-text">
        I'm available for work and open to new exciting opportunities. You can
        contact me directly via email on{' '}
        <a href="mailto:samueladu.dev@gmail.com">samueladu.dev@gmail.com</a>
      </p>

      <Link to="mailto:samueladu.dev@gmail.com" className="btn btn--primary">
        send message
      </Link>
    </section>
  );
}

export default Contact;
