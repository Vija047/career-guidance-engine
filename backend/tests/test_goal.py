def test_extract():
    from backend.ml_models.goal_extractor import extract_goals
    result = extract_goals("I want to become a doctor")
    assert "Medicine" in resultw