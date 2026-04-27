import React from 'react';
import CoursePage from '../../components/courses/CoursePage';

const Architecture = () => (
    <CoursePage
        icon="🏛️"
        name="Architecture"
        fullName="Bachelor of Architecture (B.Arch) — 5-Year Professional Degree"
        gradient="linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
        heroImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1600"
        duration="5 Years"
        seats="40 Seats"
        affiliation="Council of Architecture (COA) Approved"
        eligibility="10+2 PCM / PCB (Min. 50%) + NATA Score"
        about="The B.Arch program is a rigorous, COA-approved 5-year professional degree that develops creative architects with strong technical foundations. Our design studios, model-making workshops, computer-aided design labs, and industry internships create well-rounded professionals ready to shape the built environment."
        highlights={[
            'Council of Architecture (COA) approved program',
            'State-of-the-art design studios & workshops',
            'AutoCAD, Revit, SketchUp & BIM software labs',
            'Study tours to architectural landmarks',
            'Internship with leading architecture firms',
            'NATA coaching & entrance preparation support',
        ]}
        programs={[
            { icon: '🏛️', name: 'B.Arch (Architecture Design)', desc: 'Comprehensive 5-year professional architecture degree', duration: '5 Years' },
            { icon: '🏙️', name: 'Urban & Town Planning', desc: 'City design, zoning & land use planning', duration: 'Elective' },
            { icon: '🌿', name: 'Sustainable Architecture', desc: 'Green building, LEED & eco-design', duration: 'Elective' },
            { icon: '💻', name: 'Digital Architecture & BIM', desc: 'Parametric design, BIM & computational tools', duration: 'Elective' },
            { icon: '🏠', name: 'Interior Architecture & Design', desc: 'Space planning & interior detailing', duration: 'Elective' },
            { icon: '🏗️', name: 'Structural Design & Construction', desc: 'Building technology & project management', duration: 'Elective' },
        ]}
        careerPaths={[
            { icon: '🏛️', title: 'Licensed Architect' },
            { icon: '🏙️', title: 'Urban Planner' },
            { icon: '🌿', title: 'Sustainable Designer' },
            { icon: '🎨', title: 'Interior Architect' },
            { icon: '💻', title: 'BIM Specialist' },
            { icon: '🏗️', title: 'Construction Manager' },
            { icon: '🚀', title: 'Architecture Entrepreneur' },
            { icon: '🎓', title: 'M.Arch / Research' },
            { icon: '✈️', title: 'International Firms' },
            { icon: '📐', title: 'Landscape Architect' },
        ]}
        // iframeLink="https://stobay.ai/rathnam_university/architecture/?type=widget"
        ChatLink="https://stobay.ai/rathnam_university/architecture/?type=chatbox"
    />
);

export default Architecture;
