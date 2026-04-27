import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import ChatWidget from './components/Layout/ChatWidget'

// Home page sections
import Hero from './components/Home/HeroGrid'
import CoursesSection from './components/Home/CoursesSection'
import QuickStats from './components/Home/QuickStats'
import Rankings from './components/Home/Rankings'
import ChancellorSection from './components/Home/ChancellorSection'
import NewsSection from './components/Home/NewsSection'
import AlumniSection from './components/Home/AlumniSection'

// Course Pages
import ArtsScience from './pages/courses/ArtsScience'
import Engineering from './pages/courses/Engineering'
import RSMART from './pages/courses/RSMART'
import MBAMCA from './pages/courses/MBAMCA'
import BPharm from './pages/courses/BPharm'
import Physiotherapy from './pages/courses/Physiotherapy'
import Architecture from './pages/courses/Architecture'

const HomePage = () => (
  <>
    <Hero />
    <CoursesSection />
    <QuickStats />
    <Rankings />
    {/* <ChancellorSection />
    <NewsSection /> */}
    <AlumniSection />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses/arts-science" element={<ArtsScience />} />
            <Route path="/courses/engineering" element={<Engineering />} />
            <Route path="/courses/rsmart" element={<RSMART />} />
            <Route path="/courses/mba-mca" element={<MBAMCA />} />
            <Route path="/courses/bpharm" element={<BPharm />} />
            <Route path="/courses/physiotherapy" element={<Physiotherapy />} />
            <Route path="/courses/architecture" element={<Architecture />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
