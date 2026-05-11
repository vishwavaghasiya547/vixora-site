'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, Shield, Globe } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 mb-0">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"
          style={{
            left: '10%',
            top: '20%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"
          style={{
            right: '15%',
            bottom: '30%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            animationDelay: '2s',
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-2xl animate-float"
          style={{
            left: '50%',
            top: '60%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#9C92AC" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badges */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Enterprise Security</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span>Lightning Fast</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <div className="flex items-center space-x-1">
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Global Scale</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Engineering
                <span className="block text-gradient">Intelligent Digital</span>
                <span className="block text-gradient-2">Experiences</span>
                <span className="text-gray-900">for the Future</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Vixora helps startups and enterprises build scalable digital products, AI-powered platforms, and premium web experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-premium text-lg px-8 py-4 flex items-center justify-center space-x-2 group">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <span>Explore Work</span>
                <Sparkles className="w-5 h-5" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Floating Dashboard UI Mockup */}
            <div className="relative animate-float">
              <div className="glass-strong rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-sm text-gray-500">vixora-dashboard</div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                      <div className="text-2xl font-bold text-blue-900">AI Solutions</div>
                      <div className="text-sm text-blue-700 mt-2">Machine Learning & Automation</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                      <div className="text-2xl font-bold text-purple-900">Web Platforms</div>
                      <div className="text-sm text-purple-700 mt-2">Scalable Architecture</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                      <div className="text-2xl font-bold text-green-900">SaaS Development</div>
                      <div className="text-sm text-green-700 mt-2">Enterprise Solutions</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                      <div className="text-2xl font-bold text-orange-900">UI/UX Design</div>
                      <div className="text-sm text-orange-700 mt-2">Premium Experiences</div>
                    </div>
                  </div>

                  {/* Analytics Chart */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <div className="text-sm font-semibold text-gray-700 mb-4">Performance Analytics</div>
                    <div className="flex items-end space-x-2 h-24">
                      <div className="w-8 bg-blue-400 rounded-t" style={{ height: '60%' }} />
                      <div className="w-8 bg-blue-500 rounded-t" style={{ height: '80%' }} />
                      <div className="w-8 bg-purple-400 rounded-t" style={{ height: '45%' }} />
                      <div className="w-8 bg-purple-500 rounded-t" style={{ height: '90%' }} />
                      <div className="w-8 bg-blue-400 rounded-t" style={{ height: '70%' }} />
                      <div className="w-8 bg-blue-500 rounded-t" style={{ height: '85%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-strong rounded-2xl p-4 animate-pulse-glow">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold">Live</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-strong rounded-2xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gradient">4.9/5</div>
                  <div className="text-xs text-gray-600">Client Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
