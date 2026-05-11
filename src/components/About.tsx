'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Users, Lightbulb, Target, Award } from 'lucide-react';

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return <span>{count}</span>;
};

const About = () => {
  const stats = [
    { icon: Users, label: 'Team Members', value: 50, suffix: '+' },
    { icon: Lightbulb, label: 'Projects Completed', value: 500, suffix: '+' },
    { icon: Target, label: 'Client Retention', value: 98, suffix: '%' },
    { icon: Award, label: 'Industry Awards', value: 25, suffix: '+' },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Quality Excellence',
      description: 'Every line of code, every design element is crafted with precision and attention to detail.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to achieve extraordinary results.',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                About
                <span className="block text-gradient">Vixora</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We are a team of passionate technologists, designers, and strategists dedicated to engineering intelligent digital experiences that transform businesses and delight users.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in an ever-evolving technological landscape.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To be the global leader in digital innovation, setting new standards for excellence in AI-powered solutions and premium web experiences.
                  </p>
                </div>
              </div>
            </div>

            <button className="btn-premium flex items-center space-x-2 group">
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Content - Stats and Values */}
          <div className="space-y-8">
            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card-premium hover-lift">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter target={stat.value} />
                    <span className="text-2xl">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Values</h3>
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className={`p-6 rounded-2xl border border-gray-200 bg-white hover-lift cursor-pointer`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 bg-gradient-to-r ${value.gradient} rounded-full`} />
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-gradient transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 mt-1">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Let's collaborate to create something extraordinary together.
            </p>
            <button className="btn-premium text-lg px-8 py-4">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
