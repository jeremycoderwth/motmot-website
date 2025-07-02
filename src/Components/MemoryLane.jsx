import React from 'react'
import { Heart, UsersRound, Camera, TreePine, Star, MapPin, Music, CalendarPlus, MessageCircleHeart, Clover, BicepsFlexed, HandHeart  } from 'lucide-react'

const MemoryLane = () => {
    const memories = [
        {
          date: "First Official Date", //august
          title: "Coffee & Conversations",
          description: "When time stopped and 3 hours felt like 3 minutes",
          icon: <Heart className="w-4 h-4" />
        },
        {
          date: "1st Month", // september
          title: "1 Month Old",
          description: "Under the starry sky, everything felt perfect, unexpected, and memorable",
          icon: <Star className="w-4 h-4" />
        },
        {
          date: "2nd Month", //october
          title: "Our Adventure",
          description: "Getting lost but finding each other",
          icon: <MapPin className="w-4 h-4" />
        },
        {
          date: "3rd Month", //november
          title: "Still Falling",
          description: "Every day I discover new reasons to love you",
          icon: <Music className="w-4 h-4" />
        },
        {
          date: "4th Month", //december
          title: "First Christmas",
          description: "The most wonderful time of the year even I could imagine our first Christmas together in the future",
          icon: <TreePine className="w-4 h-4" />
        },
        {
          date: "5th Month", //january
          title: "New Year, Still You",
          description: "We've been together since 2024 and we're still here at 2025 stronger and happier",
          icon: <CalendarPlus className="w-4 h-4" />
        },
        {
          date: "6th Month", //february
          title: "Our Valentine's Day",
          description: "It's so nice to have you as my Valentine but it's so lovely that you're still mine",
          icon: <MessageCircleHeart className="w-4 h-4" />
        },
        {
          date: "7th Month", //march
          title: "Lucky 7 but I am Blessed to have You",
          description: "You proved that you always beside me and I am here to support you",
          icon: <Clover className="w-4 h-4" />
        },
        {
          date: "8th Month", //april
          title: "Even More Stronger",
          description: "We fight but we fix, and then we stay",
          icon: <BicepsFlexed className="w-4 h-4" />
        },
        {
          date: "9th Month", //may
          title: "Million Reasons to Stay",
          description: "Sometimes we get tired but most importantly, we still find reasons to stay for us",
          icon: <UsersRound className="w-4 h-4" />
        },
        {
          date: "10th Month", //june
          title: "My Love will Always Follow You",
          description: "Wherever you are, my love, I will be right there beside you no matter what",
          icon: <HandHeart className="w-4 h-4" />
        },
        {
          date: "Today (11th Month)", //july
          title: "Getting Closer",
          description: "We're getting closer to what we talked about at first. Full of love and happiness together!",
          icon: <Camera className="w-4 h-4" />
        }
    ];

    return (
        <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
                    <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                        Our Love Story
                    </span>
                </h2>
                <p className="text-center text-gray-600 mb-12">Every moment with you is a treasure</p>

                <div className="space-y-8">
                    {memories.map((memory, index) => (
                        <div key={index} className="flex items-start space-x-6 group">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white shadow-lg">
                                    {memory.icon}
                                </div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-xl font-medium text-gray-800">{memory.title}</h3>
                                    <span className="text-sm text-pink-500 font-medium">{memory.date}</span>
                                </div>
                                <p className="text-gray-600">{memory.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MemoryLane