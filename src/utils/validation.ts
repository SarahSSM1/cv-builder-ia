function validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validateRequiredFields(fields: Record<string, string>): boolean {
    return Object.values(fields).every(field => field.trim() !== '');
}

function validateExperienceDates(startDate: string, endDate: string): boolean {
    return new Date(startDate) <= new Date(endDate);
}

function validateSkills(skills: string[]): boolean {
    return skills.length > 0;
}

export {
    validateEmail,
    validateRequiredFields,
    validateExperienceDates,
    validateSkills
};