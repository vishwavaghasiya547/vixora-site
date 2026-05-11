'use client';

import { useState } from 'react';
import { 
  Code, 
  Cpu, 
  FileText, 
  ShoppingCart, 
  Database,
  Cloud,
  Brain,
  Palette
} from 'lucide-react';

const Technology = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies = [
    {
      name: 'React',
      icon: Code,
      category: 'Frontend',
      level: 95,
      color: 'from-cyan-400 to-blue-500',
      description: 'Building interactive user interfaces with component-based architecture'
    },
    {
      name: 'Next.js',
      icon: Code,
      category: 'Frontend',
      level: 90,
      color: 'from-gray-800 to-black',
      description: 'Full-stack React framework for production-ready applications'
    },
    {
      name: 'Node.js',
      icon: Cpu,
      category: 'Backend',
      level: 88,
      color: 'from-green-500 to-green-700',
      description: 'Scalable server-side JavaScript runtime and APIs'
    },
    {
      name: 'TypeScript',
      icon: FileText,
      category: 'Language',
      level: 92,
      color: 'from-blue-600 to-blue-800',
      description: 'Type-safe JavaScript for better code quality and maintainability'
    },
    {
      name: 'Shopify',
      icon: ShoppingCart,
      category: 'E-Commerce',
      level: 85,
      color: 'from-green-600 to-emerald-700',
      description: 'Custom e-commerce solutions and app development'
    },
    {
      name: 'MongoDB',
      icon: Database,
      category: 'Database',
      level: 87,
      color: 'from-green-500 to-emerald-600',
      description: 'Flexible NoSQL database for modern applications'
    },
    {
      name: 'AWS',
      icon: Cloud,
      category: 'Cloud',
      level: 90,
      color: 'from-orange-500 to-yellow-600',
      description: 'Cloud infrastructure and scalable deployment solutions'
    },
    {
      name: 'OpenAI',
      icon: Brain,
      category: 'AI',
      level: 82,
      color: 'from-purple-500 to-indigo-600',
      description: 'Integrating cutting-edge AI capabilities into applications'
    },
    {
      name: 'Tailwind CSS',
      icon: Palette,
      category: 'Styling',
      level: 93,
      color: 'from-cyan-500 to-blue-600',
      description: 'Utility-first CSS framework for rapid UI development'
    }
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'AI', 'E-Commerce'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTech = selectedCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === selectedCategory);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Technology
            <span className="block text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Leveraging cutting-edge technologies to build robust, scalable, and innovative digital solutions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {filteredTech.map((tech) => (
            <div
              key={tech.name}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`card-premium hover-lift h-full text-center relative overflow-hidden ${
                hoveredTech === tech.name ? 'border-blue-500' : ''
              }`}>
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center transform group-hover:scale-110 transition-all duration-300`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gradient transition-colors">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{tech.category}</p>
                
                {/* Skill Level */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className={`bg-gradient-to-r ${tech.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${tech.level}%` }}
                  />
                </div>

                {/* Description on Hover */}
                <div className={`text-xs text-gray-600 transition-all duration-300 ${
                  hoveredTech === tech.name ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  {tech.description}
                </div>

                {/* Floating Label */}
                <div className={`absolute top-4 right-4 px-2 py-1 bg-gradient-to-r ${tech.color} text-white text-xs rounded-full transition-all duration-300 ${
                  hoveredTech === tech.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  {tech.level}%
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-600">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Combined Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Learning & Innovation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-sm text-gray-600">Modern Standards</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Technology That Drives Success
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              We stay ahead of the curve so your business can lead the market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium text-lg px-8 py-4">
                Discuss Your Tech Stack
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                View All Technologies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
