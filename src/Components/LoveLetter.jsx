import React from 'react'
import {  MessageCircle } from 'lucide-react'

const LoveLetter = () => {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-pink-50 to-rose-50">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl">
                    <div className="flex items-center justify-center mb-8">
                        <MessageCircle className="w-8 h-8 text-pink-400 mr-3" />
                        <h2 className="text-2xl md:text-3xl font-light">
                            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                                A Letter From My Heart
                            </span>
                        </h2>
                    </div>

                    <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
                        <p className="mb-6">My Dearest Bubby,</p>

                        <p className="mb-6">
                            Helo again bebeee! HAPPY MONTHSARY, MY LOVE! Cheers to our 11th months of kulitan, awayan, tampuhan, at pagmamahalan palagi. Im so so happy kasi we're still here and still loving each other and syempre happy din kasi 1 month left before our very first anniversary. Nae-excite sobra aad in every moments na magkasama tayo even kahit saan pa basta tayo lang.
                        </p>

                        <p className="mb-6">
                            I am very grateful to have you always and I'm blessed na meron akong amazing woman, kind human, and caring na girlfriend in my whole life. Thank you so much bebe kasi lagi mo me hinihelp, nakikinig sa mga problems and ano nafe-feel ko, i love how much you're concerned palagi sa'kin. Thank you sa full support mo sa mga gusto ko na knowing para rin satin at sa future natin. I appreciate how much you card about me and syempre nafe-feel ko yung love mo lagi. 
                        </p>

                        <p className="mb-6">
                            I made this website only for you to remember how amazing you are, how you deserve something aesthetic and thoughtful kasi you are so pretty and you deserve everything. Every part of this reminds of you and syempre our moments together and a reminder na sa tagal na rin nating magkasama, nandito pa rin tayo para sa isa't-isa. I hope you feel my love through this and you can always go back here since it's on the internet.
                        </p>

                        <p className="mb-8">
                            Here's to many more months of adventures, quiet moments, silly laughs, and growing deeper in love together. Mahal na mahal kita, bubby, and I only want you in this life until forever.
                        </p>

                        <p className="text-right italic">
                            Forever yours,<br />
                            [Bebu] 💕
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoveLetter