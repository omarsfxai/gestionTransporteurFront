"use client";
import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:3002/chatbot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message }),
        });
        const data = await res.json();

        // Mettre à jour l'historique des messages
        setMessages([...messages, { sender: 'user', text: message }, { sender: 'bot', text: data.response }]);
        setMessage('');
    };

    return (
        <div className="fixed bottom-5 right-5 flex flex-col items-end">
            <div
                className={`transition-transform duration-500 ease-in-out transform ${
                    showChat ? 'rotate-0' : 'rotate-180'
                }`}
            >
                {showChat && (
                    <div className="bg-white w-80 h-96 rounded-lg shadow-lg mb-2 p-4">
                        <h3 className="text-xl font-bold">EOL Chatbot</h3>
                        <div className="h-64 overflow-y-auto mb-2">
                            {messages.map((msg, index) => (
                                <p key={index} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
                                    <span className={msg.sender === 'user' ? 'text-blue-600' : 'text-green-600'}>
                                        {msg.sender === 'user' ? 'Vous: ' : 'Bot: '}
                                    </span>
                                    {msg.text}
                                </p>
                            ))}
                        </div>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="message"
                                className="w-full p-2 border border-gray-300 rounded mt-2"
                            />
                            <button
                                type="submit"
                                className="w-full p-2 bg-cyan-800 text-white rounded mt-2"
                            >
                                Envoyer
                            </button>
                        </form>
                    </div>
                )}
                <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white cursor-pointer shadow-lg transition-all duration-500 ease-in-out transform ${
                        showChat ? 'bg-amber-600' : 'bg-cyan-800'
                    }`}
                    onClick={toggleChat}
                >
                    <FaRobot size={30} className="transition-transform duration-500" />
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
