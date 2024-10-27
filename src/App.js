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

  function updateSignupCTA(newText) {
    const signupButton = document.getElementById('signup-cta');
    if (signupButton) {
      signupButton.textContent = newText;
    } else {
      console.warn('Signup button not found');
    }
  }

  // Example usage: Change the button text to "Start Your Journey"
  updateSignupCTA("Start Your Quest later");

  return (
    <div className="app">
      <div className="sky">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`cloud cloud-${i + 1}`}></div>
        ))}
      </div>
      <header>
        <div className="logo">PM Quest</div>
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
              <p>"Want to Master Product Management Skills and Stand Out? 🚀
              Join a community of like-minded PM enthusiasts tackling real-world challenges! Get hands-on with weekly exercises, expert-led discussions, and a chance to showcase your progress on a leaderboard with certifications and prizes. Sign up today and get access to your first challenge – start building your product portfolio!"
              </p>
              <form className="signup-form">
                <input type="email" placeholder="Enter your email" required />
                <button type="submit" id="signup-cta">Join the Quest</button>
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
        <p>&copy; 2024 PM Quest. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
