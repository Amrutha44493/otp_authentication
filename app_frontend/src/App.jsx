import React from 'react';
import { Routes, Route } from 'react-router-dom';
import EmailForm from './components/EmailForm.jsx';
import OtpForm from './components/OtpForm.jsx';
import Welcome from './components/Welcome.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EmailForm />} />
      <Route path="/verify" element={<OtpForm />} />
      <Route path="/welcome" element={<Welcome />} />
    </Routes>
  );
}
