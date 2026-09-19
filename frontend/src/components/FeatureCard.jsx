import React from 'react';
import { Link } from 'react-router-dom';

export default function FeatureCard({ feature }) {
  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
      <h2>{feature.title}</h2>
      <p>{feature.text}</p>
      <Link className="small-btn" to={feature.path}>{feature.action} <span>→</span></Link>
    </article>
  );
}
