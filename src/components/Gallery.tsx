"use client";
import Image from "next/image";
import { useReveal } from "@/hooks/useReveal";

interface GalleryCell {
  src: string;
  alt: string;
  cap: string;
  cls: string;
  col?: string;
  row?: string;
}

const CELLS: GalleryCell[] = [
  { src: "/assets/pierogi-plates.jpg", alt: "Dwa talerze pierogów z cebulką", cap: "Pierogi z cebulką", cls: "g-cell span2 row2" },
  { src: "/assets/chinkali-meat.jpg", alt: "Chinkali z mięsem w przekroju", cap: "Chinkali z mięsem", cls: "g-cell" },
  { src: "/assets/sweet-fruit.jpg", alt: "Pierogi na słodko z owocami i lodami", cap: "Słodkie z owocami", cls: "g-cell" },
  { src: "/assets/placki-table.jpg", alt: "Placki ziemniaczane ze śmietaną", cap: "Placki ziemniaczane", cls: "g-cell" },
  { src: "/assets/pyzy.jpg", alt: "Pyzy nadziewane mięsem", cap: "Pyzy z mięsem", cls: "g-cell" },
  { src: "/assets/chinkali-sweet.jpg", alt: "Chinkali na słodko z wiśnią", cap: "Chinkali na słodko", cls: "g-cell" },
  { src: "/assets/pierogi-raw.jpg", alt: "Świeżo lepione pierogi", cap: "Lepione ręcznie", cls: "g-cell" },
  { src: "/uploads/639766459_18566653690010062_36090082349371871_n..jpg", alt: "Pierogi ręcznie lepione na blasze", cap: "Prosto z produkcji", cls: "g-cell" },
  { src: "/uploads/624710801_18110684851648716_4489814710543353422_n..jpg", alt: "Pierogi mięsne z cebulką w przekroju", cap: "Pierogi mięsne", cls: "g-cell" },
  { src: "/uploads/abc.jpg", alt: "Smażone pierogi ze śmietaną i kolendrą", cap: "Pierogi smażone", cls: "g-cell span2 row2", col: "3 / 5", row: "3 / 5" },
];

export default function Gallery() {
  const headRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

  return (
    <section className="section gallery" id="galeria">
      <div className="wrap">
        <div className="center reveal" ref={headRef}>
          <span className="eyebrow">prosto z kuchni</span>
          <h2 className="sec-title">Galeria</h2>
          <p className="sec-lead">Tak wygląda u nas na talerzu. Więcej codziennie na naszym Instagramie.</p>
        </div>
        <div className="gallery-grid reveal" ref={gridRef} style={{ marginTop: 38 }}>
          {CELLS.map((c) => (
            <div
              className={c.cls}
              key={c.src}
              style={c.col || c.row ? { gridColumn: c.col, gridRow: c.row } : undefined}
            >
              <Image src={c.src} alt={c.alt} fill style={{ objectFit: "cover" }} loading="lazy" />
              <span className="g-cap">{c.cap}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
