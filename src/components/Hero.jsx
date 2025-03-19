import React, { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <video ref={videoRef} className="object-cover w-full h-full" autoPlay muted loop playsInline poster="/images/hero-fallback.jpg">
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
        </video>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Transform Your Digital Experience
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Innovative solutions for modern businesses
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
