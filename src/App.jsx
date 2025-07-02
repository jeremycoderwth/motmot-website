import React from 'react'
import { Heart, Calendar, Camera, MessageCircle, Star, MapPin, Music } from 'lucide-react'
import LoveSection from './Components/LoveSection.jsx'
import Hero from './Components/Hero.jsx'
import MemoryLane from './Components/MemoryLane.jsx'
import Gallery from './Components/Gallery.jsx'
import LoveLetter from './Components/LoveLetter.jsx'
import Footer from './Components/Footer.jsx'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50'>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: '4s'
            }}
          >
            <Heart className="w-3 h-3 text-pink-200 fill-pink-200" />
          </div>
        ))}
      </div>
      <Hero />
      <LoveSection />
      <MemoryLane />
      <Gallery />
      <LoveLetter />
      <Footer />  
    </div>
  )
}

export default App