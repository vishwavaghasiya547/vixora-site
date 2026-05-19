'use client';

import { ArrowRight } from 'lucide-react';
import { Zap } from 'lucide-react';

const expertise = [
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent automation solutions',
    icon: ArrowRight,
  },
  {
    title: 'Web Development',
    description: 'Modern, scalable applications',
    icon: ArrowRight,
  },
  {
    title: 'SaaS Platforms',
    description: 'Enterprise-grade solutions',
    icon: ArrowRight,
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered experiences',
    icon: ArrowRight,
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fadeIn">
            {/* Company Badge */}
            <div className="inline-flex items-center space-x-3 bg-gray-50 px-4 py-2.5 rounded-full border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-800">Available for Projects</span>
              <div className="text-xs text-gray-500">•</div>
              <div className="text-xs text-gray-500">San Francisco, CA</div>
            </div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                <span className="block">Engineering</span>
                <span className="block text-gray-700">Intelligent</span>
                <span className="block text-gray-900">Digital Experiences</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                We transform ambitious ideas into powerful digital products that drive growth and delight users through innovative technology and thoughtful design.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-outline">
                View Our Work
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">150+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">5+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            <div className="card-elevated">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Expertise Overview</h3>
                      <p className="text-sm text-gray-600">Our core capabilities</p>
                    </div>
                        <h4 className="font-medium text-gray-900">UI/UX Design</h4>
                        <p className="text-sm text-gray-600">User-centered experiences</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
                4.9/5 Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
