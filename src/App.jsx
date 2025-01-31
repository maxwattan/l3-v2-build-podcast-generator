// src/App.jsx
import React, { useState } from 'react';
// import './App.css';
import './styles.css'; // Import the CSS file
import TranscriptInput from './components/TranscriptInput';
import FileUpload from './components/FileUpload';

function App() {
  const [transcript, setTranscript] = useState('');

  return (
    <div className="App">
      <header>
        <h1>Podcast Generator</h1>
      </header>
      <main>
        <TranscriptInput transcript={transcript} setTranscript={setTranscript} />
        <FileUpload transcript={transcript} />
      </main>
    </div>
  );
}

export default App;
