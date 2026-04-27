import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const coursesList = [
    {
        id: 'arts-science',
        path: '/courses/arts-science',
        icon: '🎨',
        gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
        iconBg: 'rgba(102,126,234,0.12)',
        name: 'Arts & Science',
        shortDesc: 'B.A, B.Sc, B.Com & more',
        count: '15+ Programs',
        tags: ['Literature', 'Mathematics', 'Computer Science', 'Commerce'],
    },
    {
        id: 'engineering',
        path: '/courses/engineering',
        icon: '⚙️',
        gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
        iconBg: 'rgba(245,87,108,0.12)',
        name: 'Engineering',
        shortDesc: 'B.E, B.Tech & Lateral Entry',
        count: '12+ Branches',
        tags: ['CSE', 'ECE', 'Mechanical', 'Civil'],
    },
    {
        id: 'rsmart',
        path: '/courses/rsmart',
        icon: '⭐',
        gradient: 'linear-gradient(135deg, #E8650A, #FFB347)',
        iconBg: 'rgba(232,101,10,0.12)',
        name: 'RSMART Premium',
        shortDesc: 'Industry-Integrated Programs',
        count: '8+ Courses',
        tags: ['AI & ML', 'Data Science', 'Cloud', 'Cybersecurity'],
        featured: true,
    },
    {
        id: 'mba-mca',
        path: '/courses/mba-mca',
        icon: '💼',
        gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)',
        iconBg: 'rgba(79,172,254,0.12)',
        name: 'MBA / MCA',
        shortDesc: 'Management & Computer Apps',
        count: '6+ Specializations',
        tags: ['Finance', 'Marketing', 'HR', 'Systems'],
    },
    {
        id: 'bpharm',
        path: '/courses/bpharm',
        icon: '💊',
        gradient: 'linear-gradient(135deg, #43e97b, #38f9d7)',
        iconBg: 'rgba(67,233,123,0.12)',
        name: 'B.Pharm',
        shortDesc: 'Bachelor of Pharmacy',
        count: '4-Year Program',
        tags: ['Pharmacology', 'Pharmaceutical', 'Drug Design', 'Clinical'],
    },
    {
        id: 'physiotherapy',
        path: '/courses/physiotherapy',
        icon: '🏥',
        gradient: 'linear-gradient(135deg, #fa709a, #fee140)',
        iconBg: 'rgba(250,112,154,0.12)',
        name: 'Physiotherapy',
        shortDesc: 'B.P.T — Bachelor of Physiotherapy',
        count: '4.5-Year Program',
        tags: ['Ortho', 'Sports', 'Neuro', 'Cardio'],
    },
    {
        id: 'architecture',
        path: '/courses/architecture',
        icon: '🏛️',
        gradient: 'linear-gradient(135deg, #a18cd1, #fbc2eb)',
        iconBg: 'rgba(161,140,209,0.12)',
        name: 'Architecture',
        shortDesc: 'B.Arch — 5-Year Professional Degree',
        count: '5-Year Program',
        tags: ['Design', 'Planning', 'Structures', 'Urban'],
    },
];

const CoursesSection = () => {
    return (
        <section id="courses" className="courses-section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="badge">Our Programs</span>
                    <h2>Explore Our Courses</h2>
                    <p>Choose from 7 distinguished disciplines with 100+ programs designed for your success</p>
                </motion.div>

                <div className="courses-grid">
                    {coursesList.map((course, i) => (
                        <motion.div
                            key={course.id}
                            className={`course-card ${course.featured ? 'featured' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                        >
                            {course.featured && (
                                <div className="featured-badge">⭐ Premium</div>
                            )}
                            <div className="card-top">
                                <div className="course-icon-wrapper" style={{ background: course.iconBg }}>
                                    <span className="course-icon">{course.icon}</span>
                                </div>
                                <div className="course-count">{course.count}</div>
                            </div>

                            <div className="gradient-line" style={{ background: course.gradient }} />

                            <h3 className="course-name">{course.name}</h3>
                            <p className="course-desc">{course.shortDesc}</p>

                            <div className="course-tags">
                                {course.tags.map((tag) => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <Link
                                to={course.path}
                                state={{ openChat: true }}
                                className="course-link"
                            >
                                Explore <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
                .courses-section {
                    padding: 80px 0;
                    background: #F8F9FC;
                    position: relative;
                }
                .courses-section::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #E8650A, #FFB347, #E8650A);
                }
                .courses-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 24px;
                }
                .course-card {
                    background: white;
                    border-radius: 20px;
                    padding: 28px;
                    border: 1px solid rgba(0,0,0,0.06);
                    position: relative;
                    overflow: hidden;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
                    transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
                    cursor: pointer;
                }
                .course-card:hover {
                    box-shadow: 0 20px 60px rgba(0,0,0,0.12);
                    border-color: transparent;
                }
                .course-card.featured {
                    border: 2px solid rgba(232,101,10,0.3);
                    background: linear-gradient(145deg, #fff9f6, #ffffff);
                }
                .featured-badge {
                    position: absolute;
                    top: 16px;
                    right: 16px;
                    background: linear-gradient(135deg, #E8650A, #FFB347);
                    color: white;
                    font-size: 0.7rem;
                    font-weight: 700;
                    padding: 4px 12px;
                    border-radius: 20px;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 16px;
                }
                .course-icon-wrapper {
                    width: 60px;
                    height: 60px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .course-icon { font-size: 1.8rem; }
                .course-count {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: var(--text-light);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .gradient-line {
                    height: 3px;
                    border-radius: 2px;
                    margin-bottom: 16px;
                }
                .course-name {
                    font-size: 1.25rem;
                    font-weight: 800;
                    color: #1A1A2E;
                    margin-bottom: 6px;
                    font-family: 'Outfit', sans-serif;
                }
                .course-desc {
                    font-size: 0.88rem;
                    color: var(--text-light);
                    margin-bottom: 16px;
                    line-height: 1.5;
                }
                .course-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                    margin-bottom: 20px;
                }
                .tag {
                    background: #F1F5F9;
                    color: #475569;
                    font-size: 0.72rem;
                    font-weight: 600;
                    padding: 4px 10px;
                    border-radius: 6px;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                }
                .course-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 0.88rem;
                    font-weight: 700;
                    color: var(--primary);
                    transition: 0.3s;
                    padding: 8px 16px;
                    background: rgba(232,101,10,0.08);
                    border-radius: 8px;
                    border: 1px solid rgba(232,101,10,0.2);
                }
                .course-link:hover {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                    transform: translateX(2px);
                }
                @media (max-width: 768px) {
                    .courses-grid { grid-template-columns: 1fr; }
                }
                @media (min-width: 769px) and (max-width: 1100px) {
                    .courses-grid { grid-template-columns: repeat(2, 1fr); }
                }
            `}</style>
        </section>
    );
};

export default CoursesSection;
