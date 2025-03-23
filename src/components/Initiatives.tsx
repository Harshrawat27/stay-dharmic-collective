
import React, { useEffect } from 'react';
import { BookOpen, GraduationCap, Heart, Leaf, Palette } from 'lucide-react';
import { cn } from '@/lib/utils';

const initiatives = [
  {
    title: "Educational Programs",
    description: "Workshops, webinars, and courses on Dharmic principles, philosophy, and practices for all age groups.",
    icon: GraduationCap,
    delay: "0.2s",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Community Outreach",
    description: "Regular charitable activities supporting underprivileged communities while promoting Dharmic values of compassion and service.",
    icon: Heart,
    delay: "0.3s",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Cultural Preservation",
    description: "Programs dedicated to preserving and promoting traditional arts, literature, and practices rooted in Dharmic heritage.",
    icon: Palette,
    delay: "0.4s",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Environmental Projects",
    description: "Initiatives focused on sustainability, conservation, and promoting harmony with nature aligned with Dharmic values.",
    icon: Leaf,
    delay: "0.5s",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
  },
];

const Initiatives = () => {
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
    <section id="initiatives" className="py-24 bg-gradient-to-b from-white to-dharmic-50/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-sage-100 text-sage-800 rounded-full mb-4 reveal-animation">
            Making a Difference
          </span>
          <h2 className="section-title reveal-animation" style={{ transitionDelay: '0.2s' }}>
            Our Key Initiatives
          </h2>
          <p className="section-subtitle reveal-animation" style={{ transitionDelay: '0.3s' }}>
            Through these focused programs and initiatives, we bring our mission and values to life, creating meaningful impact in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className={cn(
                "group rounded-xl overflow-hidden bg-white shadow-sm border border-slate-100",
                "hover:shadow-lg transition-all duration-300 reveal-animation"
              )}
              style={{ transitionDelay: initiative.delay }}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{initiative.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-sage-100 text-sage-600">
                    <initiative.icon className="w-5 h-5" />
                  </div>
                  <p className="text-slate-600">{initiative.description}</p>
                </div>
                <a 
                  href="#"
                  className="inline-flex items-center text-dharmic-600 font-medium hover:text-dharmic-800 transition-colors"
                >
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal-animation" style={{ transitionDelay: '0.6s' }}>
          <a 
            href="#contact" 
            className={cn(
              "inline-flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300",
              "bg-sage-600 text-white hover:bg-sage-700",
              "shadow-sm hover:shadow-md hover:-translate-y-0.5"
            )}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Join Our Initiatives
          </a>
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
