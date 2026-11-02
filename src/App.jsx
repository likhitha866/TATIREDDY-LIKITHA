import React from "react";
import "./App.css";
import heroImg from "./assets/hero.png.jpeg";

const LINKS = {
  droneLive: "https://cdmp.ntrpolice.in/",
  womenLive: "https://abhaya.ananthapuramupolice.com/",
  awsCert: "https://www.credly.com/badges/8824a83b-bf44-423f-80fa-fdc489d945ed/whatsapp",
  oracleCert: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1C2A1D06FB6D03A2A955FCC34070CFDB6EE61BBB063B0A94C1B8C197AF4E5420",
  azureCert: "https://learn.microsoft.com/en-us/users/tatireddylikitha-6861/credentials/7c8901adbab54225",
  automationCert: "https://certificates.automationanywhere.com/6639e8c7-5d7a-4722-bb30-6fd9350c6770#acc.972Nfre1",
  email: "likhithaaaareddy@gmail.com",
  linkedin: "https://www.linkedin.com/in/likhitha-reddy-15611528b/",
  github: "https://github.com/likhitha866",
  leetcode: "https://leetcode.com/u/2200033080/"
};

function App() {  
  return (
    <div className="app">
      <nav>
        <div className="logo">TL<span>.</span></div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#certs">Certs</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <span className="badge">System Engineer - NTR Police Commissionerate | Oct 2025 - Mar 2026</span>
          <h1>Tatireddy<br /><span>Likitha</span></h1>
          <h2>KL University - B.Tech CSE - CGPA 9.19 | 95% Intermediate</h2>
          <p>
            Designed and supported a city-wide vehicle tracking system using camera networks and AI-based analytics to improve tracking accuracy. Revived legacy 2016 servers by installing and configuring Ubuntu 24, ensuring system reliability and optimal performance.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="primary">View Projects</a>
            <a href={LINKS.leetcode} target="_blank" rel="noreferrer" className="secondary">Leetcode</a>
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="secondary">GitHub</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Likhitha" />
        </div>
      </section>

      <section id="projects" className="section">
        <h3 className="section-title">Projects - With Real Visit Links From Resume</h3>
        <div className="projects-grid">

          <div className="project-card">
            <span className="project-tag">NTR POLICE COMMISSIONERATE</span>
            <h4>Centralised Drone Monitoring Portal</h4>
            <p className="project-desc-main">Developed a centralized drone surveillance platform for real-time monitoring and coordinated law enforcement operations.</p>
            <ul>
              <li>Integrates multiple live drone video feeds, enabling real-time aerial monitoring and enhanced situational awareness.</li>
              <li>Built features to support district-level authorities in monitoring operations, coordinating field activities, and making informed decisions.</li>
              <li>Designed for scalability across multiple districts and standardized surveillance infrastructure for law enforcement.</li>
            </ul>
            <div className="project-links">
              <a href={LINKS.droneLive} target="_blank" rel="noreferrer" className="live">↗️ Visit Live - cdmp.ntrpolice.in</a>
            </div>
            <div className="tech"><span>Python</span><span>Django</span><span>Live Feeds</span></div>
          </div>

          <div className="project-card">
            <span className="project-tag">AP POLICE - ANANTAPUR</span>
            <h4>Women Safety Survey Portal</h4>
            <p className="project-desc-main">Andhra Pradesh Police, Anantapur - Citizen feedback portal.</p>
            <ul>
              <li>Developed Women Safety Survey and Feedback Management Portal using Python and Django for collecting citizen feedback and safety-related insights.</li>
              <li>Implemented survey management, response analysis, and report generation to support administrative monitoring and decision-making.</li>
              <li>Ensured secure data handling and delivered intuitive UX through scalable web-based platform.</li>
            </ul>
            <div className="project-links">
              <a href={LINKS.womenLive} target="_blank" rel="noreferrer" className="live">↗️ Visit Live - Abhaya Portal</a>
            </div>
            <div className="tech"><span>Python</span><span>Django</span><span>PostgreSQL</span><span>MongoDB</span></div>
          </div>

        </div>
      </section>

            <section id="skills" className="section">
        <h3 className="section-title">Skills With Icons</h3>
        <div className="skills-grid">
          <div className="skill-box"><h5>💻 Programming Languages</h5><p>Java, C, C++, Python, HTML, CSS, JavaScript, C#</p></div>
          <div className="skill-box"><h5>🧩 Frameworks</h5><p>.NET, Django, FastAPI, RESTful APIs</p></div>
          <div className="skill-box"><h5>🗄️ Databases</h5><p>PostgreSQL, MongoDB</p></div>
          <div className="skill-box"><h5>🛠️ Tools</h5><p>Visual Studio, Android Studio, .NET SDK</p></div>
          <div className="skill-box"><h5>🧠 DSA-CP</h5><p>Proficient in problem-solving using Python & C++</p></div>
          <div className="skill-box"><h5>📚 Coursework</h5><p>DSA, OOP, OS, DBMS, SDLC, .NET Fundamentals</p></div>
        </div>
      </section>

      <section id="certs" className="section">
        <h3 className="section-title">Certifications</h3>
        <div className="certs-grid">
          <a href={LINKS.awsCert} target="_blank" rel="noreferrer" className="cert-card link"><span>☁️</span><h4>AWS Cloud Practitioner</h4><p>Certificate</p><b className="verify">Verify on Credly →</b></a>
          <a href={LINKS.oracleCert} target="_blank" rel="noreferrer" className="cert-card link"><span>🤖</span><h4>Oracle Cloud Infrastructure 2024 Generative AI Certified Professional</h4><p>Certificate</p><b className="verify">Verify on Oracle →</b></a>
          <a href={LINKS.azureCert} target="_blank" rel="noreferrer" className="cert-card link"><span>🔷</span><h4>Microsoft Azure 900 Certification</h4><p>Certificate</p><b className="verify">Verify on Microsoft Learn →</b></a>
          <a href={LINKS.automationCert} target="_blank" rel="noreferrer" className="cert-card link"><span>⚙️</span><h4>Certified Essentials Automation Professional</h4><p>Certificate</p><b className="verify">View Certificate →</b></a>
        </div>
      </section>
        <footer id="contact" style={{padding: '40px', background: '#111', textAlign: 'center'}}>
        <h2>Contact</h2>
        <div style={{display: 'flex', gap: '15px', justifyContent: 'center', margin: '20px 0', flexWrap: 'wrap'}}>
          
          <button 
            onClick={() => window.open('mailto:likhithaaaareddy@gmail.com', '_self')}
            style={{padding: '10px 20px', background: '#0a192f', color: '#38bdf8', border: '1px solid #38bdf8', borderRadius: '6px', cursor: 'pointer', fontSize: '16px'}}
          >
            📧 likhithaaaareddy@gmail.com
          </button>

          <button 
            onClick={() => window.open('https://wa.me/918179390774', '_blank')}
            style={{padding: '10px 20px', background: '#0a192f', color: '#38bdf8', border: '1px solid #38bdf8', borderRadius: '6px', cursor: 'pointer', fontSize: '16px'}}
          >
            📱 +91 8179390774
          </button>

          <button 
            onClick={() => window.open('https://www.linkedin.com/in/likhitha-reddy-15611528b', '_blank')}
            style={{padding: '10px 20px', background: '#0a192f', color: '#38bdf8', border: '1px solid #38bdf8', borderRadius: '6px', cursor: 'pointer', fontSize: '16px'}}
          >
            🔗 LinkedIn
          </button>

        </div>
        <span>© 2026 Tatireddy Likitha | KL University</span>
      </footer>
    
    </div>
  );
}

export default App;