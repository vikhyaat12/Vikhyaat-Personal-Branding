import React from "react";
export default function ContactSection({ data }) {
  return (
    <section className="contact" id="contact">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
      <a href={data.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
      <a href={data.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <br />
      <a className="cta" href={data.calendly} target="_blank" rel="noopener noreferrer">{data.bookcall}</a>
    </section>
  );
}