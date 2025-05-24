import React from "react";
export default function AboutSection({ data }) {
  return (
    <section className="about">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </section>
  );
}