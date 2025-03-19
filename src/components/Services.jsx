// components/Services.js
import React from 'react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom websites and applications tailored to your business needs.',
      icon: '💻'
    },
    {
      id: 2,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'User-centered design that enhances customer experience and engagement.',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for businesses of all sizes.',
      icon: '☁️'
    }
  ];

  return (
    <section className="py-16" id="services">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;