import React from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function SimplePage(){ const {pathname}=useLocation(); const name=pathname.slice(1).replace(/[-_]/g,' ')||'home'; return <main className="placeholder"><Link to="/">← Back to Mentara</Link><p className="eyebrow">MENTARA</p><h1>{name}</h1><p>This route is ready for the corresponding React feature. The original implementation remains available inside <code>legacy-frontend/</code>.</p></main> }
