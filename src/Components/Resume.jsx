import React from 'react';

function Resume() {
  const pdfUrl = '/santoshsaigowtham_resume.pdf'; // Update with the actual path to your PDF file

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: '#333' }}>My Resume</h1>
      <div
        style={{
          width: '80%',
          height: '90vh',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <iframe
          src={pdfUrl}
          title="Resume"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
