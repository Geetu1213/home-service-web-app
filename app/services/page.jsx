"use client";

import React from "react";

const services = [
  {
    name: "Plumbing",
    description: "Fix leaks, pipe issues, and water connections",
    icon: "🚰",
  },
  {
    name: "Electrical",
    description: "Home wiring, lights, and appliance repairs",
    icon: "💡",
  },
  {
    name: "House Cleaning",
    description: "Deep cleaning for your home and office",
    icon: "🧹",
  },
  {
    name: "Bathroom Cleaning",
    description: "Deep cleaning and sanitization for bathrooms",
    icon: "🛁",
  },
  {
    name: "Painting",
    description: "Wall painting, touch-ups, and home decor painting",
    icon: "🎨",
  },
  {
    name: "House Shifting",
    description: "Safe and efficient moving services for your home",
    icon: "🏠",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        {/* Change text-blue-600 to match your About Us color */}
        <h2 className="text-4xl font-bold mb-8 text-blue-600">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
