"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="wordmark">
              <span className="l">lubię</span>
              <span className="p">pierogi</span>
            </div>
            <p>Domowa pierogarnia na wrocławskim Nadodrzu. Ręcznie lepione pierogi, chinkali i dania na słodko — codziennie świeże.</p>
          </div>
          <div className="footer-col">
            <h4>Strona</h4>
            <a href="#o-nas">O nas</a>
            <a href="#menu">Menu</a>
            <a href="#galeria">Galeria</a>
            <a href="#wizyta">Godziny i dojazd</a>
          </div>
          <div className="footer-col">
            <h4>Kontakt</h4>
            <span>Słowiańska 1/1b, Wrocław</span>
            <a href="tel:+48692736774">692 736 774</a>
            <a href="https://www.instagram.com/wroclaw_pierogi" target="_blank" rel="noopener">@wroclaw_pierogi</a>
            <span>Codziennie 9:00–21:00</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Pierogarnia Lubię Pierogi · Wrocław</span>
          <span>Lepione z ♥ na Nadodrzu</span>
        </div>
      </div>
    </footer>
  );
}
