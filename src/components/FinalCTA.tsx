'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const FinalCTA = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-purple-300/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Headline */}
          <div className="mb-8">
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Let's Build the
              <span className="block text-gradient">Next Big</span>
              <span className="text-gradient-2">Digital Experience</span>
            </h2>
            
            {/* Floating Icons */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float">
                <Sparkles className="w-6 h-6 text-blue-500" />
              </div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-6 h-6 text-purple-500" />
              </div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <ArrowRight className="w-6 h-6 text-pink-500" />
              </div>
            </div>
          </div>

          {/* Subheadline */}
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your vision into reality with our cutting-edge technology solutions and expert development team.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button 
              className="btn-premium text-lg px-10 py-5 group relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="flex items-center space-x-3">
                <span>Schedule a Consultation</span>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                  isHovered ? 'translate-x-2' : ''
                }`} />
              </span>
              {/* Shimmer Effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            
            <button className="btn-outline text-lg px-10 py-5">
              View Our Portfolio
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Free</div>
              <div className="text-sm text-gray-600">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">24h</div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">30d</div>
              <div className="text-sm text-gray-600">Project Kickoff</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 glass-strong rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Email:</span>
                <span className="text-blue-600">hello@vixora.com</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300" />
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Phone:</span>
                <span className="text-blue-600">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
