from typing import Dict, List
import os

try:
    from transformers import pipeline
except ImportError:
    print("Warning: transformers not installed. Run: pip install transformers")
    pipeline = None

class GoalExtractor:
    def __init__(self):
        self.classifier = None
        self.career_domains = [
            "Engineering", "Medicine", "Business", 
            "Arts", "Science", "Education"
        ]
        self.initialize_model()
    
    def initialize_model(self):
        try:
            if pipeline:
                self.classifier = pipeline("zero-shot-classification")
        except Exception as e:
            print(f"Model initialization error: {e}")
            self.classifier = None
    
    def extract_goals(self, text: str) -> Dict[str, float]:
        if not self.classifier:
            # Fallback when model isn't available
            return {domain: 1.0/len(self.career_domains) for domain in self.career_domains}
        
        try:
            result = self.classifier(
                text, 
                candidate_labels=self.career_domains,
                multi_label=True
            )
            return dict(zip(result['labels'], result['scores']))
        except Exception as e:
            print(f"Goal extraction error: {e}")
            return {domain: 1.0/len(self.career_domains) for domain in self.career_domains}