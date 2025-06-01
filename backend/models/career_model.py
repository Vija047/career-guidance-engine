from pydantic import BaseModel

class CareerRecommendation(BaseModel):
    career: str
    confidence: float
    pathway: str
w