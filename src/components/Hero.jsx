import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Abstract animated background reel
import heroVideo from '../assets/hero video/herovideo.mp4';
// Profile photo (save the uploaded image here)
// import profilePhoto from '../assets/hero video/profile photo.png';
import stackImage from '../assets/about/profile.jpg';

const Hero = () => {
  const audioRef = useRef(null);
  // true = greeting not playing (muted). Starts muted so the page loads quietly.
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Plays the male intro greeting once; tap again to stop.
  const toggleMute = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
      setIsMuted(false);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsMuted(true);
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Animated photo-frame styles (rotating gradient ring + glow + float) */}
      <style>{`
        @property --pf-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes pf-rotate { to { --pf-angle: 360deg; } }
        @keyframes pf-float {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-14px); }
        }

        .profile-frame {
          position: relative;
          border-radius: 2rem;
          animation: pf-float 6s ease-in-out infinite;
        }

        /* Sharp rotating gradient ring (only the border edge shows) */
        .profile-frame::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: inherit;
          padding: 4px;
          background: conic-gradient(from var(--pf-angle),
            #ef4444, #f97373, #ffffff, #ef4444, #b91c1c, #ef4444);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
                  mask-composite: exclude;
          animation: pf-rotate 4s linear infinite;
          z-index: 2;
        }

        /* Soft blurred glow behind the photo */
        .profile-frame::after {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: inherit;
          background: conic-gradient(from var(--pf-angle),
            #ef4444, #f97373, #ffffff, #ef4444, #b91c1c, #ef4444);
          filter: blur(24px);
          opacity: 0.5;
          z-index: 0;
          animation: pf-rotate 4s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .profile-frame,
          .profile-frame::before,
          .profile-frame::after { animation: none; }
        }
      `}</style>

      {/* Background Reel - silent, looping abstract animation */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Male intro greeting (plays on tap, once) */}
      {/* <audio ref={audioRef} src="/intro-greeting.mp3" preload="auto" onEnded={() => setIsMuted(true)} /> */}

      {/* Dark overlay factor for optimized readability without completely muddying up the red tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center text-left w-full h-full pt-28 md:pt-0">

        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">

          {/* Main Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight leading-[1.05]"
          >
            Hi, I’m <span className="whitespace-nowrap">Giricharan</span> <br />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              Backend Developer
            </span>
          </h1>

          {/* Subheading */}
          {/* <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-sm md:max-w-md leading-relaxed drop-shadow-sm"
          >
            Backend Developer at Bharat Clouds Pvt. Ltd., building scalable server-side applications and APIs with Node.js and MySQL.
          </p> */}

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-block text-center"
            >
              View My Work
            </a>

            {/* Secondary Button */}
            <a
              href="/GiriCharan Resume.pdf"
              download
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/10 border border-white text-white font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Profile Photo with animated highlighted border */}
        <div
          data-aos="zoom-in"
          data-aos-delay="500"
          className="mt-12 md:mt-0 w-full md:w-auto flex justify-center md:justify-end"
        >
          <div className="profile-frame w-56 h-72 sm:w-64 sm:h-80 lg:w-72 lg:h-[22rem]">
            <img
              src={stackImage}
              alt="Giricharan — Backend Developer"
              className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-white opacity-70"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
