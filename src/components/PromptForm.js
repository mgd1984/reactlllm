import React, { useState } from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import { sendPromptsStream } from '../services/llmService';
import './PromptForm.css';

// Set up custom renderer for marked
const renderer = new marked.Renderer();

renderer.code = function(code, language) {
    const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
    return `<pre><code class="hljs ${language}">${hljs.highlight(validLanguage, code).value}</code></pre>`;
};

renderer.codespan = function(code) {
    return `<code class="hljs">${hljs.highlightAuto(code).value}</code>`;
};

marked.setOptions({ renderer });

function PromptForm() {
    const [userPrompt, setUserPrompt] = useState('');
    const [systemPrompt, setSystemPrompt] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!userPrompt.trim()) {
            console.error('User prompt cannot be empty');
            return;
        }

        const userMessage = { sender: 'user', content: userPrompt };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        let systemMessage = { sender: 'system', content: systemPrompt };
        setMessages((prevMessages) => [...prevMessages, systemMessage]);

        try {
            await sendPromptsStream(systemMessage.content, userPrompt, (chunk) => {
                systemMessage.content += chunk;
                setMessages((prevMessages) => {
                    let newMessages = [...prevMessages];
                    newMessages[newMessages.length - 1] = systemMessage;
                    return newMessages;
                });
            });
        } catch (error) {
            console.error(error);
        }

        setUserPrompt('');
    };


    return (
        
        <div className="chat-container">
            <div className="chat-messages">
                <div className="banner">
                <h1 className="title">Gener8or LLM</h1>
                </div>
                {messages.map((message, index) => (
                    <div key={index} className={message.sender === 'user' ? 'chat-message user-message' : 'chat-message system-message'}>
                        <div dangerouslySetInnerHTML={{ __html: marked(message.content) }} />
                        <div className="message-sender">{message.sender}</div> {/* Label for the sender role */}
                    </div>
                ))}
            </div>
            <form className="chat-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    placeholder="Type your prompt..."
                />
                <input
                    type="text"
                    value={systemPrompt}
                    onChange={(e) => setSystemPrompt(e.target.value)}
                    placeholder="Type system prompt..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default PromptForm;