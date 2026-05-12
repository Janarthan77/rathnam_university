import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const courses = [
    { name: 'Arts & Science', path: '/courses/arts-science', icon: '🎨' },
    { name: 'Engineering', path: '/courses/engineering', icon: '⚙️' },
    { name: 'RSMART Premium', path: '/courses/rsmart', icon: '⭐' },
    { name: 'MBA / MCA', path: '/courses/mba-mca', icon: '💼' },
    { name: 'B.Pharm', path: '/courses/bpharm', icon: '💊' },
    { name: 'Physiotherapy', path: '/courses/physiotherapy', icon: '🏥' },
    { name: 'Architecture', path: '/courses/architecture', icon: '🏛️' },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [coursesOpen, setCoursesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setCoursesOpen(false);
    }, [location]);

    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar ${isScrolled || !isHome ? 'scrolled' : ''}`}>
            <div className="container nav-inner">
                <Link to="/" className="logo">
                    <img src="/images/image-74.png.png" alt="Institution Logo" />
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-menu desktop-only">
                    <li className="nav-item">
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    </li>
                    <li className="nav-item has-dropdown" onMouseEnter={() => setCoursesOpen(true)} onMouseLeave={() => setCoursesOpen(false)}>
                        <span className="courses-trigger">
                            Courses <ChevronDown size={14} className={`chevron ${coursesOpen ? 'open' : ''}`} />
                        </span>
                        <AnimatePresence>
                            {coursesOpen && (
                                <motion.div
                                    className="mega-dropdown"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {courses.map((c) => (
                                        <Link key={c.path} to={c.path} className="dropdown-item">
                                            <span className="d-icon">{c.icon}</span>
                                            <span>{c.name}</span>
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </li>
                    <li className="nav-item"><a href={isHome ? '#about' : '/'}>About</a></li>
                    <li className="nav-item"><a href={isHome ? '#stats' : '/'}>Stats</a></li>
                    <li className="nav-item"><a href={isHome ? '#news' : '/'}>News</a></li>
                    {/* <li className="nav-item">
                        <Link to="/#contact" className="btn-enroll">Enroll Now</Link>
                    </li> */}
                    <li className="nav-item">
                        <a href="tel:+917845883006" className="btn-enroll">Call Us</a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link to="/" className="mob-link">Home</Link>
                        <div className="mob-section-title"><GraduationCap size={16} /> Courses</div>
                        {courses.map((c) => (
                            <Link key={c.path} to={c.path} className="mob-link sub">
                                {c.icon} {c.name}
                            </Link>
                        ))}
                        <a href="/#about" className="mob-link">About</a>
                        <a href="/#stats" className="mob-link">Stats</a>
                        {/* <a href="/" className="mob-enroll">Enroll Now</a> */}
                        <a href="tel:+917845883006" className="mob-link btn-enroll">Call Us</a>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .navbar {
                    position: fixed;
                    width: 100%;
                    top: 0;
                    z-index: 1000;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    padding: 14px 0;
                    background: transparent;
                }
                .navbar.scrolled {
                    background: rgba(0,0,0,0.5);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    /* border-bottom: 1px solid rgba(0,0,0,0.06); */
                    /* box-shadow: 0 4px 30px rgba(0,0,0,0.08); */
                    padding: 10px 0;
                }
                .nav-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .logo img {
                    height: 48px;
                    width: auto;
                    transition: 0.3s;
                    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.4));
                }
                .navbar.scrolled .logo img {
                    height: 40px;
                    filter: none;
                }
                .nav-menu {
                    display: flex;
                    gap: 0.5rem;
                    align-items: center;
                }
                .nav-item a, .courses-trigger {
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.9);
                    padding: 8px 14px;
                    border-radius: 8px;
                    transition: 0.3s;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    white-space: nowrap;
                }
                /* .navbar.scrolled .nav-item a,
                .navbar.scrolled .courses-trigger {
                    color: #1A1A2E;
                } */
                .nav-item a:hover, .courses-trigger:hover,
                .nav-item a.active {
                    color: var(--primary);
                    background: rgba(232,101,10,0.08);
                }
                .navbar.scrolled .nav-item a:hover,
                .navbar.scrolled .courses-trigger:hover {
                    background: rgba(232,101,10,0.1);
                }
                .has-dropdown { position: relative; }
                .chevron { transition: 0.3s; }
                .chevron.open { transform: rotate(180deg); }

                .mega-dropdown {
                    position: absolute;
                    top: calc(100% + 12px);
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.5);
                    color:var(--primary-text);
                    border-radius: 16px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
                    padding: 12px;
                    min-width: 220px;
                    border: 1px solid rgba(0,0,0,0.05);
                    z-index: 200;
                }
                .dropdown-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 14px;
                    border-radius: 10px;
                    font-size: 0.88rem;
                    font-weight: 500;
                    color: #1A1A2E;
                    transition: 0.2s;
                }
                .dropdown-item:hover {
                    background: rgba(232,101,10,0.08);
                    color: var(--primary);
                }
                .d-icon { font-size: 1.1rem; }

                .btn-enroll {
                    background: linear-gradient(135deg, #E8650A, #C4500A) !important;
                    color: white !important;
                    padding: 9px 20px !important;
                    border-radius: 10px !important;
                    font-weight: 700 !important;
                    font-size: 0.85rem !important;
                    box-shadow: 0 4px 15px rgba(232,101,10,0.35);
                    display: inline-block !important;
                }
                .btn-enroll:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(232,101,10,0.45) !important;
                }

                .mobile-toggle {
                    display: none;
                    background: rgba(255,255,255,0.1);
                    border: 1px solid rgba(255,255,255,0.2);
                    color: white;
                    cursor: pointer;
                    padding: 8px;
                    border-radius: 10px;
                    transition: 0.3s;
                }
                .navbar.scrolled .mobile-toggle {
                    background: rgba(232,101,10,0.1);
                    border-color: rgba(232,101,10,0.2);
                    color: var(--primary);
                }

                .mobile-menu {
                    background: white;
                    border-top: 1px solid #eee;
                    padding: 16px 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    overflow: hidden;
                }
                .mob-link {
                    display: block;
                    padding: 10px 14px;
                    border-radius: 10px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    color: #1A1A2E;
                    transition: 0.2s;
                }
                .mob-link:hover { background: rgba(232,101,10,0.08); color: var(--primary); }
                .mob-link.sub { padding-left: 24px; font-size: 0.88rem; font-weight: 500; }
                .mob-section-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: var(--primary);
                    padding: 10px 14px 4px;
                }
                .mob-enroll {
                    background: linear-gradient(135deg, #E8650A, #C4500A);
                    color: white !important;
                    border-radius: 12px;
                    text-align: center;
                    padding: 12px;
                    font-weight: 700;
                    margin-top: 8px;
                    display: block;
                }

                @media (max-width: 1100px) {
                    .desktop-only { display: none !important; }
                    .mobile-toggle { display: flex; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
