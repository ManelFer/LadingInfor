import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
