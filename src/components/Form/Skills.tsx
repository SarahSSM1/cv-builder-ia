import React, { useState } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState(['']);
    
    const handleSkillChange = (index, value) => {
        const newSkills = [...skills];
        newSkills[index] = value;
        setSkills(newSkills);
    };

    const addSkill = () => {
        setSkills([...skills, '']);
    };

    const removeSkill = (index) => {
        const newSkills = skills.filter((_, i) => i !== index);
        setSkills(newSkills);
    };

    return (
        <div>
            <h2>Skills</h2>
            {skills.map((skill, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={skill}
                        onChange={(e) => handleSkillChange(index, e.target.value)}
                        placeholder={`Skill ${index + 1}`}
                    />
                    <button onClick={() => removeSkill(index)}>Remove</button>
                </div>
            ))}
            <button onClick={addSkill}>Add Skill</button>
        </div>
    );
};

export default Skills;