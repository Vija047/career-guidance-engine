from .aptitude import router as aptitude_router
from .goal import router as goal_router
from .recommend import router as recommend_router
from .health_check import router as health_check_router

__all__ = ['aptitude_router', 'goal_router', 'recommend_router', 'health_check_router']
