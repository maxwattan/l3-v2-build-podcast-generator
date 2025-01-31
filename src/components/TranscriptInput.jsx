// src/components/TranscriptInput.jsx
import React from 'react';
import { useTranscript } from '../TranscriptContext';

const TranscriptInput = () => {
  const { transcript, setTranscript } = useTranscript();

  const handleChange = (e) => {
    setTranscript(e.target.value);
  };

  return (
    <div>
      <h2>Transcript Input</h2>
      <textarea
        value={transcript}
        onChange={handleChange}
        placeholder="Enter your transcript here..."
        rows="10"
        cols="50"
      />
    </div>
  );
};

export default TranscriptInput;
