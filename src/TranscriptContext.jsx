// src/TranscriptContext.jsx
import React, { createContext, useContext, useState } from 'react';

const TranscriptContext = createContext();

export const useTranscript = () => {
  return useContext(TranscriptContext);
};

export const TranscriptProvider = ({ children }) => {
  const [transcript, setTranscript] = useState('');

  return (
    <TranscriptContext.Provider value={{ transcript, setTranscript }}>
      {children}
    </TranscriptContext.Provider>
  );
};
