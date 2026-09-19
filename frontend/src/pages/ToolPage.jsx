import React, { useEffect, useState } from 'react';
import PageShell from '../components/PageShell';
import { useLocalStorage } from '../hooks/useLocalStorage';

const configs = {
  affirmations: ['Daily Affirmations', 'Start with one kind thought.', ['I can take things one step at a time.', 'Rest is part of progress.', 'I do not have to have everything figured out today.', 'My feelings deserve patience and care.']],
  poetry: ['Healing Poetry', 'Short pieces for quieter moments.', ['Between one breath and the next,\nthere is room to begin again.', 'Some days are not for fixing.\nSome days are simply for being held.', 'You are allowed to move gently\nthrough a world that asks you to hurry.']],
  resources: ['Resources Hub', 'A starting point for learning and finding support.', []],
};

export default function ToolPage({ type }) {
  const [saved, setSaved] = useLocalStorage(`mentara-${type}`, []);
  const [selected, setSelected] = useState(0);
  const config = configs[type] || ['Mentara', 'A calm place to explore.', []];
  const [title, description, items] = config;
  const resources = type === 'resources' ? [
    ['Understanding stress', 'Learn the difference between everyday stress and prolonged stress.'],
    ['Building a rest routine', 'Small habits for creating recovery time during busy weeks.'],
    ['Asking for support', 'A practical checklist for starting a difficult conversation.'],
    ['Study-life balance', 'Simple ways to break large academic tasks into smaller actions.'],
  ] : items.map((text, i) => [text, 'A gentle prompt from Mentara.']);

  const addSaved = (item) => setSaved((current) => current.includes(item) ? current : [...current, item]);
  return (
    <PageShell eyebrow="MENTARA TOOL" title={title} description={description}>
      <div className="tool-layout">
        <section className="tool-main">
          {resources.map(([heading, body], i) => (
            <article className={`tool-card ${selected === i ? 'selected' : ''}`} key={heading} onClick={() => setSelected(i)}>
              <div><span className="tool-index">{String(i + 1).padStart(2, '0')}</span><h2>{type === 'poetry' ? 'A quiet poem' : heading}</h2><p>{body}</p>{type === 'poetry' && <p className="poem">{heading}</p>}</div>
              <button type="button" className="small-btn" onClick={(e) => { e.stopPropagation(); addSaved(heading); }}>Save</button>
            </article>
          ))}
        </section>
        <aside className="saved-card"><p className="eyebrow">YOUR PICKS</p><h3>Saved</h3>{saved.length ? saved.map((item) => <p key={item}>♡ {item}</p>) : <p className="muted">Nothing saved yet.</p>}</aside>
      </div>
    </PageShell>
  );
}

export function Journal() {
  const [entries, setEntries] = useLocalStorage('mentara-journal', []);
  const [text, setText] = useState('');
  const save = (e) => { e.preventDefault(); if (!text.trim()) return; setEntries([{ text: text.trim(), date: new Date().toLocaleString() }, ...entries]); setText(''); };
  return <PageShell eyebrow="PRIVATE REFLECTION" title="Your journal." description="Write without worrying about perfect sentences. This demo stores entries locally in your browser."><div className="journal-grid"><form className="form-card" onSubmit={save}><textarea value={text} onChange={(e) => setText(e.target.value)} rows="12" placeholder="What is on your mind today?" /><button className="btn">Save entry</button></form><div className="entries">{entries.length ? entries.map((e, i) => <article className="entry" key={`${e.date}-${i}`}><small>{e.date}</small><p>{e.text}</p></article>) : <div className="empty-state">Your first entry can start with one sentence.</div>}</div></div></PageShell>;
}

export function Breathing() {
  const [active, setActive] = useState(false); const [phase, setPhase] = useState('Ready');
  useEffect(() => { if (!active) return undefined; const phases = ['Breathe in', 'Hold', 'Breathe out', 'Rest']; let i = 0; setPhase(phases[0]); const id = setInterval(() => { i = (i + 1) % phases.length; setPhase(phases[i]); }, 4000); return () => clearInterval(id); }, [active]);
  return <PageShell eyebrow="PAUSE & BREATHE" title="Breathing coach." description="Try a slow four-part breathing rhythm. Stop if it feels uncomfortable."><div className="breathing-card"><div className={`breath-orb ${active ? 'active' : ''}`}><span>{phase}</span></div><button className="btn" onClick={() => setActive(!active)}>{active ? 'Pause' : 'Begin'}</button></div></PageShell>;
}

export function Focus() {
  const [seconds, setSeconds] = useState(25 * 60); const [running, setRunning] = useState(false);
  useEffect(() => { if (!running) return undefined; const id = setInterval(() => setSeconds((s) => s > 0 ? s - 1 : 0), 1000); return () => clearInterval(id); }, [running]);
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0'); const secs = String(seconds % 60).padStart(2, '0');
  return <PageShell eyebrow="QUIET FOCUS" title="Focus mode." description="A simple 25-minute timer for study, work or a small personal task."><div className="timer-card"><div className="timer">{mins}:{secs}</div><div><button className="btn" onClick={() => setRunning(!running)}>{running ? 'Pause' : 'Start'}</button><button className="text-btn" onClick={() => { setRunning(false); setSeconds(1500); }}>Reset</button></div></div></PageShell>;
}

export function Music() {
  const tracks = ['Rain on a window', 'Soft piano', 'Night ambience']; const [playing, setPlaying] = useState(null);
  return <PageShell eyebrow="SLOW DOWN" title="Relaxing music." description="Use the controls as placeholders for your preferred ambient audio source. Add licensed audio files later without changing the UI architecture."><div className="music-grid">{tracks.map((track, i) => <article className="music-card" key={track}><div className="album">{['☔','🎹','🌙'][i]}</div><h2>{track}</h2><p>Ambient session · 10 min</p><button className="small-btn" onClick={() => setPlaying(playing === i ? null : i)}>{playing === i ? 'Pause' : 'Play'}</button></article>)}</div></PageShell>;
}
