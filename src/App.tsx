import React, { useState, Suspense, lazy } from "react";
import "./styles/globals.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Timeline = lazy(() => import("./components/Timeline"));
const About = lazy(() => import("./components/About"));
const Program = lazy(() => import("./components/Program"));
const Speakers = lazy(() => import("./components/Speakers"));
const Registration = lazy(() => import("./components/Registration"));
const Sponsors = lazy(() => import("./components/Sponsors"));
const HackSEIIS = lazy(() => import("./components/HackSEIIS"));
const PhotoGallery = lazy(() => import("./components/PhotoGallery"));

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  const renderSection = () => {
    switch (activeSection) {
      case "inicio":
        return <Hero />;
      case "acerca":
        return <About />;
      case "historia":
        return <Timeline />;
      case "programa":
        return <Program />;
      case "ponentes":
        return <Speakers />;
      case "hackathon":
        return <HackSEIIS />;
      case "galeria":
        return <PhotoGallery />;
      case "patrocinadores":
        return <Sponsors />;
      case "registro":
        return <Registration />;
      default:
        return <Hero />;
    }
  };

  return (
    <main className="bg-white mt-12">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div>
        <Suspense fallback={<div className="text-center">Cargando...</div>}>
          {renderSection()}
        </Suspense>
      </div>
      <Footer />
    </main>
  );
} 