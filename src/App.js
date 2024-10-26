import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const moveClouds = () => {
      const clouds = document.querySelectorAll('.cloud');
      clouds.forEach((cloud) => {
        cloud.style.transform = `translateX(${Math.sin(Date.now() / 1000) * 10}px)`;
      });
      requestAnimationFrame(moveClouds);
    };
    moveClouds();
  }, []);

  return (
    <div className="app">
      <div className="sky">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`cloud cloud-${i + 1}`}></div>
        ))}
      </div>
      <header>
        <div className="logo">ProductQuest</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Build Your PM Career, Block by Block</h1>
              <p>Join a community of product managers crafting the future, one pixel at a time.</p>
              <form className="signup-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Join the Quest</button>
              </form>
            </div>
            <div className="hero-icon">
              {/* Placeholder for icon */}
              <div className="pixel-icon"></div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="feature-card">
            <h2>Learn</h2>
            <p>Access curated resources to level up your PM skills</p>
          </div>
          <div className="feature-card">
            <h2>Practice</h2>
            <p>Apply your knowledge with real-world scenarios</p>
          </div>
          <div className="feature-card">
            <h2>Connect</h2>
            <p>Network with fellow product managers on the same quest</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 ProductQuest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
