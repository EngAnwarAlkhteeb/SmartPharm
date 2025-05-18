// src/components/ChatAssistant.jsx
import React, { useState } from "react";
import { AiFillWechat } from "react-icons/ai";
import { FaRobot, FaTimes } from "react-icons/fa";


const ChatAI = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-5 right-5 z-50">
            {/* Floating Chat Icon */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#dd8036] hover:bg-[#794318] text-white p-4 rounded-full shadow-lg transition"
                aria-label="Chat Assistant"
            >
                <AiFillWechat size={35} />


                {/* <FaRobot /> */}
            </button>

            {/* Chat Modal / Panel */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 h-[500px] bg-white text-gray-800 rounded-lg shadow-xl flex flex-col border border-gray-200">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#794318] text-white rounded-t-lg">
                        <h3 className="font-semibold">SmartPharm Assistant</h3>
                        <button onClick={() => setIsOpen(false)} aria-label="Close chat">
                            <FaTimes />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        <div className="bg-gray-100 p-3 rounded-lg max-w-[80%]">
                            <p class="text-sm md:text-base leading-relaxed">
                                Hello!🙋‍♀️<br />
                                <span class="font-semibold">I'm SmartPharm, your virtual health assistant.</span><br />
                                I'm available anytime to provide support and information - but please consult a licensed healthcare provider for urgent or serious concerns.
                            </p>
                        </div>
                    </div>

                    {/* Input Box */}
                    <div className="p-3 border-t border-gray-200">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatAI;