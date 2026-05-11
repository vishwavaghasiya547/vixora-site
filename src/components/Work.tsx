'use client';

import { useState } from 'react';
import { ArrowRight, ExternalLink, TrendingUp, Users, Award } from 'lucide-react';

const Work = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered E-Commerce Platform',
      client: 'TechMart Inc.',
      industry: 'E-Commerce',
      category: 'AI Solutions',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'Node.js', 'TensorFlow', 'AWS'],
      description: 'Revolutionary e-commerce platform with AI-powered product recommendations and inventory management.',
      results: {
        revenue: '+250%',
        conversion: '+180%',
        users: '2M+'
      },
      featured: true
    },
    {
      id: 2,
      title: 'Enterprise SaaS Dashboard',
      client: 'DataFlow Systems',
      industry: 'B2B SaaS',
      category: 'Web Platforms',
      image: '/api/placeholder/800/600',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Vercel'],
      description: 'Comprehensive analytics dashboard for enterprise data visualization and business intelligence.',
      results: {
        revenue: '+150%',
        conversion: '+120%',
        users: '500K+'
      },
      featured: true
    },
    {
      id: 3,
      title: 'Shopify Plus Custom Store',
      client: 'Luxury Fashion Co.',
      industry: 'Fashion Retail',
      category: 'Shopify Engineering',
      image: '/api/placeholder/800/600',
      technologies: ['Shopify Plus', 'Liquid', 'React', 'GraphQL'],
      description: 'Ultra-premium e-commerce experience with custom themes and advanced product customization.',
      results: {
        revenue: '+300%',
        conversion: '+200%',
        users: '1M+'
      },
      featured: false
    }
  ];

  const categories = ['All', 'AI Solutions', 'Web Platforms', 'Shopify Engineering', 'UI/UX Design'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="work" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Featured
            <span className="block text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our portfolio of successful projects that have transformed businesses and delivered exceptional results.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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

        {/* Featured Project */}
        {filteredProjects.filter(p => p.featured).length > 0 && (
          <div className="mb-20">
            <div className="relative group cursor-pointer" onClick={() => setActiveProject(filteredProjects[0].id)}>
              <div className="card-premium p-0 overflow-hidden hover-lift">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-96 lg:h-auto overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mb-4 mx-auto">
                          <span className="text-white text-4xl font-bold">VM</span>
                        </div>
                        <p className="text-gray-600">Project Showcase</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Side */}
                  <div className="p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                            {filteredProjects[0].category}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-600">{filteredProjects[0].client}</span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-gradient transition-colors">
                          {filteredProjects[0].title}
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {filteredProjects[0].description}
                        </p>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-6">
                        {Object.entries(filteredProjects[0].results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-gray-900">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">
                              {key === 'revenue' ? 'Revenue' : key === 'conversion' ? 'Conversion' : 'Users'}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {filteredProjects[0].technologies.map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <button className="btn-premium w-full lg:w-auto flex items-center justify-center space-x-2">
                        <span>View Case Study</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.filter(p => !p.featured).map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setActiveProject(project.id)}
            >
              <div className="card-premium hover-lift h-full">
                {/* Project Image */}
                <div className="relative h-48 mb-6 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">VM</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <ExternalLink className="w-5 h-5 text-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">{project.client}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Mini Results */}
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-gray-900">{project.results.revenue}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-gray-900">{project.results.users}</span>
                    </div>
                  </div>

                  <button className="text-blue-600 font-medium text-sm flex items-center space-x-1 group-hover:space-x-2 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="glass-strong rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-yellow-500" />
              <h3 className="text-3xl font-bold text-gray-900">
                Ready to Create Something Amazing?
              </h3>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help transform your business with cutting-edge digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-premium text-lg px-8 py-4">
                Start Your Project
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
