import "./css/about.css";
import React from "react";
function About() {
  return (
    <>
      <section>
        <h1>About Us</h1>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h2>Our Story</h2>
          <p>Insert your company's history and mission here.</p>
        </div>
      </section>
      <section className="about-section">
        <div className="about-content">
          <h2>Our Team</h2>
          <p>Insert your company's team members here.</p>
        </div>
      </section>
    </>
  );
}

export default About;
