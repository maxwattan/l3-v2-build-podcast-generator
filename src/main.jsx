// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TranscriptProvider } from './TranscriptContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TranscriptProvider>
      <App />
    </TranscriptProvider>
  </React.StrictMode>
);
