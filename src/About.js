import React from 'react';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About ProductQuest</h1>
        <p>Empowering the next generation of Product Managers</p>
      </section>

      <section className="about-content">
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>At ProductQuest, we're dedicated to helping aspiring and experienced Product Managers develop their skills and advance their careers through practical, hands-on learning experiences.</p>
        </div>

        <div className="about-story">
          <h2>Our Story</h2>
          <p>Founded by experienced Product Managers, ProductQuest was born from the recognition that traditional learning paths often lack real-world application. We've created a platform that bridges this gap.</p>
        </div>

        <div className="about-values">
          <h2>Our Values</h2>
          <ul>
            <li>Practical Learning</li>
            <li>Community First</li>
            <li>Continuous Growth</li>
            <li>Innovation</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
