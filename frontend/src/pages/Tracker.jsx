import React from 'react';
import PageShell from '../components/PageShell';
import { useLocalStorage } from '../hooks/useLocalStorage';

const moods = [['😄','Great'],['🙂','Good'],['😐','Okay'],['😟','Low'],['😞','Difficult']];
export default function Tracker() { const [logs, setLogs] = useLocalStorage('mentara-moods', []); return <PageShell eyebrow="CHECK IN" title="Mood tracker." description="A simple browser-based mood log. Later this can be connected directly to the backend mood API."><div className="mood-picker">{moods.map(([emoji, label]) => <button key={label} onClick={() => setLogs([{ emoji, label, date: new Date().toLocaleDateString() }, ...logs])}><span>{emoji}</span>{label}</button>)}</div><div className="mood-history">{logs.length ? logs.slice(0, 12).map((log, i) => <div className="mood-row" key={`${log.date}-${i}`}><span>{log.emoji}</span><strong>{log.label}</strong><small>{log.date}</small></div>) : <div className="empty-state">Choose a mood to create your first check-in.</div>}</div></PageShell>; }
