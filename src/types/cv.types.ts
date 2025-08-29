// src/types/cv.types.ts

export interface PersonalInfo {
    name: string;
    email: string;
    phone: string;
    address: string;
}

export interface Skill {
    name: string;
    level: 'beginner' | 'intermediate' | 'advanced';
}

export interface Experience {
    jobTitle: string;
    company: string;
    startDate: string; // Format: YYYY-MM-DD
    endDate: string;   // Format: YYYY-MM-DD or 'Present'
    description: string;
}

export interface CV {
    personalInfo: PersonalInfo;
    skills: Skill[];
    experiences: Experience[];
}