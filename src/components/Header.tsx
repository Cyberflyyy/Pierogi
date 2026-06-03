"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="header">
        <div className="wrap nav">
          <Link href="#top" className="wordmark" aria-label="Lubię Pierogi — strona główna">
            <span className="l">lubię</span>
            <span className="p">pierogi</span>
          </Link>
          <nav className="nav-links" aria-label="Główna nawigacja">
            <a href="#o-nas">O nas</a>
            <a href="#menu">Menu</a>
            <a href="#galeria">Galeria</a>
            <a href="#wizyta">Godziny</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <div className="nav-cta">
            <a href="tel:+48692736774" className="nav-phone" aria-label="Zadzwoń: 692 736 774">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span className="txt">692 736 774</span>
            </a>
            <a href="#menu" className="btn btn-gold">Zobacz menu</a>
          </div>
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className="mobile-drawer" id="drawer">
        <a href="#o-nas" className="m-link" onClick={close}>O nas</a>
        <a href="#menu" className="m-link" onClick={close}>Menu</a>
        <a href="#galeria" className="m-link" onClick={close}>Galeria</a>
        <a href="#wizyta" className="m-link" onClick={close}>Godziny i dojazd</a>
        <a href="#kontakt" className="m-link" onClick={close}>Kontakt</a>
        <div className="m-foot">
          <a href="tel:+48692736774" className="btn btn-green" onClick={close}>Zadzwoń · 692 736 774</a>
          <a href="https://www.instagram.com/wroclaw_pierogi" target="_blank" rel="noopener" className="btn btn-ghost" onClick={close}>Instagram @wroclaw_pierogi</a>
        </div>
      </div>
    </>
  );
}
