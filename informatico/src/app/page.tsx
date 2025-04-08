import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";


  

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
