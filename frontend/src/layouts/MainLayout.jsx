// src/layouts/MainLayout.jsx
import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-indigo-700 text-white p-4 font-bold text-lg">Career Guidance Engine</header>
      <main className="flex-grow container mx-auto p-6">{children}</main>
      <footer className="bg-gray-200 text-center p-4 mt-auto">
        &copy; {new Date().getFullYear()} Career Guidance. All rights reserved.
      </footer>
    </div>
  );
}
