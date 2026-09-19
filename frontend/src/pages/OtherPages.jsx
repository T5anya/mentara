import React from 'react';
import PageShell from '../components/PageShell';

export function Games() { return <PageShell eyebrow="PLAY GENTLY" title="Calming games." description="Small interactions for a short mental reset. These are intentionally simple and low-pressure."><div className="game-grid"><BreathingMini/><MemoryMini/><GroundingMini/></div></PageShell>; }
function BreathingMini(){ const [on,setOn]=React.useState(false); return <article className="game-card"><span>🌬️</span><h2>Breath bubble</h2><p>Tap to start a slow expanding and contracting bubble.</p><button className="small-btn" onClick={()=>setOn(!on)}>{on?'Stop':'Start'}</button><div className={`mini-bubble ${on?'pulse':''}`}/></article> }
function MemoryMini(){ const [count,setCount]=React.useState(0); return <article className="game-card"><span>✨</span><h2>Kindness clicks</h2><p>Give yourself a tiny positive prompt.</p><button className="small-btn" onClick={()=>setCount(count+1)}>I choose kindness · {count}</button></article> }
function GroundingMini(){ const [step,setStep]=React.useState(0); const steps=['Notice 5 things you can see.','Notice 4 things you can touch.','Notice 3 things you can hear.','Notice 2 things you can smell.','Notice 1 thing you appreciate.']; return <article className="game-card"><span>🌿</span><h2>5–4–3–2–1</h2><p>{steps[step]}</p><button className="small-btn" onClick={()=>setStep((step+1)%steps.length)}>Next step</button></article> }

export function Circle(){ return <PageShell eyebrow="COMMUNITY" title="Support Circle." description="A concept space for moderated peer support. Keep personal information private and follow the community guidelines."><div className="circle-layout"><div className="circle-hero"><span>🤝</span><h2>You do not have to explain everything to belong.</h2><p>Use supportive, non-judgmental language. Avoid sharing private contact details or identifying information.</p></div><div className="guidelines"><h3>Community guidelines</h3>{['Listen before advising.','Protect your privacy and others’ privacy.','Report harmful or unsafe content.','Professional support is available when peer support is not enough.'].map(x=><p key={x}>✓ {x}</p>)}</div></div></PageShell>; }

export function Profile(){ return <PageShell eyebrow="YOUR SPACE" title="Profile." description="Keep your preferences and wellbeing tools in one place."><div className="profile-card"><div className="profile-avatar">M</div><div><h2>Welcome to Mentara</h2><p>Connect this screen to the authenticated user endpoint to show the real profile.</p><div className="profile-tags"><span>Wellbeing</span><span>Reflection</span><span>Privacy</span></div></div></div></PageShell>; }
export function Settings(){ return <PageShell eyebrow="PREFERENCES" title="Settings." description="Tune your Mentara experience."><div className="settings-list">{['Reduce motion','Autoplay wellness slider','Show supportive reminders','Save journal locally'].map((item,i)=><label className="setting-row" key={item}><span><strong>{item}</strong><small>{i===0?'Use fewer animations throughout the interface.':'A simple preference ready for backend persistence.'}</small></span><input type="checkbox" defaultChecked={i!==0}/></label>)}</div></PageShell>; }


export function Scribble(){
  const canvasRef=React.useRef(null);
  const drawing=React.useRef(false);
  React.useEffect(()=>{
    const canvas=canvasRef.current; const ctx=canvas.getContext('2d');
    const resize=()=>{const d=window.devicePixelRatio||1; const r=canvas.getBoundingClientRect(); canvas.width=r.width*d; canvas.height=r.height*d; ctx.scale(d,d); ctx.lineCap='round'; ctx.lineJoin='round'; ctx.lineWidth=4;};
    resize(); window.addEventListener('resize',resize); return()=>window.removeEventListener('resize',resize);
  },[]);
  const point=(e)=>{const r=canvasRef.current.getBoundingClientRect(); return [e.clientX-r.left,e.clientY-r.top]};
  const start=(e)=>{drawing.current=true; const [x,y]=point(e); const c=canvasRef.current.getContext('2d'); c.beginPath(); c.moveTo(x,y)};
  const draw=(e)=>{if(!drawing.current)return; const [x,y]=point(e); const c=canvasRef.current.getContext('2d'); c.lineTo(x,y); c.stroke()};
  const clear=()=>{const c=canvasRef.current.getContext('2d'); c.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)};
  return <PageShell eyebrow="EXPRESS IT" title="Scribble pad." description="Draw freely. Nothing needs to look perfect."><div className="scribble-card"><canvas ref={canvasRef} onPointerDown={start} onPointerMove={draw} onPointerUp={()=>drawing.current=false} onPointerLeave={()=>drawing.current=false}/><button className="btn" onClick={clear}>Clear canvas</button></div></PageShell>;
}

export function Admin(){ return <PageShell eyebrow="ADMIN" title="Mentara dashboard." description="A front-end dashboard shell ready to consume the existing admin APIs."><div className="admin-stats"><div><span>Users</span><strong>—</strong><small>Connect GET /api/admin/users</small></div><div><span>Bookings</span><strong>—</strong><small>Connect GET /api/admin/bookings</small></div><div><span>Mood logs</span><strong>—</strong><small>Connect mood analytics</small></div><div><span>Resources</span><strong>—</strong><small>Manage resource content</small></div></div><div className="admin-table"><h2>Recent activity</h2><div className="empty-state">The dashboard UI is ready; populate it from your authenticated admin endpoints.</div></div></PageShell>; }
