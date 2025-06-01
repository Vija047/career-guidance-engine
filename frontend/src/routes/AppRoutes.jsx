// src/routes/AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import IndexPage from '../pages/index';
import AptitudePage from '../pages/aptitude';
import GoalsPage from '../pages/goals';
import RecommendationsPage from '../pages/recommendations';
import DashboardPage from '../pages/dashboard';

export default function AppRoutes() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/aptitude" element={<AptitudePage />} />
          <Route path="/goals" element={<GoalsPage />} />
          <Route path="/recommendations" element={<RecommendationsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
