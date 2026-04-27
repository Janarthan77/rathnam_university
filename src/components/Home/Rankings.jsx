import React from 'react';
import { motion } from 'framer-motion';

const Rankings = () => {
    const rankings = [
        { title: 'The World University Rankings 2025', band: '601 - 800 Band', category: 'Physical Science' },
        { title: 'Interdisciplinary Science Rankings 2026', band: '351 - 400 Rank', category: 'Powered by THE' },
        { title: 'World University Rankings 2024', band: '401 - 500 Band', category: 'Young Universities' },
        { title: 'Impact Rankings 2025', band: '1001 – 1500 Band', category: 'Sustainability' },
        { title: 'UI GreenMetric World Rankings', band: '#346 Rank', category: 'Global Metric' },
    ];

    return (
        <section id="rankings" className="rankings-modern section-padding">
            <div className="container">
                <div className="modern-header mb-5">
                    <span className="modern-badge">Accreditations</span>
                    <h2 className="modern-h2">Global <span className="text-gradient">Rankings</span> & Impact</h2>
                </div>
                
                <div className="rankings-marquee">
                    <div className="rankings-track">
                        {[...rankings, ...rankings].map((rank, i) => (
                            <div key={i} className="modern-rank-card">
                                <div className="rank-dot"></div>
                                <span className="rank-category">{rank.category}</span>
                                <h3>{rank.title}</h3>
                                <p className="rank-band">{rank.band}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .rankings-modern {
                    background: white;
                    overflow: hidden;
                    padding-bottom: 0;
                }
                .modern-badge {
                    color: var(--primary);
                    font-weight: 800;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    letter-spacing: 3px;
                }
                .modern-h2 {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    font-family: 'Outfit', sans-serif;
                    font-weight: 800;
                    color: var(--secondary);
                }
                .text-gradient {
                    background: linear-gradient(135deg, var(--primary), var(--secondary));
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .rankings-marquee {
                    margin-top: 60px;
                    width: 100%;
                    overflow: hidden;
                    padding: 20px 0 100px;
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                .rankings-track {
                    display: flex;
                    gap: 30px;
                    width: max-content;
                    animation: marquee 40s linear infinite;
                }
                .modern-rank-card {
                    width: 320px;
                    background: #f8fafc;
                    border: 1px solid rgba(0,0,0,0.05);
                    padding: 40px;
                    border-radius: 30px;
                    transition: all 0.3s ease;
                    position: relative;
                }
                .modern-rank-card:hover {
                    background: var(--secondary);
                    color: white;
                    transform: translateY(-10px);
                }
                .rank-dot {
                    width: 12px;
                    height: 12px;
                    background: var(--primary);
                    border-radius: 50%;
                    margin-bottom: 20px;
                }
                .rank-category {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    opacity: 0.6;
                    display: block;
                    margin-bottom: 15px;
                }
                .modern-rank-card h3 {
                    font-size: 1.25rem;
                    margin-bottom: 15px;
                    font-family: 'Outfit', sans-serif;
                    min-height: 60px;
                    line-height: 1.3;
                    color: inherit;
                }
                .rank-band {
                    font-size: 1.5rem;
                    font-weight: 800;
                    color: var(--primary);
                }
                .modern-rank-card:hover .rank-band { color: var(--accent); }

                @media (max-width: 768px) {
                    .modern-rank-card { width: 260px; padding: 25px; border-radius: 20px; }
                    .modern-rank-card h3 { font-size: 1.1rem; min-height: 50px; }
                    .rank-band { font-size: 1.25rem; }
                    .rankings-marquee { margin-top: 30px; padding-bottom: 50px; }
                }

                .mb-5 { margin-bottom: 50px; }
            `}</style>
        </section>
    );
};

export default Rankings;
