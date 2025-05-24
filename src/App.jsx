import React, { useState } from "react";
import data from "./data.json";
import LanguageSwitcher from "./components/LanguageSwitcher";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StorySection from "./components/StorySection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const [lang, setLang] = useState("en");

  const content = data[lang];

  return (
    <div className="container">
      <LanguageSwitcher lang={lang} setLang={setLang} />
      <HeroSection data={content.hero} />
      <AboutSection data={content.about} />
      <StorySection data={content.story} />
      <ServicesSection data={content.services} />
      <ContactSection data={content.contact} />
    </div>
  );
}
