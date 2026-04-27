import React from 'react';
import { motion } from 'framer-motion';

const AlumniSection = () => {
    const alumni = [
        { name: 'John Doe', role: 'CEO at Tech Corp', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
        { name: 'Jane Smith', role: 'Senior Scientist', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400' },
        { name: 'Robert Wilson', role: 'Innovation Lead', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400' },
    ];

    return (
        <motion.section
            id="alumni"
            className="alumni-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="section-header">
                    <h2>Notable <span className="red-text">Alumni</span></h2>
                    <div className="underline"></div>
                    <p>Celebrating the achievements of our graduates who are making a difference across the globe</p>
                </div>

                <div className="alumni-grid">
                    {alumni.map((person, i) => (
                        <div key={i} className="alumni-card">
                            <div className="img-container">
                                <img src={person.img} alt={person.name} />
                                <div className="quote-badge">“</div>
                            </div>
                            <h3>{person.name}</h3>
                            <p>{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .alumni-section { padding: 100px 0; background: white; text-align: center; }
                .alumni-section h2 { font-size: 3rem; margin-bottom: 10px; }
                .alumni-section p { max-width: 600px; margin: 20px auto 50px; color: var(--text-light); }
                
                .alumni-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                }
                .alumni-card {
                    padding: 20px;
                }
                .img-container {
                    position: relative;
                    width: 100%;
                    padding-bottom: 120%; /* Portrait aspect ratio matching screenshot */
                    border: 10px solid #0C2340;
                    margin-bottom: 25px;
                }
                .img-container img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .quote-badge {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    background: var(--primary);
                    color: white;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .alumni-card h3 { font-size: 1.5rem; margin-bottom: 5px; }
                .alumni-card p { margin: 0; font-size: 0.9rem; }
                
                @media (max-width: 768px) {
                    .alumni-grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </motion.section>
    );
};

export default AlumniSection;
