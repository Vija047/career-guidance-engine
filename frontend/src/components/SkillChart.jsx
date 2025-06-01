// src/components/SkillChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function SkillChart({ skills }) {
  // skills = [{ skill: 'Python', level: 80 }, ...]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={skills}>
        <XAxis dataKey="skill" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="level" fill="#4F46E5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
