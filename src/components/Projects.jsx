import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  {
    name: 'ThreatSense',
    subtitle: 'Malware Behavior and Incident Response Framework',
    date: '2025 — 2026',
    desc: 'Graduation project focused on analyzing malware behavior and supporting threat detection and response through behavior-based security analysis techniques. Features ML-powered classification using LightGBM/Random Forest, a deterministic rule engine, and automated incident response action plan (IRAP) generation.',
    tags: ['Machine Learning', 'Rule-Based Engine', 'Malware Analysis', 'Automated IR'],
    termTitle: '~/projects/threatsense',
  },
  {
    name: 'AI Malware Classification',
    subtitle: '',
    date: '2025',
    desc: 'An AI-powered model that classifies malware based on their families using the RandomForestClassifier',
    tags: ['Python', 'Machine Learning', 'RandomForestClassifier'],
    termTitle: '~/projects/malware_classifier',
  },
  {
    name: 'ARP Poisoning Attack Analysis',
    subtitle: 'Network Security Research',
    date: '2025',
    desc: 'Studied ARP poisoning/spoofing attacks in a VM environment using Kali Linux and Ubuntu, capturing traffic via arpspoof and tcpdump and evaluating detection/prevention methods.',
    tags: ['Kali Linux', 'Ubuntu', 'tcpdump', 'arpspoof', 'Network Security', 'Wireshark'],
    termTitle: '~/projects/arp-analysis',
  },
];

export default function Projects() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <div className="scroll-reveal">
        <span className="section-label">operational_history</span>
        <h2 className="section-title">PROJECTS</h2>
      </div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div className="project-card scroll-reveal" key={proj.name} style={{ transitionDelay: `${i * 0.15}s` }}>
            <div className="project-header">
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="title">{proj.termTitle}</span>
            </div>
            <div className="project-body">
              <div className="project-date">{proj.date}</div>
              <h3 className="project-name">{proj.name}</h3>
              <p className="project-desc">{proj.desc}</p>
              <div className="project-tags">
                {proj.tags.map(tag => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
