import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
