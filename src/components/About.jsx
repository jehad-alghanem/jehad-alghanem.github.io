import React from 'react';
import TerminalWindow from './TerminalWindow';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section" id="about" ref={sectionRef}>
      <div className="scroll-reveal">
        <span className="section-label">whoami</span>
        <h2 className="section-title">ABOUT ME</h2>
      </div>

      <div className="scroll-reveal">
        <TerminalWindow title="cat profile.json">
          <div className="about-json">
            <div className="json-line"><span className="json-bracket">{'{'}</span></div>
            <div className="json-line">&nbsp;&nbsp;<span className="json-key">"name"</span>: <span className="json-string">"Jehad Nasser Alghanem"</span>,</div>
            <div className="json-line">&nbsp;&nbsp;<span className="json-key">"roles"</span>: <span className="json-string">"Cybersecurity Specialist, Data Analyst"</span>,</div>
            <div className="json-line">&nbsp;&nbsp;<span className="json-key">"education"</span>: <span className="json-string">"B.Sc. Computer Science — IAU"</span>,</div>
            <div className="json-line">&nbsp;&nbsp;<span className="json-key">"gpa"</span>: <span className="json-number">4.25</span>,</div>
            <div className="json-line">&nbsp;&nbsp;<span className="json-key">"contact"</span>: <span className="json-string">"jehad.n.alghanem@gmail.com"</span></div>
            <div className="json-line"><span className="json-bracket">{'}'}</span> <span className="cursor-block"></span></div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
