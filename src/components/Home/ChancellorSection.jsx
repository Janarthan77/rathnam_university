import React from 'react';
import { motion } from 'framer-motion';

const ChancellorSection = () => {
    return (
        <motion.section
            id="vision"
            className="vision-modern section-padding"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <div className="vision-grid">
                    <motion.div
                        className="vision-image"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="img-wrapper">
                            <img src="https://karunya.edu/img/homepage/Chancellor's-Image/Chancellor Image.png" alt="Chancellor" />
                        </div>
                        <div className="name-plate">
                            <h4>Dr. Paul Dhinakaran</h4>
                            <p>Chancellor, Karunya University</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="vision-content"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="accent-tag">The Vision</span>
                        <h2>Empowering the Future of <span className="text-gradient">Humanity</span></h2>
                        <p className="vision-quote">
                            "Karunya is not just an institution; it's a movement with a social concern. We are raising scientists and entrepreneurs to find solutions for the world's most pressing problems."
                        </p>

                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <span className="item-num">01</span>
                                <div>
                                    <h5>Industry Powered</h5>
                                    <p>Work with MNCs while you study</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <span className="item-num">02</span>
                                <div>
                                    <h5>Global Impact</h5>
                                    <p>Internships in 85+ countries</p>
                                </div>
                            </div>
                        </div>

                        <button className="btn-glow-modern">Discover Our Mission</button>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .vision-modern {
                    background: #fdfdfd;
                    padding: 80px 0;
                    overflow: hidden;
                }
                .vision-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 60px;
                    align-items: center;
                }
                .vision-image {
                    position: relative;
                }
                .img-wrapper {
                    border-radius: 30px;
                    overflow: hidden;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.1);
                }
                .img-wrapper img { width: 100%; display: block; }
                
                .name-plate {
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                    background: var(--secondary);
                    color: white;
                    padding: 20px;
                    border-radius: 15px;
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
                    min-width: 200px;
                }
                .name-plate h4 { color: white; margin: 0; font-size: 1rem; }
                .name-plate p { opacity: 0.7; font-size: 0.75rem; margin: 5px 0 0; }
                
                .accent-tag {
                    color: var(--primary);
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 0.8rem;
                    margin-bottom: 1rem;
                    display: block;
                }
                .vision-content h2 {
                    font-size: clamp(2rem, 4vw, 3.5rem);
                    line-height: 1.1;
                    margin-bottom: 1.5rem;
                }
                .vision-quote {
                    font-size: clamp(1.1rem, 2vw, 1.4rem);
                    line-height: 1.5;
                    color: var(--text-light);
                    font-style: italic;
                    margin-bottom: 2rem;
                    border-left: 4px solid var(--primary);
                    padding-left: 20px;
                }
                
                .benefits-grid { display: grid; gap: 20px; margin-bottom: 30px; }
                .benefit-item { display: flex; gap: 15px; }
                .item-num { font-weight: 900; color: rgba(178, 31, 36, 0.1); font-size: 2.5rem; line-height: 1; }
                .benefit-item h5 { font-size: 1.1rem; margin-bottom: 5px; }
                .benefit-item p { font-size: 0.85rem; color: var(--text-light); }
                
                .btn-glow-modern {
                    background: var(--secondary);
                    color: white;
                    border: none;
                    padding: 1rem 2.5rem;
                    border-radius: 50px;
                    font-weight: 700;
                    cursor: pointer;
                    width: fit-content;
                }

                @media (max-width: 991px) {
                    .vision-grid { grid-template-columns: 1fr; gap: 40px; }
                    .vision-image { max-width: 500px; margin: 0 auto; }
                    .vision-content { text-align: center; display: flex; flex-direction: column; align-items: center; }
                    .vision-quote { text-align: left; }
                    .benefit-item { text-align: left; }
                }
            `}</style>
        </motion.section>
    );
};

export default ChancellorSection;
