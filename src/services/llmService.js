// Step 1: Set up a new React application
// You can do this by running `npx create-react-app my-app` in your terminal

// Step 2: Install necessary libraries
// Run `npm install axios` in your terminal

// Step 3: Create a service to interact with the LLM server
// src/services/llmService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:1234/v1';

export function getModels() {
    return axios.get(`${BASE_URL}/models`);
}

export function postChatCompletions(data) {
    return axios.post(`${BASE_URL}/chat/completions`, data);
}

export function postCompletions(data) {
    return axios.post(`${BASE_URL}/completions`, data);
}

export async function sendPrompts(systemPrompt, userPrompt) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            prompt: `system\n${systemPrompt}\nuser\n${userPrompt}\nassistant`,
            temperature: 0.7,
            max_tokens: -1,
            stream: false
        })
    };

    const response = await fetch('http://localhost:1234/v1/chat/completions', requestOptions);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    // Check if the response is in JSON format
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        return data.choices[0].text; // Assuming the text is in this path
    } else {
        const text = await response.text();
        return text; // Return as plain text
    }
}

export async function sendPromptsStream(systemPrompt, userPrompt, onChunkReceived) {
    const startTime = Date.now();
    let completionText = '';

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt }
            ],
            prompt: `system\n${systemPrompt}\nuser\n${userPrompt}\nassistant`,
            temperature: 0.7,
            max_tokens: -1,
            stream: true
        })
    };

    const response = await fetch('http://localhost:1234/v1/chat/completions', requestOptions);
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');

    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const data = chunk.slice(chunk.indexOf('{'), chunk.lastIndexOf('}') + 1); // Extract the JSON object
            const parsedData = JSON.parse(data);
            if (parsedData.choices && parsedData.choices[0] && parsedData.choices[0].delta && parsedData.choices[0].delta.content) {
                const chunkContent = parsedData.choices[0].delta.content;
                completionText += chunkContent;
                onChunkReceived(chunkContent); // Call the callback function with the new chunk
            }

            // ... existing code ...
        }
    } finally {
        reader.releaseLock();
    }


    console.log(`Full response received ${(Date.now() - startTime) / 1000} seconds after request`);
    console.log(`Full text received: ${completionText}`);

    return completionText;
}
