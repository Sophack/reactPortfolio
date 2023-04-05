import React, { useState } from 'react';
import '../../style/styling.css';

function Resume() {
  const [resume, setResume] = useState(
    'As a passionate developer, I am always looking for opportunities to finetune my skills. I am highly motivated, completing the web-development certificate as well as the full-stack course while working as a realtor. Having worked with a company from the ground-up (Amperslash) and working in real estate has given me a unique perspective. I know what it takes to build something from scratch & work hard until it is finished. This also made me perfect for high-performance fields such as real estate and full-stack development. '
  );

  const [group, setGroup] = useState([
    'CSS',
    'HTML',
    'Javascript',
    'React',
    'Database handling with SQL & Mongo',
    'Bootstrap',
    'Material UI'
  ]);

  // Event handler for updating the resume state
  const updateResume = () => {
    setResume('Saraf is a passionate developer, including being a real estate agent and working within industry as a Front End React/React Native Developer. Over the course of this period she has also worked on personal projects using REACT. She possesses a strong knowledge in HTML/CSS and in depth knowledge in leveraging JavaScript/React ecosystem and Web APIs to solve dynamic UI challenges. She has expertise in marketing & dealing with clients & is extremely adaptable in translating the technical jargon to business requirements. She is a flexible hard worker, always eager to learn, collaborate, and drive completion. ');
  }

  return (
    <div className="card text-center" id="resume">
      <h3 className='title'>Resume</h3>
      <div className="card-body">
        <ul>
          <p className="card-text" >{resume}</p>
          {group.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <a href="https://sophack.github.io/resume/" className='title'>Link to full Resume</a>
        <br></br>
        <button onClick={updateResume}>Update Resume</button> {/* button for updating the resume state */}
      </div>
    </div>
  );
}

export default Resume;
