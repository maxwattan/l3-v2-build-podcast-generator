// src/components/FileUpload.jsx
import React from 'react';
import { useTranscript } from '../TranscriptContext';

const FileUpload = () => {
  const { transcript } = useTranscript();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Handle file upload logic here
      console.log("Uploaded File:", file);
      
      // You can also process the transcript here if needed
      console.log("Current Transcript:", transcript);
      
      // Example: You might want to read the file and do something with it
      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;
        console.log("File Content:", fileContent);
        // You can process the file content as needed
      };
      reader.readAsText(file); // Assuming the file is a text file
    }
  };

  return (
    <div>
      <h2>File Upload</h2>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
