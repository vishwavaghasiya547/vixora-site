'use client';

import { useState } from 'react';
import { 
  Brain, 
  Code2, 
  ShoppingCart, 
  Globe, 
  Palette, 
  Cpu,
  ArrowRight,
  Sparkles,
  Zap,
  Shield
} from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      icon: Brain,
      title: 'AI Solutions',
      description: 'Machine learning models, automation systems, and intelligent algorithms that transform your business processes.',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['Machine Learning', 'NLP Solutions', 'Computer Vision'],
      size: 'bento-item-1'
    },
    {
      id: 2,
      icon: Code2,
      title: 'SaaS Development',
      description: 'Scalable, secure, and user-friendly software-as-a-service platforms built for growth.',
      gradient: 'from-purple-500 to-pink-500',
      features: ['Multi-tenant Architecture', 'API Integration', 'Cloud Deployment'],
      size: 'bento-item-2'
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: 'Shopify Engineering',
      description: 'Custom themes, apps, and integrations that elevate your e-commerce experience.',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Custom Themes', 'App Development', 'API Integration'],
      size: 'bento-item-3'
    },
    {
      id: 4,
      icon: Globe,
      title: 'Web Platforms',
      description: 'Modern, responsive web applications that deliver exceptional user experiences across all devices.',
      gradient: 'from-orange-500 to-red-500',
      features: ['Progressive Web Apps', 'Responsive Design', 'Performance Optimization'],
      size: 'bento-item-4'
    },
    {
      id: 5,
      icon: Palette,
      title: 'UI/UX Systems',
      description: 'Beautiful, intuitive interfaces that users love and that drive business results.',
      gradient: 'from-indigo-500 to-purple-500',
      features: ['Design Systems', 'User Research', 'Prototyping'],
      size: 'bento-item-5'
    },
    {
      id: 6,
      icon: Cpu,
      title: 'Automation Infrastructure',
      description: 'Streamlined workflows and automated systems that boost productivity and reduce costs.',
      gradient: 'from-teal-500 to-blue-500',
      features: ['CI/CD Pipelines', 'DevOps Solutions', 'Cloud Infrastructure'],
      size: 'bento-item-6'
    }
  ];

  const getIconForFeature = (feature: string) => {
    if (feature.includes('Machine') || feature.includes('AI')) return Sparkles;
    if (feature.includes('Performance') || feature.includes('Speed')) return Zap;
    if (feature.includes('Security') || feature.includes('Secure')) return Shield;
    return ArrowRight;
  };

  return (
    <section id="services" className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our
            <span className="block text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and transform your digital presence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {services.map((service) => (
            <div
              key={service.id}
              className={`${service.size} group cursor-pointer`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`h-full card-premium hover-lift relative overflow-hidden ${
                hoveredService === service.id ? 'border-blue-500' : ''
              }`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gradient transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, index) => {
                      const Icon = getIconForFeature(feature);
                      return (
                        <div 
                          key={index} 
                          className="flex items-center space-x-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors"
                        >
                          <Icon className="w-4 h-4 text-blue-500" />
                          <span>{feature}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute bottom-6 right-6 transform transition-all duration-300 ${
                    hoveredService === service.id ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                  }`}>
                    <ArrowRight className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-4">
            <button className="btn-premium text-lg px-8 py-4 flex items-center space-x-2">
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-outline text-lg px-8 py-4">
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* Service Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime Guarantee</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">48h</div>
            <div className="text-sm text-gray-600">Response Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">30d</div>
            <div className="text-sm text-gray-600">Money Back</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
