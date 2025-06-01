import os
from typing import List, Dict
import numpy as np

try:
    from sentence_transformers import SentenceTransformer
except ImportError:
    raise ImportError("Please install dependencies: pip install -r requirements.txt")

class SkillMatcher:
    def __init__(self):
        try:
            self.model = SentenceTransformer('paraphrase-MiniLM-L6-v2')
        except Exception as e:
            raise RuntimeError(f"Failed to initialize SentenceTransformer: {e}")
        self.skill_embeddings = {}
        self.embeddings_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'embeddings.pkl')
        self.load_embeddings()
    
    def load_embeddings(self):
        try:
            with open(self.embeddings_path, 'rb') as f:
                self.skill_embeddings = pickle.load(f)
        except FileNotFoundError:
            print(f"Warning: {self.embeddings_path} not found")
        except Exception as e:
            print(f"Error loading embeddings: {e}")
    
    def match_skills(self, skills: List[str]) -> Dict[str, float]:
        skill_vectors = self.model.encode(skills)
        matches = {}
        for career, stored_vector in self.skill_embeddings.items():
            similarity = np.mean(np.dot(skill_vectors, stored_vector))
            matches[career] = float(similarity)
        return matches
