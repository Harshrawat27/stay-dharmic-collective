
import React, { useEffect } from 'react';
import { AtSign, Globe, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contact = () => {
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
    <section id="contact" className="py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-dharmic-100 text-dharmic-800 rounded-full mb-4 reveal-animation">
            Connect With Us
          </span>
          <h2 className="section-title reveal-animation" style={{ transitionDelay: '0.2s' }}>
            Get in Touch
          </h2>
          <p className="section-subtitle reveal-animation" style={{ transitionDelay: '0.3s' }}>
            We'd love to hear from you. Reach out to learn more about our initiatives or how you can get involved with the Stay Dharmic Trust.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 reveal-animation" style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-dharmic-800 mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-dharmic-100 text-dharmic-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-dharmic-800 mb-1">Location</h4>
                <p className="text-slate-600">123 Dharmic Way, Serenity Valley, CA 94123</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-dharmic-100 text-dharmic-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-dharmic-800 mb-1">Phone</h4>
                <p className="text-slate-600">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-dharmic-100 text-dharmic-600">
                <AtSign className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-dharmic-800 mb-1">Email</h4>
                <p className="text-slate-600">info@staydharmic.org</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 rounded-full bg-dharmic-100 text-dharmic-600">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-dharmic-800 mb-1">Website</h4>
                <p className="text-slate-600">www.staydharmic.org</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card border border-slate-200 p-8 rounded-xl reveal-animation" style={{ transitionDelay: '0.5s' }}>
            <h3 className="text-2xl font-semibold text-dharmic-800 mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dharmic-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dharmic-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dharmic-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dharmic-500 focus:border-transparent transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dharmic-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dharmic-500 focus:border-transparent transition-all"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dharmic-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dharmic-500 focus:border-transparent transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className={cn(
                  "w-full px-6 py-3 rounded-lg font-medium transition-all duration-300",
                  "bg-dharmic-700 text-white hover:bg-dharmic-800",
                  "shadow-sm hover:shadow-md"
                )}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
