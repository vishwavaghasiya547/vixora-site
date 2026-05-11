'use client';

import React, { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechMart Inc.',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Vixora transformed our e-commerce platform completely. Their AI-powered solutions increased our conversion rates by 180% and revenue by 250%. The team\'s expertise and dedication are unmatched.',
      project: 'AI-Powered E-Commerce Platform',
      results: {
        revenue: '+250%',
        conversion: '+180%',
        users: '2M+'
      }
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO',
      company: 'DataFlow Systems',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Working with Vixora was a game-changer for our business. They delivered a complex enterprise SaaS solution that exceeded all our expectations. Truly world-class development team.',
      project: 'Enterprise SaaS Dashboard',
      results: {
        revenue: '+150%',
        conversion: '+120%',
        users: '500K+'
      }
    },
    {
      id: 3,
      name: 'Emma Williams',
      position: 'Founder',
      company: 'Luxury Fashion Co.',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'The Shopify Plus store Vixora built for us is absolutely stunning. Our customers love the new experience, and our sales have never been better. Highly recommended!',
      project: 'Shopify Plus Custom Store',
      results: {
        revenue: '+300%',
        conversion: '+200%',
        users: '1M+'
      }
    },
    {
      id: 4,
      name: 'David Martinez',
      position: 'Product Manager',
      company: 'InnovateLabs',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'The mobile app Vixora developed for us has revolutionized how our customers interact with our services. The user experience is exceptional and the performance is outstanding.',
      project: 'Mobile App Development',
      results: {
        revenue: '+200%',
        conversion: '+160%',
        users: '750K+'
      }
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      position: 'Marketing Director',
      company: 'GlobalBrand Co.',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Vixora\'s digital marketing platform has transformed how we engage with our customers. The analytics and automation features have saved us countless hours.',
      project: 'Marketing Platform',
      results: {
        revenue: '+180%',
        conversion: '+140%',
        users: '3M+'
      }
    }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const goToTestimonial = (index: number) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  return (
    <section id="testimonials" className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Client
              <span className="block text-gradient">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Hear directly from our clients about their transformation journey with Vixora
            </p>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Testimonial Content */}
            <div className="order-2 lg:order-1">
              <div className={`glass-strong rounded-3xl p-16 transition-all duration-300 ${
                isAnimating ? 'opacity-50 transform scale-95' : 'opacity-100 transform scale-100'
              }`}>
                {/* Quote Icon */}
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-blue-600">Client Testimonial</div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-2xl lg:text-3xl text-gray-900 leading-relaxed mb-12 font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-6">
                    {/* Avatar */}
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Info */}
                    <div>
                      <div className="text-xl font-bold text-gray-900 mb-1">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-600 mb-2">
                        {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">
                        Project: {testimonials[currentIndex].project}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
                  {Object.entries(testimonials[currentIndex].results).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key === 'revenue' ? 'Revenue' : key === 'conversion' ? 'Conversion' : 'Users'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Testimonial Cards */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Navigation Cards */}
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`cursor-pointer transition-all duration-300 ${
                        index === currentIndex
                          ? 'transform scale-105'
                          : 'transform scale-100 opacity-70 hover:opacity-90'
                      }`}
                      onClick={() => goToTestimonial(index)}
                    >
                      <div className={`card-premium hover-lift p-6 ${
                        index === currentIndex ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                      }`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-bold">
                                {testimonial.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                              <div className="text-sm text-gray-600">
                                {testimonial.position}, {testimonial.company}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {testimonial.content}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-blue-600 font-medium">
                            {testimonial.project}
                          </div>
                          <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                            index === currentIndex ? 'text-blue-600 translate-x-1' : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="mb-32">
          <div className="glass-strong rounded-3xl p-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence is reflected in our client satisfaction metrics
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">4.9/5</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
                <div className="text-sm text-gray-600">Client Reviews</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Partnership</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-strong rounded-3xl p-16 max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Join our growing family of satisfied clients and let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-premium text-lg px-10 py-4">
                Start Your Project
              </button>
              <button className="btn-outline text-lg px-10 py-4">
                Read More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
