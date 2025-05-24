import React, { useState } from "react";
import data from "./data.json";
import LanguageSwitcher from "./components/LanguageSwitcher";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import StorySection from "./components/StorySection";
import ContactSection from "./components/ContactSection";
import "./main.css";

export default function App() {
  const [language, setLanguage] = useState(
    (navigator.language || navigator.userLanguage).startsWith("hi") ? "hi" : "en"
  );
  return (
    <>
      <LanguageSwitcher language={language} setLanguage={setLanguage} />
      <HeroSection data={data.hero[language]} />
      <AboutSection data={data.about[language]} />
      <StorySection data={data.story[language]} />
      <ServicesSection data={data.services[language]} />
      <ContactSection data={data.contact[language]} />
    </>
  );
}
