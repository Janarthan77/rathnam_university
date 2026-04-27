import React from 'react';
import CoursePage from '../../components/courses/CoursePage';

const Engineering = () => (
    <CoursePage
        icon="⚙️"
        name="Engineering"
        fullName="Bachelor of Engineering & Technology Programs"
        gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600"
        duration="4 Years"
        seats="900+ Seats"
        affiliation="Anna University Affiliated"
        eligibility="10+2 PCM / PCB"
        about="Our Engineering programs are affiliated with Anna University and designed to develop technically proficient, innovation-driven engineers. With cutting-edge labs, industry partnerships, and experienced faculty, we offer a transformative learning experience that combines theory with hands-on practice."
        highlights={[
            'Anna University affiliated programs',
            'State-of-the-art engineering laboratories',
            'Industry collaborations with top tech companies',
            'Entrepreneurship & innovation cell',
            'Hackathons, tech fests & project expos',
            '95%+ placement record in top MNCs',
        ]}
        programs={[
            { icon: '💻', name: 'B.E Computer Science & Engineering', desc: 'Software, algorithms & system design', duration: '4 Years' },
            { icon: '📡', name: 'B.E Electronics & Communication', desc: 'VLSI, embedded systems & communication', duration: '4 Years' },
            { icon: '⚡', name: 'B.E Electrical Engineering', desc: 'Power systems, machines & control', duration: '4 Years' },
            { icon: '🔩', name: 'B.E Mechanical Engineering', desc: 'Thermodynamics, manufacturing & design', duration: '4 Years' },
            { icon: '🏗️', name: 'B.E Civil Engineering', desc: 'Structures, transportation & environment', duration: '4 Years' },
            { icon: '🧪', name: 'B.E Chemical Engineering', desc: 'Process design & chemical tech', duration: '4 Years' },
            { icon: '🤖', name: 'B.Tech Artificial Intelligence & ML', desc: 'Machine learning & AI systems', duration: '4 Years' },
            { icon: '🌐', name: 'B.Tech Information Technology', desc: 'Web, cloud & information systems', duration: '4 Years' },
        ]}
        careerPaths={[
            { icon: '💻', title: 'Software Engineer' },
            { icon: '🤖', title: 'AI / ML Engineer' },
            { icon: '📡', title: 'Electronics Engineer' },
            { icon: '⚡', title: 'Electrical Engineer' },
            { icon: '🏭', title: 'Manufacturing Engineer' },
            { icon: '🏗️', title: 'Civil / Structural Engineer' },
            { icon: '☁️', title: 'Cloud Architect' },
            { icon: '🔒', title: 'Cybersecurity Analyst' },
            { icon: '📱', title: 'App Developer' },
            { icon: '🚀', title: 'Startup Founder' },
            { icon: '🔬', title: 'R&D Engineer' },
            { icon: '📊', title: 'Data Engineer' },
        ]}
        // iframeLink="https://stobay.ai/rathnam_university/engineering/?type=widget"
        ChatLink="https://stobay.ai/rathnam_university/engineering/?type=chatbox"
    />
);

export default Engineering;
