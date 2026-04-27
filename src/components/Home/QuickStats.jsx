import React from 'react';
import { motion } from 'framer-motion';

const QuickStats = () => {
    const stats = [
        { label: 'Years of Excellence', value: '39', color: 'var(--primary)' },
        { label: 'Lush Green Campus', value: '720+', color: 'var(--accent)' },
        { label: 'Career-Focused Students', value: '8000+', color: 'white' },
        { label: 'Global Placement Offers', value: '2163+', color: 'var(--primary)' },
        { label: 'Global Alumni Network', value: '50000+', color: 'white' },
        { label: 'Merit Scholarships', value: '100%', color: 'var(--accent)' },
    ];

    return (
        <motion.section 
            id="stats" 
            className="stats-modern section-padding"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="stats-bento">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className={`stat-box box-${i}`}
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h2 style={{ color: stat.color }}>{stat.value}</h2>
                            <p>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .stats-modern {
                    background: #050b14;
                    position: relative;
                    z-index: 5;
                    padding: 80px 0;
                }
                .stats-bento {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-auto-rows: minmax(180px, auto);
                    gap: 15px;
                }
                .stat-box {
                    background: rgba(255, 255, 255, 0.03);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 20px;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    backdrop-filter: blur(10px);
                }
                .stat-box h2 {
                    font-size: clamp(2rem, 5vw, 3.5rem);
                    margin-bottom: 5px;
                    font-family: 'Outfit', sans-serif;
                    font-weight: 800;
                }
                .stat-box p {
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    line-height: 1.2;
                }
                
                .box-0 { grid-column: span 2; }
                .box-4 { grid-column: span 2; }

                @media (max-width: 991px) {
                    .stats-bento { grid-template-columns: repeat(2, 1fr); }
                    .box-0, .box-4 { grid-column: span 2; }
                }
                @media (max-width: 576px) {
                    .stats-bento { grid-template-columns: 1fr; }
                    .box-0, .box-4 { grid-column: span 1; }
                    .stat-box { padding: 25px; }
                }
            `}</style>
        </motion.section>
    );
};

export default QuickStats;
