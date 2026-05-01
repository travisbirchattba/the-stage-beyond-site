import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const calendarLink = 'https://calendar.app.google/X6KBMhZVmxGofHyF7';

function useFadeIn() {
  useEffect(() => {
    const els = document.querySelectorAll('.fadeIn');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const path = window.location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`siteNav ${scrolled || menuOpen ? 'navScrolled' : ''}`}>
        <div className="navInner">
          <a href="/" className="navWordmark">The Stage Beyond</a>
          <div className="navLinks">
            <a href="/approach" className={`navLink ${path === '/approach' ? 'navLinkActive' : ''}`}>Approach</a>
            <a href="/cohort" className={`navLink ${path === '/cohort' ? 'navLinkActive' : ''}`}>Cohorts</a>
            <a href="/projects" className={`navLink ${path === '/projects' ? 'navLinkActive' : ''}`}>Projects</a>
            <a href="/facilitator" className={`navLink ${path === '/facilitator' ? 'navLinkActive' : ''}`}>Facilitator</a>
          </div>
          <a href={calendarLink} className="navCta" target="_blank" rel="noopener noreferrer">
            Schedule a conversation
          </a>
          <button
            className={`hamburger ${menuOpen ? 'hamburgerOpen' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobileMenu ${menuOpen ? 'mobileMenuOpen' : ''}`}>
        <div className="mobileMenuInner">
          <a href="/" className="mobileNavLink" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="/approach" className={`mobileNavLink ${path === '/approach' ? 'mobileNavLinkActive' : ''}`} onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="/cohort" className={`mobileNavLink ${path === '/cohort' ? 'mobileNavLinkActive' : ''}`} onClick={() => setMenuOpen(false)}>Cohorts</a>
          <a href="/projects" className={`mobileNavLink ${path === '/projects' ? 'mobileNavLinkActive' : ''}`} onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="/facilitator" className={`mobileNavLink ${path === '/facilitator' ? 'mobileNavLinkActive' : ''}`} onClick={() => setMenuOpen(false)}>Facilitator</a>
          <a href="/apply" className={`mobileNavLink ${path === '/apply' ? 'mobileNavLinkActive' : ''}`} onClick={() => set
