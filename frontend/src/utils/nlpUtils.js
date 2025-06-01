// src/utils/nlpUtils.js

// Career-related terms and synonyms
const CAREER_TERMS = {
  engineering: ["engineer", "developer", "technical", "software"],
  medicine: ["doctor", "medical", "healthcare", "physician"],
  business: ["business", "management", "entrepreneur", "finance"],
  education: ["teacher", "professor", "educator", "academic"],
};

export function tokenizeText(text) {
  if (!text || typeof text !== "string") {
    return [];
  }
  try {
    // Improved tokenization with Indian name handling
    return text
      .toLowerCase()
      .replace(/[^\w\s\u0900-\u097F]/g, "") // Keep Devanagari characters
      .split(/\s+/)
      .filter((word) => word.length > 1); // Filter single characters
  } catch (error) {
    console.error("Error in tokenizeText:", error);
    return [];
  }
}

// Simple naive summary: first 3 sentences
export function summarizeText(text) {
  if (!text || typeof text !== "string") {
    return "";
  }
  try {
    // Improved sentence detection
    const sentences = text
      .split(/(?<=[.!?])\s+/)
      .filter((s) => s.trim().length > 10); // Filter short sentences
    return sentences.slice(0, 3).join(" ").trim();
  } catch (error) {
    console.error("Error in summarizeText:", error);
    return "";
  }
}

export function extractCareerKeywords(text) {
  const tokens = tokenizeText(text);
  const matches = {};

  Object.entries(CAREER_TERMS).forEach(([field, keywords]) => {
    matches[field] = keywords.filter((keyword) =>
      tokens.includes(keyword)
    ).length;
  });

  return matches;
}

export function detectLanguage(text) {
  try {
    // Basic language detection
    const hasDevanagari = /[\u0900-\u097F]/.test(text);
    const hasLatin = /[a-zA-Z]/.test(text);

    if (hasDevanagari) return "hi";
    if (hasLatin) return "en";
    return "unknown";
  } catch (error) {
    console.error("Error in detectLanguage:", error);
    return "en";
  }
}

export function preprocessText(text) {
  try {
    return text
      .replace(/\s+/g, " ") // Normalize whitespace
      .replace(/[^\w\s\u0900-\u097F.,!?]/g, "") // Keep punctuation and Devanagari
      .trim();
  } catch (error) {
    console.error("Error in preprocessText:", error);
    return text;
  }
}
