import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const roles = [
  'SOC Analyst',
  'Threat Hunter',
  'Incident Responder',
  'Digital Forensics Analyst',
  'Data Analyst',
];

export default function Hero() {
  const typedText = useTypewriter(roles, 80, 40, 2000);

  return (
    <section className="hero" id="hero">
      <div className="hero-badge">
        <span className="dot"></span>
        SUDO.INIT // USER.IDENTIFIED
      </div>

      <h1 className="hero-name">
        JEHAD
        <span className="last-name">ALGHANEM</span>
      </h1>

      <p className="hero-subtitle">
        <span className="prompt">$$ </span>
        {typedText}
        <span className="cursor"></span>
      </p>

      <a
        href="/JehadAlghanemCV-Job.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="hero-cta"
        id="resume-btn"
      >
        View my CV ↗
      </a>

      <div className="hero-scroll-hint">
        SCROLL
        <span className="arrow"></span>
      </div>
    </section>
  );
}
