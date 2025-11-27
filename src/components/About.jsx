import { PERSONAL_INFO } from '../portfolioData';

export default function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p>{PERSONAL_INFO.bio}</p>
        <div className="about-details">
          <div className="detail-item">
            <strong>Location:</strong> {PERSONAL_INFO.location}
          </div>
          <div className="detail-item">
            <strong>Email:</strong>{' '}
            <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

