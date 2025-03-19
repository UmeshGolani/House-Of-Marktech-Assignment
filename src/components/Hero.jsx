// components/Hero.js
import React, { useRef, useEffect } from "react";

const Hero = () => {
  // Create a reference to the video element
  const videoRef = useRef(null);

  // Handle video playback after component mounts
  useEffect(() => {
    if (videoRef.current) {
      // Attempt to play the video and handle any errors
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
        // If autoplay fails, we at least have the poster as fallback
      });
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background video with fallback image */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="object-cover w-full h-full"
          muted
          loop
          playsInline
          poster="/images/hero-fallback.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          {/* Add WebM format for better browser compatibility */}
          <source src="/videos/hero-background.webm" type="video/webm" />
          {/* Fallback image will be shown if video doesn't load */}
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
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
