
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  useEffect(() => {
    // Reveal animation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    const revealElements = document.querySelectorAll('.reveal-animation');
    revealElements.forEach(el => observer.observe(el));
    
    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dharmic-pattern opacity-5 z-0"></div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-64 h-64 bg-orange-200 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-1/3 -translate-y-1/2 right-1/4 w-72 h-72 bg-orange-100 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-orange-300 rounded-full filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block reveal-animation" style={{ transitionDelay: '0.1s' }}>
            <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-orange-100 text-orange-800 rounded-full">
              Guiding Principles for a Meaningful Life
            </span>
          </div>
          
          <h1 className="reveal-animation text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight" style={{ transitionDelay: '0.3s' }}>
            Upholding the Path of <span className="text-orange-600">Righteousness</span> in Modern Times
          </h1>
          
          <p className="reveal-animation text-lg md:text-xl text-orange-700/80 mx-auto max-w-2xl mb-10" style={{ transitionDelay: '0.5s' }}>
            The Stay Dharmic Trust is dedicated to promoting ethical living, fostering education, 
            and preserving our cultural heritage while embracing the challenges of today's world.
          </p>
          
          <div className="reveal-animation flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '0.7s' }}>
            <a 
              href="#mission" 
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                "bg-orange-600 text-white hover:bg-orange-700",
                "shadow-sm hover:shadow-md hover:-translate-y-0.5"
              )}
            >
              Discover Our Mission
            </a>
            <a 
              href="#initiatives" 
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                "bg-white text-orange-800 hover:bg-orange-50",
                "border border-orange-200 hover:border-orange-300",
                "shadow-sm hover:shadow-md hover:-translate-y-0.5"
              )}
            >
              See Our Initiatives
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-orange-600 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-orange-400 rounded-full flex justify-center">
          <span className="block w-1 h-2 bg-orange-400 rounded-full mt-2 animate-bounce"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
