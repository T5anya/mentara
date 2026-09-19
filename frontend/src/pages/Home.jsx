import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import WellnessSlider from '../components/WellnessSlider';
import FeatureCard from '../components/FeatureCard';
import heroImage from '../assets/img.jpeg';
import { features } from '../data/features';

export default function Home() {
  return <div className="page">
    <Navbar />
    <main>
      <section className="hero" id="home">
        <div className="hero-copy"><p className="eyebrow">A SPACE TO PAUSE</p><h1>Let this space be your sanctuary.</h1><p>A gentle place to reflect, reset and find practical wellbeing tools — without pressure to do everything at once.</p><div className="hero-actions"><a className="btn" href="#wellness">Explore support</a><Link className="btn ghost" to="/features">Explore features</Link></div><div className="hero-trust"><span>✦ Private by design</span><span>✦ Student-friendly</span></div></div>
        <div className="hero-image"><img src={heroImage} alt="A calm supportive space" /><div className="floating-note">Take a breath.<br/><strong>You are allowed to slow down.</strong></div></div>
      </section>
      <div className="marquee"><div><span>YOU MATTER</span><b>•</b><span>REST · RECOVER · RENEW</span><b>•</b><span>YOU MATTER</span><b>•</b><span>REST · RECOVER · RENEW</span></div></div>
      <WellnessSlider />
      <section className="home-features"><div className="section-head"><p className="eyebrow">YOUR TOOLKIT</p><h2>Support for different kinds of days.</h2><p>Pick one small thing that matches how you feel right now.</p></div><div className="feature-preview-grid">{features.slice(0,6).map(f=><FeatureCard feature={f} key={f.title}/>)}</div><div className="center-action"><Link className="btn ghost" to="/features">See all features →</Link></div></section>
      <section className="support" id="community"><div className="section-head"><p className="eyebrow">FIND YOUR PEOPLE</p><h2>Find your support network.</h2><p>Different people need different kinds of support. Start where it feels comfortable.</p></div><div className="support-grid"><div><h3>🤝 Study Groups</h3><p>Academic support with a mental-wellness focus.</p></div><div><h3>🧘 Wellness Activities</h3><p>Yoga, meditation and gentle movement ideas.</p></div><div><h3>🎨 Creative Therapy</h3><p>Art, music and writing as calming outlets.</p></div><div><h3>💼 Career Support</h3><p>Space to think through academic and career stress.</p></div></div></section>
      <section className="contact-strip"><div><p className="eyebrow">HAVE AN IDEA?</p><h2>Help us make Mentara better.</h2><p>Share feedback about the interface, accessibility or a feature you would like to see.</p></div><Link className="btn" to="/contact">Contact us →</Link></section>
    </main>
    <footer><strong>Mentara</strong><span>© 2026 · Confidential & Secure</span><Link to="/contact">Contact</Link></footer>
  </div>;
}
