from fastapi import APIRouter, HTTPException
from backend.ml_models.goal_extractor import extract_goals
from backend.models.request_models import GoalRequest

router = APIRouter(prefix="/goals", tags=["goals"])

@router.post("/analyze")
async def analyze_goals(request: GoalRequest):
    try:
        results = extract_goals(request.description)
        return {
            "goals": results,
            "recommended_paths": sorted(results.items(), key=lambda x: x[1], reverse=True)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))