'use client';

const TrustedBy = () => {
  const logos = [
    { name: 'TechCorp', width: 120 },
    { name: 'InnovateLabs', width: 140 },
    { name: 'DigitalFlow', width: 110 },
    { name: 'CloudBase', width: 130 },
    { name: 'DataPro', width: 115 },
    { name: 'NextGen', width: 125 },
    { name: 'SmartSys', width: 120 },
    { name: 'FutureTech', width: 135 },
  ];

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Leading Companies</h2>
          <p className="text-lg text-gray-600">Partnering with industry leaders to deliver exceptional digital experiences</p>
        </div>

        <div className="relative">
          <div className="flex space-x-12 marquee">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`first-${index}`} className="flex items-center justify-center flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div 
                    className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center px-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ width: `${logo.width}px` }}
                  >
                    <span className="text-gray-700 font-semibold text-sm">{logo.name}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`second-${index}`} className="flex items-center justify-center flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div 
                    className="h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center px-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ width: `${logo.width}px` }}
                  >
                    <span className="text-gray-700 font-semibold text-sm">{logo.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
            <div className="text-sm text-gray-600">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
            <div className="text-sm text-gray-600">Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
