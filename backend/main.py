import sys
import os

# Add the project root directory to Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from fastapi import FastAPI
from backend.services.recommendation_service import generate_recommendation

app = FastAPI(title="Career Guidance Engine")

@app.get("/")
async def root():
    return {"message": "Career Guidance Engine API"}

@app.post("/recommend")
async def recommend(skills: list[str]):
    dummy_request = type("obj", (object,), {"skills": skills})
    return generate_recommendation(dummy_request)
