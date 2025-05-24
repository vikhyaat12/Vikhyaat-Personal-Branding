import React from "react";
export default function ServicesSection({ data }) {
  return (
    <section className="services">
      <h2>{data.title}</h2>
      <ul>
        {data.list.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}