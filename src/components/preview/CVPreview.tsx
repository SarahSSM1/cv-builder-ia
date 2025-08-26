import React from 'react';
import PersonalHeader from './PersonalHeader';
import SkillsSection from './SkillsSection';
import ExperienceSection from './ExperienceSection';

const CVPreview = ({ personalInfo, skills, experience }) => {
    return (
        <div className="cv-preview">
            <PersonalHeader personalInfo={personalInfo} />
            <SkillsSection skills={skills} />
            <ExperienceSection experience={experience} />
        </div>
    );
};

export default CVPreview;