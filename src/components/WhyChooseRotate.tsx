import React, { useEffect, useState } from 'react';
import { Music, Zap, Star, Users, Award, Globe } from 'lucide-react';

interface WhyChooseRotateProps {
  setCurrentPage: (page: string) => void;
}

const WhyChooseRotate: React.FC<WhyChooseRotateProps> = ({ setCurrentPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Music,
      title: 'Musical Innovation',
      description: 'Fearlessly pushing the boundaries of electronic music production, fueled by cutting-edge technology and an unyielding creative vision.'
    },
    {
      icon: Zap,
      title: 'Creative Energy',
      description: 'Unleashing raw, untamed creative energy to forge groundbreaking artistic expressions that electrify and resonate globally.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'An unwavering commitment to delivering unparalleled quality in every single project, from the spark of concept to the flawless final production.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Forging powerful bridges between visionary artists, brilliant technologists, and audacious thinkers to co-create something truly extraordinary.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Consistently earning widespread acclaim for our innovative approaches to music production and dynamic artistic collaboration.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Effortlessly connecting with diverse audiences worldwide through the universal, pulsating language of music and art.'
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-32 pb-32">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">WHY CHOOSE</span>
            <span className="text-red-500 ml-4">ROTATE</span>
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At RT8, we masterfully blend audacious creative vision with groundbreaking tech innovation to empower artists, labels, and businesses with an all-encompassing arsenal for success—from seamless administrative and expert management support to bespoke digital tools. Our driving force? A passionate mission to revolutionize industries and uplift communities worldwide.
          </p>
        </div>

        {/* Labels Infrastructure Text */}
        <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            These brands are on ROTATE:
          </h2>
        </div>

        {/* 3D Rotating Carousel with Reduced Height */}
        {/* 3D Rotating Carousel with Reduced Height */}
<div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="carousel-container relative w-full max-w-3xl mx-auto mb-12" style={{ perspective: '1200px', height: '350px' }}>
    <div className="image-container absolute w-full h-full" style={{ 
      transformStyle: 'preserve-3d', 
      animation: 'rotate 20s infinite linear'
    }}>
      {/* Image 1 */}
      <img 
        src="https://lh3.googleusercontent.com/C33LKW6KroJHVsZ7HK4r5g0w_zC46hPyFqZSNjiZcKEv5AwtSjvevKblk6bULAh0zbBnvRFzd7oPxS1dlQ=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(0deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="Sound We Found"
      />
      {/* Image 2 */}
      <img 
        src="https://lh3.googleusercontent.com/Lr4kwuVfBE9TR1u7nuOTpQxFH2isZvd_-9ZRoPkuxYSRTdH7MGlH9qH7h4EbhsIs7dBGKht0WFGd8oaTOA=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(27.69deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="Aurorafields"
      />
      {/* Image 3 */}
      <img 
        src="https://lh3.googleusercontent.com/mZ5dzkN4DMAl7EzMZkpsh4mNtPJt2WOeAMy8_qSyo_blPlB_3jXrlDzI4_wwvoCV2f_Bbvlf-T0usV1ftQ=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(55.38deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="brainfreez"
      />
      {/* Image 4 */}
      <img 
        src="https://lh3.googleusercontent.com/vvOEacD4zVg38TLfyUPco3366qZ-su51n_qeSNrzcGWR3wQmempQ0jPU0RSYOFo30kf3ivRaiKqmJiGpyA=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(83.07deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="round9"
      />
      {/* Image 5 */}
      <img 
        src="https://lh3.googleusercontent.com/B0Pu7sVfZ4IgpQaaDg0kW2Hb8VnrzO_yFP3ueTSK0mpGiafkPHBKGhptBlVkZFsV_CuDDg6dhtd821c_zw=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(110.76deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="lunatunes"
      />
      {/* Image 6 */}
      <img 
        src="https://lh3.googleusercontent.com/9_BsaqR9XoF0t8nfXQ4RpdvjBt2Djo3q7rZUAU-lB82MUSjwJoZHcYBYYxutMAKefapF8ivhzEgVoLYgmQ=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(138.45deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="niyah fiyah"
      />
      {/* Image 7 */}
      <img 
        src="https://lh3.googleusercontent.com/jShwO7ahNi_6cQDF9uowMTUtYWu12qciCY27RLD36Klxtj2viSX3vZjgUriy1HT7d85LpoZZN8_KYZ9gew=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(166.14deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="drum and debauchery"
      />
      {/* Image 8 */}
      <img 
        src="https://lh3.googleusercontent.com/Nj1NV_fWy9DCYyv9p3lK7oBm12qdfW4cUzyxgmG6x2gd2G9vMdQtBXqmRPcj1BLFDBd0w-yNGGBMUyJIEg=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(193.83deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="5select"
      />
      {/* Image 9 */}
      <img 
        src="https://lh3.googleusercontent.com/UXtc9gdr80-9lIqXm0VZ90--6Q23QvMhBIl6C3oK4zUGWvpxbIrkl1vZ9RPd914IBM_nzBiU9y82wvSAgQ=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(221.52deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="sonicbass"
      />
      {/* Image 10 */}
      <img 
        src="https://lh3.googleusercontent.com/5K-qStJ_WhQxUFOOhs0eT6vBUlurdfgoJifPwyH330DBf78nhhXMCdoyK_dsIrEOMonRsl6A5yG3YN321A=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(249.21deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="Taijitu"
      />
      {/* Image 11 */}
      <img 
        src="https://lh3.googleusercontent.com/cH05ryJusZme61y6iZPt1sTGqd6hfw40nTFJsPdtY1jaHWgnFX2pMN9U_sN9ENRCd5Hj-HpNvbkJ8DHZMA=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(276.9deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="bundoodoof"
      />
      {/* Image 12 */}
      <img 
        src="https://lh3.googleusercontent.com/eLaVo1OaCfrvteZl5BTlyNsjcGk5gnzpcf9I5ZOcWUU_XjtSA1GtTQJ9GewVqHqVF5slz5LgdSqWfVPVOg=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(304.59deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="night moon"
      />
      {/* Image 13 */}
      <img 
        src="https://lh3.googleusercontent.com/VM9swFwNcL2fWy_3xpfUKhLQg2klUpz509oifNDdQCnMCVeTWdXlE9gX-T8YE5o8Idk_OCwlWA4yNzEIFg=s265-w265-h265 " 
        className="carousel-image absolute w-40 h-40 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" 
        style={{ 
          transform: 'rotateY(332.28deg) translateZ(350px) translate(-50%, -50%)',
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="benaam"
      />
    </div>
  </div>
</div>

        {/* Testimonials Section */}
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-h-96 overflow-y-auto p-4 bg-black/20 backdrop-blur-md rounded-lg border border-red-500/20 mb-16">
            <h2 className="text-red-500 text-2xl font-bold text-center mb-6">
              Here is what people say about Rotate
            </h2>

            {/* First Review */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-lg p-4 mb-4">
              <a 
                className="inline-flex items-center bg-black/60 text-green-400 font-bold px-3 py-2 rounded-lg mb-3 hover:bg-black/80 transition-colors duration-300" 
                href="https://www.labelradar.com/artists/Freddyavila/profile"
              >
                <img 
                  className="w-10 h-10 rounded-full mr-3 object-cover" 
                  src="https://d3tmwgb5526rcg.cloudfront.net/pictures/11855f52-8d42-4b2a-8747-2d5a87ff9a8d.jpeg" 
                  alt="OWASSA avatar" 
                />
                <span className="font-bold mr-1">OWASSA</span>
                <span className="text-gray-400">(/Freddyavila)</span>
              </a>
              <p className="text-white mb-2">
                Always great communication and great staffing.
              </p>
              <small className="text-gray-400">- LABEL RADAR</small>
            </div>

            {/* Second Review */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-lg p-4 mb-4">
              <a 
                className="inline-flex items-center bg-black/60 text-green-400 font-bold px-3 py-2 rounded-lg mb-3 hover:bg-black/80 transition-colors duration-300" 
                href="https://www.labelradar.com/artists/FrequencyPhantom/profile"
              >
                <img 
                  className="w-10 h-10 rounded-full mr-3 object-cover" 
                  src="https://d3tmwgb5526rcg.cloudfront.net/pictures/952b0abc-7743-4150-971e-05413a3ff88a.jpg" 
                  alt="FrequencyPhantom avatar" 
                />
                <span className="font-bold mr-1">FrequencyPhantom</span>
                <span className="text-gray-400">(/FrequencyPhantom)</span>
              </a>
              <p className="text-white mb-2">
                Currently in talks with them about signing 3 of my tracks. Very friendly and professional team—I've only talked to a few so far, but they've been great!
              </p>
              <small className="text-gray-400">- LABEL RADAR</small>
            </div>

            {/* Third Review */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-lg p-4 mb-4">
              <a 
                className="inline-flex items-center bg-black/60 text-green-400 font-bold px-3 py-2 rounded-lg mb-3 hover:bg-black/80 transition-colors duration-300" 
                href="https://www.google.com/maps/contrib/102679598114378926661/reviews?hl=en-GB" 
              >
                <img 
                  className="w-10 h-10 rounded-full mr-3 object-cover" 
                  src="https://lh3.googleusercontent.com/a-/ALV-UjUaxf6Oo17PHwnSiv9K4jAapAhLewWsGyOLBhVv8_4q3UTxRf4=s36-c-rp-mo-ba3-br100" 
                  alt="Khalil Singh avatar" 
                />
                <span className="font-bold">Khalil Singh</span>
              </a>
              <p className="text-white mb-2">
                As an artist, the support and effort made by the staff is exceptional! Will definitely be working with them more in the future!
              </p>
              <small className="text-gray-400">- GOOGLE REVIEWS</small>
            </div>

            {/* Fourth Review */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-lg p-4 mb-4">
              <a 
                className="inline-flex items-center bg-black/60 text-green-400 font-bold px-3 py-2 rounded-lg mb-3 hover:bg-black/80 transition-colors duration-300" 
                href="https://www.labelradar.com/artists/HZEID/profile"
              >
                <img 
                  className="w-10 h-10 rounded-full mr-3 object-cover" 
                  src="https://d3tmwgb5526rcg.cloudfront.net/pictures/ab3378a8-0e47-45fe-b8f8-c9906c0501d6.JPG" 
                  alt="Halim avatar" 
                />
                <span className="font-bold mr-1">Halim</span>
                <span className="text-gray-400">(/HZEID)</span>
              </a>
              <p className="text-white mb-2">
                I usually get offers from labels that include some hidden fees and payments, but from the first messages, they were clear about that - even without asking. Everything went smoothly with a great sense of professionalism and respect. Thank you! ❤️
              </p>
              <small className="text-gray-400">- LABEL RADAR</small>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center text-white mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`bg-black/40 backdrop-blur-md border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-red-500/5 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to be part of something extraordinary? Connect with us and discover how we can 
            collaborate to create the next chapter in the evolution of art and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = 'https://music.rt8.co.za/'}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
            >
              EXPLORE OUR MUSIC
            </button>
            <button 
              onClick={() => setCurrentPage('demo-submissions')}
              className="border-2 border-white hover:border-red-500 text-white hover:text-red-500 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              SUBMIT YOUR DEMO
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
        
        .carousel-image:hover {
          box-shadow: 0 0 20px rgba(239, 68, 68, 0.5);
        }
      `}</style>
    </section>
  );
};

export default WhyChooseRotate;
