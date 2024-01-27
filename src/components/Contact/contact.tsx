import React from 'react';
import "./contact.css"
import { FaLinkedin, FaFileAlt, FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

interface ContactProps {
  linkedinUrl: string;
  resumeUrl: string;
  email: string;
  phone: string;
  githubUrl: string;
}

const Contact: React.FC<ContactProps> = ({ linkedinUrl, resumeUrl, email, phone, githubUrl }) => {
  return (
    <div className="contact-container">
      <h4>Contact</h4>
      <div className="contact-links">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer"><FaFileAlt /></a>
        <a href={`mailto:${email}`}><FaEnvelope /></a>
        <a href={`tel:${phone}`}><FaPhone /></a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </div>
  );
  
};

export default Contact;
