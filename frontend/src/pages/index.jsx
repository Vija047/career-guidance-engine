// src/pages/index.jsx
import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Welcome to Career Guidance Engine</h1>
      <p>This is your homepage where users can start exploring.</p>
    </MainLayout>
  );
}
