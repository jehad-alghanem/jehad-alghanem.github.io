import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const entries = [
  {
    org: 'CCSIT Cybersecurity Club',
    location: 'Imam Abdulrahman Bin Faisal University',
    date: 'Jan 2026 — Present',
    desc: 'Actively participating in cybersecurity workshops, CTF (Capture the Flag) competitions, and peer knowledge-sharing sessions focused on penetration testing, threat analysis, and defensive security. Contributing to club activities that bridge academic learning with real-world security challenges.',
  },
  {
    org: 'CCSIT Programming Club',
    location: 'Imam Abdulrahman Bin Faisal University',
    date: '2024 — 2025',
    desc: 'Actively engaged in coding challenges, technical discussions, and peer collaboration to enhance problem-solving and programming skills. Participated in club workshops and activities, and explored multiple programming languages and web development frameworks.',
  },
];

export default function Volunteer() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="volunteer" ref={sectionRef}>
      <div className="scroll-reveal">
        <span className="section-label">human_protocol</span>
        <h2 className="section-title">VOLUNTEER EXPERIENCE</h2>
      </div>

      <div className="volunteer-timeline scroll-reveal">
        {entries.map((entry) => (
          <div className="volunteer-entry" key={entry.org}>
            <div className="volunteer-header">
              <div className="volunteer-org">{entry.org}</div>
              <span className="volunteer-date">{entry.date}</span>
            </div>
            <div className="volunteer-location">{entry.location}</div>
            <p className="volunteer-desc">{entry.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
