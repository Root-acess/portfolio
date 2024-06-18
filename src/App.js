import React, { useEffect } from 'react';
import './App.css';
import img from '../src/img/profile.jpeg';
import Contact from './element/contact'
import Button from './element/button'

function App() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Use useEffect to scroll to the top on component mount
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <nav>
        <a href="#projects">Projects</a>
        <button className="home-button" onClick={scrollToTop}>
          <svg
            className="home-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Home
        </button>
        <a href="#contact">Contact</a>
      </nav>
      <div className="context">
        <div className="profile-container">
          <img src={img} alt="Profile" className="profile-icon" />
          <div className='text'>
            <h1>Hiralal Singh</h1>
            <h3>@Root-access</h3>
          </div>
          <div className='btn'>
            < Button />
          </div>
          
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="section" id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project">
            <img src="discord-clone.png" alt="Discord Clone" />
            <h3>Comming Soon</h3>
            <p>Project are fatching </p>
          </div>
          <div className="project">
            <img src="spotify-clone.png" alt="Spotify Clone" />
            <h3>Comming Soon</h3>
            <p>Project are fatching </p>
          </div>
          <div className="project">
            <img src="amazon-clone.png" alt="Amazon Clone" />
            <h3>Comming Soon</h3>
            <p>Project are fatching </p></div>
          <div className="project">
            <img src="dalle-clone.png" alt="DALL-E Clone" />
            <h3>Comming Soon</h3>
            <p>Project are fatching </p>
             </div>
        </div>
      </div>
      <div className="section" id="contact">
        <h2>Contact</h2>
        <div className='section-contact'><Contact />
        </div>
        
        <p>Feel free to reach out to me at [hiralals221@gmail.com] or connect with me on LinkedIn.</p>
      </div>
      <div className="section" id="about">
        <h2>About Me</h2>
        <div className="about-content">
        <img src={img} alt="Profile" className="profile-icon" />
        <p>Hi, I'm Hiralal Singh, a passionate web developer with a knack for creating beautiful and functional websites. I specialize in front-end development and have experience working with various modern web technologies.</p>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Node.js</div>
            <div className="skill">Python</div>
            <div className="skill">PHP</div>
            <div className="skill">MySql</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
