// src/services/api.js
const BASE_URL = "http://localhost:8000"; // Your FastAPI backend URL
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1";

export async function fetchAptitudePrediction(data) {
  const response = await fetch(`${BASE_URL}/predict-aptitude`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to fetch aptitude prediction");
  return response.json();
}

export async function fetchGoalExtraction(data) {
  const response = await fetch(`${BASE_URL}/extract-goals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to extract goals");
  return response.json();
}

export async function fetchCareerRecommendations() {
  const response = await fetch(`${API_BASE_URL}/recommend`);
  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }
  return response.json();
}
