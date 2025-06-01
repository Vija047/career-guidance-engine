from fastapi import APIRouter, HTTPException
from typing import List
from backend.ml_models.aptitude_predictor import AptitudePredictor
from backend.models.request_models import AptitudeRequest

router = APIRouter(prefix="/aptitude", tags=["aptitude"])
predictor = AptitudePredictor()

@router.post("/analyze")
async def analyze_aptitude(request: AptitudeRequest):
    try:
        results = predictor.predict_aptitude(request.test_scores)
        return {
            "aptitude_scores": results,
            "recommended_fields": sorted(results.items(), key=lambda x: x[1], reverse=True)
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
