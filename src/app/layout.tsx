import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lubię Pierogi — Pierogarnia we Wrocławiu (Nadodrze)",
  description: "Pierogarnia Lubię Pierogi na wrocławskim Nadodrzu. Codziennie ręcznie lepione pierogi na cienkim cieście, chinkali, placki i pierogi na słodko. Słowiańska 1/1b. Otwarte 9–21.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
