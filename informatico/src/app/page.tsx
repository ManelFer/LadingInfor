import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/sections/Hero";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}
