import React from 'react';

const PersonalHeader: React.FC<{ name: string; title: string; }> = ({ name, title }) => {
    return (
        <header>
            <h1>{name}</h1>
            <h2>{title}</h2>
        </header>
    );
};

export default PersonalHeader;