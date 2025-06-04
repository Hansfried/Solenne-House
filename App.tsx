import React from "react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { ExperienceSection } from "./components/experience-section";
import { ScheduleSection } from "./components/schedule-section";
import { GuestsSection } from "./components/guests-section";
import { ApplicationSection } from "./components/application-section";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-brown-900 font-sans">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ScheduleSection />
        <GuestsSection />
        <ApplicationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;