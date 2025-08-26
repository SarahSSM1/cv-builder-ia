import React, { useState } from 'react';

const Experience = () => {
    const [experiences, setExperiences] = useState([{ jobTitle: '', company: '', duration: '' }]);

    const handleChange = (index, event) => {
        const newExperiences = [...experiences];
        newExperiences[index][event.target.name] = event.target.value;
        setExperiences(newExperiences);
    };

    const addExperience = () => {
        setExperiences([...experiences, { jobTitle: '', company: '', duration: '' }]);
    };

    const removeExperience = (index) => {
        const newExperiences = experiences.filter((_, i) => i !== index);
        setExperiences(newExperiences);
    };

    return (
        <div>
            <h2>Experiência Profissional</h2>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <input
                        type="text"
                        name="jobTitle"
                        placeholder="Cargo"
                        value={experience.jobTitle}
                        onChange={(event) => handleChange(index, event)}
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Empresa"
                        value={experience.company}
                        onChange={(event) => handleChange(index, event)}
                    />
                    <input
                        type="text"
                        name="duration"
                        placeholder="Duração"
                        value={experience.duration}
                        onChange={(event) => handleChange(index, event)}
                    />
                    <button onClick={() => removeExperience(index)}>Remover</button>
                </div>
            ))}
            <button onClick={addExperience}>Adicionar Experiência</button>
        </div>
    );
};

export default Experience;