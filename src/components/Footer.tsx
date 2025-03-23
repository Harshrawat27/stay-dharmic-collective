
import React from 'react';
import { AtSign, Facebook, Github, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dharmic-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-serif text-2xl font-semibold text-white">
                Stay Dharmic
              </span>
              <span className="ml-2 text-sm bg-dharmic-800 text-dharmic-200 px-2 py-1 rounded-full">
                Trust
              </span>
            </div>
            <p className="text-dharmic-300 text-sm">
              Dedicated to upholding and advancing the principles of Dharma in the modern world through education, community service, and cultural preservation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-dharmic-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-dharmic-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-dharmic-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-dharmic-400 hover:text-white transition-colors">
                <AtSign className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#mission" className="text-dharmic-300 hover:text-white transition-colors">Our Mission</a>
              </li>
              <li>
                <a href="#values" className="text-dharmic-300 hover:text-white transition-colors">Core Values</a>
              </li>
              <li>
                <a href="#goals" className="text-dharmic-300 hover:text-white transition-colors">Strategic Goals</a>
              </li>
              <li>
                <a href="#initiatives" className="text-dharmic-300 hover:text-white transition-colors">Initiatives</a>
              </li>
              <li>
                <a href="#contact" className="text-dharmic-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Programs</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Educational Workshops</a>
              </li>
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Community Service</a>
              </li>
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Cultural Preservation</a>
              </li>
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Environmental Projects</a>
              </li>
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Research Initiatives</a>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Get Involved</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Volunteer Opportunities</a>
              </li>
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Donate</a>
              </li>
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Partnership Inquiries</a>
              </li>
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Newsletter Signup</a>
              </li>
              <li>
                <a href="#" className="text-dharmic-300 hover:text-white transition-colors">Upcoming Events</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dharmic-800 pt-8 mt-8 text-center">
          <p className="text-dharmic-400 text-sm">
            &copy; {new Date().getFullYear()} Stay Dharmic Trust. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-dharmic-400">
            <a href="#" className="hover:text-dharmic-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-dharmic-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-dharmic-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
