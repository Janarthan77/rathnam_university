import React from 'react';
import CoursePage from '../../components/courses/CoursePage';

const ArtsScience = () => (
    <CoursePage
        icon="🎨"
        name="Arts & Science"
        fullName="Bachelor of Arts, Science & Commerce Programs"
        gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        heroImage="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1600"
        duration="3 Years"
        seats="1200+ Seats"
        affiliation="Bharathiar University Affiliated"
        eligibility="10+2 Any Stream"
        about="Our Arts & Science department offers a rich blend of traditional and modern disciplines designed to nurture intellectual curiosity, critical thinking, and professional readiness. With expert faculty, state-of-the-art labs, and strong placement support, we prepare students for a dynamic future in academia, research, and industry."
        highlights={[
            'Affiliated to Bharathiar University, Coimbatore',
            'Smart classrooms with digital learning tools',
            'Industry-integrated curriculum with internships',
            'Research labs for Science departments',
            'Cultural clubs, NSS & NCC activities',
            '90%+ placement assistance for UG students',
        ]}
        programs={[
            { icon: '📚', name: 'B.A English Literature', desc: 'Language, literature & communication', duration: '3 Years' },
            { icon: '💰', name: 'B.Com', desc: 'Commerce, accounting & business studies', duration: '3 Years' },
            { icon: '🧮', name: 'B.Sc Mathematics', desc: 'Pure & applied mathematics', duration: '3 Years' },
            { icon: '🔬', name: 'B.Sc Chemistry', desc: 'Organic, inorganic & physical chemistry', duration: '3 Years' },
            { icon: '🧬', name: 'B.Sc Biotechnology', desc: 'Molecular biology & biotechnology', duration: '3 Years' },
            { icon: '🖥️', name: 'B.Sc Computer Science', desc: 'Programming, algorithms & software', duration: '3 Years' },
            { icon: '📊', name: 'B.Sc Statistics', desc: 'Data analysis & statistical computing', duration: '3 Years' },
            { icon: '🌿', name: 'B.Sc Botany', desc: 'Plant science & environmental studies', duration: '3 Years' },
            { icon: '🐾', name: 'B.Sc Zoology', desc: 'Animal science & wildlife biology', duration: '3 Years' },
            { icon: '💼', name: 'BBA', desc: 'Business administration & management', duration: '3 Years' },
        ]}
        careerPaths={[
            { icon: '🏛️', title: 'Civil Services' },
            { icon: '🏫', title: 'Teaching & Education' },
            { icon: '📊', title: 'Data Analyst' },
            { icon: '💼', title: 'Business Manager' },
            { icon: '🔬', title: 'Research Scientist' },
            { icon: '📰', title: 'Journalism & Media' },
            { icon: '💰', title: 'Chartered Accountant' },
            { icon: '🌐', title: 'Digital Marketing' },
            { icon: '🏦', title: 'Banking & Finance' },
            { icon: '🖥️', title: 'Software Developer' },
            { icon: '📋', title: 'HR Manager' },
            { icon: '✈️', title: 'Tourism & Hospitality' },
        ]}
        // iframeLink="https://stobay.ai/rathnam_university/arts/?type=widget"
        ChatLink="https://stobay.ai/rathnam_university/arts/?type=chatbox"
    />
);

export default ArtsScience;
