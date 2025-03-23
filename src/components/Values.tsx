
import React, { useEffect } from 'react';
import { CheckCircle, Shield, Heart, Users, GanttChart, FileText, Globe, Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

const valueItems = [
  {
    title: "Transparency",
    description: "Ensure transparent communication about trust activities and financial matters.",
    icon: FileText,
    delay: "0.1s",
  },
  {
    title: "Inclusivity",
    description: "Embrace diversity and inclusivity, welcoming individuals from all backgrounds.",
    icon: Users,
    delay: "0.2s",
  },
  {
    title: "Education",
    description: "Foster educational initiatives to promote understanding of Dharma and its applications.",
    icon: GanttChart,
    delay: "0.3s",
  },
  {
    title: "Community Service",
    description: "Engage in charitable activities, supporting communities in need while adhering to Dharmic principles.",
    icon: Heart,
    delay: "0.4s",
  },
  {
    title: "Environmental Responsibility",
    description: "Advocate for and practice environmental sustainability in line with Dharmic values.",
    icon: Leaf,
    delay: "0.5s",
  },
  {
    title: "Cultural Preservation",
    description: "Work towards preserving and promoting Dharmic culture, art, and heritage.",
    icon: Globe,
    delay: "0.6s",
  },
  {
    title: "Ethical Investments",
    description: "Invest in ethical and Dharmic values-aligned ventures for sustainable growth.",
    icon: Shield,
    delay: "0.7s",
  },
  {
    title: "Dharma Principles",
    description: "All our actions are guided by the core principles of righteousness, duty, and ethical conduct.",
    icon: CheckCircle,
    delay: "0.8s",
  },
];

const Values = () => {
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
    <section id="values" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-sandstone-100 text-sandstone-800 rounded-full mb-4 reveal-animation">
            Our Principles
          </span>
          <h2 className="section-title reveal-animation" style={{ transitionDelay: '0.2s' }}>
            Core Values
          </h2>
          <p className="section-subtitle reveal-animation" style={{ transitionDelay: '0.3s' }}>
            These values guide every aspect of our work and represent our commitment to upholding Dharmic principles in all that we do.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {valueItems.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "feature-card group bg-white border border-slate-100",
                "hover:border-dharmic-200 reveal-animation"
              )}
              style={{ transitionDelay: item.delay }}
            >
              <div className="flex items-start space-x-4">
                <div className="mt-1 flex-shrink-0">
                  <div className={cn(
                    "p-2 rounded-lg text-dharmic-600 bg-dharmic-50",
                    "group-hover:bg-dharmic-100 group-hover:text-dharmic-700",
                    "transition-colors duration-300"
                  )}>
                    <item.icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dharmic-800">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
