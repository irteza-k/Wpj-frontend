// src/components/AboutUs.jsx
import React from 'react';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2>About CDAC Connect</h2>

      <p>
        Welcome to <strong>CDAC Connect</strong> – a platform crafted exclusively
        for CDAC students to connect with alumni who are now thriving in top
        companies. 🚀 Our goal is to bridge the gap between aspiring learners and
        experienced professionals, fostering a community driven by mentorship and
        mutual growth.
      </p>
      <p>
        Through CDAC Connect, students can explore alumni profiles based on
        domain expertise, industry experience, and current roles. Whether you're
        seeking career guidance, industry insights, or personalized mentorship,
        you can easily book one-on-one sessions with those who’ve walked the same
        path. 🎯
      </p>
      <p>
        For CDAC alumni, this is a great opportunity to give back, share valuable
        knowledge, build your personal brand, and inspire the next generation of
        tech professionals. 🤝 Join us in building a vibrant and supportive CDAC
        ecosystem where learning never stops! 🌱
      </p>

      {/* Developer credits */}
      <h3 className="made-with-love">
        Made&nbsp;with&nbsp;<span role="img" aria-label="heart">❤️</span>
      </h3>
      <div className="developer-profiles">
        <div className="developer-card">
          <div className="developer-photo" />
          <p className="developer-name">Atharv&nbsp;Pawar</p>
        </div>
        <div className="developer-card">
          <div className="developer-photo" />
          <p className="developer-name">Irteza&nbsp;Zafeer&nbsp;Khan</p>
        </div>
        <div className="developer-card">
          <div className="developer-photo" />
          <p className="developer-name">Yuganshu&nbsp;Joshi</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
