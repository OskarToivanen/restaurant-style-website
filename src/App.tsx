import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/menu' element={<MenuPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
