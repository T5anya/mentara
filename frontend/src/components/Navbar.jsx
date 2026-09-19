import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const close = () => setOpen(false);
  return <header className="navbar">
    <Link className="brand" to="/" onClick={close}><span className="brand-mark">M</span>Mentara</Link>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>☰</button>
    <nav className={open ? 'open' : ''}>
      <Link className={location.pathname==='/'?'active':''} to="/" onClick={close}>Home</Link>
      <Link className={location.pathname==='/features'?'active':''} to="/features" onClick={close}>Features</Link>
      <a href="/#wellness" onClick={close}>Wellness</a>
      <Link to="/contact" onClick={close}>Contact</Link>
      <Link className="nav-cta" to="/login" onClick={close}>Login</Link>
    </nav>
  </header>;
}
