import React from 'react';;
import './Resume.css';


const Resume = () => {
  return (
    <>
      {/* Main Content */}
      <h1>My Resume</h1>
      <div className="resume-container">
        <embed src="/CS601_FinalProject_Kim/downloads/resume.pdf" type="application/pdf" width="100%" height="600px" />
      </div>
    </>
  );
};

export default Resume;
