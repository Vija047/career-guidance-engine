import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function Dashboard() {
  return (
    <MainLayout>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        <p>Welcome back! Here you will see your personalized insights and progress.</p>
        {/* Add widgets/charts/cards here */}
      </div>
    </MainLayout>
  );
}
