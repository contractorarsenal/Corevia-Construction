import { useState } from "react";
import type { ProjectType } from "./data/business";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  const [requestedProjectType, setRequestedProjectType] =
    useState<ProjectType | null>(null);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <Hero />
        <Services onSelectProject={setRequestedProjectType} />
        <Gallery />
        <About />
        <Contact presetProjectType={requestedProjectType} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
