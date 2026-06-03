"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

type Cat = "all" | "najczestsze" | "pierogi" | "zupy" | "zestawy" | "dodatki" | "surowki" | "napoje" | "kawa";

interface MenuItem {
  cat: Exclude<Cat, "all">;
  name: string;
  price: string;
  desc: string;
  qty?: string;
  tag?: string;
}

const MENU: MenuItem[] = [
  // Najczęściej zamawiane
  { cat: "najczestsze", name: "Pierogi ruskie", price: "20,00 zł", desc: "Ziemniaki, ser biały, smażona cebulka.", tag: "Popularne" },
  { cat: "najczestsze", name: "Rosół drobiowy z makaronem", price: "16,00 zł", desc: "Aromatyczny rosół drobiowy z makaronem.", tag: "Popularne" },
  { cat: "najczestsze", name: "Barszcz z uszkami", price: "17,50 zł", desc: "Czerwony barszcz z uszkami nadziewanymi mięsem.", tag: "Popularne" },
  // Pierogi
  { cat: "pierogi", name: "Pierogi z wiśniami", price: "26,00 zł", qty: "8 szt", desc: "Soczyste wiśnie. Podajemy ze śmietaną." },
  { cat: "pierogi", name: "Pielmieni z kaczką", price: "30,00 zł", qty: "10 szt", desc: "Kaczka, marchewka, seler, pietruszka." },
  { cat: "pierogi", name: "Pielmieni z wołowiną", price: "30,00 zł", qty: "10 szt", desc: "Wołowina, kiszone ogórki, przyprawy." },
  { cat: "pierogi", name: "Pielmieni z wieprzowiną", price: "26,00 zł", qty: "10 szt", desc: "Wieprzowina, cebula, przyprawy." },
  { cat: "pierogi", name: "Pielmieni z kurczakiem i pieczarkami", price: "26,00 zł", qty: "10 szt", desc: "Kurczak, pieczarki, cebulka, przyprawy." },
  { cat: "pierogi", name: "Pierogi ruskie", price: "20,00 zł", desc: "Ziemniaki, ser biały, smażona cebulka.", tag: "Popularne" },
  { cat: "pierogi", name: "Pierogi z mięsem", price: "24,00 zł", qty: "8 szt", desc: "Łopatka, schab, seler, marchewka, pietruszka." },
  { cat: "pierogi", name: "Pierogi ze szpinakiem", price: "21,00 zł", desc: "Szpinak, ser biały, czosnek." },
  { cat: "pierogi", name: "Pierogi kapusta, pieczarki", price: "21,00 zł", desc: "Kapusta kiszona, pieczarki, przyprawy." },
  { cat: "pierogi", name: "Pierogi z wątróbką", price: "22,00 zł", desc: "Wątróbka drobiowa, boczek, marchewka, cebulka." },
  { cat: "pierogi", name: "Pierogi z truskawkami", price: "22,00 zł", qty: "8 szt", desc: "Sezonowe truskawki. Pysznie z gęstą śmietaną." },
  { cat: "pierogi", name: "Pierogi słodkie", price: "22,00 zł", qty: "8 szt", desc: "Ser biały, budyń, cukier waniliowy." },
  { cat: "pierogi", name: "Pierogi z jagodami", price: "26,00 zł", qty: "8 szt", desc: "Leśna borówka. Podajemy z lodami." },
  { cat: "pierogi", name: "Pielmieni z indykiem i mozzarellą", price: "28,00 zł", qty: "8 szt", desc: "Indyk, mozzarella, suszone pomidory, przyprawy." },
  // Zupy
  { cat: "zupy", name: "Rosół drobiowy z makaronem", price: "16,00 zł", desc: "Aromatyczny rosół drobiowy z makaronem.", tag: "Popularne" },
  { cat: "zupy", name: "Rosół z kołdunami", price: "17,50 zł", desc: "Kołduny z mięsem wieprzowym." },
  { cat: "zupy", name: "Barszcz z uszkami", price: "17,50 zł", desc: "Czerwony barszcz z uszkami nadziewanymi mięsem.", tag: "Popularne" },
  // Zestawy obiadowe
  { cat: "zestawy", name: "Zestaw obiadowy z kurczakiem + sałatka", price: "35,00 zł", desc: "Filet z kurczaka w panierce, ziemniaki i sałatka.", tag: "Popularne" },
  { cat: "zestawy", name: "Zestaw obiadowy ze schabowym + sałatka", price: "35,00 zł", desc: "Kotlet schabowy w panierce, ziemniaki i sałatka." },
  { cat: "zestawy", name: "Kotlet schabowy w klasycznej panierce", price: "17,00 zł", desc: "Kotlet schabowy w klasycznej panierce." },
  { cat: "zestawy", name: "Filet z kurczaka w klasycznej panierce", price: "17,00 zł", desc: "Filet z kurczaka w klasycznej panierce." },
  { cat: "zestawy", name: "Chrupiące frytki", price: "14,00 zł", qty: "200 g", desc: "Złociste frytki podawane z ketchupem." },
  { cat: "zestawy", name: "Ziemniaki z wody", price: "12,00 zł", desc: "Gotowane ziemniaki jako dodatek do dania." },
  { cat: "zestawy", name: "Zestaw Przekąsek", price: "26,00 zł", desc: "4× krążki cebulowe, 4× paluszki serowe, 4× paski smażonego kurczaka, ketchup i sos czosnkowy." },
  // Dodatki
  { cat: "dodatki", name: "Kefir", price: "7,00 zł", qty: "0,337 l", desc: "Kefir do pierogów." },
  { cat: "dodatki", name: "Sosy", price: "2,00 zł", desc: "Sos do wyboru." },
  { cat: "dodatki", name: "Śmietana", price: "5,00 zł", desc: "Gęsta śmietana." },
  // Surówki
  { cat: "surowki", name: "Kiszona kapusta", price: "6,00 zł", desc: "Kiszona kapusta z marchewką." },
  { cat: "surowki", name: "Buraczki", price: "6,00 zł", desc: "Buraczki zasmażane z cebulką." },
  // Napoje
  { cat: "napoje", name: "Woda niegazowana 0,5l", price: "6,00 zł", qty: "0,5 l", desc: "Woda niegazowana." },
  { cat: "napoje", name: "Woda gazowana 0,5l", price: "6,00 zł", qty: "0,5 l", desc: "Woda gazowana." },
  { cat: "napoje", name: "Sok pomarańczowy 300ml", price: "7,00 zł", qty: "300 ml", desc: "Świeży sok pomarańczowy." },
  { cat: "napoje", name: "Sok jabłkowy 300ml", price: "7,00 zł", qty: "300 ml", desc: "Sok jabłkowy." },
  // Kawa i herbata
  { cat: "kawa", name: "Kawa czarna 250ml", price: "12,00 zł", qty: "250 ml", desc: "Kawa czarna espresso." },
  { cat: "kawa", name: "Kawa Cappuccino 250ml", price: "14,00 zł", qty: "250 ml", desc: "Kawa cappuccino z mleczną pianką." },
  { cat: "kawa", name: "Café Latte 250ml", price: "14,00 zł", qty: "250 ml", desc: "Café latte z delikatnym mlekiem." },
];

const TABS: { cat: Cat; label: string }[] = [
  { cat: "all", label: "Wszystko" },
  { cat: "najczestsze", label: "Najczęściej zamawiane" },
  { cat: "pierogi", label: "Pierogi" },
  { cat: "zupy", label: "Zupy" },
  { cat: "zestawy", label: "Zestawy obiadowe" },
  { cat: "dodatki", label: "Dodatki" },
  { cat: "surowki", label: "Surówki" },
  { cat: "napoje", label: "Napoje" },
  { cat: "kawa", label: "Kawa i herbata" },
];

export default function MenuSection() {
  const [active, setActive] = useState<Cat>("all");
  const headRef = useReveal<HTMLDivElement>();
  const tabsRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  const items = active === "all" ? MENU : MENU.filter((m) => m.cat === active);

  return (
    <section className="section menu" id="menu">
      <div className="wrap">
        <div className="center reveal" ref={headRef}>
          <span className="eyebrow">nasza karta</span>
          <h2 className="sec-title">Menu</h2>
          <p className="sec-lead">Wszystkie pierogi gotowane podajemy ze smażoną cebulką. Porcja to 12 sztuk (ok. 500 g), o ile nie zaznaczono inaczej.</p>
        </div>
        <div className="menu-tabs reveal" ref={tabsRef}>
          {TABS.map((t) => (
            <button
              key={t.cat}
              className={`menu-tab${active === t.cat ? " active" : ""}`}
              onClick={() => setActive(t.cat)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="menu-grid reveal" ref={gridRef}>
          {items.map((m) => (
            <article className="menu-item" key={m.cat + m.name}>
              <h3 className="name">
                {m.name}
                {m.tag && <span className="tag">{m.tag}</span>}
              </h3>
              <span className="price">{m.price}</span>
              {m.qty && <span className="qty" style={{ gridColumn: "1/2" }}>{m.qty}</span>}
              <p className="desc">{m.desc}</p>
            </article>
          ))}
        </div>
        <p className="menu-note">
          Zamówisz też z dostawą —{" "}
          <a href="https://wolt.com/pl/pol/wroclaw/restaurant/lubi-pierogi" target="_blank" rel="noopener">Lubię Pierogi na Wolt</a>.
          {" "}Catering i zamówienia na święta — zadzwoń:{" "}
          <a href="tel:+48692736774">692 736 774</a>.
        </p>
      </div>
    </section>
  );
}
