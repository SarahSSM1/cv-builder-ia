interface FormSectionProps {
    personalInfo: PersonalInfo;
    setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
    skills: Skill[];
    setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
    experience: Experience[];
    setExperience: React.Dispatch<React.SetStateAction<Experience[]>>;
}

const FormSection: React.FC<FormSectionProps> = ({
    personalInfo,
    setPersonalInfo,
    skills,
    setSkills,
    experience,
    setExperience
}) => {
    return (
        <div className="form-section w-1/2 p-4 overflow-y-auto border-r border-gray-300">
            <h2 className="text-2xl font-bold mb-4">Formulário de Informações</h2>
            <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
            <Skills skills={skills} setSkills={setSkills} />
            <Experience experience={experience} setExperience={setExperience} />
            <AIEnhanceButton />
        </div>
    );
};
