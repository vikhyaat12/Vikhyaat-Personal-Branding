import React from "react";
export default function StorySection({ data }) {
  return (
    <section className="story">
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </section>
  );
}
