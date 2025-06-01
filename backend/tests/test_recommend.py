import pytest
from backend.services.recommendation_service import generate_recommendation

def test_recommend_software_engineer():
    """Test recommendation for software engineering skills"""
    dummy_request = type("obj", (object,), {"skills": ["Python", "Java", "Data Structures"]})
    result = generate_recommendation(dummy_request)
    assert "Software Engineer" in result["recommendations"]
    assert len(result["recommendations"]) > 0
    assert "learning_path" in result

def test_recommend_data_scientist():
    """Test recommendation for data science skills"""
    dummy_request = type("obj", (object,), {"skills": ["Python", "Statistics", "Machine Learning"]})
    result = generate_recommendation(dummy_request)
    assert "Data Scientist" in result["recommendations"]
    assert len(result["recommendations"]) > 0

def test_recommend_empty_skills():
    """Test recommendation with empty skills list"""
    dummy_request = type("obj", (object,), {"skills": []})
    with pytest.raises(ValueError):
        generate_recommendation(dummy_request)

def test_recommend_invalid_input():
    """Test recommendation with invalid input"""
    dummy_request = type("obj", (object,), {"wrong_field": []})
    with pytest.raises(AttributeError):
        generate_recommendation(dummy_request)