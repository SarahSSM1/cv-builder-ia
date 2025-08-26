import React from 'react';
import { useAIEnhancement } from '../../hooks/useAIEnhancement';

const AIEnhanceButton: React.FC = () => {
    const { enhanceData } = useAIEnhancement();

    const handleClick = () => {
        enhanceData();
    };

    return (
        <button onClick={handleClick}>
            Enhance with AI
        </button>
    );
};

export default AIEnhanceButton;