"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

export default function About() {
  const ref1 = useReveal<HTMLDivElement>();
  const ref2 = useReveal<HTMLDivElement>();

  return (
    <section className="section about" id="o-nas">
      <div className="wrap about-grid">
        <div className="about-photos reveal" ref={ref1}>
          <div className="ph-main">
            <Image src="/assets/pierogi-raw.jpg" alt="Pierogi lepione ręcznie, posypane mąką" fill style={{ objectFit: "cover" }} loading="lazy" />
          </div>
          <div className="ph-stamp">
            <Image src="/assets/pyzy.jpg" alt="Pyzy nadziewane mięsem" fill style={{ objectFit: "cover" }} loading="lazy" />
          </div>
        </div>
        <div className="about-text reveal" ref={ref2}>
          <span className="eyebrow">nasza historia</span>
          <h2 className="sec-title">Powstaliśmy, by tworzyć historię&nbsp;Nadodrza</h2>
          <p className="sec-lead">Lubię Pierogi to mała, domowa pierogarnia z sercem. Każdego dnia lepimy pierogi ręcznie, na cienkim cieście, ze świeżych i regionalnych produktów. Bez chemii, bez kompromisów — tak, jak robiło się to w domu.</p>
          <ul className="about-points">
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M5 5v6a7 7 0 0 0 14 0V5" />
                </svg>
              </span>
              <div>
                <b>Lepione ręcznie, codziennie</b>
                <p>Świeże porcje przygotowywane na miejscu — nigdy z mrożonki.</p>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a7 7 0 0 0-7 7c0 3 2 5 2 8h10c0-3 2-5 2-8a7 7 0 0 0-7-7Z" />
                  <path d="M9 21h6" />
                </svg>
              </span>
              <div>
                <b>Zdrowe, regionalne produkty</b>
                <p>Bez glutaminianu i wzmacniaczy smaku — prosto od lokalnych rolników.</p>
              </div>
            </li>
            <li>
              <span className="ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
                </svg>
              </span>
              <div>
                <b>Ponad 15 rodzajów pierogów</b>
                <p>Od ruskich i mięsnych, przez chinkali, po pierogi na słodko z owocami.</p>
              </div>
            </li>
          </ul>
          <span className="wpk-badge">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2 15 8l6 .8-4.5 4.2L18 19l-6-3-6 3 1.5-6L3 8.8 9 8z" />
            </svg>
            Rekomendacja Wrocławskich Podróży Kulinarnych
          </span>
        </div>
      </div>
    </section>
  );
}
