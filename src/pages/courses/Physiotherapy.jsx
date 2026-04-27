import React from 'react';
import CoursePage from '../../components/courses/CoursePage';

const Physiotherapy = () => (
    <CoursePage
        icon="🏥"
        name="Physiotherapy"
        fullName="Bachelor of Physiotherapy (B.P.T) — 4.5 Year Professional Degree"
        gradient="linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
        heroImage="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1600"
        duration="4.5 Years + 6 Months Internship"
        seats="60 Seats"
        affiliation="Tamil Nadu Dr. M.G.R. Medical University"
        eligibility="10+2 PCB (Min. 50%)"
        about="The Bachelor of Physiotherapy (BPT) program is a professional healthcare degree that prepares students to become skilled physiotherapists. Our program includes extensive clinical exposure, hospital internships, and rigorous practical training in areas such as musculoskeletal, neurological, cardiopulmonary, and sports physiotherapy."
        highlights={[
            'Affiliated to TNDMGRMU, recognized by IAP',
            'Fully equipped physiotherapy & rehabilitation labs',
            '6-month compulsory hospital internship',
            'Clinical posting at tied-up multi-specialty hospitals',
            'Sports & pediatric physiotherapy training',
            'Strong career placement in hospitals & wellness centers',
        ]}
        programs={[
            { icon: '🦴', name: 'Orthopedic & Sports Physiotherapy', desc: 'Musculoskeletal rehabilitation & sports injury management', duration: 'Specialization' },
            { icon: '🧠', name: 'Neurological Physiotherapy', desc: 'Stroke, Parkinson\'s, and neuro rehab', duration: 'Specialization' },
            { icon: '❤️', name: 'Cardiopulmonary Physiotherapy', desc: 'Cardiac & respiratory rehabilitation', duration: 'Specialization' },
            { icon: '👶', name: 'Pediatric Physiotherapy', desc: 'Child developmental physiotherapy', duration: 'Specialization' },
            { icon: '🧘', name: 'Community & Geriatric Rehab', desc: 'Elderly care & community wellness', duration: 'Specialization' },
        ]}
        careerPaths={[
            { icon: '🏥', title: 'Hospital Physiotherapist' },
            { icon: '⚽', title: 'Sports Physiotherapist' },
            { icon: '🧠', title: 'Neuro Rehabilitation' },
            { icon: '🏠', title: 'Home Care Therapist' },
            { icon: '🏋️', title: 'Wellness & Fitness Clinics' },
            { icon: '👶', title: 'Pediatric Therapist' },
            { icon: '✈️', title: 'International Hospitals' },
            { icon: '🎓', title: 'MPT / PhD' },
            { icon: '🏪', title: 'Private Clinic Owner' },
            { icon: '🔬', title: 'Clinical Research' },
        ]}
        iframeLink="https://stobay.ai/rathnam_university/physiotherapy/?type=widget"
    />
);

export default Physiotherapy;
