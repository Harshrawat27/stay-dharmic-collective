
import React, { useEffect } from 'react';
import { Heart, Lightbulb, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const Mission = () => {
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
    <section id="mission" className="relative py-24 bg-dharmic-50/50">
      <div className="absolute inset-0 bg-dharmic-pattern opacity-10 z-0"></div>
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-dharmic-100 text-dharmic-800 rounded-full mb-4 reveal-animation">
            Our Purpose
          </span>
          <h2 className="section-title reveal-animation" style={{ transitionDelay: '0.2s' }}>
            Our Mission & Vision
          </h2>
          <p className="section-subtitle reveal-animation" style={{ transitionDelay: '0.3s' }}>
            The Stay Dharmic Trust is dedicated to upholding and advancing the principles of Dharma in the modern world through education, community service, and cultural preservation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Mission */}
          <div className={cn(
            "glass-card p-8 text-center transition-all duration-500 reveal-animation",
            "hover:bg-white/90 hover:shadow-lg"
          )} style={{ transitionDelay: '0.4s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dharmic-100 text-dharmic-700 mb-6">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Mission Statement</h3>
            <p className="text-dharmic-700/80">
              Uphold the principles of Dharma, promoting righteousness, duty, and ethical living in contemporary society through mindful practices and education.
            </p>
          </div>

          {/* Vision */}
          <div className={cn(
            "glass-card p-8 text-center transition-all duration-500 reveal-animation",
            "hover:bg-white/90 hover:shadow-lg"
          )} style={{ transitionDelay: '0.5s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dharmic-100 text-dharmic-700 mb-6">
              <Lightbulb className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-dharmic-700/80">
              A world where Dharmic principles guide individual and collective actions, leading to a more harmonious, compassionate, and sustainable global community.
            </p>
          </div>

          {/* Core Values */}
          <div className={cn(
            "glass-card p-8 text-center transition-all duration-500 reveal-animation",
            "hover:bg-white/90 hover:shadow-lg"
          )} style={{ transitionDelay: '0.6s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dharmic-100 text-dharmic-700 mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
            <p className="text-dharmic-700/80">
              We combine ancient wisdom with modern applications, making Dharmic principles accessible and relevant for people from all walks of life and backgrounds.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center reveal-animation" style={{ transitionDelay: '0.7s' }}>
          <blockquote className="max-w-3xl mx-auto italic text-lg font-serif text-dharmic-700">
            "Dharma is that which upholds, supports, or maintains the regulatory order of the universe."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Mission;
