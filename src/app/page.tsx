import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Domains from "@/components/Domains";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Background layers */}
      <div className="mesh-gradient" />
      <div className="grid-pattern fixed inset-0 z-[-1]" />

      {/* Detached floating navbar */}
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Domains />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
