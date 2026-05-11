'use client';

import React, { useState } from 'react';
import { Search, Lightbulb, Palette, Code, TestTube, Rocket, ArrowRight, CheckCircle } from 'lucide-react';

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      icon: Search,
      title: 'Discovery',
      description: 'We dive deep into your business needs, goals, and challenges to understand your vision completely.',
      details: [
        'Stakeholder interviews',
        'Market research',
        'Competitive analysis',
        'Technical requirements'
      ],
      duration: '1-2 weeks',
      deliverables: ['Requirements document', 'Technical specifications', 'Project roadmap']
    },
    {
      id: 2,
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Crafting a comprehensive roadmap that aligns technology solutions with your business objectives.',
      details: [
        'Solution architecture',
        'Technology stack selection',
        'Project planning',
        'Resource allocation'
      ],
      duration: '1 week',
      deliverables: ['Architecture design', 'Technology stack', 'Project timeline']
    },
    {
      id: 3,
      icon: Palette,
      title: 'Design',
      description: 'Creating intuitive, beautiful interfaces that delight users and drive engagement.',
      details: [
        'UX wireframing',
        'UI design systems',
        'Interactive prototypes',
        'User testing'
      ],
      duration: '2-3 weeks',
      deliverables: ['Wireframes', 'UI mockups', 'Interactive prototype', 'Design system']
    },
    {
      id: 4,
      icon: Code,
      title: 'Development',
      description: 'Building robust, scalable solutions using cutting-edge technologies and best practices.',
      details: [
        'Agile development',
        'Code reviews',
        'Continuous integration',
        'Quality assurance'
      ],
      duration: '4-8 weeks',
      deliverables: ['MVP', 'Feature releases', 'Code documentation', 'Testing suite']
    },
    {
      id: 5,
      icon: TestTube,
      title: 'Optimization',
      description: 'Fine-tuning performance, security, and user experience to ensure excellence.',
      details: [
        'Performance testing',
        'Security audits',
        'Load testing',
        'User feedback integration'
      ],
      duration: '1-2 weeks',
      deliverables: ['Performance report', 'Security audit', 'Optimization plan']
    },
    {
      id: 6,
      icon: Rocket,
      title: 'Launch',
      description: 'Deploying your solution with confidence and providing ongoing support for sustained success.',
      details: [
        'Production deployment',
        'Monitoring setup',
        'Team training',
        'Post-launch support'
      ],
      duration: '1 week',
      deliverables: ['Live deployment', 'Monitoring dashboard', 'Training materials', 'Support plan']
    }
  ];

  return (
    <section id="process" className="relative py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="mb-8">
            <h2 className="text-4xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Our
              <span className="block text-gradient">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A proven methodology that ensures project success through strategic planning, expert execution, and continuous optimization.
            </p>
          </div>
        </div>

        {/* Main Process Flow */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Active Step Details */}
            <div className="order-2 lg:order-1">
              <div className="glass-strong rounded-3xl p-12">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                    {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">
                      Step {steps[activeStep].id.toString().padStart(2, '0')}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      {steps[activeStep].title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {steps[activeStep].description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Key Activities
                    </h4>
                    <ul className="space-y-3">
                      {steps[activeStep].details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Deliverables</h4>
                    <ul className="space-y-3">
                      {steps[activeStep].deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-600">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Estimated Duration</div>
                    <div className="text-lg font-semibold text-gray-900">
                      {steps[activeStep].duration}
                    </div>
                  </div>
                  <button className="btn-premium flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Step Navigation */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-blue-200" />

                <div className="space-y-8">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="relative cursor-pointer group"
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Connection Dot */}
                      <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                        <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          activeStep === index
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-150'
                            : 'bg-gray-300 group-hover:bg-blue-400'
                        }`} />
                      </div>

                      {/* Step Card */}
                      <div className={`ml-16 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        activeStep === index
                          ? 'bg-white border-blue-500 shadow-lg'
                          : 'bg-gray-50 border-gray-200 hover:bg-white hover:border-blue-300'
                      }`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              activeStep === index
                                ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                                : 'bg-gray-200 group-hover:bg-blue-100'
                            }`}>
                              <step.icon className={`w-6 h-6 transition-colors ${
                                activeStep === index ? 'text-white' : 'text-gray-600 group-hover:text-blue-600'
                              }`} />
                            </div>
                            <div>
                              <h4 className={`font-bold transition-colors ${
                                activeStep === index ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'
                              }`}>
                                {step.title}
                              </h4>
                              <div className="text-sm text-gray-500">
                                {step.duration}
                              </div>
                            </div>
                          </div>
                          <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                            activeStep === index ? 'text-blue-600 translate-x-1' : 'text-gray-400'
                          }`} />
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation-Driven</h3>
            <p className="text-gray-600 leading-relaxed">
              We leverage cutting-edge technologies and creative thinking to deliver solutions that set you apart.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality-Focused</h3>
            <p className="text-gray-600 leading-relaxed">
              Every project undergoes rigorous testing and review to ensure exceptional performance and reliability.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Results-Oriented</h3>
            <p className="text-gray-600 leading-relaxed">
              Our process is designed to deliver measurable business outcomes and drive sustainable growth.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-strong rounded-3xl p-16 max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Let's discuss how our proven process can help bring your ideas to life with precision and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-premium text-lg px-10 py-4">
                Start Your Project
              </button>
              <button className="btn-outline text-lg px-10 py-4">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
