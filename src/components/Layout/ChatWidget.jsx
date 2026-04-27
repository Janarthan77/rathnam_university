import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const ChatWidget = ({ iframeLink }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasAutoOpened, setHasAutoOpened] = useState(false);
    const [showPulse, setShowPulse] = useState(false);
    const location = useLocation();

    // Auto-open chat when navigating from home page with openChat state
    useEffect(() => {
        if (location.state?.openChat && !hasAutoOpened && iframeLink) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                setHasAutoOpened(true);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [location.state, iframeLink]);

    // Show pulse animation on course pages
    useEffect(() => {
        if (iframeLink && !isOpen) {
            setShowPulse(true);
            const timer = setTimeout(() => setShowPulse(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [iframeLink]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowPulse(false);
    };

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

            <div className="chat-btn-wrapper">
                {showPulse && !isOpen && (
                    <motion.div
                        className="chat-pulse-ring"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: 2.2, opacity: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeOut' }}
                    />
                )}
                <motion.button
                    className={`chat-toggle-pill ${isOpen ? 'active' : ''}`}
                    onClick={toggleChat}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isOpen ? <X size={22} /> : (
                        <>
                            <Sparkles size={20} className="sparkle-icon" />
                            <span className="toggle-text">Ask AI</span>
                        </>
                    )}
                </motion.button>
            </div>

            <style>{`
                .chat-container {
                    position: fixed;
                    bottom: 28px;
                    right: 28px;
                    z-index: 9999;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 14px;
                }

                .chat-btn-wrapper {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .chat-pulse-ring {
                    position: absolute;
                    width: 52px;
                    height: 52px;
                    border-radius: 50px;
                    background: rgba(232,101,10,0.4);
                    pointer-events: none;
                }
                
                .chat-toggle-pill {
                    height: 52px;
                    padding: 0 22px;
                    border-radius: 50px;
                    background: linear-gradient(135deg, #E8650A, #FFB347);
                    color: white;
                    border: none;
                    box-shadow: 0 8px 30px rgba(232,101,10,0.4);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    font-family: 'Outfit', sans-serif;
                    position: relative;
                    z-index: 1;
                }

                .chat-toggle-pill:hover {
                    box-shadow: 0 12px 40px rgba(232,101,10,0.5);
                    transform: translateY(-1px);
                }
                
                .chat-toggle-pill.active {
                    width: 52px;
                    height: 52px;
                    padding: 0;
                    justify-content: center;
                    background: #fff;
                    color: #E8650A;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                    border: 2px solid rgba(232,101,10,0.2);
                }

                .sparkle-icon {
                    animation: sparkle-spin 3s linear infinite;
                }

                @keyframes sparkle-spin {
                    0%, 100% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(15deg) scale(1.15); }
                }

                .toggle-text {
                    font-weight: 700;
                    font-size: 0.88rem;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                }

                .chat-window {
                    width: 400px;
                    height: 600px;
                    background: white;
                    border-radius: 24px;
                    box-shadow: 0 24px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(232,101,10,0.1);
                    overflow: hidden;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                }

                .chat-iframe {
                    width: 100%;
                    height: 100%;
                    background: white;
                    border: none;
                }
                
                @media (max-width: 480px) {
                    .chat-window { 
                        width: calc(100vw - 32px); 
                        height: 72vh; 
                    }
                    .chat-container {
                        bottom: 20px;
                        right: 16px;
                    }
                }
            `}</style>
        </div>
    );
};

export default ChatWidget;
