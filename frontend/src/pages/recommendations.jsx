import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { fetchCareerRecommendations } from "../services/api";

export default function Recommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("name");

  // Fetch recommendations from API
  const getRecommendations = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchCareerRecommendations();
      setRecommendations(data);
    } catch (err) {
      setError("Failed to fetch recommendations. Please try again.");
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter and sort recommendations
  const getFilteredRecommendations = () => {
    return recommendations
      .filter((career) =>
        career.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortBy === "name") return a.title.localeCompare(b.title);
        if (sortBy === "match") return b.matchScore - a.matchScore;
        return 0;
      });
  };

  return (
    <MainLayout>
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Career Recommendations
          </h2>
          <button
            onClick={getRecommendations}
            disabled={loading}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                     disabled:bg-purple-300 transition duration-200"
          >
            {loading ? "Loading..." : "Get Recommendations"}
          </button>
        </div>

        {/* Controls */}
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="Search careers..."
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-purple-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-3 border rounded-lg focus:ring-2 focus:ring-purple-300"
          >
            <option value="name">Sort by Name</option>
            <option value="match">Sort by Match Score</option>
          </select>
        </div>

        {/* Error Message */}
        {error && (
          <div className="p-4 mb-6 bg-red-50 text-red-600 rounded-lg">
            {error}
          </div>
        )}

        {/* Career Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredRecommendations().map((career, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{career.title}</h3>
              {career.matchScore && (
                <div className="mb-2 text-sm">
                  Match Score:
                  <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-700 rounded">
                    {Math.round(career.matchScore * 100)}%
                  </span>
                </div>
              )}
              <p className="text-gray-600 mb-4">{career.description}</p>
              <div className="space-y-2">
                <h4 className="font-medium">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {career.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && getFilteredRecommendations().length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No careers match your search criteria.
          </div>
        )}
      </div>
    </MainLayout>
  );
}
