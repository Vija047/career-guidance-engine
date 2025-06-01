import numpy as np
from typing import Dict, List
import os
import joblib

try:
    from sklearn.ensemble import RandomForestClassifier
except ImportError:
    print("Warning: scikit-learn not installed. Run: pip install scikit-learn")
    RandomForestClassifier = None

class AptitudePredictor:
    def __init__(self):
        self.model = None
        self.domains = ['quantitative', 'verbal', 'logical', 'spatial']
        self.model_path = os.path.join(os.path.dirname(__file__), '..', '..', 'models', 'aptitude_model', 'model.pkl')
        self.load_model()

    def load_model(self):
        try:
            if os.path.exists(self.model_path):
                self.model = joblib.load(self.model_path)
            else:
                self.model = RandomForestClassifier()
        except Exception as e:
            print(f"Error loading model: {e}")
            self.model = RandomForestClassifier()

    def predict_aptitude(self, scores: List[float]) -> Dict[str, float]:
        if not self.model:
            return {domain: 0.25 for domain in self.domains}
        
        try:
            scores_array = np.array(scores).reshape(1, -1)
            predictions = self.model.predict_proba(scores_array)[0]
            return {
                domain: float(score) 
                for domain, score in zip(self.domains, predictions)
            }
        except Exception as e:
            print(f"Prediction error: {e}")
            return {domain: 0.25 for domain in self.domains}