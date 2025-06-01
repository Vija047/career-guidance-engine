// src/services/api.js
import { API_CONFIG, getFullURL } from "../config/api";

const BASE_URL = "http://localhost:8000"; // Your FastAPI backend URL
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1";

class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

async function fetchWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), API_CONFIG.timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new APIError(error.detail || "Request failed", response.status);
    }

    return await response.json();
  } finally {
    clearTimeout(timeout);
  }
}

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

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";
const API_BASE_PATH = process.env.REACT_APP_API_BASE_PATH || "/api/v1";

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.detail || "API request failed");
  }
  return response.json();
};

export const api = {
  async get(endpoint) {
    const response = await fetch(`${API_URL}${API_BASE_PATH}${endpoint}`);
    return handleResponse(response);
  },

  async post(endpoint, data) {
    const response = await fetch(`${API_URL}${API_BASE_PATH}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
};

export const careerService = {
  getRecommendations: (skills) => api.post("/recommend", { skills }),
  analyzeGoals: (text) => api.post("/goals/analyze", { description: text }),
};
