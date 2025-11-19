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
    <section className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-red/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            <span className="text-white">WHY CHOOSE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-red ml-4 glow-text-pink">ROTATE</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            At RT8, we masterfully blend audacious creative vision with groundbreaking tech innovation to empower artists, labels, and businesses with an all-encompassing arsenal for success.
          </p>
        </div>

        {/* Labels Carousel Section */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-2xl font-display font-bold text-white text-center mb-12">
            These brands are on <span className="text-neon-cyan">ROTATE</span>
          </h2>

          <div className="carousel-container relative w-full max-w-2xl mx-auto h-[300px]" style={{ perspective: '1200px' }}>
            <div className="image-container absolute w-full h-full" style={{
              transformStyle: 'preserve-3d',
              animation: 'rotate 25s infinite linear'
            }}>
              {[
                { src: "https://lh3.googleusercontent.com/Lr4kwuVfBE9TR1u7nuOTpQxFH2isZvd_-9ZRoPkuxYSRTdH7MGlH9qH7h4EbhsIs7dBGKht0WFGd8oaTOA=s265-w265-h265", alt: "Aurorafields", deg: 27.69 },
                { src: "https://lh3.googleusercontent.com/mZ5dzkN4DMAl7EzMZkpsh4mNtPJt2WOeAMy8_qSyo_blPlB_3jXrlDzI4_wwvoCV2f_Bbvlf-T0usV1ftQ=s265-w265-h265", alt: "brainfreez", deg: 55.38 },
                { src: "https://lh3.googleusercontent.com/vvOEacD4zVg38TLfyUPco3366qZ-su51n_qeSNrzcGWR3wQmempQ0jPU0RSYOFo30kf3ivRaiKqmJiGpyA=s265-w265-h265", alt: "round9", deg: 83.07 },
                { src: "https://lh3.googleusercontent.com/B0Pu7sVfZ4IgpQaaDg0kW2Hb8VnrzO_yFP3ueTSK0mpGiafkPHBKGhptBlVkZFsV_CuDDg6dhtd821c_zw=s265-w265-h265", alt: "lunatunes", deg: 110.76 },
                { src: "https://lh3.googleusercontent.com/9_BsaqR9XoF0t8nfXQ4RpdvjBt2Djo3q7rZUAU-lB82MUSjwJoZHcYBYYxutMAKefapF8ivhzEgVoLYgmQ=s265-w265-h265", alt: "niyah fiyah", deg: 138.45 },
                { src: "https://lh3.googleusercontent.com/jShwO7ahNi_6cQDF9uowMTUtYWu12qciCY27RLD36Klxtj2viSX3vZjgUriy1HT7d85LpoZZN8_KYZ9gew=s265-w265-h265", alt: "drum and debauchery", deg: 166.14 },
                { src: "https://lh3.googleusercontent.com/Nj1NV_fWy9DCYyv9p3lK7oBm12qdfW4cUzyxgmG6x2gd2G9vMdQtBXqmRPcj1BLFDBd0w-yNGGBMUyJIEg=s265-w265-h265", alt: "5select", deg: 193.83 },
                { src: "https://lh3.googleusercontent.com/UXtc9gdr80-9lIqXm0VZ90--6Q23QvMhBIl6C3oK4zUGWvpxbIrkl1vZ9RPd914IBM_nzBiU9y82wvSAgQ=s265-w265-h265", alt: "sonicbass", deg: 221.52 },
                { src: "https://lh3.googleusercontent.com/5K-qStJ_WhQxUFOOhs0eT6vBUlurdfgoJifPwyH330DBf78nhhXMCdoyK_dsIrEOMonRsl6A5yG3YN321A=s265-w265-h265", alt: "Taijitu", deg: 249.21 },
                { src: "https://lh3.googleusercontent.com/eLaVo1OaCfrvteZl5BTlyNsjcGk5gnzpcf9I5ZOcWUU_XjtSA1GtTQJ9GewVqHqVF5slz5LgdSqWfVPVOg=s265-w265-h265", alt: "night moon", deg: 304.59 },
                { src: "https://lh3.googleusercontent.com/VM9swFwNcL2fWy_3xpfUKhLQg2klUpz509oifNDdQCnMCVeTWdXlE9gX-T8YE5o8Idk_OCwlWA4yNzEIFg=s265-w265-h265", alt: "benaam", deg: 332.28 },
              ].map((item, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-32 h-32 -ml-16 -mt-16"
                  style={{
                    transform: `rotateY(${item.deg}deg) translateZ(350px)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="w-full h-full rounded-xl overflow-hidden border border-glass-border bg-black/50 backdrop-blur-sm hover:border-neon-pink/50 transition-all duration-300 group shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(244,63,94,0.4)]">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className={`mb-20 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-panel p-8 rounded-3xl border border-glass-border">
            <h2 className="text-neon-pink text-2xl font-display font-bold text-center mb-8 glow-text-pink">
              What people say about Rotate
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Reviews */}
              {[
                {
                  name: "OWASSA",
                  handle: "/Freddyavila",
                  avatar: "https://d3tmwgb5526rcg.cloudfront.net/pictures/11855f52-8d42-4b2a-8747-2d5a87ff9a8d.jpeg",
                  text: "Always great communication and great staffing.",
                  source: "LABEL RADAR",
                  link: "https://www.labelradar.com/artists/Freddyavila/profile"
                },
                {
                  name: "FrequencyPhantom",
                  handle: "/FrequencyPhantom",
                  avatar: "https://d3tmwgb5526rcg.cloudfront.net/pictures/952b0abc-7743-4150-971e-05413a3ff88a.jpg",
                  text: "Currently in talks with them about signing 3 of my tracks. Very friendly and professional team—I've only talked to a few so far, but they've been great!",
                  source: "LABEL RADAR",
                  link: "https://www.labelradar.com/artists/FrequencyPhantom/profile"
                },
                {
                  name: "Khalil Singh",
                  handle: "",
                  avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUaxf6Oo17PHwnSiv9K4jAapAhLewWsGyOLBhVv8_4q3UTxRf4=s36-c-rp-mo-ba3-br100",
                  text: "As an artist, the support and effort made by the staff is exceptional! Will definitely be working with them more in the future!",
                  source: "GOOGLE REVIEWS",
                  link: "https://www.google.com/maps/contrib/102679598114378926661/reviews?hl=en-GB"
                },
                {
                  name: "Halim",
                  handle: "/HZEID",
                  avatar: "https://d3tmwgb5526rcg.cloudfront.net/pictures/ab3378a8-0e47-45fe-b8f8-c9906c0501d6.JPG",
                  text: "I usually get offers from labels that include some hidden fees and payments, but from the first messages, they were clear about that - even without asking. Everything went smoothly with a great sense of professionalism and respect. Thank you! ❤️",
                  source: "LABEL RADAR",
                  link: "https://www.labelradar.com/artists/HZEID/profile"
                }
              ].map((review, i) => (
                <a
                  key={i}
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3 border border-glass-border" />
                    <div>
                      <div className="font-bold text-white group-hover:text-neon-cyan transition-colors">{review.name}</div>
                      {review.handle && <div className="text-xs text-gray-400">{review.handle}</div>}
                    </div>
                    <div className="ml-auto text-xs font-bold text-gray-500 border border-gray-700 px-2 py-1 rounded">{review.source}</div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">"{review.text}"</p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-display font-bold text-center text-white mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card p-6 rounded-2xl hover:border-neon-red/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-neon-red/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-neon-red group-hover:text-neon-pink transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-panel p-10 rounded-3xl inline-block max-w-4xl w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-neon-red/10 to-neon-pink/10 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Join Our Journey
              </h2>
              <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                Ready to be part of something extraordinary? Connect with us and discover how we can
                collaborate to create the next chapter in the evolution of art and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = 'https://music.rt8.co.za/'}
                  className="btn-primary"
                >
                  EXPLORE OUR MUSIC
                </button>
                <button
                  onClick={() => setCurrentPage('demo-submissions')}
                  className="btn-glass"
                >
                  SUBMIT YOUR DEMO
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes rotate {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
        `
      }} />
    </section>
  );
};

export default WhyChooseRotate;
