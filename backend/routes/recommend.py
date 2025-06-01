from fastapi import APIRouter
from backend.services.recommendation_service import generate_recommendation

router = APIRouter()

@router.post("/recommend")
async def recommend(skills: list[str]):
    dummy_request = type("obj", (object,), {"skills": skills})
    return generate_recommendation(dummy_request)