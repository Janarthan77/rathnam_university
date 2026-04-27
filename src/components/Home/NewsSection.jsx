import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const NewsSection = () => {
    const [activeTab, setActiveTab] = useState('News Zone');
    const tabs = ['News Zone', 'Press Releases', 'Blogs', 'Media'];

    const newsData = {
        'News Zone': [
            { id: 1, title: 'Karunya University at the Forefront of the Indo–German Roundtable', date: '28 Mar', category: 'Events', img: 'https://karunya.edu/img/homepage/Newszone/Karunya-AI.jpg.pagespeed.ce.xfX5B4eiym.jpg' },
            { id: 2, title: 'Building an education destination for non-resident Indians', date: '28 Feb', category: 'Academics', img: 'https://karunya.edu/img/homepage/PressRelease/KarunyaMainBlock.jpg' },
            { id: 3, title: 'MindKraft 2026: A Two-Day Tech Event of Ideas and Innovation', date: '10 Jan', category: 'Community', img: 'https://karunya.edu/newszone/featured-7/img/mindkraft26/mindkraft26-card.jpg' },
        ],
        'Press Releases': [
            { id: 4, title: 'Press Release: New Solar Research Center Inaugurated', date: '15 Mar', category: 'Research', img: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80&w=400' },
            { id: 5, title: 'Press Release: Karunya Ranks Top in Sustainability', date: '12 Feb', category: 'Ranking', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=400' },
        ],
        'Blogs': [
            { id: 6, title: 'The Future of AI in Modern Agriculture', date: '05 Mar', category: 'Blog', img: 'https://images.unsplash.com/photo-1530667912788-f976e8ee0bd5?auto=format&fit=crop&q=80&w=400' },
        ],
        'Media': [
            { id: 7, title: 'Convocation Ceremony 2024 Gallery', date: '01 Jan', category: 'Gallery', img: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=400' },
        ]
    };

    return (
        <motion.section 
            id="news" 
            className="news-modern section-padding"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="news-header">
                    <div className="title-area">
                        <span className="modern-badge">The Latest</span>
                        <h2>Campus <span className="text-gradient">Pulse</span></h2>
                    </div>

                    <div className="tabs-container">
                        {/* Desktop Tabs */}
                        <div className="tabs-pill desktop-tabs">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {activeTab === tab && (
                                        <motion.div 
                                            layoutId="activeTab"
                                            className="active-bg"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="tab-text">{tab}</span>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Select Format */}
                        <div className="mobile-select-wrapper">
                            <select 
                                className="modern-select"
                                value={activeTab}
                                onChange={(e) => setActiveTab(e.target.value)}
                            >
                                {tabs.map(tab => (
                                    <option key={tab} value={tab}>{tab}</option>
                                ))}
                            </select>
                            <div className="select-arrow"></div>
                        </div>
                    </div>
                </div>

                <div className="news-content-area">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="news-grid-responsive"
                        >
                            {(newsData[activeTab] || []).map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    className="news-item-card"
                                    whileHover={{ y: -10 }}
                                >
                                    <div className="news-img-box">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="news-content-box">
                                        <div className="meta-info">
                                            <span className="cat">{item.category}</span>
                                            <span className="date">{item.date}</span>
                                        </div>
                                        <h3>{item.title}</h3>
                                        <div className="read-more-group">
                                            <span className="read-text">Read More</span>
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style>{`
                .news-modern { background: #050b14; color: white; padding: 100px 0; overflow: hidden; }
                .news-header { 
                    display: flex; 
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-bottom: 80px; 
                    gap: 40px;
                }
                
                .news-header h2 { 
                    color: white; 
                    font-size: clamp(3rem, 8vw, 5rem); 
                    font-family: 'Outfit'; 
                    font-weight: 900;
                    margin: 0; 
                    line-height: 1;
                }

                .tabs-container {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }

                /* Mobile Select Styles */
                .mobile-select-wrapper {
                    display: none;
                    position: relative;
                    width: 90%;
                    max-width: 400px;
                }
                .modern-select {
                    width: 100%;
                    padding: 15px 25px;
                    background: rgba(255,255,255,0.05);
                    border: 1px solid rgba(255,255,255,0.1);
                    border-radius: 15px;
                    color: white;
                    font-size: 1rem;
                    font-weight: 700;
                    appearance: none;
                    cursor: pointer;
                    backdrop-filter: blur(10px);
                }
                .modern-select option {
                    background: #0C2340;
                    color: white;
                    padding: 10px;
                }
                .select-arrow {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 0;
                    height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-top: 6px solid var(--primary);
                    pointer-events: none;
                }
                
                .tabs-pill {
                    display: flex;
                    position: relative;
                    background: rgba(255,255,255,0.05);
                    padding: 6px;
                    border-radius: 100px;
                    width: fit-content;
                    border: 1px solid rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                }

                .tab-btn {
                    position: relative;
                    padding: 12px 24px;
                    background: transparent;
                    border: none;
                    color: rgba(255,255,255,0.5);
                    font-weight: 700;
                    font-size: 0.9rem;
                    cursor: pointer;
                    transition: color 0.3s ease;
                    z-index: 1;
                }

                .tab-btn.active {
                    color: white;
                }

                .active-bg {
                    position: absolute;
                    inset: 0;
                    background: var(--primary);
                    border-radius: 1000px;
                    box-shadow: 0 5px 15px rgba(178, 31, 36, 0.4);
                    z-index: -1;
                }

                .news-grid-responsive { 
                    display: grid; 
                    grid-template-columns: repeat(3, 1fr); 
                    gap: 30px; 
                }
                
                .news-item-card { 
                    background: rgba(255,255,255,0.02); 
                    border-radius: 40px; 
                    overflow: hidden; 
                    border: 1px solid rgba(255,255,255,0.05);
                }
                
                .news-img-box { height: 250px; overflow: hidden; }
                .news-img-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
                .news-item-card:hover .news-img-box img { transform: scale(1.1); }
                
                .news-content-box { padding: 35px; }
                .meta-info { display: flex; justify-content: space-between; margin-bottom: 15px; }
                .cat { color: var(--accent); font-weight: 800; font-size: 0.8rem; text-transform: uppercase; }
                .date { opacity: 0.4; font-size: 0.8rem; }
                .news-item-card h3 { color: white; font-family: 'Outfit'; font-size: 1.4rem; font-weight: 700; margin: 0 0 25px; min-height: 3.5rem; }
                
                .read-more-group { display: flex; align-items: center; gap: 10px; color: var(--primary); font-weight: 800; }

                @media (max-width: 1024px) {
                    .news-grid-responsive { grid-template-columns: repeat(2, 1fr); }
                }
                
                @media (max-width: 768px) {
                    .desktop-tabs { display: none; }
                    .mobile-select-wrapper { display: block; }
                    .news-header h2 { font-size: 3.5rem; }
                    .news-grid-responsive { grid-template-columns: 1fr; }
                }
            `}</style>
        </motion.section>
    );
};

export default NewsSection;
