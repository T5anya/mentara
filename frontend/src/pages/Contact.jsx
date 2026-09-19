import React, { useState } from 'react';
import PageShell from '../components/PageShell';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); e.currentTarget.reset(); };
  return (
    <PageShell eyebrow="WE'RE HERE TO LISTEN" title="Contact Mentara." description="Have feedback, a question about a feature, or an idea that could make this space better? Send us a message.">
      <div className="contact-grid">
        <div className="contact-card">
          <span className="contact-icon">💜</span>
          <h2>A thoughtful space starts with thoughtful feedback.</h2>
          <p>For urgent or crisis support, please contact your local emergency service or a qualified crisis service. Mentara is a wellbeing project, not an emergency service.</p>
          <div className="contact-points"><span>✦ Product feedback</span><span>✦ Accessibility suggestions</span><span>✦ Partnership enquiries</span></div>
        </div>
        <form className="form-card" onSubmit={submit}>
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
          <label>Message<textarea required name="message" rows="6" placeholder="Tell us what is on your mind…" /></label>
          <button className="btn" type="submit">Send message</button>
          {sent && <p className="success">Thanks — your message has been captured for this demo.</p>}
        </form>
      </div>
    </PageShell>
  );
}
