import React from 'react';
import PageShell from '../components/PageShell';
import FeatureCard from '../components/FeatureCard';
import { features } from '../data/features';

export default function Features() {
  return (
    <PageShell eyebrow="YOUR TOOLKIT" title="Everything in one gentle space." description="Explore small, practical tools for reflection, relaxation, focus and connection. Choose what feels useful today — there is no right order.">
      <section className="features-grid">
        {features.map((feature) => <FeatureCard key={feature.title} feature={feature} />)}
      </section>
    </PageShell>
  );
}
