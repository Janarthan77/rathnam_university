import React from 'react';
import CoursePage from '../../components/courses/CoursePage';

const BPharm = () => (
    <CoursePage
        icon="💊"
        name="B.Pharm"
        fullName="Bachelor of Pharmacy — 4-Year Professional Degree"
        gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        heroImage="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80&w=1600"
        duration="4 Years"
        seats="100 Seats"
        affiliation="Tamil Nadu Dr. M.G.R. Medical University"
        eligibility="10+2 PCB / PCM (Min. 50%)"
        about="The B.Pharm program trains students to become competent pharmacists equipped with a thorough understanding of drug science, patient care, and pharmaceutical technology. Our AICTE-approved program features modern pharmacology labs, hospital partnerships for practical training, and strong placement connections with leading pharma companies and hospitals."
        highlights={[
            'Approved by PCI & affiliated to TNDMGRMU',
            'Modern pharmaceutical chemistry & analysis labs',
            'Hospital pharmacy internship programs',
            'Industrial visits to top pharma companies',
            'Research projects & drug formulation practicals',
            'Career support for hospital, retail & industrial pharmacy',
        ]}
        programs={[
            { icon: '💊', name: 'B.Pharm (Regular)', desc: 'Full-time 4-year pharmacy degree program', duration: '4 Years' },
            { icon: '🧪', name: 'Pharmaceutics', desc: 'Drug formulation, delivery & manufacturing', duration: 'Specialization' },
            { icon: '🔬', name: 'Pharmacology', desc: 'Drug action, toxicology & clinical studies', duration: 'Specialization' },
            { icon: '🧬', name: 'Pharmaceutical Chemistry', desc: 'Drug design, synthesis & analysis', duration: 'Specialization' },
            { icon: '🌿', name: 'Pharmacognosy', desc: 'Herbal drugs & natural products', duration: 'Specialization' },
        ]}
        careerPaths={[
            { icon: '🏥', title: 'Hospital Pharmacist' },
            { icon: '🏪', title: 'Retail Pharmacist' },
            { icon: '🏭', title: 'Pharma Industry' },
            { icon: '🔬', title: 'Drug Research' },
            { icon: '📋', title: 'Clinical Research Associate' },
            { icon: '🌿', title: 'Herbal Product Development' },
            { icon: '🎓', title: 'M.Pharm / PhD' },
            { icon: '💉', title: 'Medical Representative' },
            { icon: '🔒', title: 'Drug Regulatory Affairs' },
            { icon: '✈️', title: 'Pharma Export & Import' },
        ]}
        // iframeLink="https://stobay.ai/rathnam_university/pharmacy/?type=widget"
        ChatLink="https://stobay.ai/rathnam_university/pharmacy/?type=chatbox"
    />
);

export default BPharm;
