import React from 'react';
import './App.css';
import academicProjects from './academic-projects.json';
import address from './address.json';
import certifications from './certification.json';
import emergencyContact from './emergency-contact.json';
import languages from './language-skill.json';
import socialProfiles from './social-profiles.json';

function App() {
  return (
    <div className="container">
      <div style={{textAlign: 'center'}}>
        <img src="https://www.pinterest.com/pin/pfp--21251429486804230/" alt="Profile Photo" style={{width: '100px', height: '100px', borderRadius: '50%'}} />
      </div>
      <h1>Profile</h1>
      <div className="project">
        <h2>Academic Projects</h2>
        <ul>
          {academicProjects.projects.map(project => (
            <li key={project.title}>
              <h3>{project.title}</h3>
              <p>Tech Stack: {project.techStack.join(', ')}</p>
              <p>Description: {project.description}</p>
              <p>Outcome: {project.outcome}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="address">
        <h2>Address</h2>
        <p>Permanent Address: {address.permanentAddress.street}, {address.permanentAddress.city}, {address.permanentAddress.state} {address.permanentAddress.zip}, {address.permanentAddress.country}</p>
      </div>
      <div className="certification">
        <h2>Certifications</h2>
        <ul>
          {certifications.certifications.map(cert => (
            <li key={cert.courseName}>
              <h3>{cert.courseName}</h3>
              <p>Platform: {cert.platform}</p>
              <p>Date: {cert.date}</p>
              <p>Credential URL: <a href={cert.credentialURL}>{cert.credentialURL}</a></p>
            </li>
          ))}
        </ul>
      </div>
      <div className="emergency">
        <h2>Emergency Contact</h2>
        <p>Name: {emergencyContact.name}</p>
        <p>Relation: {emergencyContact.relation}</p>
        <p>Phone: {emergencyContact.phone}</p>
        <p>Address: {emergencyContact.address.street}, {emergencyContact.address.city}, {emergencyContact.address.state} {emergencyContact.address.zip}, {emergencyContact.address.country}</p>
      </div>
      <div className="language">
        <h2>Language Skills</h2>
        <ul>
          {languages.languages.map(language => (
            <li key={language.language}>
              <h3>{language.language}</h3>
              <p>Spoken Level: {language.spokenLevel}</p>
              <p>Written Level: {language.writtenLevel}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="social">
        <h2>Social Profiles</h2>
        <ul>
          {socialProfiles.profiles.map(profile => (
            <li key={profile.platform}>
              <a href={profile.url} target="_blank" rel="noopener noreferrer">
                <i className={`fa fa-${profile.platform.toLowerCase()}`} aria-hidden="true"></i> {profile.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

