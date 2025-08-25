import React from 'react';

const PreviewSection: React.FC<{ personalInfo: any; skills: string[]; experience: any[] }> = ({ personalInfo, skills, experience }) => {
    return (
        <div className="preview-section">
            <h2>Preview</h2>
            <div className="personal-info">
                <h3>Personal Information</h3>
                <p>Name: {personalInfo.name}</p>
                <p>Email: {personalInfo.email}</p>
                <p>Phone: {personalInfo.phone}</p>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="experience">
                <h3>Experience</h3>
                <ul>
                    {experience.map((exp, index) => (
                        <li key={index}>
                            <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.startDate} - {exp.endDate})
                            <p>{exp.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PreviewSection;