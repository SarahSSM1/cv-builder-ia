import React from 'react';
import { Experience, PersonalInfo, Skill } from '../../types/cv.types';

interface PreviewSectionProps {
    personalInfo: PersonalInfo;
    skills: Skill[];
    experience: Experience[];
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ personalInfo, skills, experience }) => {
    return (
        <div className="preview-section w-1/2 p-4 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Preview do Currículo</h2>

            {/* Dados Pessoais */}
            <div className="personal-info mb-6">
                <h3 className="text-xl font-semibold mb-2">Informações Pessoais</h3>
                <p><strong>Nome:</strong> {personalInfo.name || '-'}</p>
                <p><strong>Email:</strong> {personalInfo.email || '-'}</p>
                <p><strong>Telefone:</strong> {personalInfo.phone || '-'}</p>
                <p><strong>LinkedIn:</strong> {personalInfo.linkedin || '-'}</p>
                <p><strong>Resumo:</strong> {personalInfo.summary || '-'}</p>
            </div>

            {/* Habilidades */}
            <div className="skills mb-6">
                <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
                <ul className="list-disc list-inside">
                    {skills.length > 0 ? skills.map((skill, index) => (
                        <li key={index}>{skill.name} ({skill.level})</li>
                    )) : <li>-</li>}
                </ul>
            </div>

            {/* Experiências */}
            <div className="experience">
                <h3 className="text-xl font-semibold mb-2">Experiências</h3>
                <ul className="list-disc list-inside">
                    {experience.length > 0 ? experience.map((exp, index) => (
                        <li key={index}>
                            <strong>{exp.jobTitle}</strong> at {exp.company} ({exp.startDate} - {exp.endDate || 'Atual'})
                            <p>{exp.description}</p>
                        </li>
                    )) : <li>-</li>}
                </ul>
            </div>
        </div>
    );
};

export default PreviewSection;
