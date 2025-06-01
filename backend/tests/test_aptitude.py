def test_predict():
    from backend.ml_models.aptitude_predictor import predict_aptitude
    result = predict_aptitude({"math": 80, "logic": 70})
    assert "logical" in resultw