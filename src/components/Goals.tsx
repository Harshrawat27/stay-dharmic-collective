
import React, { useEffect } from 'react';
import { Anchor, Globe, Handshake, Lightbulb, LineChart, Presentation, ScrollText, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const goalsData = [
  {
    title: "Dharma Awareness",
    description: "Increase awareness about Dharma through workshops, seminars, and online platforms.",
    icon: Anchor,
    color: "bg-orange-50 text-orange-600",
    delay: "0.1s",
  },
  {
    title: "Charitable Impact",
    description: "Make a positive impact on communities through targeted charitable projects.",
    icon: Sparkles,
    color: "bg-orange-100 text-orange-700",
    delay: "0.2s",
  },
  {
    title: "Collaboration",
    description: "Establish partnerships with organizations sharing similar values to amplify impact.",
    icon: Handshake,
    color: "bg-orange-50 text-orange-600",
    delay: "0.3s",
  },
  {
    title: "Empowerment",
    description: "Empower individuals to lead Dharmic lives through educational programs and resources.",
    icon: Lightbulb,
    color: "bg-orange-100 text-orange-700",
    delay: "0.4s",
  },
  {
    title: "Sustainability",
    description: "Achieve financial sustainability to ensure the longevity and impact of the trust.",
    icon: LineChart,
    color: "bg-orange-50 text-orange-600",
    delay: "0.5s",
  },
  {
    title: "Global Reach",
    description: "Extend the influence of Dharmic principles globally through outreach programs.",
    icon: Globe,
    color: "bg-orange-100 text-orange-700",
    delay: "0.6s",
  },
  {
    title: "Research and Development",
    description: "Support research initiatives that explore the application of Dharmic principles in contemporary contexts.",
    icon: ScrollText,
    color: "bg-orange-50 text-orange-600",
    delay: "0.7s",
  },
  {
    title: "Adaptability",
    description: "Adapt to evolving needs and challenges while staying true to the core principles of Dharma.",
    icon: Presentation,
    color: "bg-orange-100 text-orange-700",
    delay: "0.8s",
  },
];

const Goals = () => {
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
    <section id="goals" className="py-24 bg-orange-950 text-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-orange-800 text-orange-100 rounded-full mb-4 reveal-animation">
            Our Aspirations
          </span>
          <h2 className="section-title text-white reveal-animation" style={{ transitionDelay: '0.2s' }}>
            Strategic Goals
          </h2>
          <p className="section-subtitle text-orange-200 reveal-animation" style={{ transitionDelay: '0.3s' }}>
            We have established clear objectives that guide our efforts and measure our progress in fulfilling our mission to uphold Dharmic principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {goalsData.map((goal, index) => (
            <div 
              key={index} 
              className={cn(
                "p-6 rounded-lg bg-orange-900/60 backdrop-blur-sm border border-orange-800/50",
                "hover:bg-orange-800/80 transition-all duration-300 reveal-animation"
              )}
              style={{ transitionDelay: goal.delay }}
            >
              <div className={cn(
                "flex items-center justify-center w-12 h-12 rounded-lg mb-4",
                goal.color
              )}>
                <goal.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{goal.title}</h3>
              <p className="text-orange-200">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Goals;
