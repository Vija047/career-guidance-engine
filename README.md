# AI-Powered Career Guidance System 

AI-driven career guidance platform designed for the Indian education ecosystem. Helps students make informed decisions about their academic and career paths.

##  Project Goals

- Provide personalized career recommendations based on skills and aptitude
- Guide students through Indian academic paths (CBSE/ICSE/State Boards)
- Prepare for national-level exams (JEE, NEET, UPSC, etc.)
- Match skills with industry requirements
- Support multiple Indian languages

## Architecture

```
career-guidance-engine/
├── backend/               # FastAPI Backend
│   ├── ml_models/        # ML/NLP Models
│   ├── routes/           # API Endpoints
│   └── services/         # Business Logic
├── frontend/             # React Frontend
│   ├── src/
│   │   ├── components/   # UI Components
│   │   ├── pages/       # Page Routes
│   │   └── services/    # API Integration
└── models/              # ML Model Training
    ├── aptitude_model/
    ├── goal_extraction/
    └── skill_matcher/
```

## Detailed File Structure

```
career-guidance-engine/
├── backend/
│   ├── ml_models/
│   │   ├── __init__.py
│   │   ├── aptitude_predictor.py
│   │   ├── goal_extractor.py
│   │   └── skill_matcher.py
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── aptitude.py
│   │   ├── goal.py
│   │   └── recommend.py
│   ├── services/
│   │   ├── __init__.py
│   │   └── recommendation_service.py
│   ├── data/
│   │   └── career_paths.json
│   ├── app.py
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CareerCard.jsx
│   │   │   └── SkillSelector.jsx
│   │   ├── pages/
│   │   │   ├── recommendations.jsx
│   │   │   └── aptitude.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── utils/
│   │   │   └── nlpUtils.js
│   │   └── config/
│   │       └── api.js
│   ├── .env.development
│   └── package.json
├── models/
│   ├── aptitude_model/
│   │   ├── model.pkl
│   │   └── aptitude_model.ipynb
│   ├── goal_extraction/
│   │   ├── goal_model.pt
│   │   └── goal_extraction_model.ipynb
│   └── skill_matcher/
│       ├── embeddings.pkl
│       └── skill_matcher.ipynb
├── README.md
└── requirements.txt
```
## Features

1. **Aptitude Analysis**
   - ML-based skill assessment
   - Subject-wise performance tracking
   - Learning style identification

2. **Career Mapping**
   - Industry-aligned recommendations
   - Required qualification paths
   - Competitive exam guidance

3. **Skill Development**
   - Personalized learning paths
   - Resource recommendations
   - Progress tracking

##  Tech Stack

- **Frontend**: React, TailwindCSS
- **Backend**: FastAPI, Python
- **ML/AI**: scikit-learn, Transformers, BERT
- **Data**: MongoDB/PostgreSQL
- **Deployment**: Docker, Cloud (AWS/Azure)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/career-guidance-engine.git
cd career-guidance-engine
```

2. Install dependencies:
```bash
# Backend
cd backend
pip install -r requirements.txt

# Frontend
cd ../frontend
npm install
```

3. Start development servers:
```bash
# Backend
python run.py

# Frontend
npm run dev
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

##  License

This project is licensed under the MIT License - see the LICENSE file for details.

##  Acknowledgments

- Indian Education System Research
- ML Model Training Resources
- Open Source Community
