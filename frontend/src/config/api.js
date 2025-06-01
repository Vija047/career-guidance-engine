export const API_CONFIG = {
  baseURL: (import.meta.env && import.meta.env.VITE_API_URL) || "",
  basePath: (import.meta.env && import.meta.env.VITE_API_BASE_PATH) || "",
  timeout: parseInt(
    (import.meta.env && import.meta.env.VITE_API_TIMEOUT) || "30000"
  ),
  endpoints: {
    recommendations: "/recommend",
    goals: "/goals/analyze",
    aptitude: "/aptitude/analyze",
  },
};

export const getFullURL = (endpoint) => {
  return `${API_CONFIG.baseURL}${API_CONFIG.basePath}${endpoint}`;
};
