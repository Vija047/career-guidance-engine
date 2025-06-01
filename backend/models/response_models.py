from typing import List, Dict
from pydantic import BaseModel

class CareerRecommendation(BaseModel):
    career_paths: List[str]
    required_skills: Dict[str, List[str]]
    education_path: List[str]
    competitive_exams: List[str]

class AptitudeResult(BaseModel):
    scores: Dict[str, float]
    recommended_fields: List[str]
    suggested_courses: List[str]

class GoalAnalysis(BaseModel):
    feasibility_score: float
    suggested_timeline: List[Dict[str, str]]
    recommended_steps: List[str]
    potential_challenges: List[str]
