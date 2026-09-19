import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Contact from './pages/Contact';
import ToolPage, { Breathing, Focus, Journal, Music } from './pages/ToolPage';
import Booking from './pages/Booking';
import Tracker from './pages/Tracker';
import { Games, Circle, Profile, Settings, Scribble, Admin } from './pages/OtherPages';
import Auth from './pages/Auth';

export default function App() {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/features" element={<Features />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/affirmations" element={<ToolPage type="affirmations" />} />
    <Route path="/poetry" element={<ToolPage type="poetry" />} />
    <Route path="/resources" element={<ToolPage type="resources" />} />
    <Route path="/journal" element={<Journal />} />
    <Route path="/breathing" element={<Breathing />} />
    <Route path="/focus" element={<Focus />} />
    <Route path="/music" element={<Music />} />
    <Route path="/games" element={<Games />} />
    <Route path="/tracker" element={<Tracker />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/circle" element={<Circle />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/login" element={<Auth mode="login" />} />
    <Route path="/register" element={<Auth mode="register" />} />
    <Route path="/logout" element={<Navigate to="/" replace />} />
    <Route path="/scribble" element={<Scribble />} />
    <Route path="/admin" element={<Admin />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}
