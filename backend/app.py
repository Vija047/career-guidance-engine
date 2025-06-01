import logging
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from backend.routes import (
    aptitude_router,
    goal_router,
    recommend_router,
    health_check_router
)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="Career Guidance Engine",
    description="AI-powered career guidance system for Indian education ecosystem",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Error handling
@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=500,
        content={"detail": str(exc)}
    )

# Include routers
app.include_router(health_check_router, prefix="/api/v1")
app.include_router(recommend_router, prefix="/api/v1")
app.include_router(aptitude_router, prefix="/api/v1")
app.include_router(goal_router, prefix="/api/v1")

@app.get("/")
async def root():
    return {
        "message": "Career Guidance Engine API",
        "version": "1.0.0",
        "docs_url": "/docs"
    }