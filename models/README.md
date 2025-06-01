# 📊 Modeling Overview

## Aptitude Predictor
- **Goal**: Classify student aptitude level from input scores.
- **Tech**: scikit-learn Random Forest
- **Data**: Synthetic or real test scores, labeled by aptitude domain.

## Goal Extraction Model
- **Goal**: Extract student career interests from text using NLP.
- **Tech**: Hugging Face zero-shot classification, BERT
- **Output**: Best matching domain (e.g., Engineering, Medicine)

## Skill Matcher
- **Goal**: Match user skills to job clusters using semantic embeddings.
- **Tech**: sentence-transformers
- **Storage**: `embeddings.pkl` contains vectorized skills for similarity search.

Each model is modular, independently trainable, and designed to plug into the FastAPI backend under `ml_models/`.
