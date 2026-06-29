import { BrowserRouter, Link, Route, Routes } from 'react-router'

import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NavBar from './components/NavBar.jsx'
import ServicePage from './pages/ServicePage.jsx'

import './App.css'
import FooterSection from './components/FooterSection.jsx'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicePage />} />
      </Routes>

      <FooterSection />
    </BrowserRouter>
  )
}

export default App
