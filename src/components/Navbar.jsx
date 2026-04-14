import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-logo">
        <span className="accent">{'>'}</span> Jehad<span className="accent">_</span>alghanem
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={handleLinkClick}>{item.label}</a>
          </li>
        ))}
      </ul>
      <button
        className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
