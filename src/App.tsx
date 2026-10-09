import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroStrip from "./components/IntroStrip";
import ServiceArea from "./components/ServiceArea";
import Services from "./components/Services";

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <IntroStrip />
        <Services />
        <FeaturedWork />
        <About />
        <ServiceArea />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
