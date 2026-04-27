import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <div className="container footer-grid">
                {/* Brand */}
                <div className="footer-col brand-col">
                    <img src="/images/image-74.png.png" alt="Logo" className="footer-logo" />
                    <p className="footer-tagline">
                        Empowering students through quality education, innovation, and career excellence since 1985.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                        <a href="#" aria-label="YouTube"><Youtube size={18} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                    </div>
                </div>

                {/* Courses */}
                <div className="footer-col">
                    <h4>Our Courses</h4>
                    <ul>
                        <li><Link to="/courses/arts-science">🎨 Arts & Science</Link></li>
                        <li><Link to="/courses/engineering">⚙️ Engineering</Link></li>
                        <li><Link to="/courses/rsmart">⭐ RSMART Premium</Link></li>
                        <li><Link to="/courses/mba-mca">💼 MBA / MCA</Link></li>
                        <li><Link to="/courses/bpharm">💊 B.Pharm</Link></li>
                        <li><Link to="/courses/physiotherapy">🏥 Physiotherapy</Link></li>
                        <li><Link to="/courses/architecture">🏛️ Architecture</Link></li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#about">About Institution</a></li>
                        <li><a href="#stats">Achievements</a></li>
                        <li><a href="#news">Latest News</a></li>
                        <li><a href="#">Admissions 2024</a></li>
                        <li><a href="#">Scholarships</a></li>
                        <li><a href="#">Campus Life</a></li>
                        <li><a href="#">Alumni Network</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <div className="contact-items">
                        <div className="contact-item">
                            <MapPin size={16} className="contact-icon" />
                            <p>Rathinam Techzone Campus,<br />Eachanari, Coimbatore,<br />Tamil Nadu – 641021.</p>
                        </div>
                        <div className="contact-item">
                            <Phone size={16} className="contact-icon" />
                            <p>+91 422 234 5678</p>
                        </div>
                        <div className="contact-item">
                            <Mail size={16} className="contact-icon" />
                            <p>admission@rathinam.in</p>
                        </div>
                    </div>
                    <a href="#" className="footer-apply-btn">Apply for Admission →</a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>© 2024 Rathinam Institution. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                        <a href="#">NAAC Accreditation</a>
                    </div>
                </div>
            </div>

            <style>{`
                .footer {
                    background: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%);
                    color: white;
                    padding: 70px 0 0;
                    position: relative;
                }
                .footer::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #E8650A, #FFB347, #E8650A);
                }
                .footer-grid {
                    display: grid;
                    grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
                    gap: 50px;
                    margin-bottom: 60px;
                }
                .footer-logo {
                    height: 55px;
                    margin-bottom: 18px;
                }
                .footer-tagline {
                    opacity: 0.65;
                    line-height: 1.7;
                    font-size: 0.88rem;
                    margin-bottom: 20px;
                    max-width: 280px;
                }
                .social-links {
                    display: flex;
                    gap: 10px;
                }
                .social-links a {
                    width: 38px; height: 38px;
                    background: rgba(255,255,255,0.08);
                    border: 1px solid rgba(255,255,255,0.12);
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: rgba(255,255,255,0.7);
                    transition: 0.3s;
                }
                .social-links a:hover {
                    background: var(--primary);
                    border-color: var(--primary);
                    color: white;
                    transform: translateY(-2px);
                }
                .footer h4 {
                    color: white;
                    font-size: 0.9rem;
                    font-family: 'Outfit', sans-serif;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    margin-bottom: 20px;
                    font-weight: 700;
                    position: relative;
                    padding-bottom: 12px;
                }
                .footer h4::after {
                    content: '';
                    position: absolute;
                    bottom: 0; left: 0;
                    width: 30px; height: 2px;
                    background: var(--primary);
                    border-radius: 2px;
                }
                .footer ul li {
                    margin-bottom: 10px;
                }
                .footer ul li a {
                    color: rgba(255,255,255,0.6);
                    font-size: 0.88rem;
                    transition: 0.3s;
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .footer ul li a:hover {
                    color: var(--primary);
                    padding-left: 4px;
                }
                .contact-items { display: flex; flex-direction: column; gap: 14px; margin-bottom: 20px; }
                .contact-item { display: flex; gap: 10px; align-items: flex-start; }
                .contact-icon { color: var(--primary); flex-shrink: 0; margin-top: 2px; }
                .contact-item p { color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.6; }
                .footer-apply-btn {
                    display: inline-block;
                    background: linear-gradient(135deg, #E8650A, #C4500A);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 10px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    transition: 0.3s;
                }
                .footer-apply-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 24px rgba(232,101,10,0.4);
                    color: white;
                }
                .footer-bottom {
                    border-top: 1px solid rgba(255,255,255,0.08);
                    padding: 20px 0;
                }
                .footer-bottom-inner {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 12px;
                }
                .footer-bottom p { opacity: 0.45; font-size: 0.82rem; }
                .footer-links { display: flex; gap: 20px; }
                .footer-links a { opacity: 0.45; font-size: 0.82rem; transition: 0.3s; }
                .footer-links a:hover { opacity: 1; color: var(--primary); }

                @media (max-width: 1100px) {
                    .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
                }
                @media (max-width: 576px) {
                    .footer-grid { grid-template-columns: 1fr; gap: 36px; }
                    .footer-bottom-inner { flex-direction: column; text-align: center; }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
