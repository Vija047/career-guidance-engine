from typing import Dict, List, Any

def generate_recommendation(request) -> Dict[str, Any]:
    """
    Generate career recommendations based on skills
    
    Args:
        request: Object containing skills list
        
    Returns:
        Dict containing recommendations and learning path
    
    Raises:
        ValueError: If skills list is empty
        AttributeError: If request format is invalid
    """
    if not hasattr(request, 'skills'):
        raise AttributeError("Request must contain 'skills' attribute")
        
    if not request.skills:
        raise ValueError("Skills list cannot be empty")

    # Career paths mapped to required skills
    career_paths = {
        "Software Engineer": {"Python", "Java", "Data Structures"},
        "Data Scientist": {"Python", "Statistics", "Machine Learning"},
        "UI/UX Designer": {"Design", "UI", "User Research"},
        "Product Manager": {"Strategy", "Communication", "Analytics"}
    }

    recommendations = []
    user_skills = set(request.skills)

    for career, required_skills in career_paths.items():
        if len(required_skills.intersection(user_skills)) >= 1:
            recommendations.append(career)

    return {
        "recommendations": recommendations,
        "learning_path": [
            "Take relevant online courses",
            "Build portfolio projects",
            "Prepare for interviews"
        ]
    }