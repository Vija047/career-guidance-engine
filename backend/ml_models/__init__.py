from .aptitude_predictor import AptitudePredictor

try:
    from .goal_extractor import GoalExtractor
except ImportError as e:
    print(f"Warning: GoalExtractor import failed - {e}")
    GoalExtractor = None

__all__ = ['AptitudePredictor', 'GoalExtractor']
