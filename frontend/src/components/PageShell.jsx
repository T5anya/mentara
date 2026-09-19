import React from 'react';
import Navbar from './Navbar';

export default function PageShell({ eyebrow, title, description, children }) {
  return (
    <div className="page app-page">
      <Navbar />
      <main>
        <section className="page-hero">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            {description && <p className="page-lead">{description}</p>}
          </div>
        </section>
        <div className="content-container">{children}</div>
      </main>
      <footer><strong>Mentara</strong><span>© 2026 · A calm space for your wellbeing</span></footer>
    </div>
  );
}
