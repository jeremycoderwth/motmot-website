import React from 'react'
import { useState } from 'react';
import { Heart } from 'lucide-react'

const LoveSection = () => {
    const [flippedCards, setFlippedCards] = useState(new Set());
    const [revealedCards, setRevealedCards] = useState(new Set());

    const loveReasons = [
        { 
          icon: "💫", 
          frontText: "Click to reveal...", 
          backText: "You always makes me smile and you're my no.1 source of happiness",
          color: "from-pink-400 to-rose-400"
        },
        { 
          icon: "🌸", 
          frontText: "A beautiful secret...", 
          backText: "You're so beautiful, a scenery that I could stare for a whole day",
          color: "from-rose-400 to-pink-500"
        },
        { 
          icon: "💝", 
          frontText: "Something special...", 
          backText: "You inspire me daily and makes me want to be a better person",
          color: "from-pink-500 to-rose-500"
        },
        { 
          icon: "🌙", 
          frontText: "My heart says...", 
          backText: "You're the only I need and you have the half of it",
          color: "from-rose-300 to-pink-400"
        },
        { 
          icon: "✨", 
          frontText: "You should know...", 
          backText: "You believe in me when I don't believe in myself, you're very supportive",
          color: "from-pink-300 to-rose-300"
        },
        { 
          icon: "🦋", 
          frontText: "The truth is...", 
          backText: "I love you so much and in this life, I want to live it with you always",
          color: "from-rose-400 to-pink-400"
        }
    ];

    const handleCardClick = (index) => {
        setFlippedCards(prev => {
          const newSet = new Set(prev);
          if (newSet.has(index)) {
            newSet.delete(index);
          } else {
            newSet.add(index);
          }
          return newSet;
        });

        setTimeout(() => {
            setRevealedCards(prev => new Set(prev).add(index));
        }, 300);
    };

    return (
        <section className="py-20 px-4">
            <style jsx="true">
                {`
                    .perspective-1000 {
                        perspective: 1000px;
                    }
                    .transform-style-preserve-3d {
                        transform-style: preserve-3d;
                    }
                    .backface-hidden {
                        backface-visibility: hidden;
                    }
                    .rotate-y-180 {
                        transform: rotateY(180deg);
                    }
                `}
            </style>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
                    <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                        Reasons Why I Love You
                    </span>
                </h2>
                <p className="text-center text-gray-600 mb-12">Click each card to discover why you mean everything to me</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {loveReasons.map((reason, index) => (
                        <div
                            key={index}
                            className="group cursor-pointer perspective-1000"
                            onClick={() => handleCardClick(index)}
                            style={{ perspective: '1000px' }}
                        >
                            <div
                                className={`relative w-full h-48 transition-transform duration-700 transform-style-preserve-3d ${flippedCards.has(index) ? 'rotate-y-180' : ''
                                    }`}
                            >
                                {/* Front of Card */}
                                <div className="absolute inset-0 w-full h-full backface-hidden">
                                    <div className={`bg-gradient-to-br ${reason.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center justify-center text-white relative overflow-hidden`}>
                                        {/* Sparkle effect */}
                                        <div className="absolute inset-0">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60"
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        top: `${Math.random() * 100}%`,
                                                        animationDelay: `${i * 0.5}s`,
                                                        animationDuration: '2s'
                                                    }}
                                                />
                                            ))}
                                        </div>

                                        <div className="text-4xl mb-4 animate-bounce">{reason.icon}</div>
                                        <p className="text-center font-medium text-lg">{reason.frontText}</p>
                                        <div className="mt-4 flex space-x-1">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="w-2 h-2 bg-white/60 rounded-full animate-pulse"
                                                    style={{ animationDelay: `${i * 0.2}s` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Back of Card */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                                    <div className={`bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-gradient-to-r ${reason.color} h-full flex flex-col items-center justify-center relative overflow-hidden`}>
                                        {/* Heart particles effect */}
                                        {revealedCards.has(index) && (
                                            <div className="absolute inset-0">
                                                {[...Array(8)].map((_, i) => (
                                                    <Heart
                                                        key={i}
                                                        className="absolute w-3 h-3 text-pink-300 fill-pink-300 animate-ping"
                                                        style={{
                                                            left: `${Math.random() * 100}%`,
                                                            top: `${Math.random() * 100}%`,
                                                            animationDelay: `${i * 0.3}s`,
                                                            animationDuration: '1.5s'
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        )}

                                        <div className="text-3xl mb-4">{reason.icon}</div>
                                        <p className="text-gray-700 text-center leading-relaxed font-medium text-lg">
                                            {reason.backText}
                                        </p>

                                        {/* Click indicator */}
                                        <div className="mt-4 text-xs text-gray-400 opacity-60">
                                            Click again to flip back
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">
                        {revealedCards.size} of {loveReasons.length} reasons discovered 💕
                    </p>
                    <div className="flex justify-center space-x-2">
                        {loveReasons.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${revealedCards.has(index)
                                    ? 'bg-pink-400 scale-110'
                                    : 'bg-gray-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default LoveSection