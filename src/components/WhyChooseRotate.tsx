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
    <section className="min-h-screen flex items-center justify-center relative pt-24 pb-24"> {/* Reduced padding */}
      <div className="max-w-5xl mx-auto px-4"> {/* Reduced max-width */}
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-3xl md:text-5xl font-bold mb-4"> {/* Reduced text sizes */}
            <span className="text-white">WHY CHOOSE</span>
            <span className="text-red-500 ml-3">ROTATE</span> {/* Reduced margin */}
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-6"></div> {/* Reduced width and margin */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"> {/* Reduced text size and max-width */}
            At RT8, we masterfully blend audacious creative vision with groundbreaking tech innovation to empower artists, labels, and businesses with an all-encompassing arsenal for success—from seamless administrative and expert management support to bespoke digital tools. Our driving force? A passionate mission to revolutionize industries and uplift communities worldwide.
          </p>
        </div>

        {/* Labels Infrastructure Text */}
        <div className={`text-center mb-6 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3"> {/* Reduced text sizes */}
            These brands are on ROTATE:
          </h2>
        </div>

        {/* 3D Rotating Carousel with Reduced Height */}
        {/* 3D Rotating Carousel with Reduced Height */}
<div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
  <div className="carousel-container relative w-full max-w-2xl mx-auto mb-10" style={{ perspective: '1200px', height: '300px' }}> {/* Reduced max-width and margin */}
    <div className="image-container absolute w-full h-full" style={{ 
      transformStyle: 'preserve-3d', 
      animation: 'rotate 20s infinite linear'
    }}>
     
      {/* Image 2 */}
      <img 
        src="https://lh3.googleusercontent.com/Lr4kwuVfBE9TR1u7nuOTpQxFH2isZvd_-9ZRoPkuxYSRTdH7MGlH9qH7h4EbhsIs7dBGKht0WFGd8oaTOA=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(27.69deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="Aurorafields"
      />
      {/* Image 3 */}
      <img 
        src="https://lh3.googleusercontent.com/mZ5dzkN4DMAl7EzMZkpsh4mNtPJt2WOeAMy8_qSyo_blPlB_3jXrlDzI4_wwvoCV2f_Bbvlf-T0usV1ftQ=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(55.38deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="brainfreez"
      />
      {/* Image 4 */}
      <img 
        src="https://lh3.googleusercontent.com/vvOEacD4zVg38TLfyUPco3366qZ-su51n_qeSNrzcGWR3wQmempQ0jPU0RSYOFo30kf3ivRaiKqmJiGpyA=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(83.07deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="round9"
      />
      {/* Image 5 */}
      <img 
        src="https://lh3.googleusercontent.com/B0Pu7sVfZ4IgpQaaDg0kW2Hb8VnrzO_yFP3ueTSK0mpGiafkPHBKGhptBlVkZFsV_CuDDg6dhtd821c_zw=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(110.76deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="lunatunes"
      />
      {/* Image 6 */}
      <img 
        src="https://lh3.googleusercontent.com/9_BsaqR9XoF0t8nfXQ4RpdvjBt2Djo3q7rZUAU-lB82MUSjwJoZHcYBYYxutMAKefapF8ivhzEgVoLYgmQ=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(138.45deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="niyah fiyah"
      />
      {/* Image 7 */}
      <img 
        src="https://lh3.googleusercontent.com/jShwO7ahNi_6cQDF9uowMTUtYWu12qciCY27RLD36Klxtj2viSX3vZjgUriy1HT7d85LpoZZN8_KYZ9gew=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(166.14deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="drum and debauchery"
      />
      {/* Image 8 */}
      <img 
        src="https://lh3.googleusercontent.com/Nj1NV_fWy9DCYyv9p3lK7oBm12qdfW4cUzyxgmG6x2gd2G9vMdQtBXqmRPcj1BLFDBd0w-yNGGBMUyJIEg=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(193.83deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="5select"
      />
      {/* Image 9 */}
      <img 
        src="https://lh3.googleusercontent.com/UXtc9gdr80-9lIqXm0VZ90--6Q23QvMhBIl6C3oK4zUGWvpxbIrkl1vZ9RPd914IBM_nzBiU9y82wvSAgQ=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(221.52deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="sonicbass"
      />
      {/* Image 10 */}
      <img 
        src="https://lh3.googleusercontent.com/5K-qStJ_WhQxUFOOhs0eT6vBUlurdfgoJifPwyH330DBf78nhhXMCdoyK_dsIrEOMonRsl6A5yG3YN321A=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(249.21deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="Taijitu"
      />
    
      {/* Image 12 */}
      <img 
        src="https://lh3.googleusercontent.com/eLaVo1OaCfrvteZl5BTlyNsjcGk5gnzpcf9I5ZOcWUU_XjtSA1GtTQJ9GewVqHqVF5slz5LgdSqWfVPVOg=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(304.59deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
          transformOrigin: 'center',
          backfaceVisibility: 'hidden'
        }}
        alt="night moon"
      />
      {/* Image 13 */}
      <img 
        src="https://lh3.googleusercontent.com/VM9swFwNcL2fWy_3xpfUKhLQg2klUpz509oifNDdQCnMCVeTWdXlE9gX-T8YE5o8Idk_OCwlWA4yNzEIFg=s265-w265-h265 " 
        className="carousel-image absolute w-32 h-32 top-1/2 left-1/2 cursor-pointer transition-all duration-300 hover:scale-110" /* Reduced size */
        style={{ 
          transform: 'rotateY(332.28deg) translateZ(300px) translate(-50%, -50%)', /* Reduced Z translation */
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
          <div className="max-h-80 overflow-y-auto p-3 bg-black/20 backdrop-blur-md rounded-lg border border-red-500/20 mb-12"> {/* Reduced max-height and padding */}
            <h2 className="text-red-500 text-xl font-bold text-center mb-4"> {/* Reduced text size and margin */}
              Here is what people say about Rotate
            </h2>

            {/* First Review */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-lg p-3 mb-3"> {/* Reduced padding and margin */}
              <a 
                className="inline-flex items-center bg-black/60 text-green-400 font-bold px-2.5 py-1.5 rounded-lg mb-2 hover:bg-black/80 transition-colors duration-300" /* Reduced padding */
                href="https://www.labelradar.com/artists/Freddyavila/profile"
              >
                <img 
                  className="w-8 h-8 rounded-full mr-2.5 object-cover" /* Reduced size and margin */
                  src="https://d3tmwgb5526rcg.cloudfront.net/pictures/11855f52-8d42-4b2a-8747-2d5a87ff9a8d.jpeg" 
                  alt="OWASSA avatar" 
                />
                <span className="font-bold mr-1 text-sm">OWASSA</span> {/* Reduced text size */}
                <span className="text-gray-400 text-xs">(/Freddyavila)</span> {/* Reduced text size */}
              </a>
              <p className="text-white mb-1.5 text-sm"> {/* Reduced text size and margin */}
                Always great communication and great staffing.
              </p>
              <small className="text-gray-400 text-xs">- LABEL RADAR</small> {/* Reduced text size */}
            </div>

            {/* Second Review */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-lg p-3 mb-3"> {/* Reduced padding and margin */}
              <a 
                className="inline-flex items-center bg-black/60 text-green-400 font-bold px-2.5 py-1.5 rounded-lg mb-2 hover:bg-black/80 transition-colors duration-300" /* Reduced padding */
                href="https://www.labelradar.com/artists/FrequencyPhantom/profile"
              >
                <img 
                  className="w-8 h-8 rounded-full mr-2.5 object-cover" /* Reduced size and margin */
                  src="https://d3tmwgb5526rcg.cloudfront.net/pictures/952b0abc-7743-4150-971e-05413a3ff88a.jpg" 
                  alt="FrequencyPhantom avatar" 
                />
                <span className="font-bold mr-1 text-sm">FrequencyPhantom</span> {/* Reduced text size */}
                <span className="text-gray-400 text-xs">(/FrequencyPhantom)</span> {/* Reduced text size */}
              </a>
              <p className="text-white mb-1.5 text-sm"> {/* Reduced text size and margin */}
                Currently in talks with them about signing 3 of my tracks. Very friendly and professional team—I've only talked to a few so far, but they've been great!
              </p>
              <small className="text-gray-400 text-xs">- LABEL RADAR</small> {/* Reduced text size */}
            </div>

            {/* Third Review */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-lg p-3 mb-3"> {/* Reduced padding and margin */}
              <a 
                className="inline-flex items-center bg-black/60 text-green-400 font-bold px-2.5 py-1.5 rounded-lg mb-2 hover:bg-black/80 transition-colors duration-300" /* Reduced padding */
                href="https://www.google.com/maps/contrib/102679598114378926661/reviews?hl=en-GB" 
              >
                <img 
                  className="w-8 h-8 rounded-full mr-2.5 object-cover" /* Reduced size and margin */
                  src="https://lh3.googleusercontent.com/a-/ALV-UjUaxf6Oo17PHwnSiv9K4jAapAhLewWsGyOLBhVv8_4q3UTxRf4=s36-c-rp-mo-ba3-br100" 
                  alt="Khalil Singh avatar" 
                />
                <span className="font-bold text-sm">Khalil Singh</span> {/* Reduced text size */}
              </a>
              <p className="text-white mb-1.5 text-sm"> {/* Reduced text size and margin */}
                As an artist, the support and effort made by the staff is exceptional! Will definitely be working with them more in the future!
              </p>
              <small className="text-gray-400 text-xs">- GOOGLE REVIEWS</small> {/* Reduced text size */}
            </div>

            {/* Fourth Review */}
            <div className="bg-black/40 backdrop-blur-md border border-red-500/10 rounded-lg p-3 mb-3"> {/* Reduced padding and margin */}
              <a 
                className="inline-flex items-center bg-black/60 text-green-400 font-bold px-2.5 py-1.5 rounded-lg mb-2 hover:bg-black/80 transition-colors duration-300" /* Reduced padding */
                href="https://www.labelradar.com/artists/HZEID/profile"
              >
                <img 
                  className="w-8 h-8 rounded-full mr-2.5 object-cover" /* Reduced size and margin */
                  src="https://d3tmwgb5526rcg.cloudfront.net/pictures/ab3378a8-0e47-45fe-b8f8-c9906c0501d6.JPG" 
                  alt="Halim avatar" 
                />
                <span className="font-bold mr-1 text-sm">Halim</span> {/* Reduced text size */}
                <span className="text-gray-400 text-xs">(/HZEID)</span> {/* Reduced text size */}
              </a>
              <p className="text-white mb-1.5 text-sm"> {/* Reduced text size and margin */}
                I usually get offers from labels that include some hidden fees and payments, but from the first messages, they were clear about that - even without asking. Everything went smoothly with a great sense of professionalism and respect. Thank you! ❤️
              </p>
              <small className="text-gray-400 text-xs">- LABEL RADAR</small> {/* Reduced text size */}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold text-center text-white mb-8"> {/* Reduced text size and margin */}
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Reduced gap */}
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`bg-black/40 backdrop-blur-md border border-red-500/20 rounded-lg p-4 hover:border-red-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-red-500/5 ${ // Reduced padding
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${700 + index * 80}ms` }} // Reduced delay
              >
                <div className="flex items-center mb-3"> {/* Reduced margin */}
                  <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center mr-3"> {/* Reduced size and margin */}
                    <feature.icon className="w-5 h-5 text-red-500" /> {/* Reduced icon size */}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{feature.title}</h3> {/* Reduced text size */}
                </div>
                <p className="text-gray-300 leading-relaxed text-sm"> {/* Reduced text size */}
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-bold text-white mb-4"> {/* Reduced text size and margin */}
            Join Our Journey
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm"> {/* Reduced text size, margin and max-width */}
            Ready to be part of something extraordinary? Connect with us and discover how we can 
            collaborate to create the next chapter in the evolution of art and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center"> {/* Reduced gap */}
            <button 
              onClick={() => window.location.href = 'https://music.rt8.co.za/'}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 text-sm" // Reduced padding and text size
            >
              EXPLORE OUR MUSIC
            </button>
            <button 
              onClick={() => setCurrentPage('demo-submissions')}
              className="border-2 border-white hover:border-red-500 text-white hover:text-red-500 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm" // Reduced padding and text size
            >
              SUBMIT YOUR DEMO
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
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
        `
      }} />
    </section>
  );
};

export default WhyChooseRotate;