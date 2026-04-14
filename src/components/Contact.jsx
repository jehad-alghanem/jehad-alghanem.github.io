import React from 'react';
import TerminalWindow from './TerminalWindow';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section contact-section" id="contact" ref={sectionRef}>
      <div className="scroll-reveal">
        <span className="section-label">syn_ack_established</span>
        <h2 className="section-title">CONTACT</h2>
      </div>

      <div className="contact-terminal scroll-reveal">
        <TerminalWindow title="./contact.sh">
          <div className="contact-links">
            <a
              href="mailto:jehad.n.alghanem@gmail.com"
              className="contact-link"
              id="contact-email"
            >
              <span className="flag">--email</span>
              <span className="value">jehad.n.alghanem@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jehad-alghanem/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              id="contact-linkedin"
            >
              <span className="flag">--linkedin</span>
              <span className="value">jehad-alghanem</span>
            </a>
          </div>
        </TerminalWindow>
      </div>

      <footer className="footer">
        <div className="footer-copyright">© 2026 Jehad Nasser Alghanem. All rights reserved.</div>
      </footer>
    </section>
  );
}
