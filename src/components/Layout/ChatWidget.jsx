import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const ChatWidget = ({ iframeLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className="chat-container">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window"
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    >
                        {
                            iframeLink && (
                                <iframe
                                    src={iframeLink}
                                    className="chat-iframe"
                                    allow="microphone"
                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                    frameBorder="0"
                                    title="AI Assistant"
                                ></iframe>
                            )
                        }
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                className={`chat-toggle-pill ${isOpen ? 'active' : ''}`}
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? <X size={24} /> : (
                    <>
                        <MessageCircle size={24} />
                        <span className="toggle-text">Ask Me</span>
                    </>
                )}
            </motion.button>

            <style>{`
                .chat-container {
                    position: fixed;
                    bottom: 25px;
                    right: 25px;
                    z-index: 9999;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 12px;
                }
                
                .chat-toggle-pill {
                    height: 50px;
                    padding: 0 20px;
                    border-radius: 50px;
                    background: var(--secondary);
                    color: white;
                    border: none;
                    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .chat-toggle-pill.active {
                    width: 50px;
                    padding: 0;
                    justify-content: center;
                    background: #eee;
                    color: #333;
                }

                .toggle-text {
                    font-weight: 700;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .chat-window {
                    width: 400px;
                    height: 600px;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,0.08);
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                .chat-close-btn {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    z-index: 10;
                    background: rgba(0,0,0,0.1);
                    border: none;
                    color: white;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: 0.2s;
                    backdrop-filter: blur(4px);
                }
                
                .chat-close-btn:hover {
                    background: rgba(0,0,0,0.3);
                    transform: scale(1.1);
                }

                .chat-iframe {
                    width: 100%;
                    height: 100%;
                    background: white;
                }
                
                @media (max-width: 480px) {
                    .chat-window { 
                        width: calc(100vw - 40px); 
                        height: 70vh; 
                    }
                }
            `}</style>
        </div>
    );
};

export default ChatWidget;
