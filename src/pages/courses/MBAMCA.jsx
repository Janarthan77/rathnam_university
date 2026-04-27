import React from 'react';
import CoursePage from '../../components/courses/CoursePage';

const MBAMCA = () => (
    <CoursePage
        icon="💼"
        name="MBA / MCA"
        fullName="Master of Business Administration & Master of Computer Applications"
        gradient="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        heroImage="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=1600"
        duration="2 Years"
        seats="300+ Seats"
        affiliation="Bharathiar University Affiliated"
        eligibility="Any UG Degree (Min. 50%)"
        about="Our MBA and MCA programs are designed for aspiring leaders and tech professionals. With a research-driven approach, industry mentors, live case studies, and a strong alumni network, these postgraduate programs equip you with the strategic and technical skills needed in today's competitive global market."
        highlights={[
            'Affiliated to Bharathiar University',
            'Industry mentorship & live case studies',
            'International MOU for student exchange programs',
            'Bloomberg Finance Lab for MBA Finance students',
            'Entrepreneurship incubation support',
            '100% placement assistance with top recruiters',
        ]}
        programs={[
            { icon: '💰', name: 'MBA – Finance', desc: 'Corporate finance, investment & banking', duration: '2 Years' },
            { icon: '📢', name: 'MBA – Marketing', desc: 'Brand management, digital & sales', duration: '2 Years' },
            { icon: '👥', name: 'MBA – Human Resources', desc: 'Talent management & organizational behavior', duration: '2 Years' },
            { icon: '📦', name: 'MBA – Operations', desc: 'Supply chain, logistics & quality', duration: '2 Years' },
            { icon: '💻', name: 'MBA – Systems & IT', desc: 'IT management & digital transformation', duration: '2 Years' },
            { icon: '🖥️', name: 'MCA – Computer Applications', desc: 'Software engineering & enterprise applications', duration: '2 Years' },
        ]}
        careerPaths={[
            { icon: '💼', title: 'Business Manager' },
            { icon: '📊', title: 'Financial Analyst' },
            { icon: '🌐', title: 'Marketing Manager' },
            { icon: '👥', title: 'HR Manager' },
            { icon: '🔗', title: 'Supply Chain Head' },
            { icon: '🖥️', title: 'Systems Analyst' },
            { icon: '🚀', title: 'Entrepreneur' },
            { icon: '🏦', title: 'Investment Banker' },
            { icon: '📱', title: 'Product Manager' },
            { icon: '🤝', title: 'Management Consultant' },
        ]}
        iframeLink="https://stobay.ai/rathnam_university/mba/?type=widget"
    />
);

export default MBAMCA;
