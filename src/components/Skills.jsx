import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    title: 'CYBER_SECURITY',
    skills: [
      'Penetration Testing',
      'Threat Hunting',
      'Incident Response',
      'Log / Traffic Analysis',
      'Splunk (SIEM) & Elastic (SIEM)',
      'Wireshark',
    ],
  },
  {
    title: 'DATA_ANALYSIS',
    skills: [
      'Excel',
      'Power BI',
      'Machine Learning',
      'Artificial Intelligence',
      'Python',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'DEVELOPMENT',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Node.js',
      'React.js',
      'Flutter',
    ],
  },
  {
    title: 'SOFT_SKILLS',
    skills: [
      'Leadership',
      'Problem Solving',
      'Communication',
      'Team Collaboration',
      'Critical Thinking',
      'Adaptability',
    ],
  },
];

export default function Skills() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <div className="scroll-reveal">
        <span className="section-label">toolkit_inventory</span>
        <h2 className="section-title">SKILLS</h2>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div className="skill-category scroll-reveal" key={cat.title} style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="skill-category-title">
              <span className="prompt">{'>'}</span> {cat.title}
            </div>
            <ul className="skill-list">
              {cat.skills.map(skill => (
                <li className="skill-item" key={skill}>
                  <span className="diamond"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
