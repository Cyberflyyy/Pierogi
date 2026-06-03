import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import CtaStrip from "@/components/CtaStrip";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <span id="top" />
      <Header />
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Visit />
      <CtaStrip />
      <Footer />
    </>
  );
}
