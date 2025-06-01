from typing import List
from pydantic import BaseModel

class AptitudeRequest(BaseModel):
    """Request model for aptitude assessment"""
    test_scores: List[float]
    subjects: List[str]

class CareerRequest(BaseModel):
    """Request model for career recommendations"""
    skills: List[str]
    interests: List[str] = []
    education: str = ""

class GoalRequest(BaseModel):
    """Request model for goal analysis"""
    description: str
    timeframe: str
    current_education: str = ""