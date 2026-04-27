import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Award, BookOpen, CheckCircle, ChevronRight } from 'lucide-react';
import ChatWidget from '../Layout/ChatWidget';

const CoursePage = ({
    icon,
    name,
    fullName,
    gradient,
    heroImage,
    duration,
    seats,
    affiliation,
    eligibility,
    about,
    highlights,
    programs,
    careerPaths,
    iframeLink,
}) => {
    return (
        <div className="course-page">
            {/* Hero */}
            <div className="cp-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="cp-hero-overlay" style={{ background: `linear-gradient(135deg, rgba(10,10,30,0.88), rgba(10,10,30,0.6)), ${gradient}` }} />
                <div className="container cp-hero-content">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <Link to="/" className="back-btn">
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                        <div className="cp-icon">{icon}</div>
                        <div className="cp-badge">{affiliation}</div>
                        <h1 className="cp-title">{name}</h1>
                        <p className="cp-subtitle">{fullName}</p>
                        <div className="cp-meta">
                            <span><Clock size={15} /> {duration}</span>
                            <span><Users size={15} /> {seats} Seats</span>
                            <span><Award size={15} /> {eligibility}</span>
                        </div>
                        <div className="cp-hero-actions">
                            <a href="#programs" className="cp-btn-primary" style={{ background: gradient }}>
                                View Programs <ChevronRight size={16} />
                            </a>
                            <Link to="/" className="cp-btn-ghost">Apply Now</Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* About */}
            <section className="cp-about">
                <div className="container cp-two-col">
                    <motion.div
                        className="cp-about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="badge-sm">About the Program</span>
                        <h2>{name} — An Overview</h2>
                        <p>{about}</p>
                    </motion.div>
                    <motion.div
                        className="cp-highlights"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {highlights.map((h, i) => (
                            <div key={i} className="cp-highlight-item">
                                <CheckCircle size={18} className="check-icon" />
                                <span>{h}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Programs */}
            <section id="programs" className="cp-programs">
                <div className="container">
                    <div className="section-header">
                        <span className="badge-sm">Programs Offered</span>
                        <h2>Courses in {name}</h2>
                    </div>
                    <div className="cp-programs-grid">
                        {programs.map((prog, i) => (
                            <motion.div
                                key={i}
                                className="cp-program-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07 }}
                                whileHover={{ y: -4 }}
                            >
                                <div className="prog-icon" style={{ background: gradient }}>{prog.icon}</div>
                                <div className="prog-info">
                                    <h4>{prog.name}</h4>
                                    <p>{prog.desc}</p>
                                    <div className="prog-duration">{prog.duration}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Paths */}
            <section className="cp-career">
                <div className="container">
                    <div className="section-header">
                        <span className="badge-sm">Career Opportunities</span>
                        <h2>Where Will You Go?</h2>
                        <p>Our graduates are placed in top companies across the globe</p>
                    </div>
                    <div className="career-grid">
                        {careerPaths.map((c, i) => (
                            <motion.div
                                key={i}
                                className="career-chip"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                style={{ '--chip-color': `var(--primary)` }}
                            >
                                <span className="career-icon">{c.icon}</span>
                                <span>{c.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cp-cta" style={{ background: gradient }}>
                <div className="container cp-cta-inner">
                    <div>
                        <h2>Ready to Join {name}?</h2>
                        <p>Applications open for 2024–25 academic year</p>
                    </div>
                    <div className="cta-actions">
                        <Link to="/" className="cta-btn-white">Apply Now</Link>
                        <a href="tel:+914222345678" className="cta-btn-ghost">📞 Contact Admissions</a>
                    </div>
                </div>
            </section>

            <ChatWidget iframeLink={iframeLink} />

            <style>{`
                .course-page { padding-top: 0; }

                .cp-hero {
                    position: relative;
                    min-height: 520px;
                    background-size: cover;
                    background-position: center;
                    display: flex;
                    align-items: center;
                    padding: 100px 0 60px;
                }
                .cp-hero-overlay {
                    position: absolute;
                    inset: 0;
                }
                .cp-hero-content {
                    position: relative;
                    z-index: 10;
                    color: white;
                    width:100%;
                }
                .back-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    color: rgba(255,255,255,0.7);
                    font-size: 0.85rem;
                    margin-bottom: 24px;
                    transition: 0.3s;
                    padding: 6px 14px;
                    background: rgba(255,255,255,0.1);
                    border-radius: 8px;
                }
                .back-btn:hover { color: white; background: rgba(255,255,255,0.2); }
                .cp-icon { font-size: 3rem; margin-bottom: 12px; }
                .cp-badge {
                    display: inline-block;
                    background: rgba(255,255,255,0.15);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 4px 14px;
                    border-radius: 20px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 12px;
                }
                .cp-title {
                    font-size: clamp(2rem, 5vw, 4rem);
                    font-weight: 900;
                    color: white;
                    font-family: 'Outfit', sans-serif;
                    line-height: 1.1;
                    margin-bottom: 8px;
                }
                .cp-subtitle {
                    font-size: 1.1rem;
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 20px;
                }
                .cp-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                    margin-bottom: 28px;
                }
                .cp-meta span {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    background: rgba(255,255,255,0.12);
                    border: 1px solid rgba(255,255,255,0.2);
                    padding: 7px 14px;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: 500;
                }
                .cp-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
                .cp-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    color: white;
                    padding: 12px 24px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    transition: 0.3s;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
                }
                .cp-btn-primary:hover { transform: translateY(-2px); color: white; }
                .cp-btn-ghost {
                    display: inline-flex;
                    align-items: center;
                    background: rgba(255,255,255,0.12);
                    border: 1px solid rgba(255,255,255,0.25);
                    color: white;
                    padding: 12px 22px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: 0.3s;
                }
                .cp-btn-ghost:hover { background: rgba(255,255,255,0.22); color: white; }

                .cp-about {
                    padding: 80px 0;
                    background: white;
                }
                .cp-two-col {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    align-items: start;
                }
                .badge-sm {
                    display: inline-block;
                    background: rgba(232,101,10,0.1);
                    color: var(--primary);
                    border: 1px solid rgba(232,101,10,0.25);
                    padding: 4px 14px;
                    border-radius: 20px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 14px;
                    display: block;
                    width: fit-content;
                }
                .cp-about-text h2 {
                    font-size: 1.8rem;
                    margin-bottom: 16px;
                }
                .cp-about-text p {
                    color: var(--text-light);
                    line-height: 1.8;
                    font-size: 0.97rem;
                }
                .cp-highlight-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 12px 16px;
                    background: #F8F9FC;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    font-size: 0.9rem;
                    color: #374151;
                    font-weight: 500;
                }
                .check-icon { color: #10B981; flex-shrink: 0; margin-top: 2px; }

                .cp-programs {
                    padding: 80px 0;
                    background: #F8F9FC;
                }
                .cp-programs-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 20px;
                    margin-top: 2rem;
                }
                .cp-program-card {
                    background: white;
                    border-radius: 16px;
                    padding: 24px;
                    display: flex;
                    gap: 16px;
                    align-items: flex-start;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
                    border: 1px solid rgba(0,0,0,0.05);
                    transition: all 0.3s ease;
                }
                .cp-program-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
                .prog-icon {
                    width: 50px;
                    height: 50px;
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.4rem;
                    flex-shrink: 0;
                }
                .prog-info h4 {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-bottom: 4px;
                    color: #1A1A2E;
                    font-family: 'Outfit', sans-serif;
                }
                .prog-info p {
                    font-size: 0.82rem;
                    color: var(--text-light);
                    margin-bottom: 8px;
                }
                .prog-duration {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--primary);
                    background: rgba(232,101,10,0.08);
                    padding: 3px 10px;
                    border-radius: 6px;
                    display: inline-block;
                }

                .cp-career {
                    padding: 80px 0;
                    background: white;
                }
                .career-grid {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 12px;
                    justify-content: center;
                    margin-top: 2rem;
                }
                .career-chip {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: #F8F9FC;
                    border: 1px solid #E5E7EB;
                    color: #374151;
                    padding: 10px 18px;
                    border-radius: 50px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    cursor: default;
                    transition: 0.3s;
                }
                .career-chip:hover {
                    background: rgba(232,101,10,0.08);
                    border-color: rgba(232,101,10,0.3);
                    color: var(--primary);
                }
                .career-icon { font-size: 1.1rem; }

                .cp-cta {
                    padding: 60px 0;
                }
                .cp-cta-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 24px;
                }
                .cp-cta h2 { color: white; font-size: 2rem; }
                .cp-cta p { color: rgba(255,255,255,0.8); margin-top: 6px; }
                .cta-actions { display: flex; gap: 12px; flex-wrap: wrap; }
                .cta-btn-white {
                    background: white;
                    color: #1A1A2E;
                    padding: 12px 28px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.95rem;
                    transition: 0.3s;
                }
                .cta-btn-white:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
                .cta-btn-ghost {
                    background: rgba(255,255,255,0.15);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 12px 24px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.9rem;
                    transition: 0.3s;
                }
                .cta-btn-ghost:hover { background: rgba(255,255,255,0.25); }

                @media (max-width: 768px) {
                    .cp-two-col { grid-template-columns: 1fr; gap: 40px; }
                    .cp-cta-inner { flex-direction: column; text-align: center; }
                    .cta-actions { justify-content: center; }
                }
            `}</style>
        </div>
    );
};

export default CoursePage;
