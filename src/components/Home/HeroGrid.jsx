import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, Award, Users, BookOpen, Star } from 'lucide-react';

const slides = [
    {
        // bg: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=1600',
        badge: 'Welcome to Excellence',
        title: 'Shape Your Future',
        subtitle: 'with World-Class Education',
        desc: 'Discover 100+ programs across 7 disciplines — from Arts & Science to Engineering and beyond.',
        cta: 'Explore Courses',
        ctaLink: '#courses',
    },
    {
        // bg: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1600',
        badge: 'RSMART Premium',
        title: 'Premium Learning',
        subtitle: 'Unmatched in the Region',
        desc: 'Our RSMART courses prepare you for the global job market with cutting-edge curriculum.',
        cta: 'RSMART Courses',
        ctaLink: '/courses/rsmart',
    },
    {
        // bg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1600',
        badge: 'Healthcare & Life Sciences',
        title: 'Heal, Innovate,',
        subtitle: 'Lead the Future',
        desc: 'B.Pharm, Physiotherapy and more — begin your healthcare career here.',
        cta: 'View Programs',
        ctaLink: '#courses',
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent(p => (p + 1) % slides.length), 5000);
        return () => clearInterval(timer);
    }, []);

    const slide = slides[current];

    return (
        <section id="home" className="hero-section">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="hero-bg"
                    // style={{ backgroundImage: `url(${slide.bg})` }}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>

            <div className="hero-overlay" />

            <div className="container hero-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current + '-text'}
                        className="hero-text"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="hero-badge">{slide.badge}</span>
                        <h1 className="hero-title">
                            {slide.title}<br />
                            <span className="hero-title-accent">{slide.subtitle}</span>
                        </h1>
                        <p className="hero-desc">{slide.desc}</p>
                        <div className="hero-actions">
                            <a href={slide.ctaLink} className="hero-btn-primary">
                                {slide.cta} <ChevronRight size={18} />
                            </a>
                            <button className="hero-btn-ghost">
                                <Play size={16} fill="white" /> Virtual Tour
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slide indicators */}
                <div className="hero-dots">
                    {slides.map((_, i) => (
                        <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
                    ))}
                </div>
            </div>

            {/* Stats Bar */}
            <div className="hero-stats-bar">
                <div className="container hero-stats-inner">
                    {[
                        { icon: <Award size={20} />, value: '39+', label: 'Years of Excellence' },
                        { icon: <Users size={20} />, value: '8000+', label: 'Students' },
                        { icon: <BookOpen size={20} />, value: '100+', label: 'Programs' },
                        { icon: <Star size={20} />, value: '2163+', label: 'Placements' },
                    ].map((s, i) => (
                        <div key={i} className="hstat">
                            <span className="hstat-icon">{s.icon}</span>
                            <div>
                                <div className="hstat-value">{s.value}</div>
                                <div className="hstat-label">{s.label}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .hero-section {
                    position: relative;
                    height: 100vh;
                    min-height: 700px;
                    display: flex;
                    align-items: center;
                    overflow: hidden;
                }
                .hero-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    z-index: 0;
                }
                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(10,10,30,0.82) 0%,
                        rgba(10,10,30,0.6) 50%,
                        rgba(232,101,10,0.15) 100%
                    );
                    z-index: 1;
                }
                .hero-content {
                    position: relative;
                    z-index: 10;
                    padding-bottom: 100px;
                    width:100%;
                }
                .hero-badge {
                    display: inline-block;
                    background: rgba(232,101,10,0.15);
                    color: #FF8C3A;
                    border: 1px solid rgba(232,101,10,0.4);
                    padding: 6px 18px;
                    border-radius: 50px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 1.5rem;
                }
                .hero-title {
                    font-size: clamp(2.4rem, 6vw, 5.5rem);
                    line-height: 1.05;
                    color: white;
                    font-weight: 900;
                    font-family: 'Outfit', sans-serif;
                    margin-bottom: 1.5rem;
                }
                .hero-title-accent {
                    background: linear-gradient(90deg, #FF8C3A, #FFB347);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }
                .hero-desc {
                    font-size: clamp(1rem, 2vw, 1.2rem);
                    color: rgba(255,255,255,0.75);
                    max-width: 560px;
                    margin-bottom: 2.5rem;
                    line-height: 1.7;
                }
                .hero-actions {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }
                .hero-btn-primary {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: linear-gradient(135deg, #E8650A, #C4500A);
                    color: white;
                    padding: 14px 28px;
                    border-radius: 12px;
                    font-weight: 700;
                    font-size: 0.95rem;
                    box-shadow: 0 8px 30px rgba(232,101,10,0.4);
                    transition: 0.3s;
                    font-family: 'Outfit', sans-serif;
                }
                .hero-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 12px 40px rgba(232,101,10,0.5);
                    color: white;
                }
                .hero-btn-ghost {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.25);
                    color: white;
                    padding: 14px 24px;
                    border-radius: 12px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    cursor: pointer;
                    transition: 0.3s;
                    font-family: 'Outfit', sans-serif;
                    backdrop-filter: blur(10px);
                }
                .hero-btn-ghost:hover {
                    background: rgba(255,255,255,0.2);
                    transform: translateY(-2px);
                }
                .hero-dots {
                    position: absolute;
                    bottom: 120px;
                    right: 0;
                    display: flex;
                    gap: 8px;
                }
                .dot {
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: rgba(255,255,255,0.3);
                    border: none;
                    cursor: pointer;
                    transition: 0.3s;
                }
                .dot.active {
                    width: 28px;
                    border-radius: 4px;
                    background: var(--primary);
                }
                .hero-stats-bar {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: rgba(255,255,255,0.97);
                    backdrop-filter: blur(20px);
                    border-top: 1px solid rgba(0,0,0,0.05);
                    z-index: 10;
                }
                .hero-stats-inner {
                    display: flex;
                    justify-content: space-around;
                    padding: 20px 0;
                }
                .hstat {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }
                .hstat-icon {
                    color: var(--primary);
                    background: rgba(232,101,10,0.1);
                    padding: 10px;
                    border-radius: 12px;
                    display: flex;
                }
                .hstat-value {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: var(--secondary);
                    font-family: 'Outfit', sans-serif;
                    line-height: 1;
                }
                .hstat-label {
                    font-size: 0.75rem;
                    color: var(--text-light);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 500;
                }
                @media (max-width: 768px) {
                    .hero-section { height: auto; padding: 120px 0 0; min-height: 100vh; }
                    .hero-stats-inner { flex-wrap: wrap; gap: 16px; padding: 16px; }
                    .hstat { flex: 1; min-width: 130px; }
                    .hero-dots { bottom: 80px; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
