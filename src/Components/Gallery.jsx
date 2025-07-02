import React from 'react'
import firstMotmot from '../assets/1st-motmot.jpg'
import secondMotmot from '../assets/2nd-motmot.jpg'
import thirdMotmot from '../assets/3rd-motmot.jpg'
import fourthMotmot from '../assets/4th-motmot.jpg'
import fifthMotmot from '../assets/5th-motmot.jpg'
import sixthMotmot from '../assets/6th-motmot.jpg'
import seventhMotmot from '../assets/7th-motmot.jpg'
import eigthMotmot from '../assets/8th-motmot.jpg'
import ninthMotmot from '../assets/9th-motmot.jpg'
import tenthMotmot from '../assets/10th-motmot.jpg'
import recentPhoto from '../assets/recent-photo.jpg'


const Gallery = () => {
    // const [showGallery, setShowGallery] = useState(false); for future use

    const photos = [
        { id: 1, caption: "Our first date as an official", category: "First Date", pictureUrl: firstMotmot }, //september
        { id: 2, caption: "Yabu so good", category: "Foodies", pictureUrl: secondMotmot }, //october
        { id: 3, caption: "Carnation", category: "Appreciation", pictureUrl: thirdMotmot }, //november
        { id: 4, caption: "All i want for christmas is you", category: "First Christmas", pictureUrl: fourthMotmot }, //december
        { id: 5, caption: "Our home", category: "Dates", pictureUrl: fifthMotmot }, //jan
        { id: 6, caption: "Half half hooray!", category: "Milestone", pictureUrl: sixthMotmot }, //february
        { id: 7, caption: "Very cutesy, very pretty, very my baby", category: "Bonding", pictureUrl: seventhMotmot}, //march
        { id: 8, caption: "Happy together", category: "Memories", pictureUrl: eigthMotmot }, //april
        { id: 9, caption: "Sige ang dila pwede bang pakiss naman?", category: "Bonding", pictureUrl: ninthMotmot }, //may
        { id: 10, caption: "You + Me = Us", category: "Togetherness", pictureUrl: tenthMotmot }, //june
        { id: 11, caption: "Close to 1", category: "Memories", pictureUrl: recentPhoto } //july
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
                    <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                        Our Beautiful Moments
                    </span>
                </h2>
                <p className="text-center text-gray-600 mb-12">Every picture tells our story</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <div key={photo.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="aspect-square bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center">
                                    {
                                        <img src={photo.pictureUrl} alt="motmot" className='aspect-square object-cover' />
                                    }
                                </div>
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <p className="text-white text-sm font-medium">{photo.caption}</p>
                                    <p className="text-white/80 text-xs">{photo.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery