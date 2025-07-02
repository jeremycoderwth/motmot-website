import React from 'react'
import { useState, useEffect } from 'react';
import profilePic from '../assets/myphoto.jpg'

const Hero = () => {
    const [typedText, setTypedText] = useState('');

    const fullText = "For My Beautiful Bubby";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
          if (index <= fullText.length) {
            setTypedText(fullText.slice(0, index));
            index++;
          } else {
            clearInterval(timer);
          }
        }, 100);
        return(() => clearInterval(timer));
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative px-4">
            <div className="text-center z-20">
                <div className="mb-8">
                    <div className="w-42 h-34 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-300 to-rose-300 p-1">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                            <img src={profilePic} alt="Bebu's photo" className='aspect-square object-cover rounded-full' />
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-light mb-4">
                    <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                        {typedText}
                    </span>
                    <span className="animate-pulse">|</span>
                </h1>

                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    Celebrating our beautiful journey together
                </p>

                <div className="flex justify-center space-x-2">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-pink-300 rounded-full animate-bounce"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero