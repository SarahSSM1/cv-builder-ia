import { useState } from 'react';

const useCVData = () => {
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const [skills, setSkills] = useState<string[]>([]);
    const [experience, setExperience] = useState<{ jobTitle: string; company: string; years: number }[]>([]);

    const updatePersonalInfo = (info: Partial<typeof personalInfo>) => {
        setPersonalInfo(prev => ({ ...prev, ...info }));
    };

    const addSkill = (skill: string) => {
        setSkills(prev => [...prev, skill]);
    };

    const removeSkill = (skill: string) => {
        setSkills(prev => prev.filter(s => s !== skill));
    };

    const addExperience = (exp: { jobTitle: string; company: string; years: number }) => {
        setExperience(prev => [...prev, exp]);
    };

    const removeExperience = (index: number) => {
        setExperience(prev => prev.filter((_, i) => i !== index));
    };

    return {
        personalInfo,
        skills,
        experience,
        updatePersonalInfo,
        addSkill,
        removeSkill,
        addExperience,
        removeExperience,
    };
};

export default useCVData;