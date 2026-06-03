"use client";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const DAYS = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

const HOURS_MAP = [
  { open: 10, close: 17, label: "10:00–17:00" }, // 0 Niedziela
  { open: 9,  close: 18, label: "9:00–18:00"  }, // 1 Poniedziałek
  { open: 9,  close: 18, label: "9:00–18:00"  }, // 2 Wtorek
  { open: 9,  close: 18, label: "9:00–18:00"  }, // 3 Środa
  { open: 9,  close: 18, label: "9:00–18:00"  }, // 4 Czwartek
  { open: 9,  close: 18, label: "9:00–18:00"  }, // 5 Piątek
  { open: 10, close: 17, label: "10:00–17:00" }, // 6 Sobota
];

function buildHours() {
  return DAYS.map((d, i) => ({ day: d, hours: HOURS_MAP[i].label }));
}

export default function Visit() {
  const headRef = useReveal<HTMLDivElement>();
  const cardRef = useReveal<HTMLDivElement>();
  const mapRef = useReveal<HTMLDivElement>();

  const [today, setToday] = useState(-1);

  useEffect(() => {
    setToday(new Date().getDay());
  }, []);

  const hours = buildHours();

  return (
    <section className="section visit" id="wizyta">
      <div className="wrap">
        <div className="center reveal" ref={headRef} style={{ marginBottom: 40 }}>
          <span className="eyebrow">zapraszamy</span>
          <h2 className="sec-title">Godziny i dojazd</h2>
        </div>
        <div className="visit-grid">
          <div className="info-card reveal" ref={cardRef} id="kontakt">
            <h3 style={{ fontSize: "1.4rem" }}>Godziny otwarcia</h3>
            <ul className="hours-list">
              {hours.map((r, i) => (
                <li key={r.day} className={i === today ? "today" : ""}>
                  <span className="d">{r.day}</span>
                  <span className="h">{r.hours}</span>
                </li>
              ))}
            </ul>
            <h3 style={{ fontSize: "1.4rem", marginTop: 30 }}>Kontakt</h3>
            <ul className="contact-rows">
              <li>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7Z" /><circle cx="12" cy="9" r="2.5" />
                  </svg>
                </span>
                <div>
                  <div className="lbl">Adres</div>
                  <span className="val">Słowiańska 1/1b, 50-234 Wrocław</span>
                </div>
              </li>
              <li>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div>
                  <div className="lbl">Telefon</div>
                  <a href="tel:+48692736774" className="val">692 736 774</a>
                </div>
              </li>
              <li>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <div>
                  <div className="lbl">Instagram</div>
                  <a href="https://www.instagram.com/wroclaw_pierogi" target="_blank" rel="noopener" className="val">@wroclaw_pierogi</a>
                </div>
              </li>
            </ul>
            <div className="visit-actions">
              <a href="https://www.google.com/maps/place/Pierogarnia+Lubi%C4%99+Pierogi" target="_blank" rel="noopener" className="btn btn-green">Nawiguj do nas</a>
              <a href="https://www.instagram.com/wroclaw_pierogi" target="_blank" rel="noopener" className="btn btn-ghost">Obserwuj na IG</a>
            </div>
          </div>
          <div className="map-card reveal" ref={mapRef}>
            <iframe
              title="Mapa — Pierogarnia Lubię Pierogi, Słowiańska 1/1b Wrocław"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Pierogarnia%20Lubi%C4%99%20Pierogi%20S%C5%82owia%C5%84ska%201%20Wroc%C5%82aw&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
