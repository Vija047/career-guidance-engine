import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';

export default function Goals() {
  const [inputText, setInputText] = useState('');
  const [extractedGoals, setExtractedGoals] = useState([]);

  const handleExtract = () => {
    // Call backend to extract goals from inputText
    setExtractedGoals(['Become a Data Scientist', 'Learn Python']); // Example response
  };

  return (
    <MainLayout>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Goal Extraction</h2>
        <textarea
          rows="5"
          className="w-full p-2 border rounded"
          placeholder="Enter your career goals here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          onClick={handleExtract}
          className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Extract Goals
        </button>
        {extractedGoals.length > 0 && (
          <ul className="mt-4 list-disc list-inside text-gray-700">
            {extractedGoals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        )}
      </div>
    </MainLayout>
  );
}
