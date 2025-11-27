import { PERSONAL_INFO } from '../portfolioData';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p>
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
        <div className="contact-links">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email
          </a>
          <a
            href={PERSONAL_INFO.github}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            💻 GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

