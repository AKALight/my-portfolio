import React, { useState } from 'react'; 
import { FaAt, FaGithub, FaLinkedinIn, FaTimes } from 'react-icons/fa'; 
import './App.css';
import profileImage from '/your-photo.png';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); 

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const skillsList = [
    "Hardware Troubleshooting", "C++", "Python", "Java", "SQL", 
    "AutoCAD & Technical Drafting", "IoT & Embedded Systems", 
    "Sensor Integration", "Git & Version Control", "Circuit & PCB Design", 
    "Firmware Development", "Multimedia Production"
  ];

  return (
    <div className="container">
      
      {/* Global Navigation - Floats on top regardless of the background */}
      {/* If Projects is active, it changes the text color to black */}
      <nav className={`navigation global-nav ${activeSection === 'projects' ? 'nav-dark-text' : ''}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('about'); }}>About me</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('skills'); }}>Skills</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setActiveSection('projects'); }}>Projects</a>
        <button className="contact-btn" onClick={openModal}>CONTACT ME</button>
      </nav>

      {/* Main Left Content Panel */}
      {/* Expands to 100% width ONLY when projects are active */}
      <div className={`left-panel ${activeSection === 'projects' ? 'projects-full-width' : ''}`}>
        <div className="logo" onClick={() => setActiveSection('home')} style={{cursor: 'pointer'}}>AD</div>
        
        {/* HOME SECTION */}
        {activeSection === 'home' && (
          <div className="hero-text fade-in">
            <h2>Hi, I am</h2>
            <h1>Anuarruddin B. Daud</h1> 
            <h3>Computer Engineer</h3> 
          </div>
        )}

        {/* ABOUT ME SECTION */}
        {activeSection === 'about' && (
          <div className="content-section fade-in">
            <h2 className="section-title">About Me</h2>
            <p className="section-paragraph">
                "Computer Engineering graduate and technical troubleshooter with a hands-on DIY approach to problem-solving. Skilled in IoT development, database management, and technical drafting. Proven ability to bridge the gap between complex engineering logic and creative multimedia storytelling."
            </p>
          </div>
        )}

        {/* SKILLS SECTION */}
        {activeSection === 'skills' && (
          <div className="content-section fade-in">
            <h2 className="section-title">Technical Skills</h2>
            <div className="skills-grid">
              {skillsList.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS SECTION */}
        {activeSection === 'projects' && (
          <div className="projects-container fade-in">
            <h2 className="section-title" style={{textAlign: 'center', marginBottom: '2rem'}}>My Projects</h2>
            
            <div className="projects-grid">
              <div className="project-card">
                <h3 className="category-title">Multimedia & Video</h3>
                <p className="section-paragraph">
                  Explore my cinematography, film festival entries, and video editing portfolio directly on my social platforms.
                </p>
                <div className="button-row">
                  <a href="https://www.facebook.com/anuar.ruddin.22" target="_blank" rel="noopener noreferrer" className="action-btn">Facebook</a>
                  <a href="https://www.tiktok.com/@anuar_ruddin" target="_blank" rel="noopener noreferrer" className="action-btn">TikTok</a>
                </div>
              </div>

              <div className="project-card">
                <h3 className="category-title">Hardware & IoT</h3>
                
                <div className="project-item">
                  <h4>SURI Capstone (Lead Developer)</h4>
                  <p className="section-paragraph">
                    Built an AI-powered energy management and secure access system using Raspberry Pi, IoT sensors, and YOLO image processing.
                  </p>
                </div>

                <div className="project-item">
                  <h4>HydroSafe (Technical Assistant)</h4>
                  <p className="section-paragraph">
                    Co-developed an IoT-based drainage monitoring and flood warning prototype using an ESP32, ultrasonic sensors, and a GSM module.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* The Black Split Screen - Only rendered if NOT on projects tab */}
      {activeSection !== 'projects' && (
        <div className="right-panel fade-in">
          <div className="image-wrapper">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Contact Me</h2>
              <button className="close-btn" onClick={closeModal}><FaTimes /></button>
            </div>
            <div className="modal-body">
              <div className="modal-icons">
                <a href="mailto:daudanuarruddin@gmail.com" className="modal-icon-link" target="_blank" rel="noopener noreferrer"> 
                  <div className="icon-box"><FaAt /></div> 
                  <span>daudanuarruddin@gmail.com</span>
                </a>
                <a href="https://github.com/AKALight" className="modal-icon-link" target="_blank" rel="noopener noreferrer"> 
                  <div className="icon-box"><FaGithub /></div> 
                  <span>github.com/AKALight</span>
                </a>
                <a href="https://www.linkedin.com/in/anuarruddin-daud-a828b3402" className="modal-icon-link" target="_blank" rel="noopener noreferrer">
                  <div className="icon-box"><FaLinkedinIn /></div> 
                  <span>LinkedIn Profile</span> 
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
