import React, { useState } from 'react';
import PageShell from '../components/PageShell';

export default function Booking() {
  const [booked, setBooked] = useState(false);
  const submit = (e) => { e.preventDefault(); setBooked(true); };
  return <PageShell eyebrow="SUPPORT SESSION" title="Book a session." description="Choose a preferred date and time. The form is ready to connect to the existing Express booking API when authentication is configured."><div className="booking-grid"><div className="counselor-list">{['Aarohi · Student counselor','Meera · Wellness coach','Riya · Academic support'].map((name, i) => <article className="counselor" key={name}><div className="avatar">{['A','M','R'][i]}</div><div><h3>{name}</h3><p>Available for supportive conversations and wellbeing planning.</p><span>● Demo availability</span></div></article>)}</div><form className="form-card" onSubmit={submit}><label>Choose support person<select defaultValue=""><option value="" disabled>Select one</option><option>Aarohi</option><option>Meera</option><option>Riya</option></select></label><label>Date<input type="date" required /></label><label>Time<input type="time" required /></label><button className="btn">Request booking</button>{booked && <p className="success">Your demo booking request has been recorded.</p>}</form></div></PageShell>;
}
