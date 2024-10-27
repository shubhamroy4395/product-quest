import React from 'react';

function Resources() {
  return (
    <div className="resources-page">
      <section className="resources-hero">
        <h1>Product Management Resources</h1>
        <p>Curated resources to help you excel in your product management journey</p>
      </section>
      
      <section className="resources-grid">
        <div className="resource-card">
          <h2>Product Strategy</h2>
          <p>Learn how to develop and execute winning product strategies</p>
          <a href="/strategy" className="resource-link">Explore Strategy Resources</a>
        </div>
        
        <div className="resource-card">
          <h2>User Research</h2>
          <p>Master the art of understanding user needs and behaviors</p>
          <a href="/research" className="resource-link">Explore Research Resources</a>
        </div>
        
        <div className="resource-card">
          <h2>Agile & Scrum</h2>
          <p>Deep dive into agile methodologies and scrum practices</p>
          <a href="/agile" className="resource-link">Explore Agile Resources</a>
        </div>
      </section>
    </div>
  );
}

export default Resources;
