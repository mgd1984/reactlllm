// Step 4: Create components to display data from the GET endpoint and to send data to the POST endpoints
// src/components/ModelList.js
import React, { useEffect, useState } from 'react';
import { getModels } from '../services/llmService';

function ModelList() {
    const [models, setModels] = useState([]);

    useEffect(() => {
        getModels().then(response => setModels(response.data));
    }, []);

    return (
        <ul>
            {models.map(model => (
                <li key={model.id}>{model.name}</li>
            ))}
        </ul>
    );
}

export default ModelList;