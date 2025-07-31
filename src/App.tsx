import React, { useState, Suspense } from "react";
import "./styles/globals.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Program from "./components/Program";
import Speakers from "./components/Speakers"; 
import HackSEIIIS from "./components/HackSEIIIS";
import PhotoGallery from "./components/PhotoGallery";
import Sponsors from "./components/Sponsors";
import Registration from "./components/Registration";

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowContent(true)
    }, 100)
  }

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
        return <HackSEIIIS />;
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

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />
  }

  return (
    <main className="min-h-screen bg-white">
      {/* {showContent && (
        <>
          <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
          <div className="pt-16 sm:pt-20">{renderSection()}</div>
          <Footer />
        </>
      )} */}
      <Suspense fallback={<div className="flex items-center justify-center h-screen"><LoadingPage onLoadingComplete={handleLoadingComplete} /></div>}>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <div className="pt-16 sm:pt-20">
          {renderSection()}
        </div>
        <Footer />
      </Suspense>
    </main>
  );
} 