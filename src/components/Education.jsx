import React from 'react';
import TerminalWindow from './TerminalWindow';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="education" ref={sectionRef}>
      <div className="scroll-reveal">
        <span className="section-label">academic_records</span>
        <h2 className="section-title">EDUCATION</h2>
      </div>

      <div className="scroll-reveal">
        <TerminalWindow title="cat /education.log">
          <div className="edu-card">
            <div>
              <div className="edu-degree">Bachelor of Computer Science</div>
              <div className="edu-uni">Imam Abdulrahman bin Faisal University</div>
              <div className="edu-gpa">GPA: 4.25 / 5.00</div>
            </div>
            <div className="edu-date">2021 — 2026</div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
