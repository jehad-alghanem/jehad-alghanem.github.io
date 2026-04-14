import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    role: 'Co-op Training',
    company: 'Placeholder Company',
    location: 'Dammam, Saudi Arabia',
    date: 'Jan 2026 — Apr 2026',
    desc:
      'Completed a cooperative training program focused on applying academic knowledge in a real-world professional environment. Contributed to ongoing projects, collaborated with cross-functional teams, and gained hands-on experience with industry-standard tools and workflows.',
    highlights: [
      'Collaborated with development and security teams on real-world projects',
      'Applied academic knowledge to practical industry challenges',
      'Gained experience with professional workflows and tools',
    ],
  },
];

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <div className="scroll-reveal">
        <span className="section-label">work_log</span>
        <h2 className="section-title">EXPERIENCE</h2>
      </div>

      <div className="experience-timeline scroll-reveal">
        {experiences.map((exp) => (
          <div className="experience-entry" key={exp.role}>
            <div className="experience-header">
              <div>
                <div className="experience-role">{exp.role}</div>
                <div className="experience-company">{exp.company}</div>
              </div>
              <span className="experience-date">{exp.date}</span>
            </div>
            <div className="experience-location">{exp.location}</div>
            <p className="experience-desc">{exp.desc}</p>
            {exp.highlights && (
              <ul className="experience-highlights">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="experience-highlight">
                    <span className="diamond"></span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
