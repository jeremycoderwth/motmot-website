import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
          <span className="text-gray-600">Made with love for you</span>
          <Heart className="w-5 h-5 text-pink-400 fill-pink-400" />
        </div>
        <p className="text-sm text-gray-500">Happy Monthsary, my loveeee! 🌸</p>
    </footer>
  )
}

export default Footer