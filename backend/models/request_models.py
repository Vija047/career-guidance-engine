from typing import List, Optional
from pydantic import BaseModel

class AptitudeRequest(BaseModel):
    test_scores: List[float]
    subjects: List[str]
    education_level: Optional[str] = None

class CareerRequest(BaseModel):
    skills: List[str]
    interests: Optional[List[str]] = []
    education: Optional[str] = None
    preferred_location: Optional[str] = None

class GoalRequest(BaseModel):
    description: str
    timeframe: str
    current_education: Optional[str] = None
    target_career: Optional[str] = None
