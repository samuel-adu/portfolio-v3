/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import { LuMail, LuGithub, LuLinkedin } from 'react-icons/lu';

import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section scroll-m-[var(--space-l)]">
      <div className="container">
        <div className="header">
          <h2 className="heading">Get in Touch</h2>
          {/* <p>I'm available for work and open to exciting opportunities.</p> */}
          <p>
            I’m open to Frontend Developer roles that are either remote or based
            in the United Kingdom.
          </p>
        </div>

        <h3 className="subheading">contact information</h3>

        <ul className="contact__list">
          <li>
            <span>
              <LuMail />
            </span>
            <Link to="mailto:samueladu.dev@gmail.com">
              samueladu.dev@gmail.com
            </Link>
          </li>
          <li>
            <LuGithub />
            <Link to="https://www.github.com/samuel-adu">
              github.com/samuel-adu
            </Link>
          </li>
          <li>
            <LuLinkedin />
            <Link to="https://www.linkedin.com/in/johndoe">
              linkedin.com/in/thesamuel-adu
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
