import { useState } from 'react';
import { enhanceData } from '../services/aiService';

const useAIEnhancement = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [enhancedData, setEnhancedData] = useState(null);

    const enhance = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const result = await enhanceData(data);
            setEnhancedData(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { enhance, loading, error, enhancedData };
};

export default useAIEnhancement;