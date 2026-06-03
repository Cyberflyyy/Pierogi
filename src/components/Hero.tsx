import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media">
        <Image src="/assets/pierogi-plates.jpg" alt="Talerze ręcznie lepionych pierogów z cebulką" fill style={{ objectFit: "cover" }} priority />
      </div>
      <div className="wrap hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="dot" />
            Wrocław · Nadodrze · codziennie 9–21
          </span>
          <div className="big-wordmark">
            <span className="l">lubię</span>
            <span className="p">pierogi</span>
          </div>
          <p className="hero-tagline">Codziennie ręcznie lepione na cienkim cieście.</p>
          <p className="hero-sub">Domowa pierogarnia na Słowiańskiej. Ponad 15 rodzajów pierogów, gruzińskie chinkali i pierogi na słodko — zawsze gotowane z duszą.</p>
          <div className="hero-actions">
            <a href="#menu" className="btn btn-gold">Zobacz menu</a>
            <a href="tel:+48692736774" className="btn btn-outline-light">Zadzwoń i zarezerwuj</a>
          </div>
        </div>
        <div className="hero-photo">
          <Image src="/assets/pierogi-raw.jpg" alt="Świeżo lepione pierogi na stolnicy" fill style={{ objectFit: "cover" }} />
        </div>
        <div className="hero-strip">
          <span className="item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7Z" /><circle cx="12" cy="9" r="2.5" />
            </svg>
            Słowiańska 1/1b
          </span>
          <span className="item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Bez wzmacniaczy smaku
          </span>
          <span className="item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 2 15 8l6 .8-4.5 4.2L18 19l-6-3-6 3 1.5-6L3 8.8 9 8z" />
            </svg>
            Polecane przez WPK
          </span>
        </div>
      </div>
    </section>
  );
}
