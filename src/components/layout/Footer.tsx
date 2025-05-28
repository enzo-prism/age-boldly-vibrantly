
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-teal mb-4">Rebellious Aging</h3>
            <p className="text-gray-600 mb-4">
              Inspiring you to age boldly, live vibrantly, and redefine what aging means in today's world.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:enzo@design-prism.com" className="text-gray-400 hover:text-teal transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-teal transition-colors">Home</Link></li>
              <li><Link to="/movement" className="text-gray-600 hover:text-teal transition-colors">The Movement</Link></li>
              <li><Link to="/nutrition" className="text-gray-600 hover:text-teal transition-colors">Nutrition (WFPB)</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Pillars</h4>
            <ul className="space-y-2">
              <li><Link to="/pillars/confidence" className="text-gray-600 hover:text-teal transition-colors">Confidence</Link></li>
              <li><Link to="/pillars/style" className="text-gray-600 hover:text-teal transition-colors">Style</Link></li>
              <li><Link to="/pillars/longevity" className="text-gray-600 hover:text-teal transition-colors">Longevity</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/resources" className="text-gray-600 hover:text-teal transition-colors">Starter Kit</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-teal transition-colors">Blog</Link></li>
              <li><Link to="/resources#books" className="text-gray-600 hover:text-teal transition-colors">Books & Documentaries</Link></li>
              <li><Link to="/resources#tools" className="text-gray-600 hover:text-teal transition-colors">Tools & Downloads</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            Medical Disclaimer: The information provided on this website is for educational purposes only and is not intended as medical advice. 
            Always consult with a qualified healthcare professional before making significant changes to your diet or lifestyle.
          </p>
          <p className="text-gray-500 text-sm text-center mt-4">
            &copy; {new Date().getFullYear()} Rebellious Aging. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
