// src/components/CareerCard.jsx
import React from 'react';

export default function CareerCard({ career }) {
  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{career.title}</h3>
      <p className="mt-2 text-gray-600">{career.description}</p>
      <a
        href={career.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-3 inline-block"
      >
        Learn More
      </a>
    </div>
  );
}
