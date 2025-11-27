import { PERSONAL_INFO } from '../portfolioData';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Hi, I'm {PERSONAL_INFO.name}</h1>
        <h2>{PERSONAL_INFO.title}</h2>
        <p>{PERSONAL_INFO.bio}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

