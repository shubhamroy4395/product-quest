import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resources from './Resources';
import About from './About';
import Contact from './Contact';
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
    <Router>
      <div className="app">
        <div className="sky">
          {[...Array(10)].map((_, i) => (
            <div key={i} className={`cloud cloud-${i + 1}`}></div>
          ))}
        </div>
        <header>
          <div className="logo">ProductQuest</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        
        <Routes>
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <main>
              <section className="hero">
                <div className="hero-content">
                  <div className="hero-text">
                    <h1>Build Your PM Career, Block by Block</h1>
                    
                    <p><br/><br/>Join a community of product managers crafting the future, one pixel at a time. It is a winderful opporutnity</p>
                    <p>Join a community of product managers crafting the future, one pixel at a time.</p>
                    <p>Join a community of product managers crafting the future, one pixel at a time.</p><br/><br/>
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
                <div className="features-row">
                  <div className="feature-card">
                    <h2>Learn</h2>
                    <p>Unlock curated resources designed to boost your PM skills – from foundational frameworks to advanced insights. Start learning today and accelerate your journey to becoming a standout Product Manager!</p>
                  </div>
                  <div className="feature-card">
                    <h2>Practice</h2>
                    <p>Apply your knowledge with real-world scenarios</p>
                  </div>
                  <div className="feature-card">
                    <h2>Connect</h2>
                    <p>Network with fellow product managers on the same quest</p>
                  </div>
                </div>
                <div className="features-row">
                  <div className="feature-card">
                    <h2>Explore</h2>
                    <p>Unlock curated resources designed to boost your PM skills – from foundational frameworks to advanced insights. Start learning today and accelerate your journey to becoming a standout Product Manager!</p>

                  </div>
                  <div className="feature-card">
                    <h2>Explore 2</h2>
                    <p>Network with fellow product managers on the same quest</p>
                  </div>
                  <div className="feature-card">
                    <h2>Explore 3</h2>
                    <p>Network with fellow product managers on the same quest</p>
                  </div>
                </div>
              </section>
            </main>
          } />
        </Routes>

        <footer>
          <p>&copy; 2023 ProductQuest. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
