import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certs = [
  {
    abbr: 'eCDFP',
    fullName: 'Certified Digital Forensics Professional',
    issuer: 'INE',
    date: 'Feb 2026',
    url: 'https://certs.ine.com/ff2aaeed-bc32-440a-aae2-2981fe7ae91f#acc.5aYBO4v1',
  },
  {
    abbr: 'eCIR',
    fullName: 'Certified Incident Responder',
    issuer: 'INE',
    date: 'Jan 2026',
    url: 'https://certs.ine.com/1d520337-6bd0-47da-a8e3-6cea3d9177e6#acc.1qyYz4Qk',
  },
  {
    abbr: 'eCTHP',
    fullName: 'Certified Threat Hunting Professional',
    issuer: 'INE',
    date: 'Nov 2025',
    url: 'https://certs.ine.com/376c4a7e-cb84-48a3-a2ca-8934282342e7#acc.xi1HGCvE',
  },
  {
    abbr: 'eJPT',
    fullName: 'Junior Penetration Tester',
    issuer: 'INE',
    date: 'Aug 2025',
    url: 'https://certs.ine.com/4529f7f0-6433-4082-b845-9f03ba8a2b5f#acc.4kBD9vcO',
  },
];

export default function Certifications() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="certifications" ref={sectionRef}>
      <div className="scroll-reveal">
        <span className="section-label">verified_credentials</span>
        <h2 className="section-title">CERTIFICATIONS</h2>
      </div>

      <div className="certs-grid">
        {certs.map((cert, i) => (
          <div className="cert-card scroll-reveal" key={cert.abbr} style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="cert-header">
              <span className="cert-date">{cert.date}</span>
              <span className="cert-issuer">[{cert.issuer}]</span>
            </div>
            <div className="cert-name">{cert.abbr}</div>
            <div className="cert-full-name">{cert.fullName}</div>
            <div className="cert-status">
              <span className="status-dot"></span>
              Credential Verified
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-view-btn"
              >
                View ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
