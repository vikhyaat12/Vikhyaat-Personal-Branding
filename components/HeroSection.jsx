import React from "react";
export default function HeroSection({ data }) {
  return (
    <section className="hero">
      <img src="/profile.jpg" alt="Vikhyaat Sikand" className="profile-pic"/>
      <h1>{data.headline}</h1>
      <h2>{data.tagline}</h2>
      <a className="cta" href="#contact">{data.cta}</a>
    </section>
  );
}
