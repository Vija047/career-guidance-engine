// src/utils/skillMatcher.js

// Dummy similarity score based on common words
export function similarityScore(text1, text2) {
  const set1 = new Set(text1.toLowerCase().split(/\W+/));
  const set2 = new Set(text2.toLowerCase().split(/\W+/));
  let common = 0;
  set1.forEach((word) => {
    if (set2.has(word)) common++;
  });
  return common / Math.max(set1.size, set2.size);
}

