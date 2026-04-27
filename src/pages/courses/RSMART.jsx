import React from 'react';
import CoursePage from '../../components/courses/CoursePage';

const RSMART = () => (
    <CoursePage
        icon="⭐"
        name="RSMART Premium"
        fullName="Industry-Integrated Premium Professional Certification Courses"
        gradient="linear-gradient(135deg, #E8650A 0%, #FFB347 100%)"
        heroImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600"
        duration="6 – 12 Months"
        seats="Limited Seats"
        affiliation="Industry Certified | Institution Endorsed"
        eligibility="Any UG / PG Degree"
        about="RSMART Premium is our flagship skill-development initiative that bridges the gap between academic knowledge and industry demands. These intensive, mentor-led programs are co-designed with top industry partners and provide globally recognized certifications, live projects, and placement assurance."
        highlights={[
            'Industry co-designed curriculum',
            '100% placement assistance guarantee',
            'Live project experience with real clients',
            'Globally recognized certifications',
            'Mentorship from industry professionals',
            'Flexible weekend & online batches available',
        ]}
        programs={[
            { icon: '🤖', name: 'AI & Machine Learning', desc: 'Python, TensorFlow, model deployment', duration: '6 Months' },
            { icon: '📊', name: 'Data Science & Analytics', desc: 'SQL, Power BI, Python, statistics', duration: '6 Months' },
            { icon: '☁️', name: 'Cloud Computing (AWS/Azure)', desc: 'Cloud architecture & DevOps', duration: '4 Months' },
            { icon: '🔒', name: 'Cybersecurity', desc: 'Ethical hacking, network security', duration: '6 Months' },
            { icon: '📱', name: 'Full Stack Development', desc: 'React, Node.js, MongoDB, REST APIs', duration: '6 Months' },
            { icon: '🎨', name: 'UI/UX Design', desc: 'Figma, user research & prototyping', duration: '4 Months' },
            { icon: '📲', name: 'Digital Marketing', desc: 'SEO, SEM, social media & analytics', duration: '3 Months' },
            { icon: '🏦', name: 'FinTech & Business Analytics', desc: 'Financial modeling & data-driven decisions', duration: '5 Months' },
        ]}
        careerPaths={[
            { icon: '🤖', title: 'ML Engineer' },
            { icon: '📊', title: 'Data Scientist' },
            { icon: '☁️', title: 'Cloud Architect' },
            { icon: '🔒', title: 'Security Analyst' },
            { icon: '🖥️', title: 'Full Stack Developer' },
            { icon: '🎨', title: 'UX Designer' },
            { icon: '📈', title: 'Growth Marketer' },
            { icon: '🏦', title: 'FinTech Analyst' },
            { icon: '🚀', title: 'Product Manager' },
            { icon: '🤝', title: 'IT Consultant' },
        ]}
        // iframeLink="https://stobay.ai/rathnam_university/rsmart/?type=widget"
        ChatLink="https://stobay.ai/rathnam_university/rsmart/?type=chatbox"
    />
);

export default RSMART;
